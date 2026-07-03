"""
Sineva Content Engine - backend server (multi-niche).

Run:  python server.py     (serves dashboard at http://localhost:8000/)
Endpoints:
  GET  /health         -> status + keys
  GET  /niches         -> niche list + brand (drives the dashboard)
  GET  /sheet_status?niche=Name
  POST /trends         {niche, topic?, days?}
  POST /generate       {niche, topic?, count?}
  POST /push_review    {niche, ideas[]}
  POST /sync_sheet     {niche}
Also serves the frontend (../index.html and /data/*) so it can be hosted as one service.
"""

import os
import json
import urllib.parse
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer


def _load_env():
    here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    path = os.path.join(here, ".env")
    if os.path.exists(path):
        for line in open(path, encoding="utf-8"):
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


_load_env()

import agents  # noqa: E402
import sheets  # noqa: E402

PORT = int(os.getenv("PORT", "8000"))
_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class Handler(BaseHTTPRequestHandler):
    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def _json(self, code, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self._cors()
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _file(self, relpath, ctype):
        full = os.path.join(_ROOT, relpath)
        if not os.path.exists(full):
            self._json(404, {"error": "not found"})
            return
        with open(full, "rb") as f:
            body = f.read()
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self._cors()
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _read(self):
        try:
            length = int(self.headers.get("Content-Length", 0))
            return json.loads(self.rfile.read(length) or b"{}")
        except Exception:
            return {}

    def _query(self):
        if "?" in self.path:
            return urllib.parse.parse_qs(self.path.split("?", 1)[1])
        return {}

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        path = self.path.split("?", 1)[0]
        if path == "/health":
            self._json(200, {"status": "ok", "ai": bool(os.getenv("ANTHROPIC_API_KEY")),
                             "youtube": bool(os.getenv("YOUTUBE_API_KEY"))})
        elif path == "/niches":
            niches, brand = agents.load_niches()
            self._json(200, {"brand": brand, "niches": [
                {"id": n.get("id"), "name": n.get("name")} for n in niches]})
        elif path == "/sheet_status":
            niche = (self._query().get("niche", ["Astrology"])[0])
            self._json(200, sheets.status(niche))
        elif path in ("/", "/index.html"):
            self._file("index.html", "text/html; charset=utf-8")
        elif path == "/examples":
            niche = self._query().get("niche", [""])[0]
            self._json(200, {"examples": agents.load_user_examples(niche)})
        elif path == "/data/library.js":
            self._file("data/library.js", "application/javascript; charset=utf-8")
        else:
            self._json(404, {"error": "not found"})

    def do_POST(self):
        path = self.path.split("?", 1)[0]
        if path == "/trends":
            return self._trends()
        if path == "/generate":
            return self._generate()
        if path == "/push_review":
            return self._push_review()
        if path == "/sync_sheet":
            return self._sync_sheet()
        if path == "/add_example":
            return self._add_example()
        if path == "/delete_example":
            return self._delete_example()
        self._json(404, {"error": "not found"})

    def _trends(self):
        req = self._read()
        topic = (req.get("topic") or "").strip()
        niche = req.get("niche") or req.get("category") or "Astrology"
        days = int(req.get("days", 30) or 30)
        try:
            posts = agents.scrape_youtube(topic, niche, limit=20, days=days)
            analysis = agents.analyze_posts(posts)
            winners = analysis.get("winners", [])
            self._json(200, {
                "videos": [{"title": w["title"], "channel": w["channel"], "url": w["url"],
                            "thumbnail": w["thumbnail"], "views": w["views"], "likes": w["likes"],
                            "comments": w["comments"], "age_days": w["age_days"],
                            "engagement_pct": w.get("engagement_pct", 0), "outlier_factor": w["outlier_factor"],
                            "score": w["score"], "label": w["label"]} for w in winners],
                "keywords": agents.extract_keywords(winners),
                "rising_terms": agents.google_trends_terms(niche),
                "analyzed": len(winners), "days": days,
                "youtube_on": bool(os.getenv("YOUTUBE_API_KEY"))})
        except Exception as e:
            self._json(500, {"error": str(e)})

    def _generate(self):
        req = self._read()
        topic = (req.get("topic") or "").strip()
        niche = req.get("niche") or req.get("category") or "Astrology"
        count = int(req.get("count", 5))
        try:
            posts = agents.scrape_youtube(topic, niche, limit=15)
            trend_terms = agents.google_trends_terms(niche)
            analysis = agents.analyze_posts(posts)
            result = agents.generate(topic, niche, count, analysis, trend_terms)
            if not result:
                self._json(200, {"ideas": [], "note": "No API key set. Add ANTHROPIC_API_KEY to .env."})
                return
            result["meta"] = {"videos_analyzed": analysis.get("videos_analyzed", 0),
                              "rising_terms": trend_terms[:8],
                              "top_videos": [{"title": w["title"], "views": w["views"],
                                              "outlier_factor": w["outlier_factor"]}
                                             for w in analysis.get("winners", [])[:5]],
                              "trend_source": "YouTube + Google Trends" if posts else ("Google Trends" if trend_terms else "none")}
            self._json(200, result)
        except Exception as e:
            self._json(500, {"error": str(e)})

    def _push_review(self):
        req = self._read()
        ideas = req.get("ideas") or []
        niche = req.get("niche") or req.get("category") or "Astrology"
        source = req.get("trend_source", "AI generated")
        if not ideas:
            self._json(400, {"ok": False, "reason": "no ideas"})
            return
        try:
            self._json(200, sheets.push_drafts(ideas, niche, source))
        except Exception as e:
            self._json(500, {"ok": False, "reason": str(e)})

    def _sync_sheet(self):
        req = self._read()
        niche = req.get("niche") or req.get("category") or "Astrology"

        def _regen(row, feedback):
            topic = row.get("Topic", "")
            prompt_topic = (topic + " -- manager feedback: " + feedback).strip(" -")
            res = agents.generate(prompt_topic, niche, 1, None, None)
            if res and res.get("ideas"):
                return res["ideas"][0]
            return None
        try:
            self._json(200, sheets.sync(niche, regenerate=_regen))
        except Exception as e:
            self._json(500, {"ok": False, "reason": str(e)})

    def _add_example(self):
        req = self._read()
        niche = req.get("niche") or "Astrology"
        script = (req.get("script") or "").strip()
        if not script:
            self._json(400, {"ok": False, "reason": "script required"})
            return
        item = agents.add_user_example({
            "niche": niche, "topic": (req.get("topic") or "").strip(),
            "hook": (req.get("hook") or "").strip(), "script": script,
            "caption": (req.get("caption") or "").strip(), "hashtags": (req.get("hashtags") or "").strip()})
        self._json(200, {"ok": True, "example": item})

    def _delete_example(self):
        req = self._read()
        agents.delete_user_example(req.get("id"))
        self._json(200, {"ok": True})

    def log_message(self, *a):
        pass


def main():
    niches, brand = agents.load_niches()
    print("=" * 56)
    print("  %s - backend" % brand)
    print("=" * 56)
    print("  Dashboard:   http://localhost:%d/" % PORT)
    print("  Niches:      %s" % ", ".join(n.get("name", "") for n in niches))
    print("  AI key set:  %s" % ("YES" if os.getenv("ANTHROPIC_API_KEY") else "NO"))
    print("  YouTube key: %s" % ("YES" if os.getenv("YOUTUBE_API_KEY") else "no"))
    print("  Press Ctrl+C to stop.")
    print("=" * 56)
    ThreadingHTTPServer(("0.0.0.0", PORT), Handler).serve_forever()


if __name__ == "__main__":
    main()
