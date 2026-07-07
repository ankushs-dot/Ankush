# Deploy Guide - Sineva Content Engine

Two parts go live SEPARATELY:

| Part | What it does | Where it runs |
|------|--------------|---------------|
| BACKEND (Python engine) | Generate, Trending Now, Google Sheets | Render (runs Python) |
| FRONTEND (pages) | login, signup, dashboard, Saved | Mixed into the website (same link) |

Order: push code -> deploy backend on Render -> put Render URL in auth-config.js -> mix frontend into website -> sir deploys website.

IMPORTANT: Vercel/Netlify CANNOT run the backend (it is an always-on Python server, not serverless). Use Render for the backend. Vercel/Netlify are only fine for static frontends.

---

## 0) Secrets never go to GitHub
`.gitignore` already excludes `.env` and `google-credentials.json`.
On Render you provide those values as Environment Variables instead (step 2).
`auth-config.js` is safe to commit - it only holds the Supabase URL + anon key (both public).

---

## 1) Push the latest code to GitHub (content-engine subfolder)
Run in PowerShell:

    cd "$env:USERPROFILE\Desktop"
    Remove-Item -Recurse -Force ".\Ankush-push" -ErrorAction SilentlyContinue
    git clone https://github.com/ankushs-dot/Ankush.git "Ankush-push"

    $src = "C:\Users\Saumya\OneDrive\Desktop\Sineva AI\ContentAutomation"
    $dst = ".\Ankush-push\content-engine"
    robocopy $src $dst /E /XD ".git" "__pycache__" ".vscode" /XF ".env" ".env.bak" "google-credentials.json"

    cd ".\Ankush-push"
    git add content-engine
    git status        # confirm NO .env / google-credentials.json listed
    git commit -m "Gemini switch + login/signup + Saved scripts"
    git push origin main

Sign in as Saumya-Nayak if asked.

---

## 2) Deploy the BACKEND on Render (free)
1. render.com -> sign in with GitHub (ankushs-dot).
2. New -> Web Service -> connect the `Ankush` repo.
3. Settings:
   - Root Directory: `content-engine`
   - Runtime: Python
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python backend/server.py`
   - Instance type: Free
4. Environment Variables (copy values from Supabase app_config):
   - GEMINI_API_KEY
   - YOUTUBE_API_KEY
   - SHEET_ID
   - GOOGLE_CREDENTIALS_JSON   (paste the WHOLE JSON)
   (Do NOT set PORT - Render sets it automatically.)
5. Deploy. Copy the live URL, e.g. https://sineva-content-engine.onrender.com
6. Test: open that URL -> login -> sign up -> Run engine should generate.

Free tier note: the service sleeps after ~15 min idle; first load after that takes ~50s. Fine for testing; upgrade when selling.

---

## 3) Point the frontend at the backend
In the copy of `auth-config.js` that goes on the website (step 4), set:

    window.BACKEND_URL = "https://YOUR-RENDER-URL.onrender.com";   // no trailing slash

(Cross-origin is already handled - the backend sends open CORS headers.)

---

## 4) Mix the FRONTEND into the website (same live link)
Sir's site is React + Vite. Any file in its `public/` folder is served as-is.

Copy these from ContentAutomation into the Vite app's `public/app/` folder:
   - login.html
   - signup.html
   - index.html
   - auth-config.js   (with BACKEND_URL set from step 3)
   - data/library.js  (put at public/app/data/library.js)

Live URLs after sir deploys:
   - https://consultwithankush.com/app/login.html
   - https://consultwithankush.com/app/          (dashboard; redirects to login)

Commit + push the website repo -> sir deploys -> frontend live on the brand link.

If the site has a catch-all SPA rewrite, add an exception so `/app/*` serves the static files.

---

## Alternative (simplest) - subdomain instead of mixing
Point `app.consultwithankush.com` (DNS CNAME) at the Render service and add it as a
custom domain in Render. Then the WHOLE app (frontend + backend together) lives at
app.consultwithankush.com with nothing to mix. Landing page stays at consultwithankush.com.

---

## Final checklist
- [ ] git status showed NO .env / google-credentials.json before pushing
- [ ] Render env vars set (GEMINI_API_KEY, YOUTUBE_API_KEY, SHEET_ID, GOOGLE_CREDENTIALS_JSON)
- [ ] Opened Render URL and generated a script successfully
- [ ] BACKEND_URL set in the website's auth-config.js
- [ ] Supabase: email confirmation OFF; profiles + saved_scripts tables created
- [ ] Signup + Generate + Save tested on the live URL
