"""
Google Sheets integration - one sheet per niche (separate managers).

Each niche's sheet_id lives in data/niches.json. If a niche has no sheet_id,
it falls back to the global SHEET_ID in .env (so everything works on one sheet
until you split them). Within a sheet, tabs are niche-scoped:
  "Review - <Niche>", "Approved - <Niche>", "Rejected - <Niche>"

File: ../google-credentials.json (service account, shared as Editor on each sheet).
Degrades safely if creds/library/sheet are missing.
"""

import os
import json
import time
import datetime

try:
    import gspread
    from google.oauth2.service_account import Credentials
except Exception:
    gspread = None
    Credentials = None

import agents  # for niche config

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
_CRED = os.path.join(_ROOT, "google-credentials.json")
_SCOPES = ["https://www.googleapis.com/auth/spreadsheets",
           "https://www.googleapis.com/auth/drive"]

REVIEW_HEADERS = ["ID", "Generated On", "Niche", "Topic", "Angle", "Hook",
                  "Script", "Caption", "Hashtags", "Trend Source",
                  "Status", "Manager Feedback", "Post Date", "Platform"]
CAL_HEADERS = ["Approved On", "Niche", "Topic", "Hook", "Script",
               "Caption", "Hashtags", "Post Date", "Platform"]
REJ_HEADERS = ["Rejected On", "Niche", "Topic", "Hook", "Reason"]
STATUS_OPTIONS = ["Pending", "Approve", "Reject", "Improve"]
_VALID_STATUS = STATUS_OPTIONS + ["Approved (moved)", "Rejected (logged)", "Improve failed - retry"]

_WIDTHS = {"ID": 95, "Generated On": 120, "Approved On": 120, "Rejected On": 120,
           "Niche": 100, "Topic": 175, "Angle": 160, "Hook": 250, "Script": 430,
           "Caption": 270, "Hashtags": 230, "Trend Source": 130, "Status": 115,
           "Manager Feedback": 230, "Post Date": 105, "Platform": 100, "Reason": 240}
_WRAP = {"Topic", "Angle", "Hook", "Script", "Caption", "Hashtags", "Manager Feedback", "Reason"}
_HEADER_BG = {"red": 0.45, "green": 0.34, "blue": 0.66}
_REVIEW_TAB_COLOR = {"red": 0.98, "green": 0.74, "blue": 0.27}
_APPROVED_TAB_COLOR = {"red": 0.24, "green": 0.86, "blue": 0.59}
_REJECTED_TAB_COLOR = {"red": 0.95, "green": 0.42, "blue": 0.45}
_STATUS_RULES = [
    ("Pending", {"red": 1.0, "green": 0.96, "blue": 0.79}),
    ("Approv",  {"red": 0.79, "green": 0.93, "blue": 0.80}),
    ("Reject",  {"red": 0.97, "green": 0.80, "blue": 0.80}),
    ("Improv",  {"red": 0.82, "green": 0.88, "blue": 0.97}),
]


def _review_tab(niche):
    return "Review - " + niche
def _approved_tab(niche):
    return "Approved - " + niche
def _rejected_tab(niche):
    return "Rejected - " + niche


def _has_creds():
    return bool(os.getenv("GOOGLE_CREDENTIALS_JSON")) or os.path.exists(_CRED)


def _client():
    if gspread is None or Credentials is None:
        return None
    try:
        info_env = os.getenv("GOOGLE_CREDENTIALS_JSON")
        if info_env:
            creds = Credentials.from_service_account_info(json.loads(info_env), scopes=_SCOPES)
        elif os.path.exists(_CRED):
            creds = Credentials.from_service_account_file(_CRED, scopes=_SCOPES)
        else:
            return None
        return gspread.authorize(creds)
    except Exception:
        return None


def _sheet_id_for(niche):
    nc = agents.niche_by_name(niche)
    return (nc.get("sheet_id") or "").strip() or os.getenv("SHEET_ID", "").strip()


def _open(niche):
    gc = _client()
    sid = _sheet_id_for(niche)
    if not gc or not sid:
        return None
    try:
        return gc.open_by_key(sid)
    except Exception:
        return None


def _ws(ss, title, headers, tab_color=None):
    try:
        ws = ss.worksheet(title)
    except Exception:
        ws = ss.add_worksheet(title=title, rows=1000, cols=max(12, len(headers) + 2))
    if ws.row_values(1) != headers:
        ws.update(values=[headers], range_name="A1")
    _style_basic(ss, ws, headers, tab_color)
    return ws


def _style_basic(ss, ws, headers, tab_color):
    sid = ws.id
    reqs = [
        {"repeatCell": {"range": {"sheetId": sid, "startRowIndex": 0, "endRowIndex": 1},
                        "cell": {"userEnteredFormat": {"backgroundColor": _HEADER_BG,
                                 "textFormat": {"bold": True, "foregroundColor": {"red": 1, "green": 1, "blue": 1}},
                                 "horizontalAlignment": "CENTER", "verticalAlignment": "MIDDLE"}},
                        "fields": "userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment)"}},
        {"updateSheetProperties": {"properties": {"sheetId": sid, "gridProperties": {"frozenRowCount": 1}},
                                   "fields": "gridProperties.frozenRowCount"}},
    ]
    if tab_color:
        reqs.append({"updateSheetProperties": {"properties": {"sheetId": sid, "tabColor": tab_color}, "fields": "tabColor"}})
    for i, h in enumerate(headers):
        w = _WIDTHS.get(h)
        if w:
            reqs.append({"updateDimensionProperties": {"range": {"sheetId": sid, "dimension": "COLUMNS",
                         "startIndex": i, "endIndex": i + 1}, "properties": {"pixelSize": w}, "fields": "pixelSize"}})
        reqs.append({"repeatCell": {"range": {"sheetId": sid, "startRowIndex": 1, "endRowIndex": 5000,
                     "startColumnIndex": i, "endColumnIndex": i + 1},
                     "cell": {"userEnteredFormat": {"wrapStrategy": "WRAP" if h in _WRAP else "CLIP",
                              "verticalAlignment": "TOP"}}, "fields": "userEnteredFormat(wrapStrategy,verticalAlignment)"}})
    try:
        ss.batch_update({"requests": reqs})
    except Exception:
        pass


def _style_status_column(ss, ws):
    sid = ws.id
    col = REVIEW_HEADERS.index("Status")
    rng = {"sheetId": sid, "startRowIndex": 1, "endRowIndex": 5000, "startColumnIndex": col, "endColumnIndex": col + 1}
    try:
        meta = ss.fetch_sheet_metadata()
        for s in meta.get("sheets", []):
            if s.get("properties", {}).get("sheetId") == sid:
                n = len(s.get("conditionalFormats", []) or [])
                if n:
                    ss.batch_update({"requests": [{"deleteConditionalFormatRule": {"sheetId": sid, "index": i}}
                                                  for i in range(n - 1, -1, -1)]})
                break
    except Exception:
        pass
    reqs = [{"setDataValidation": {"range": rng,
             "rule": {"condition": {"type": "ONE_OF_LIST", "values": [{"userEnteredValue": o} for o in _VALID_STATUS]},
                      "showCustomUi": True, "strict": False}}}]
    for text, color in _STATUS_RULES:
        reqs.append({"addConditionalFormatRule": {"rule": {"ranges": [rng],
                     "booleanRule": {"condition": {"type": "TEXT_CONTAINS", "values": [{"userEnteredValue": text}]},
                                     "format": {"backgroundColor": color, "textFormat": {"bold": True}}}}, "index": 0}})
    try:
        ss.batch_update({"requests": reqs})
    except Exception:
        pass


def status(niche="Astrology"):
    if gspread is None:
        return {"connected": False, "reason": "gspread not installed (pip install gspread google-auth)"}
    if not _has_creds():
        return {"connected": False, "reason": "google-credentials.json missing (or set GOOGLE_CREDENTIALS_JSON)"}
    if not _sheet_id_for(niche):
        return {"connected": False, "reason": "no sheet id for '%s' (set in niches.json or SHEET_ID in .env)" % niche}
    ss = _open(niche)
    if not ss:
        return {"connected": False, "reason": "could not open sheet (share it with the service account email as Editor)"}
    try:
        try:
            review = ss.worksheet(_review_tab(niche))
        except Exception:
            review = _ws(ss, _review_tab(niche), REVIEW_HEADERS, _REVIEW_TAB_COLOR)
        rows = review.get_all_records()
        pending = sum(1 for r in rows if str(r.get("Status", "")).strip().lower() in ("", "pending"))
        return {"connected": True, "title": ss.title, "url": ss.url, "niche": niche,
                "pending": pending, "total_in_review": len(rows)}
    except Exception as e:
        return {"connected": False, "reason": str(e)}


def push_drafts(drafts, niche, trend_source=""):
    ss = _open(niche)
    if not ss:
        return {"ok": False, "reason": "not connected"}
    review = _ws(ss, _review_tab(niche), REVIEW_HEADERS, _REVIEW_TAB_COLOR)
    _style_status_column(ss, review)
    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    base = int(time.time())
    rows = []
    for i, d in enumerate(drafts):
        rows.append(["PJ-%d-%d" % (base, i + 1), now, niche,
                     d.get("topic", ""), d.get("angle", ""), d.get("hook", ""),
                     d.get("script", ""), d.get("caption", ""), d.get("hashtags", ""),
                     trend_source, "Pending", "", "", ""])
    if rows:
        review.append_rows(rows, value_input_option="RAW")
    return {"ok": True, "added": len(rows)}


def sync(niche, regenerate=None):
    ss = _open(niche)
    if not ss:
        return {"ok": False, "reason": "not connected"}
    review = _ws(ss, _review_tab(niche), REVIEW_HEADERS, _REVIEW_TAB_COLOR)
    records = review.get_all_records()
    approved = rejected = improved = 0
    today = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    status_col = REVIEW_HEADERS.index("Status") + 1

    for idx, r in enumerate(records):
        row_num = idx + 2
        st = str(r.get("Status", "")).strip().lower()
        if st == "approve":
            cal = _ws(ss, _approved_tab(niche), CAL_HEADERS, _APPROVED_TAB_COLOR)
            cal.append_row([today, niche, r.get("Topic", ""), r.get("Hook", ""),
                            r.get("Script", ""), r.get("Caption", ""), r.get("Hashtags", ""),
                            r.get("Post Date", ""), r.get("Platform", "")], value_input_option="RAW")
            review.update_cell(row_num, status_col, "Approved (moved)")
            approved += 1
        elif st == "reject":
            rej = _ws(ss, _rejected_tab(niche), REJ_HEADERS, _REJECTED_TAB_COLOR)
            rej.append_row([today, niche, r.get("Topic", ""), r.get("Hook", ""),
                            r.get("Manager Feedback", "")], value_input_option="RAW")
            review.update_cell(row_num, status_col, "Rejected (logged)")
            rejected += 1
        elif st == "improve" and regenerate:
            fb = r.get("Manager Feedback", "")
            try:
                better = regenerate(r, fb)
            except Exception:
                better = None
            if better:
                new_row = [r.get("ID", ""), r.get("Generated On", ""), niche,
                           better.get("topic", r.get("Topic", "")), better.get("angle", r.get("Angle", "")),
                           better.get("hook", ""), better.get("script", ""), better.get("caption", ""),
                           better.get("hashtags", ""), "Improved: " + fb, "Pending", "",
                           r.get("Post Date", ""), r.get("Platform", "")]
                review.update(values=[new_row], range_name="A%d:N%d" % (row_num, row_num))
                improved += 1
            else:
                review.update_cell(row_num, status_col, "Improve failed - retry")

    return {"ok": True, "approved": approved, "rejected": rejected, "improved": improved, "new_drafts": improved}
