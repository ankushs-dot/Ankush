import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  useEffect(() => {
    document.title = "Thank You — Consult With Ankush";
    const linkId = "ty-css";
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/thank-you.css";
      link.id = linkId;
      document.head.appendChild(link);
    }
    return () => {
      document.getElementById(linkId)?.remove();
    };
  }, []);

  return (
    <>
      <header className="ty-header">
        <div className="ty-container">
          <a href="/" className="ty-brand" aria-label="Consult With Ankush">
            <img src="/assets/logo.png" alt="Consult With Ankush" />
          </a>
        </div>
      </header>

      <main className="ty-main">
        <div className="ty-container">
          <div className="ty-card">
            <div className="ty-check-wrap" aria-hidden="true">
              <svg className="ty-check" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="3" />
                <path
                  d="M24 41 36 53 58 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="ty-pill">
              <span className="ty-pill-dot" aria-hidden="true"></span>
              REQUEST RECEIVED
            </div>

            <h1 className="ty-title">Thank You!</h1>
            <p className="ty-subtitle">
              Your strategy call request has been received.
              <br />
              Our team will reach out within <strong>24 hours</strong> to confirm your slot.
            </p>

            <div className="ty-steps">
              <div className="ty-step">
                <div className="ty-step-num">1</div>
                <div className="ty-step-text">
                  <strong>Check your email</strong>
                  <span>Confirmation details are on their way to your inbox.</span>
                </div>
              </div>
              <div className="ty-step">
                <div className="ty-step-num">2</div>
                <div className="ty-step-text">
                  <strong>Our specialist will call you</strong>
                  <span>A real estate automation expert will reach out within 24 hours.</span>
                </div>
              </div>
              <div className="ty-step">
                <div className="ty-step-num">3</div>
                <div className="ty-step-text">
                  <strong>Prepare a few notes</strong>
                  <span>Think about your current lead volume and where leads drop off.</span>
                </div>
              </div>
            </div>

            <div className="ty-actions">
              <a
                className="ty-btn ty-btn-primary"
                href="https://api.whatsapp.com/send?phone=919517710848&text=Hi%2C%20I%20just%20booked%20a%20strategy%20call%20with%20CWA."
                target="_blank"
                rel="noreferrer"
              >
                Message us on WhatsApp <span aria-hidden="true">→</span>
              </a>
              <Link className="ty-btn ty-btn-outline" to="/">
                Back to Home
              </Link>
            </div>

          </div>
        </div>
      </main>

      <footer className="ty-footer">
        <div className="ty-container">
          © {new Date().getFullYear()} Consult With Ankush. All rights reserved.
        </div>
      </footer>
    </>
  );
}
