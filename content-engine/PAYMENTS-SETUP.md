# Paywall setup — Razorpay ₹99/month (₹999 offer)

How it works: user signs up / logs in → paywall shows **₹9̶9̶9̶ ₹99/month** →
pays via Razorpay (UPI/card/netbanking) → engine unlocks for **30 days**.
When the 30 days lapse, the paywall reappears and they pay ₹99 again.
Non-payers can log in but every engine action (Generate, Trends, Sheets,
Examples) is blocked by the server with `402 payment_required` — it cannot be
bypassed from the browser.

## One-time setup (3 steps)

### 1. Create the table in Supabase
Open the **same Supabase project used for login**
(`https://apyqiknzupoatumizbso.supabase.co`) → **SQL Editor** → paste the whole
of [`backend/supabase_billing.sql`](backend/supabase_billing.sql) → **Run**.

### 2. Get your Razorpay keys
[Razorpay Dashboard](https://dashboard.razorpay.com) → **Account & Settings →
API Keys → Generate Key**. You get a `key_id` and `key_secret`.
Start with **Test Mode** keys (`rzp_test_...`) to try the flow with a test
card, then switch to **Live Mode** keys (`rzp_live_...`) when ready.
Live mode needs KYC completed on Razorpay.

### 3. Set the environment variables
Locally: fill these in `content-engine/.env`.
On Render: dashboard → your service → **Environment** → add the same keys,
then redeploy.

```
RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxx
SUPABASE_URL=https://apyqiknzupoatumizbso.supabase.co
SUPABASE_SERVICE_KEY=<Project Settings -> API -> service_role key>
ADMIN_EMAILS=you@example.com        # these accounts never see the paywall
```

That's it. Restart the server — startup log shows `Billing: ON (Razorpay)`.

> **Until all 4 keys are set, the paywall is OFF** and every signed-in user
> can use the engine (so local dev keeps working).

## Testing (Razorpay test mode)
1. Sign up with a fresh account → the ₹99 paywall should appear.
2. Click **Pay ₹99** → use test card `4111 1111 1111 1111`, any future expiry,
   any CVV → payment succeeds → engine unlocks.
3. Check Supabase → `ce_subscriptions` table → row with `paid_until` ~30 days out.

## Changing the price / offer
Set in `.env`: `PLAN_PRICE_INR` (default 99), `PLAN_MRP_INR` (strikethrough,
default 999), `PLAN_DAYS` (default 30).

## Security notes
- The payment is verified **on the server** with Razorpay's HMAC signature;
  the browser cannot mark itself paid.
- `SUPABASE_SERVICE_KEY` and `RAZORPAY_KEY_SECRET` are server-only secrets —
  never put them in auth-config.js or any frontend file.
- The `ce_subscriptions` table has RLS: users can only read their own row;
  only the backend can write.
