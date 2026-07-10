import { useState } from "react";

// The content-engine dashboard is served by its own Python backend
// (frontend + API together). Locally that's http://localhost:8000/.
// In production, point VITE_CONTENT_ENGINE_URL at the deployed engine.
const CONTENT_ENGINE_URL =
  import.meta.env.VITE_CONTENT_ENGINE_URL || "http://localhost:8000/";

export default function Content() {
  const [failed, setFailed] = useState(false);

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      {failed ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: 24,
            textAlign: "center",
            fontFamily: "Inter, system-ui, sans-serif",
            color: "#0f2e22",
          }}
        >
          <h1 style={{ margin: 0 }}>Content Engine not reachable</h1>
          <p style={{ maxWidth: 460, color: "#4b5b54" }}>
            The dashboard couldn&apos;t load from{" "}
            <code>{CONTENT_ENGINE_URL}</code>. Make sure the content-engine
            server is running (<code>cd content-engine/backend &amp;&amp; python
            server.py</code>), then reload.
          </p>
          <a
            href={CONTENT_ENGINE_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 18px",
              background: "#0f5132",
              color: "#fff",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Open dashboard directly
          </a>
        </div>
      ) : (
        <iframe
          title="Sineva Content Engine"
          src={CONTENT_ENGINE_URL}
          onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%", border: "none" }}
          allow="clipboard-write"
        />
      )}
    </div>
  );
}
