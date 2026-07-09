"""
Content Engine - niche-aware 4-agent pipeline.

Agent 1 (Trend Scraper) : YouTube Data API pull WITH stats, links, thumbnails
Agent 2 (Viral Analyzer): outlier math -> WORKS / AVERAGE / WEAK labels + keywords
Agent 3 (Script Writer) : Gemini writes a timed 25s script in the niche's voice
Agent 4 (Hook + Caption): Gemini writes hook, caption, hashtags

Niches are defined in data/niches.json (search terms, voice, sheet, manager).
Keys (.env): GEMINI_API_KEY (writing, free from Google AI Studio), YOUTUBE_API_KEY (trends). Degrades safely.
"""

import os
import re
import json
import time
import statistics
import urllib.parse
import urllib.request

try:
    from pytrends.request import TrendReq
except Exception:
    TrendReq = None

GEMINI_MODELS = [m.strip() for m in os.getenv(
    "GEMINI_MODEL",
    "gemini-flash-lite-latest,gemini-flash-latest,gemini-2.0-flash"
).split(",") if m.strip()]
_DATA = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data")
_LIB_PATH = os.path.join(_DATA, "content_library.json")
_NICHES_PATH = os.path.join(_DATA, "niches.json")
_USER_EX_PATH = os.path.join(_DATA, "user_examples.json")

_STOP = set("""a an the of to in on for and or but with your you are is be this that these those they
them it its as at by from we our us i my me he she his her will can how what why when who which not no
yes do does did have has had new top best most only just like get got make made why 2024 2025 2026
shorts short video reel reels ka ki ke ko hai ho me mein se par aur ya is in ye yeh wo woh ek do teen
status whatsapp song dj remix full hd""".split())

_DEFAULT_STYLE = (
    "You write scroll-stopping short-form Reels/Shorts. Use a timed 25s script "
    "(0-3s HOOK, 3-10s RELATE, 10-18s VALUE, 18-25s CTA), speak to one person, "
    "include one concrete specific, then a caption with CTA and 6-12 hashtags.")


# ---------------------------------------------------------------------------
# Niche config
# ---------------------------------------------------------------------------
def load_niches():
    try:
        cfg = json.load(open(_NICHES_PATH, encoding="utf-8"))
        return cfg.get("niches", []), cfg.get("brand", "Content Engine")
    except Exception:
        return [], "Content Engine"


def niche_by_name(name):
    niches, _ = load_niches()
    for n in niches:
        if n.get("name", "").lower() == (name or "").lower() or n.get("id", "") == (name or "").lower():
            return n
    return niches[0] if niches else {
        "name": name or "General", "search": name or "trending",
        "trend_kw": name or "trending", "region": "IN", "lang": "en",
        "style": _DEFAULT_STYLE, "sheet_id": "", "manager_email": ""}


def _gemini_key():
    return os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY") or ""


def load_user_examples(niche_name=None):
    try:
        data = json.load(open(_USER_EX_PATH, encoding="utf-8"))
    except Exception:
        return []
    if niche_name:
        return [r for r in data if r.get("niche", "").lower() == (niche_name or "").lower()]
    return data


def _save_user_examples(data):
    with open(_USER_EX_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=1)


def add_user_example(item):
    data = load_user_examples()
    item = dict(item)
    item["id"] = "EX-%d" % int(time.time() * 1000)
    data.append(item)
    _save_user_examples(data)
    return item


def delete_user_example(ex_id):
    data = [r for r in load_user_examples() if r.get("id") != ex_id]
    _save_user_examples(data)
    return True


def _load_examples(niche_name, n=4):
    # user-added examples take priority (their own trained voice), then built-in library
    user = load_user_examples(niche_name)
    built = []
    try:
        lib = json.load(open(_LIB_PATH, encoding="utf-8"))
        built = [r for r in lib if r.get("category", "").lower() == (niche_name or "").lower()]
    except Exception:
        built = []
    merged = user + built
    return merged[:n]


def _get_json(url, timeout=15):
    with urllib.request.urlopen(url, timeout=timeout) as r:
        return json.loads(r.read().decode())


# ===========================================================================
# AGENT 1 - Trend Scraper
# ===========================================================================
def scrape_youtube(topic, niche_name, limit=20, days=60):
    key = os.getenv("YOUTUBE_API_KEY")
    if not key:
        return []
    nc = niche_by_name(niche_name)
    try:
        q = urllib.parse.quote(("%s %s" % (topic, nc.get("search", niche_name))).strip())
        published_after = time.strftime("%Y-%m-%dT00:00:00Z", time.gmtime(time.time() - max(1, int(days)) * 86400))
        search_url = (
            "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video"
            "&q=%s&order=viewCount&maxResults=%d&relevanceLanguage=%s&regionCode=%s"
            "&publishedAfter=%s&key=%s" % (q, min(limit, 25), nc.get("lang", "en"),
                                           nc.get("region", "IN"), published_after, key)
        )
        sr = _get_json(search_url)
        ids = [it["id"]["videoId"] for it in sr.get("items", []) if it.get("id", {}).get("videoId")]
        if not ids:
            return []
        vr = _get_json("https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=%s&key=%s"
                       % (",".join(ids), key))
        now = time.time()
        posts = []
        for v in vr.get("items", []):
            vid = v.get("id", "")
            st = v.get("statistics", {})
            sn = v.get("snippet", {})
            views = int(st.get("viewCount", 0) or 0)
            likes = int(st.get("likeCount", 0) or 0)
            comments = int(st.get("commentCount", 0) or 0)
            pub = sn.get("publishedAt", "")
            try:
                age_days = max(1.0, (now - time.mktime(time.strptime(pub[:19], "%Y-%m-%dT%H:%M:%S"))) / 86400)
            except Exception:
                age_days = 30.0
            thumbs = sn.get("thumbnails", {})
            thumb = (thumbs.get("medium") or thumbs.get("high") or thumbs.get("default") or {}).get("url", "")
            posts.append({
                "video_id": vid, "url": "https://www.youtube.com/watch?v=" + vid, "thumbnail": thumb,
                "title": sn.get("title", ""), "channel": sn.get("channelTitle", ""),
                "views": views, "likes": likes, "comments": comments, "age_days": round(age_days, 1),
            })
        return posts
    except Exception:
        return []


def google_trends_terms(niche_name):
    if TrendReq is None:
        return []
    nc = niche_by_name(niche_name)
    try:
        kw = nc.get("trend_kw", niche_name)
        py = TrendReq(hl="en-IN", tz=330)
        py.build_payload([kw], geo=nc.get("region", "IN"), timeframe="now 7-d")
        rq = py.related_queries().get(kw, {})
        for key in ("rising", "top"):
            df = rq.get(key)
            if df is not None and len(df):
                return [str(x) for x in list(df["query"])[:10]]
    except Exception:
        return []
    return []


# ===========================================================================
# AGENT 2 - Viral Analyzer
# ===========================================================================
def analyze_posts(posts):
    if not posts:
        return {"winners": [], "videos_analyzed": 0, "median_vpd": 0}
    for p in posts:
        p["vpd"] = p["views"] / max(p["age_days"], 1)
        p["engagement"] = (p["likes"] + p["comments"]) / max(p["views"], 1)
    median_vpd = statistics.median([p["vpd"] for p in posts]) or 1
    for p in posts:
        of = round(p["vpd"] / median_vpd, 2)
        p["outlier_factor"] = of
        p["engagement_pct"] = round(p["engagement"] * 100, 1)
        p["score"] = int(max(40, min(99, 55 + 18 * (of - 1) + 1200 * p["engagement"])))
        eng = p["engagement_pct"]
        p["label"] = "WORKS" if (of >= 1.6 or eng >= 4.0) else ("AVERAGE" if (of >= 0.85 or eng >= 2.0) else "WEAK")
    winners = sorted(posts, key=lambda x: (x["outlier_factor"], x["engagement"]), reverse=True)
    return {"winners": winners, "videos_analyzed": len(posts), "median_vpd": int(median_vpd)}


def extract_keywords(posts, top_n=14):
    counts = {}
    for p in posts:
        if p.get("label") == "WEAK":
            continue
        for w in re.findall(r"[A-Za-z]+", (p.get("title") or "").lower()):
            if len(w) < 3 or w in _STOP:
                continue
            counts[w] = counts.get(w, 0) + 1
    ranked = sorted(counts.items(), key=lambda x: x[1], reverse=True)
    return [{"word": w, "count": c} for w, c in ranked[:top_n] if c >= 2]


# ===========================================================================
# AGENTS 3 + 4 - Script Writer + Hook/Caption (Claude, niche voice)
# ===========================================================================
def generate(topic, niche_name, count, analysis=None, trend_terms=None):
    if not _gemini_key():
        return None
    nc = niche_by_name(niche_name)
    style = nc.get("style", _DEFAULT_STYLE)

    examples = _load_examples(niche_name, n=4)
    ex_text = "\n\n".join(
        "EXAMPLE (%s):\nHOOK: %s\nSCRIPT: %s\nCAPTION: %s\nHASHTAGS: %s" % (
            e.get("topic", ""), e.get("hook", ""), e.get("script", ""), e.get("caption", ""), e.get("hashtags", ""))
        for e in examples
    ) or "(no examples yet - follow the style guide precisely)"

    signal = ""
    winners = (analysis or {}).get("winners", [])[:8]
    if winners:
        lines = ["- \"%s\" (%s views, outlier x%.1f)" % (w["title"], _human(w["views"]), w["outlier_factor"]) for w in winners]
        signal += "TOP-PERFORMING REAL VIDEOS in this niche right now:\n" + "\n".join(lines) + "\n"
    if trend_terms:
        signal += "\nRISING SEARCHES (last 7 days): " + ", ".join(trend_terms) + "\n"
    if not signal:
        signal = "(No live trend data - rely on your knowledge of what performs.)\n"

    ask = ("the topic '%s'" % topic) if topic else ("the freshest, highest-potential %s ideas" % niche_name)

    prompt = """%s

REAL EXAMPLES to match the voice, format and energy exactly:

%s

LIVE TREND DATA (choose WHAT to make from proven winners + rising searches):
%s

TASK: Create %d BRAND-NEW, completely DIFFERENT content ideas for %s (niche: %s).
Base them on the patterns in the trend data. Make each clearly different.

Return ONLY valid JSON, no markdown, exactly:
{
  "ideas": [
    {
      "topic": "short topic",
      "angle": "the theme/angle in a few words",
      "score": 0,
      "hook": "the opening hook line",
      "script": "0-3s HOOK: ...\\n3-10s RELATE: ...\\n10-18s VALUE: ...\\n18-25s CTA: ...",
      "caption": "1-2 line caption with CTA",
      "hashtags": "#tag1 #tag2 ..."
    }
  ]
}
(score = 0-100 integer predicting reach potential)""" % (style, ex_text, signal, count, ask, niche_name)

    txt = _ask(prompt, max_tokens=8000)
    data = _extract_json(txt, default=None)
    if not data or "ideas" not in data:
        return None
    return data


def _human(n):
    n = int(n)
    if n >= 1_000_000:
        return "%.1fM" % (n / 1_000_000)
    if n >= 1_000:
        return "%.1fK" % (n / 1_000)
    return str(n)


def _ask(prompt, max_tokens=2000):
    key = _gemini_key()
    if not key:
        return ""
    payload = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.9, "maxOutputTokens": max_tokens},
    }).encode("utf-8")
    # Try each configured model in order; skip ones that are retired/busy/quota-limited.
    for model in GEMINI_MODELS:
        url = ("https://generativelanguage.googleapis.com/v1beta/models/%s:generateContent"
               % model)
        req = urllib.request.Request(
            url, data=payload, method="POST",
            headers={"Content-Type": "application/json", "x-goog-api-key": key})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                data = json.loads(r.read().decode())
            parts = data.get("candidates", [{}])[0].get("content", {}).get("parts", [])
            txt = "".join(p.get("text", "") for p in parts)
            if txt:
                return txt
        except Exception:
            continue
    return ""


def _extract_json(text, default=None):
    if not text:
        return default
    text = text.strip()
    if text.startswith("```"):
        text = text.split("```", 2)[1] if "```" in text else text
        text = text.replace("json", "", 1).strip()
    start = text.find("{")
    end = text.rfind("}")
    if start == -1 or end == -1:
        return default
    try:
        return json.loads(text[start:end + 1])
    except Exception:
        return default
