import { useState, useEffect } from 'react';

export default function RealEstateIndia() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.title = "CWA — AI Automation Systems For Real Estate Businesses";
    const linkId = 'lp-india-css';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/cwa-realestate.css';
      link.id = linkId;
      document.head.appendChild(link);
    }
    return () => {
      document.getElementById(linkId)?.remove();
    };
  }, []);

  return (
    <>
      {/* ============ SVG ICON SPRITE ============ */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
        <defs>
          <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12 5 5L20 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></symbol>
          <symbol id="i-bolt" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></symbol>
          <symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 21h16M7 17v-5M12 17V8M17 17v-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
          <symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M3 20c.6-3.2 3.2-5 6-5s5.4 1.8 6 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="17" cy="9" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M16 14c2 .2 4 1.4 5 3.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
          <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="1.6" fill="currentColor" /></symbol>
          <symbol id="i-trending-up" viewBox="0 0 24 24"><path d="m3 17 6-6 4 4 8-8M15 7h6v6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-house" viewBox="0 0 24 24"><path d="m3 11 9-8 9 8M5 9.5V21h14V9.5M10 21v-7h4v7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-cash" viewBox="0 0 24 24"><rect x="2.5" y="6" width="19" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="6" cy="12" r=".9" fill="currentColor" /><circle cx="18" cy="12" r=".9" fill="currentColor" /></symbol>
          <symbol id="i-whatsapp" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2C6.58 2 2.15 6.33 2.15 11.69c0 1.7.46 3.36 1.35 4.83L2 22l5.64-1.47a10.07 10.07 0 0 0 4.4 1.01h.01c5.46 0 9.89-4.33 9.89-9.69C21.94 6.33 17.5 2 12.04 2Zm5.88 14.12c-.25.69-1.23 1.28-1.94 1.43-.48.1-1.1.18-3.58-.76-3.17-1.24-5.2-4.33-5.36-4.54-.15-.21-1.29-1.7-1.29-3.25 0-1.55.82-2.31 1.12-2.63.29-.31.65-.38.86-.38h.62c.2 0 .48-.07.75.57.27.65.92 2.24 1 2.4.08.16.13.34.02.55-.11.21-.17.34-.33.53-.16.19-.34.42-.48.56-.16.16-.33.33-.14.65.19.32.86 1.42 1.85 2.3 1.27 1.13 2.34 1.48 2.67 1.64.32.16.51.14.7-.08.19-.21.8-.93 1.01-1.25.21-.32.42-.27.7-.16.29.11 1.84.86 2.16 1.02.32.16.53.24.61.37.08.13.08.75-.17 1.44Z" /></symbol>
          <symbol id="i-crm" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M9 4v16M15 4v16" fill="none" stroke="currentColor" strokeWidth="1.6" /><rect x="5" y="7" width="3" height="2" rx=".5" fill="currentColor" /><rect x="5" y="10.5" width="3" height="2" rx=".5" fill="currentColor" /><rect x="11" y="7" width="3" height="2" rx=".5" fill="currentColor" /><rect x="11" y="10.5" width="3" height="2" rx=".5" fill="currentColor" /><rect x="11" y="14" width="3" height="2" rx=".5" fill="currentColor" /><rect x="17" y="7" width="2.5" height="2" rx=".5" fill="currentColor" /></symbol>
          <symbol id="i-instagram" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" /></symbol>
          <symbol id="i-facebook" viewBox="0 0 24 24"><path d="M14 21v-8h3l.6-3.6H14V7.2c0-1 .3-1.7 1.8-1.7H18V2.4c-.4 0-1.6-.2-2.9-.2-2.9 0-4.9 1.8-4.9 5v3h-3v3.6h3V21h4z" fill="currentColor" /></symbol>
          <symbol id="i-email" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-bot" viewBox="0 0 24 24"><rect x="3.5" y="8" width="17" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="9" cy="14" r="1.4" fill="currentColor" /><circle cx="15" cy="14" r="1.4" fill="currentColor" /><path d="M12 4v4M9 4h6M2 14h1.5M20.5 14H22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
          <symbol id="i-refresh" viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 13.7-5.7L21 8M21 3v5h-5M20 12a8 8 0 0 1-13.7 5.7L3 16M3 21v-5h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M3.5 9.5h17M8 3v4M16 3v4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="9" cy="14" r=".9" fill="currentColor" /><circle cx="12" cy="14" r=".9" fill="currentColor" /><circle cx="15" cy="14" r=".9" fill="currentColor" /></symbol>
          <symbol id="i-infinity" viewBox="0 0 24 24"><path d="M18.2 8c5.1 0 5.1 8 0 8-5.1 0-7.1-8-12.4-8-4.6 0-4.6 8 0 8 5.3 0 7.3-8 12.4-8z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-tools" viewBox="0 0 24 24"><path d="m14.7 6.3 3-3a4 4 0 0 1 4 4l-3 3M11 11l-7.5 7.5a1.4 1.4 0 0 0 2 2L13 13M8 8l4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
          <symbol id="i-clipboard" viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M9 4V3a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 3v1M9 11h6M9 14.5h6M9 18h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
          <symbol id="i-flame" viewBox="0 0 24 24"><path d="M12 2c1.5 4 6 5 6 11a6 6 0 0 1-12 0c0-2 .8-3.2 1.8-4.2.2 1.5.8 2.2 1.6 2.2 1.4 0 1.4-2.2.3-4.2-1.4-2.6.7-4.7 2.3-4.8z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></symbol>
          <symbol id="i-alert" viewBox="0 0 24 24"><path d="m12 3 10 18H2z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M12 10v4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="12" cy="17.5" r="1" fill="currentColor" /></symbol>
          <symbol id="i-sparkle" viewBox="0 0 24 24"><path d="M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M19 3v3M21 4.5h-3M5 16v3M6.5 17.5h-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></symbol>
          <symbol id="i-question" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.3c-.8.4-1.1 1-1.1 1.7v.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="12" cy="17" r="1" fill="currentColor" /></symbol>
          <symbol id="i-link" viewBox="0 0 24 24"><path d="M10.5 13.5a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M13.5 10.5a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-rocket" viewBox="0 0 24 24"><path d="M14 14 8 8C5 8 3 10 3 14c4 0 6-2 6-2zM10 14l4-4M21 3c-4 0-7 2-9 4l-4 4 5 5 4-4c2-2 4-5 4-9z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" /></symbol>
          <symbol id="i-timer" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 14V9.5M9.5 3h5M19.5 6.5l-1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
          <symbol id="i-alert-bell" viewBox="0 0 24 24"><path d="M18 16V11a6 6 0 0 0-12 0v5l-2 3h16zM10 20a2 2 0 0 0 4 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
        </defs>
      </svg>

      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header" id="top">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Consult With Ankush">
            <img className="brand-logo" src="/assets/logo.png" alt="Consult With Ankush" />
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={navOpen}
            aria-controls="site-nav"
            onClick={() => setNavOpen(v => !v)}
          >
            <span className="sr-only">Open menu</span>
            <span className="hamburger" aria-hidden="true"></span>
          </button>

          <nav
            className={navOpen ? 'nav open' : 'nav'}
            id="site-nav"
            aria-label="Primary"
            onClick={() => setNavOpen(false)}
          >
            <a className="nav-link" href="#features">Features</a>
            <a className="nav-link" href="#how-it-works">How It Works</a>
            <a className="nav-link" href="#pricing">Pricing</a>
            <a className="nav-link" href="#about">About Us</a>
            <a className="nav-link" href="#contact">Contact</a>
            <a
              className="nav-cta-mobile"
              href="https://api.hiighvance.com/widget/booking/tEkQ1ShbtAIklcrJBH2b"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >Book Free Strategy Call <span aria-hidden="true">→</span></a>
          </nav>

          <div className="header-actions">
            <a
              className="btn btn-primary btn-small"
              href="https://api.hiighvance.com/widget/booking/tEkQ1ShbtAIklcrJBH2b"
              target="_blank"
              rel="noreferrer"
            >
              Book Free Strategy Call <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </header>

      <a
        className="whatsapp-fab"
        href="https://api.whatsapp.com/send?phone=919517710848&text=I%20want%20to%20automate%20my%20real%20estate%20business%21"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg className="whatsapp-fab__icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.04 2C6.58 2 2.15 6.33 2.15 11.69c0 1.7.46 3.36 1.35 4.83L2 22l5.64-1.47a10.07 10.07 0 0 0 4.4 1.01h.01c5.46 0 9.89-4.33 9.89-9.69C21.94 6.33 17.5 2 12.04 2Zm5.88 14.12c-.25.69-1.23 1.28-1.94 1.43-.48.1-1.1.18-3.58-.76-3.17-1.24-5.2-4.33-5.36-4.54-.15-.21-1.29-1.7-1.29-3.25 0-1.55.82-2.31 1.12-2.63.29-.31.65-.38.86-.38h.62c.2 0 .48-.07.75.57.27.65.92 2.24 1 2.4.08.16.13.34.02.55-.11.21-.17.34-.33.53-.16.19-.34.42-.48.56-.16.16-.33.33-.14.65.19.32.86 1.42 1.85 2.3 1.27 1.13 2.34 1.48 2.67 1.64.32.16.51.14.7-.08.19-.21.8-.93 1.01-1.25.21-.32.42-.27.7-.16.29.11 1.84.86 2.16 1.02.32.16.53.24.61.37.08.13.08.75-.17 1.44Z"
          />
        </svg>
      </a>

      <main id="main">
        {/* HERO */}
        <section className="hero" id="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="pill">
                <span className="pill-dot" aria-hidden="true"></span>
                AI-POWERED REAL ESTATE AUTOMATION
              </div>

              <h1 className="hero-title">
                Stop Losing Real Estate<br />
                Leads Every Single Day
              </h1>

              <p className="hero-lead">
                <strong>Your team is busy. Your leads are not waiting.</strong>
              </p>

              <p className="hero-subtitle">
                CWA builds AI-powered automation systems for real estate developers,
                builders, channel partners, and brokers across India.
              </p>

              <ul className="hero-bullets">
                <li><span className="check" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Reply to every lead instantly</li>
                <li><span className="check" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Follow up on WhatsApp, Instagram &amp; Facebook</li>
                <li><span className="check" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Book site visits automatically</li>
                <li><span className="check" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Qualify buyers using AI</li>
                <li><span className="check" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Increase conversions without increasing staff</li>
              </ul>

              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-value">78%</div>
                  <div className="hero-stat-label">of real estate leads never get proper follow-up</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">15–45 mins</div>
                  <div className="hero-stat-label">Most brokers reply after 15–45 minutes</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">5 mins</div>
                  <div className="hero-stat-label">Leads go cold within 5 minutes</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">₹ Lakhs</div>
                  <div className="hero-stat-label">Site visit no-shows destroy revenue</div>
                </div>
              </div>

              <div className="pricing-strip">
                <div className="pricing-strip-price">
                  <span className="pricing-strip-label">Starting At</span>
                  <span className="pricing-strip-value">₹34,999</span>
                  <span className="pricing-strip-period">/Month</span>
                </div>
                <ul className="pricing-strip-badges" aria-label="Included in plan">
                  <li><span className="badge-icon" aria-hidden="true"><svg className="ic"><use href="#i-bolt" /></svg></span> AI Automation System</li>
                  <li><span className="badge-icon" aria-hidden="true"><svg className="ic"><use href="#i-crm" /></svg></span> CRM Included</li>
                  <li><span className="badge-icon" aria-hidden="true"><svg className="ic"><use href="#i-users" /></svg></span> Unlimited Users</li>
                  <li><span className="badge-icon" aria-hidden="true"><svg className="ic"><use href="#i-target" /></svg></span> FREE Performance Marketing</li>
                </ul>
              </div>

              <div className="hero-cta">
                <a
                  className="btn btn-primary"
                  href="https://api.hiighvance.com/widget/booking/tEkQ1ShbtAIklcrJBH2b"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Free Strategy Call <span aria-hidden="true">→</span>
                </a>
                <a className="btn btn-outline" href="#how-it-works">See Live Demo</a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-photo">
                <div className="hero-photo-frame">
                  {/* Replace this background with your own property photo. */}
                  <div className="hero-photo-inner"></div>
                </div>
                <div className="hero-photo-tags">
                  <div className="photo-tag">
                    <span className="photo-tag-icon"><svg className="ic ic-lg"><use href="#i-trending-up" /></svg></span>
                    <span>MORE LEADS</span>
                  </div>
                  <div className="photo-tag">
                    <span className="photo-tag-icon"><svg className="ic ic-lg"><use href="#i-house" /></svg></span>
                    <span>MORE SITE VISITS</span>
                  </div>
                  <div className="photo-tag">
                    <span className="photo-tag-icon"><svg className="ic ic-lg"><use href="#i-cash" /></svg></span>
                    <span>MORE SALES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 01 — LEAKING REVENUE */}
        <section className="section section-band" id="problem">
          <div className="container section-grid">
            <div className="section-left">
              <div className="section-num">01</div>
              <h2 className="section-title">
                Your Real Estate Business<br />Is Leaking Revenue Every Day
              </h2>
              <p className="section-lead">
                The problem is not only the leads.<br />
                The problem is the speed, consistency,<br />and follow-up process.
              </p>
              <a className="btn btn-primary btn-small" href="#features">
                Fix My Lead System <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="compare-cols">
              <div className="compare-card compare-bad">
                <div className="compare-head">WITHOUT AUTOMATION</div>
                <ul className="compare-list">
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> Leads ignored after office hours</li>
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> Slow WhatsApp replies</li>
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> Missed Instagram DMs</li>
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> No automated reminders</li>
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> No lead tracking</li>
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> No reactivation campaigns</li>
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> Human errors in follow-ups</li>
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> Sales team dependency</li>
                </ul>
              </div>
              <div className="compare-card compare-good">
                <div className="compare-head">WITH CWA AI SYSTEMS</div>
                <ul className="compare-list">
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Instant replies in seconds</li>
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> AI conversations 24×7</li>
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Automated lead nurturing</li>
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Automatic reminders &amp; follow-ups</li>
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Centralized CRM tracking</li>
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Re-engagement campaigns</li>
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Faster conversions</li>
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> More site visits booked</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — AI RESPONSES */}
        <section className="section" id="how-it-works">
          <div className="container section-grid">
            <div className="section-left">
              <div className="section-num">02</div>
              <h2 className="section-title">
                See How The AI Responds<br />To Your Leads Instantly
              </h2>
              <p className="section-lead">
                Your leads don't want to wait 30 minutes<br />
                for a callback. They want answers<br />immediately.
              </p>
              <p className="section-lead">
                This is how CWA AI engages real estate<br />buyers automatically.
              </p>
              <a className="btn btn-primary btn-small" href="#contact">
                See Full AI Demo <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="chats-grid">
              <article className="chat-card">
                <div className="chat-head">
                  <span className="chat-num">1</span>
                  <span className="chat-title">Apartment Inquiry</span>
                </div>
                <div className="chat-body">
                  <div className="bubble bubble-user">
                    Hi, I saw your ad for 3 BHK flats in Whitefield. What's the starting price?
                  </div>
                  <div className="bubble bubble-ai">
                    Hello! Thank you for your interest in our Whitefield project. 3 BHK units are starting from ₹1.12 Cr onwards.<br /><br />
                    May I know:<br />
                    1. Is this for self-use or investment?<br />
                    2. What is your preferred possession timeline?
                  </div>
                  <div className="bubble bubble-user">Self-use. Looking to shift this year.</div>
                  <div className="bubble bubble-ai">
                    Perfect. We currently have ready-to-move and near-possession units available.<br /><br />
                    Would you like:<br />
                    • Floor plans<br />
                    • Pricing sheet<br />
                    • Site visit booking<br />
                    • Location brochure
                  </div>
                </div>
              </article>

              <article className="chat-card">
                <div className="chat-head">
                  <span className="chat-num">2</span>
                  <span className="chat-title">Missed Lead Recovery</span>
                </div>
                <div className="chat-body">
                  <div className="bubble bubble-ai">
                    Hi Rahul,<br />
                    Just checking in regarding your interest in plots near Sarjapur Road.<br /><br />
                    Would you still like:<br />
                    • Updated pricing<br />
                    • Investment ROI details<br />
                    • Available inventory<br />
                    • Weekend site visit
                  </div>
                  <div className="bubble bubble-user">Yes, share latest pricing.</div>
                  <div className="bubble bubble-ai">
                    Sure.<br />
                    Current plot prices start from ₹46 Lakhs onwards.<br /><br />
                    There's also a pre-launch offer ending this Sunday.<br /><br />
                    Would you like me to arrange a callback or schedule a site visit?
                  </div>
                </div>
              </article>

              <article className="chat-card">
                <div className="chat-head">
                  <span className="chat-num">3</span>
                  <span className="chat-title">AI Qualification Chat</span>
                </div>
                <div className="chat-body">
                  <div className="bubble bubble-ai">
                    Before we recommend properties, may I know your approximate budget?
                  </div>
                  <div className="chat-chips">
                    <span className="chip">₹50L – ₹1Cr</span>
                    <span className="chip chip-active">₹1Cr – ₹2Cr</span>
                    <span className="chip">₹2Cr+</span>
                  </div>
                  <div className="bubble bubble-ai">
                    Great. Which location are you mainly looking in?
                  </div>
                  <div className="chat-chips">
                    <span className="chip chip-active">Whitefield</span>
                    <span className="chip">Sarjapur</span>
                    <span className="chip">Electronic City</span>
                    <span className="chip">North Bangalore</span>
                  </div>
                  <div className="bubble bubble-ai">
                    Perfect. We currently have 3 premium projects matching your budget in Whitefield.<br /><br />
                    Would you like:<br />
                    • Investment-focused options<br />
                    • Ready-to-move properties<br />
                    • Luxury apartments<br />
                    • Villa projects
                  </div>
                </div>
              </article>
            </div>

            <p className="chats-note">
              This entire conversation happens automatically — even at midnight, during holidays, or when your sales team is unavailable.
            </p>
          </div>
        </section>

        {/* 03 — NUMBERS DON'T LIE */}
        <section className="section section-band" id="numbers">
          <div className="container section-grid">
            <div className="section-left">
              <div className="section-num">03</div>
              <h2 className="section-title">Numbers Don't Lie</h2>
              <p className="section-lead">
                In Indian real estate, <strong>speed wins deals.</strong>
              </p>
              <p className="section-lead">
                The first builder or broker who responds usually gets the site visit.
              </p>
              <a className="btn btn-primary btn-small" href="#features">
                See How Automation Works <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="compare-table" role="region" aria-label="Traditional vs CWA AI">
              <div className="ct-header">
                <div>Problem</div>
                <div>Traditional Teams</div>
                <div>CWA AI System</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon" aria-hidden="true"><svg className="ic"><use href="#i-timer" /></svg></span> Response Time</div>
                <div className="ct-cell ct-bad">15–40 mins</div>
                <div className="ct-cell ct-good">&lt; 5 sec</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon" aria-hidden="true"><svg className="ic"><use href="#i-refresh" /></svg></span> Follow-Up Consistency</div>
                <div className="ct-cell ct-bad">Low</div>
                <div className="ct-cell ct-good">Automated</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon" aria-hidden="true"><svg className="ic"><use href="#i-clock" /></svg></span> Availability</div>
                <div className="ct-cell ct-bad">Office Hours Only</div>
                <div className="ct-cell ct-good">24×7</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon" aria-hidden="true"><svg className="ic"><use href="#i-clipboard" /></svg></span> Lead Tracking</div>
                <div className="ct-cell ct-bad">Manual</div>
                <div className="ct-cell ct-good">Automatic</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon" aria-hidden="true"><svg className="ic"><use href="#i-whatsapp" /></svg></span> WhatsApp Replies</div>
                <div className="ct-cell ct-bad">Delayed</div>
                <div className="ct-cell ct-good">Instant</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon" aria-hidden="true"><svg className="ic"><use href="#i-instagram" /></svg></span> Instagram DMs</div>
                <div className="ct-cell ct-bad">Missed</div>
                <div className="ct-cell ct-good">Automated</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon" aria-hidden="true"><svg className="ic"><use href="#i-facebook" /></svg></span> Facebook Replies</div>
                <div className="ct-cell ct-bad">Inconsistent</div>
                <div className="ct-cell ct-good">Automated</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon" aria-hidden="true"><svg className="ic"><use href="#i-calendar" /></svg></span> Site Visit Booking</div>
                <div className="ct-cell ct-bad">Manual</div>
                <div className="ct-cell ct-good">AI Assisted</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon" aria-hidden="true"><svg className="ic"><use href="#i-flame" /></svg></span> Lead Re-engagement</div>
                <div className="ct-cell ct-bad">Rare</div>
                <div className="ct-cell ct-good">Automated</div>
              </div>
            </div>
          </div>
        </section>

        {/* 04, 05, 06 — FEATURE TRIO */}
        <section className="section" id="features">
          <div className="container">
            <div className="trio-grid">
              <article className="trio-card">
                <div className="trio-num">04</div>
                <h3 className="trio-title">Convert WhatsApp Leads<br />Into Site Visits Automatically</h3>
                <ul className="trio-list">
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-whatsapp" /></svg></span> AI WhatsApp Agent</li>
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-refresh" /></svg></span> Automated Follow-Ups</li>
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-calendar" /></svg></span> Site Visit Scheduling</li>
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-infinity" /></svg></span> Unlimited WhatsApp Connections</li>
                </ul>
                <div className="trio-visual" aria-hidden="true">
                  <span className="brand-bubble brand-bubble-wa">
                    <svg viewBox="0 0 24 24"><use href="#i-whatsapp" /></svg>
                  </span>
                </div>
                <a className="btn btn-primary btn-small" href="#contact">
                  Automate My WhatsApp <span aria-hidden="true">→</span>
                </a>
              </article>

              <article className="trio-card">
                <div className="trio-num">05</div>
                <h3 className="trio-title">Turn Social Media Enquiries<br />Into Real Buyers</h3>
                <ul className="trio-list">
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-bolt" /></svg></span> Instant replies</li>
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-question" /></svg></span> Auto qualification questions</li>
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-target" /></svg></span> Lead capture automation</li>
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-refresh" /></svg></span> Automated follow-up sequences</li>
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-link" /></svg></span> CRM syncing &amp; booking flow</li>
                </ul>
                <div className="trio-visual" aria-hidden="true">
                  <span className="brand-bubble brand-bubble-ig">
                    <svg viewBox="0 0 24 24"><use href="#i-instagram" /></svg>
                  </span>
                  <span className="brand-bubble brand-bubble-fb">
                    <svg viewBox="0 0 24 24"><use href="#i-facebook" /></svg>
                  </span>
                </div>
                <a className="btn btn-primary btn-small" href="#contact">
                  See Social Media Automation <span aria-hidden="true">→</span>
                </a>
              </article>

              <article className="trio-card">
                <div className="trio-num">06</div>
                <h3 className="trio-title">One CRM System To<br />Control Everything</h3>
                <ul className="trio-list">
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-clipboard" /></svg></span> Lead Tracking</li>
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-tools" /></svg></span> Pipeline Management</li>
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-users" /></svg></span> Team Access</li>
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-clock" /></svg></span> Follow-Up Reminders</li>
                  <li><span className="trio-i" aria-hidden="true"><svg className="ic"><use href="#i-trending-up" /></svg></span> Sales Reporting</li>
                </ul>
                <div className="trio-visual trio-visual-crm" aria-hidden="true">
                  <svg className="crm-illust" viewBox="0 0 290 130" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="crmChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0b4d3a" stopOpacity=".30" />
                        <stop offset="100%" stopColor="#0b4d3a" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Monitor body */}
                    <rect x="20" y="8" width="195" height="92" rx="7" fill="#fff" stroke="rgba(11,77,58,.20)" strokeWidth="1.4" />
                    {/* Window chrome bar */}
                    <line x1="20" y1="22" x2="215" y2="22" stroke="rgba(11,77,58,.14)" strokeWidth="1" />
                    <circle cx="28" cy="15" r="1.5" fill="rgba(11,77,58,.32)" />
                    <circle cx="34" cy="15" r="1.5" fill="rgba(11,77,58,.22)" />
                    <circle cx="40" cy="15" r="1.5" fill="rgba(11,77,58,.22)" />
                    {/* Sidebar label lines */}
                    <line x1="60" y1="14" x2="80" y2="14" stroke="rgba(11,77,58,.25)" strokeWidth="1.4" strokeLinecap="round" />
                    <line x1="86" y1="14" x2="100" y2="14" stroke="rgba(11,77,58,.18)" strokeWidth="1.4" strokeLinecap="round" />

                    {/* Chart area fill */}
                    <path d="M30 80 L52 72 L74 65 L96 56 L118 48 L140 38 L162 32 L184 28 L205 22 L205 92 L30 92 Z"
                      fill="url(#crmChartGrad)" />
                    {/* Chart line */}
                    <path d="M30 80 L52 72 L74 65 L96 56 L118 48 L140 38 L162 32 L184 28 L205 22"
                      fill="none" stroke="#0b4d3a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Highlight dot */}
                    <circle cx="205" cy="22" r="8" fill="rgba(11,77,58,.18)" />
                    <circle cx="205" cy="22" r="3.5" fill="#0b4d3a" />

                    {/* Monitor stand */}
                    <path d="M105 100 h25 l-3 10 h-19 z" fill="rgba(11,77,58,.18)" />
                    <rect x="92" y="110" width="51" height="4" rx="2" fill="rgba(11,77,58,.22)" />

                    {/* Floating callout card on the right */}
                    <g>
                      <rect x="200" y="48" width="78" height="52" rx="8" fill="#fff" stroke="rgba(11,77,58,.22)" strokeWidth="1.4" />
                      <circle cx="212" cy="62" r="4.5" fill="rgba(11,77,58,.18)" />
                      <line x1="220" y1="60" x2="268" y2="60" stroke="rgba(11,77,58,.40)" strokeWidth="2" strokeLinecap="round" />
                      <line x1="220" y1="66" x2="252" y2="66" stroke="rgba(11,77,58,.20)" strokeWidth="1.6" strokeLinecap="round" />
                      <line x1="208" y1="80" x2="270" y2="80" stroke="rgba(11,77,58,.20)" strokeWidth="1.6" strokeLinecap="round" />
                      <line x1="208" y1="86" x2="258" y2="86" stroke="rgba(11,77,58,.15)" strokeWidth="1.6" strokeLinecap="round" />
                      <line x1="208" y1="92" x2="264" y2="92" stroke="rgba(11,77,58,.15)" strokeWidth="1.6" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>
                <a className="btn btn-primary btn-small" href="#contact">
                  Get CRM Demo <span aria-hidden="true">→</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* 07 + 08 ROW */}
        <section className="section section-band" id="pricing">
          <div className="container split-grid">
            <div className="split-left">
              <div className="section-num">07</div>
              <h2 className="section-title">Most Deals Are<br />Lost In Follow-Ups</h2>
              <ul className="bullet-stack">
                <li><span className="bs-i" aria-hidden="true"><svg className="ic"><use href="#i-whatsapp" /></svg></span> Automated WhatsApp follow-ups</li>
                <li><span className="bs-i" aria-hidden="true"><svg className="ic"><use href="#i-email" /></svg></span> Email drip campaigns</li>
                <li><span className="bs-i" aria-hidden="true"><svg className="ic"><use href="#i-refresh" /></svg></span> Re-engagement campaigns</li>
                <li><span className="bs-i" aria-hidden="true"><svg className="ic"><use href="#i-alert" /></svg></span> Missed lead recovery</li>
                <li><span className="bs-i" aria-hidden="true"><svg className="ic"><use href="#i-flame" /></svg></span> Cold lead reactivation</li>
                <li><span className="bs-i" aria-hidden="true"><svg className="ic"><use href="#i-alert-bell" /></svg></span> Smart reminders</li>
                <li><span className="bs-i" aria-hidden="true"><svg className="ic"><use href="#i-sparkle" /></svg></span> Personalized messaging</li>
              </ul>
              <a className="btn btn-primary btn-small" href="#contact">
                Recover Lost Leads <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="split-right">
              <div className="section-num">08</div>
              <h2 className="section-title">Why Businesses Pay ₹34,999/Month</h2>
              <p className="section-lead">Because replacing all of this separately would cost significantly more.</p>

              <div className="cost-table">
                <div className="cost-head">
                  <div>Included System</div>
                  <div className="cost-right">Market Cost</div>
                  <div>Included System</div>
                  <div className="cost-right">Market Cost</div>
                </div>
                <div className="cost-row">
                  <div>AI WhatsApp Automation</div>
                  <div className="cost-right cost-amt">₹15,000+</div>
                  <div>AI Follow-Up Systems</div>
                  <div className="cost-right cost-amt">₹12,000+</div>
                </div>
                <div className="cost-row">
                  <div>Instagram Automation</div>
                  <div className="cost-right cost-amt">₹10,000+</div>
                  <div>Email Automation</div>
                  <div className="cost-right cost-amt">₹8,000+</div>
                </div>
                <div className="cost-row">
                  <div>Facebook Automation</div>
                  <div className="cost-right cost-amt">₹10,000+</div>
                  <div>AI Chat Agent</div>
                  <div className="cost-right cost-amt">₹15,000+</div>
                </div>
                <div className="cost-row">
                  <div>CRM Software</div>
                  <div className="cost-right cost-amt">₹8,000+</div>
                  <div>Performance Marketing Support</div>
                  <div className="cost-right cost-amt">₹25,000+</div>
                </div>
                <div className="cost-row">
                  <div>Unlimited CRM Users</div>
                  <div className="cost-right cost-amt">₹5,000+</div>
                  <div>Automation Setup &amp; Maintenance</div>
                  <div className="cost-right cost-amt">₹20,000+</div>
                </div>
              </div>

              <p className="section-lead">
                Instead of hiring more staff, managing multiple software tools, and handling follow-ups manually — you get one centralized AI growth system.
              </p>

              <a
                className="btn btn-primary btn-small"
                href="https://api.hiighvance.com/widget/booking/tEkQ1ShbtAIklcrJBH2b"
                target="_blank"
                rel="noreferrer"
              >
                Book Free Consultation <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* 09 — FINAL CTA */}
        <section className="section" id="about">
          <div className="container final-grid">
            <div className="final-left">
              <div className="section-num">09</div>
              <h2 className="section-title">Your Competitors Are<br />Already Moving Faster</h2>
              <p className="section-lead">
                The businesses that respond faster, follow up consistently, automate operations, and nurture leads better will dominate the next decade.
              </p>
              <p className="section-lead">
                The rest will continue losing leads manually.
              </p>
            </div>

            <div className="final-mid">
              <h3 className="final-mid-title">With CWA You Get:</h3>
              <div className="feat-grid">
                <div className="feat"><span className="feat-i feat-i-wa" aria-hidden="true"><svg className="ic"><use href="#i-whatsapp" /></svg></span> AI WhatsApp Automation</div>
                <div className="feat"><span className="feat-i feat-i-ig" aria-hidden="true"><svg className="ic"><use href="#i-instagram" /></svg></span> AI Instagram Automation</div>
                <div className="feat"><span className="feat-i feat-i-fb" aria-hidden="true"><svg className="ic"><use href="#i-facebook" /></svg></span> AI Facebook Automation</div>
                <div className="feat"><span className="feat-i feat-i-em" aria-hidden="true"><svg className="ic"><use href="#i-email" /></svg></span> AI Email Automation</div>
                <div className="feat"><span className="feat-i" aria-hidden="true"><svg className="ic"><use href="#i-bot" /></svg></span> AI Chat Agent</div>
                <div className="feat"><span className="feat-i" aria-hidden="true"><svg className="ic"><use href="#i-refresh" /></svg></span> Automated Follow-Ups</div>
                <div className="feat"><span className="feat-i" aria-hidden="true"><svg className="ic"><use href="#i-crm" /></svg></span> CRM System Included</div>
                <div className="feat"><span className="feat-i" aria-hidden="true"><svg className="ic"><use href="#i-users" /></svg></span> Unlimited CRM Users</div>
                <div className="feat"><span className="feat-i" aria-hidden="true"><svg className="ic"><use href="#i-infinity" /></svg></span> Unlimited WhatsApp Connections</div>
                <div className="feat"><span className="feat-i" aria-hidden="true"><svg className="ic"><use href="#i-calendar" /></svg></span> Site Visit Booking System</div>
                <div className="feat"><span className="feat-i" aria-hidden="true"><svg className="ic"><use href="#i-target" /></svg></span> Lead Qualification System</div>
                <div className="feat"><span className="feat-i" aria-hidden="true"><svg className="ic"><use href="#i-rocket" /></svg></span> FREE Performance Marketing Support</div>
              </div>
            </div>

            <aside className="final-cta" id="contact" aria-label="Get started">
              <h3 className="final-cta-title">
                Ready To Automate Your<br />Real Estate Business?
              </h3>
              <a
                className="btn btn-primary btn-block"
                href="https://api.hiighvance.com/widget/booking/tEkQ1ShbtAIklcrJBH2b"
                target="_blank"
                rel="noreferrer"
              >
                Book Free Strategy Call <span aria-hidden="true">→</span>
              </a>
              <a
                className="btn btn-wa btn-block"
                href="https://api.whatsapp.com/send?phone=919517710848&text=I%20want%20to%20automate%20my%20real%20estate%20business%21"
                target="_blank"
                rel="noreferrer"
              >
                <span className="btn-wa-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><use href="#i-whatsapp" /></svg>
                </span>
                Connect On WhatsApp
              </a>
              <p className="final-cta-foot">
                Trusted by Real Estate Developers,<br />Builders &amp; Agents Across India.
              </p>
              <div className="trust-row">
                {/* Placeholder photos. Replace with actual customer/testimonial photos before going live. */}
                <span className="trust-avatars" aria-hidden="true">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" loading="lazy" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" loading="lazy" />
                  <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="" loading="lazy" />
                  <img src="https://randomuser.me/api/portraits/women/52.jpg" alt="" loading="lazy" />
                </span>
                <span className="trust-text">500+ Businesses Trust CWA</span>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img className="footer-logo" src="/assets/logo.png" alt="Consult With Ankush" />
          </div>
          <div className="footer-line">AI AUTOMATION SYSTEMS FOR REAL ESTATE BUSINESSES</div>
          <div className="footer-copy">© 2026 Consult With Ankush. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
