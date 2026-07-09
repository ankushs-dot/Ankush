# For Sir — Deploy the updated website

Everything below is already committed to GitHub (`ankushs-dot/Ankush`, branch `main`).
The **live site is still the old build**, so these changes are NOT visible yet.
**Action needed: rebuild the site and redeploy it to consultwithankush.com.**

---

## What changed in the repo
1. **Booking link fixed** — the old `api.hiighvance.com/...` link was dead (404).
   Replaced everywhere with `https://link.yourmarketingai.com/widget/booking/tEkQ1ShbtAIklcrJBH2b`
   (Home + Real Estate India + Real Estate USA — 10 buttons).
2. **Content Engine integrated** — new `/content` route (iframe) + static pages under `/app/`
   (`/app/login.html`, `/app/signup.html`, `/app/index.html`). Themed to match the site
   (green by default, dark-mode toggle).
3. Backend (the AI engine) is **already live** on Render: **https://ankush-i5w0.onrender.com**

## The one step: rebuild + redeploy
From the repo root:
```
npm install
npm run build
```
Then deploy the build output to wherever consultwithankush.com is hosted (same as usual).

## Two things to check during deploy
1. **Serve `/app/*` as static files.** The site is a React SPA, so by default every path is
   routed to the app and `/app/login.html` shows the 404. Add a rule so `/app/*` is served as
   static (Netlify `_redirects`, Vercel `vercel.json`, or `.htaccess` on cPanel — whichever host).
2. **The `/content` iframe must point to the deployed engine**, not localhost. It should load:
   `https://ankush-i5w0.onrender.com`  (or a same-domain `/app/index.html`).
   If it points to `http://localhost:...`, it will be blank in production.

## How to verify after deploy
- Click **Book Now** on the live site → should open the new booking calendar (not 404).
- Open **consultwithankush.com/app/login.html** → the green login page loads.
- Open **consultwithankush.com/content** → the dashboard loads inside the site.

## Credentials note
Secrets are NOT in the repo (`.env`, `google-credentials.json` are git-ignored).
The backend's keys are set in Render's Environment Variables, and in Supabase `app_config`.
