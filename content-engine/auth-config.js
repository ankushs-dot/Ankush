/* ------------------------------------------------------------------
   Sineva Content Engine - Supabase Auth config
   Fill BOTH values from your Supabase project:
     Dashboard -> Project Settings -> API
       * Project URL        -> SUPABASE_URL
       * anon / public key   -> SUPABASE_ANON_KEY   (the long JWT, safe to expose)
   Only these two lines need editing. The anon key is public by design.
-------------------------------------------------------------------*/
window.SUPABASE_URL = "https://apyqiknzupoatumizbso.supabase.co";
window.SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFweXFpa256dXBvYXR1bWl6YnNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwOTIyNTQsImV4cCI6MjA5ODY2ODI1NH0.iUqgqQDLqmS5sgCZbsnM44ozAobUvypKgKGAH-cSfG8";

/* After a user signs in, send them here: */
window.APP_HOME = "index.html";

/* -----------------------------------------------------------------
   API location (the Python engine that does Generate / Trends / Sheets).
   - Leave BLANK when the dashboard and the Python engine are on the SAME address.
   - When the pages are mixed into the static website but the engine runs
     elsewhere (e.g. Render), set this to that engine's URL, no trailing slash:
       window.BACKEND_URL = "https://sineva-content-engine.onrender.com";
------------------------------------------------------------------*/
window.BACKEND_URL = "";
