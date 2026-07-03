# Sineva Content Engine

A multi-niche content automation engine: it scrapes real trends, writes on-brand short-form scripts with AI, and routes them through a manager approval workflow into Google Sheets.

**Niches included:** Astrology, Numerology, Horoscope, Doctors, Real Estate, Coaches, Tarot.
Add more any time by editing `data/niches.json` — no code changes.

---

## Run locally
1. One-time: `python -m pip install anthropic pytrends gspread google-auth`
2. Put your keys in `.env` (see `.env.example`): `ANTHROPIC_API_KEY`, `YOUTUBE_API_KEY`, `SHEET_ID`.
3. Start it:
   ```
   cd backend
   python server.py
   ```
4. Open **http://localhost:8000/** (the engine now serves its own dashboard — no Live Server needed).

Pick a niche, hit **Run engine** → review the scripts → **Send all to Review sheet** → your manager approves in Google Sheets → **Sync approvals**.

---

## Niches config (`data/niches.json`)
Each niche is one block:
```json
{
  "id": "doctors",
  "name": "Doctors",
  "search": "health tips doctor medical awareness",   // YouTube search terms
  "trend_kw": "health tips",                            // Google Trends keyword
  "region": "IN", "lang": "en",
  "style": "voice / style guide for the AI...",
  "sheet_id": "",           // this niche's own Google Sheet (blank = use global SHEET_ID)
  "manager_email": ""       // who approves this niche
}
```
To **add a niche**: copy a block, change the fields, restart. To **retarget** a niche's trends, edit its `search` / `trend_kw`.

---

## Separate sheet per niche (recommended)
For separate managers, give each niche its own Google Sheet:
1. Create a blank Google Sheet per niche (**sheets.new**).
2. Share each with the service-account email (Editor).
3. Put each sheet's ID into that niche's `sheet_id` in `niches.json`.

Until you fill `sheet_id`, every niche uses the global `SHEET_ID` (one sheet, with niche-scoped tabs: `Review - <Niche>`, `Approved - <Niche>`, `Rejected - <Niche>`).

Google connection setup (one-time): enable **Google Sheets API** + **Google Drive API**, create a **service account**, download its **JSON key** as `google-credentials.json` in this folder, and share each sheet with its `client_email`.

---

## Deploy to the cloud (sellable, 24/7)
The engine is one self-contained web service (serves both the API and the dashboard on `$PORT`). To host on **Render** (or Railway):

1. Push this folder to a **GitHub repo** (the `.gitignore` keeps `.env` and credentials out).
2. On Render → **New → Web Service** → connect the repo.
3. Build command: `pip install -r requirements.txt`  ·  Start command: `python backend/server.py`
4. Add **Environment Variables**:
   - `ANTHROPIC_API_KEY`
   - `YOUTUBE_API_KEY`
   - `SHEET_ID` (fallback sheet, if used)
   - `GOOGLE_CREDENTIALS_JSON` → paste the **entire contents** of `google-credentials.json` (this avoids committing the secret file)
   - `ANTHROPIC_MODEL` = `claude-sonnet-4-6` (optional)
5. Deploy. Open the Render URL — the dashboard loads and talks to its own backend automatically.

`Procfile`, `requirements.txt`, and `runtime.txt` are included for the host.

---

## Security
- `.gitignore` excludes `.env` and `google-credentials.json`. Never commit them.
- On a host, pass secrets as environment variables (as above).
- Rotate any API key that has been shown in a screenshot or shared.

## Notes
- Doctors niche adds a "consult your doctor" disclaimer automatically (health-safety).
- If a niche's trending videos look off, refine its `search` terms in `niches.json`.
