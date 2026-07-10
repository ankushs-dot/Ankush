"""
Billing / access control for the Content Engine.

Model: one-time Razorpay payment of PLAN_PRICE_INR unlocks the engine for
PLAN_DAYS days (shown as "Rs 999 -> Rs 99 / month" offer). When it lapses the
paywall reappears and the user pays again. Subscription state lives in the
same Supabase project used for auth, in a `ce_subscriptions` table written
only by this backend (service role key).

.env keys:
  RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET  - from Razorpay dashboard
  SUPABASE_URL                            - https://<ref>.supabase.co
  SUPABASE_SERVICE_KEY                    - service_role key (secret!)
  ADMIN_EMAILS                            - comma-separated, always free access
  PLAN_PRICE_INR (99) / PLAN_MRP_INR (999) / PLAN_DAYS (30)
"""

import os
import json
import hmac
import base64
import hashlib
import datetime
import urllib.request
import urllib.error

RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID", "")
RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET", "")
SUPABASE_URL = (os.getenv("SUPABASE_URL", "") or "").rstrip("/")
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY", "")
ADMIN_EMAILS = {e.strip().lower() for e in os.getenv("ADMIN_EMAILS", "").split(",") if e.strip()}
PLAN_PRICE_INR = int(os.getenv("PLAN_PRICE_INR", "99"))
PLAN_MRP_INR = int(os.getenv("PLAN_MRP_INR", "999"))
PLAN_DAYS = int(os.getenv("PLAN_DAYS", "30"))

TABLE = "ce_subscriptions"


def razorpay_configured():
    return bool(RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET)


def supabase_configured():
    return bool(SUPABASE_URL and SUPABASE_SERVICE_KEY)


def _req(url, method="GET", headers=None, payload=None):
    data = json.dumps(payload).encode("utf-8") if payload is not None else None
    req = urllib.request.Request(url, data=data, method=method, headers=headers or {})
    if data is not None:
        req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            body = r.read().decode("utf-8")
            return r.status, (json.loads(body) if body.strip() else {})
    except urllib.error.HTTPError as e:
        try:
            return e.code, json.loads(e.read().decode("utf-8"))
        except Exception:
            return e.code, {}
    except Exception:
        return 0, {}


# ---------- auth ----------

def user_from_token(token):
    """Validate a Supabase access token; return {"id":..., "email":...} or None."""
    if not (token and SUPABASE_URL and SUPABASE_SERVICE_KEY):
        return None
    code, body = _req(SUPABASE_URL + "/auth/v1/user", headers={
        "Authorization": "Bearer " + token,
        "apikey": SUPABASE_SERVICE_KEY})
    if code == 200 and body.get("id"):
        return {"id": body["id"], "email": (body.get("email") or "").lower()}
    return None


def is_admin(email):
    return (email or "").lower() in ADMIN_EMAILS


# ---------- subscription state ----------

def _sb_headers():
    return {"apikey": SUPABASE_SERVICE_KEY,
            "Authorization": "Bearer " + SUPABASE_SERVICE_KEY}


def paid_until(user_id):
    """Return paid_until as datetime (UTC) or None."""
    if not supabase_configured():
        return None
    code, body = _req(
        "%s/rest/v1/%s?user_id=eq.%s&select=paid_until" % (SUPABASE_URL, TABLE, user_id),
        headers=_sb_headers())
    if code == 200 and isinstance(body, list) and body:
        raw = body[0].get("paid_until")
        if raw:
            try:
                return datetime.datetime.fromisoformat(raw.replace("Z", "+00:00"))
            except ValueError:
                return None
    return None


def is_active(user):
    if is_admin(user.get("email")):
        return True
    until = paid_until(user["id"])
    return bool(until and until > datetime.datetime.now(datetime.timezone.utc))


def status(user):
    until = paid_until(user["id"])
    now = datetime.datetime.now(datetime.timezone.utc)
    return {"email": user.get("email"),
            "admin": is_admin(user.get("email")),
            "active": is_admin(user.get("email")) or bool(until and until > now),
            "paid_until": until.isoformat() if until else None}


def activate(user, payment_id, order_id):
    """Extend access by PLAN_DAYS from now (or from current expiry if still active)."""
    now = datetime.datetime.now(datetime.timezone.utc)
    base = paid_until(user["id"])
    if not base or base < now:
        base = now
    new_until = base + datetime.timedelta(days=PLAN_DAYS)
    headers = _sb_headers()
    headers["Prefer"] = "resolution=merge-duplicates,return=representation"
    code, body = _req("%s/rest/v1/%s?on_conflict=user_id" % (SUPABASE_URL, TABLE),
                      method="POST", headers=headers, payload=[{
                          "user_id": user["id"],
                          "email": user.get("email"),
                          "paid_until": new_until.isoformat(),
                          "last_payment_id": payment_id,
                          "last_order_id": order_id,
                          "amount_inr": PLAN_PRICE_INR,
                          "updated_at": now.isoformat()}])
    if code not in (200, 201):
        raise RuntimeError("Supabase write failed (%s): %s" % (code, body))
    return new_until


# ---------- razorpay ----------

def create_order(user):
    if not razorpay_configured():
        raise RuntimeError("Razorpay keys not set on server.")
    auth = base64.b64encode(("%s:%s" % (RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET)).encode()).decode()
    code, body = _req("https://api.razorpay.com/v1/orders", method="POST",
                      headers={"Authorization": "Basic " + auth},
                      payload={"amount": PLAN_PRICE_INR * 100, "currency": "INR",
                               "receipt": "ce_" + user["id"][:32],
                               "notes": {"email": user.get("email", ""), "product": "content-engine"}})
    if code != 200 or not body.get("id"):
        raise RuntimeError("Razorpay order failed (%s): %s" % (code, body.get("error", {}).get("description", body)))
    return body


def verify_signature(order_id, payment_id, signature):
    expected = hmac.new(RAZORPAY_KEY_SECRET.encode(),
                        ("%s|%s" % (order_id, payment_id)).encode(),
                        hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature or "")


def pay_config():
    return {"configured": razorpay_configured() and supabase_configured(),
            "key_id": RAZORPAY_KEY_ID,
            "price_inr": PLAN_PRICE_INR,
            "mrp_inr": PLAN_MRP_INR,
            "plan_days": PLAN_DAYS,
            "currency": "INR"}
