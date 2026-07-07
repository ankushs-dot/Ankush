import { useState, useEffect } from 'react';

export default function RealEstateUSA() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.title = "CWA — AI Automation For Real Estate Teams Across The USA";
    const linkId = 'lp-usa-css';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/cwa-realestate-usa.css';
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
          <symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M3 20c.6-3.2 3.2-5 6-5s5.4 1.8 6 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="17" cy="9" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M16 14c2 .2 4 1.4 5 3.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
          <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
          <symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></symbol>
          <symbol id="i-cash" viewBox="0 0 24 24"><rect x="2.5" y="6" width="19" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="6" cy="12" r=".9" fill="currentColor" /><circle cx="18" cy="12" r=".9" fill="currentColor" /></symbol>
          <symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M3.5 9.5h17M8 3v4M16 3v4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="9" cy="14" r=".9" fill="currentColor" /><circle cx="12" cy="14" r=".9" fill="currentColor" /><circle cx="15" cy="14" r=".9" fill="currentColor" /></symbol>
          <symbol id="i-refresh" viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 13.7-5.7L21 8M21 3v5h-5M20 12a8 8 0 0 1-13.7 5.7L3 16M3 21v-5h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="1.6" fill="currentColor" /></symbol>
          <symbol id="i-crm" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M9 4v16M15 4v16" fill="none" stroke="currentColor" strokeWidth="1.6" /><rect x="5" y="7" width="3" height="2" rx=".5" fill="currentColor" /><rect x="5" y="10.5" width="3" height="2" rx=".5" fill="currentColor" /><rect x="11" y="7" width="3" height="2" rx=".5" fill="currentColor" /><rect x="11" y="10.5" width="3" height="2" rx=".5" fill="currentColor" /><rect x="11" y="14" width="3" height="2" rx=".5" fill="currentColor" /><rect x="17" y="7" width="2.5" height="2" rx=".5" fill="currentColor" /></symbol>
          <symbol id="i-bot" viewBox="0 0 24 24"><rect x="3.5" y="8" width="17" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="9" cy="14" r="1.4" fill="currentColor" /><circle cx="15" cy="14" r="1.4" fill="currentColor" /><path d="M12 4v4M9 4h6M2 14h1.5M20.5 14H22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
          <symbol id="i-email" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-clipboard" viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M9 4V3a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 3v1M9 11h6M9 14.5h6M9 18h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
          <symbol id="i-instagram" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" /></symbol>
          <symbol id="i-facebook" viewBox="0 0 24 24"><path d="M14 21v-8h3l.6-3.6H14V7.2c0-1 .3-1.7 1.8-1.7H18V2.4c-.4 0-1.6-.2-2.9-.2-2.9 0-4.9 1.8-4.9 5v3h-3v3.6h3V21h4z" fill="currentColor" /></symbol>
          <symbol id="i-chat" viewBox="0 0 24 24"><path d="M21 11a8 8 0 0 1-12.5 6.4L3 19l1.6-5.4A8 8 0 1 1 21 11z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-trending-up" viewBox="0 0 24 24"><path d="m3 17 6-6 4 4 8-8M15 7h6v6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-key" viewBox="0 0 24 24"><circle cx="8" cy="15" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="m11 13 9-9 2 2-2 2 2 2-2 2-2-2-2 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-handshake" viewBox="0 0 24 24"><path d="m2 12 4-4 6 5 6-5 4 4-6 7-4-3-4 3z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></symbol>
          <symbol id="i-star" viewBox="0 0 24 24"><path d="m12 3 2.7 6 6.3.6-4.8 4.3 1.5 6.1L12 16.8 6.3 20l1.5-6.1L3 9.6 9.3 9z" fill="currentColor" /></symbol>
          <symbol id="i-house" viewBox="0 0 24 24"><path d="m3 11 9-8 9 8M5 9.5V21h14V9.5M10 21v-7h4v7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-whatsapp" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2C6.58 2 2.15 6.33 2.15 11.69c0 1.7.46 3.36 1.35 4.83L2 22l5.64-1.47a10.07 10.07 0 0 0 4.4 1.01h.01c5.46 0 9.89-4.33 9.89-9.69C21.94 6.33 17.5 2 12.04 2Zm5.88 14.12c-.25.69-1.23 1.28-1.94 1.43-.48.1-1.1.18-3.58-.76-3.17-1.24-5.2-4.33-5.36-4.54-.15-.21-1.29-1.7-1.29-3.25 0-1.55.82-2.31 1.12-2.63.29-.31.65-.38.86-.38h.62c.2 0 .48-.07.75.57.27.65.92 2.24 1 2.4.08.16.13.34.02.55-.11.21-.17.34-.33.53-.16.19-.34.42-.48.56-.16.16-.33.33-.14.65.19.32.86 1.42 1.85 2.3 1.27 1.13 2.34 1.48 2.67 1.64.32.16.51.14.7-.08.19-.21.8-.93 1.01-1.25.21-.32.42-.27.7-.16.29.11 1.84.86 2.16 1.02.32.16.53.24.61.37.08.13.08.75-.17 1.44Z" /></symbol>
          <symbol id="i-checks" viewBox="0 0 18 12"><path d="M0.5 6.5 4 10l7.5-9M6.5 6.5 10 10l7.5-9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></symbol>
          <symbol id="i-video" viewBox="0 0 24 24"><rect x="3" y="6" width="13" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="m16 10 5-3v10l-5-3z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></symbol>
          <symbol id="i-dots" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.8" fill="currentColor" /><circle cx="12" cy="12" r="1.8" fill="currentColor" /><circle cx="19" cy="12" r="1.8" fill="currentColor" /></symbol>
          <symbol id="i-zillow" viewBox="0 0 24 24"><path fill="#006aff" d="M12 2.2 2 9.4v2.2h2v10.2h5.5v-6h5v6H20V11.6h2V9.4z" /><path fill="#fff" d="M9.5 13.5h5v1.8h-5z" opacity=".4" /></symbol>
          <symbol id="i-realtor" viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="3.2" fill="#c92a30" /><path fill="#fff" d="M8.3 18V6.2h4.6c2.4 0 4 1.4 4 3.6 0 1.6-.9 2.8-2.4 3.3l2.7 4.9h-2.6l-2.3-4.5h-1.6V18zm2.4-6.5h2c1.1 0 1.8-.6 1.8-1.6s-.7-1.7-1.8-1.7h-2z" /></symbol>
          <symbol id="i-google" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></symbol>
          <symbol id="i-quote" viewBox="0 0 24 24"><path fill="currentColor" d="M6 7c-2 0-3.5 1.5-3.5 3.5S4 14 6 14c0 2-1 3-3 3v2c4 0 6-3 6-7V7zm10 0c-2 0-3.5 1.5-3.5 3.5S14 14 16 14c0 2-1 3-3 3v2c4 0 6-3 6-7V7z" /></symbol>
          <symbol id="i-flag-us" viewBox="0 0 24 16"><rect width="24" height="16" fill="#fff" /><rect width="24" height="1.23" y="1.23" fill="#B22234" /><rect width="24" height="1.23" y="3.69" fill="#B22234" /><rect width="24" height="1.23" y="6.15" fill="#B22234" /><rect width="24" height="1.23" y="8.62" fill="#B22234" /><rect width="24" height="1.23" y="11.08" fill="#B22234" /><rect width="24" height="1.23" y="13.54" fill="#B22234" /><rect width="10" height="8.62" fill="#3C3B6E" /></symbol>
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
            <a className="nav-link" href="#resources">Resources</a>
            <a className="nav-link" href="#contact">Contact</a>
            <a
              className="nav-cta-mobile"
              href="https://link.yourmarketingai.com/widget/booking/tEkQ1ShbtAIklcrJBH2b"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >Book Free Strategy Call <span aria-hidden="true">→</span></a>
          </nav>

          <div className="header-actions">
            <a
              className="btn btn-primary btn-small"
              href="https://link.yourmarketingai.com/widget/booking/tEkQ1ShbtAIklcrJBH2b"
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
          <use href="#i-whatsapp" />
        </svg>
      </a>

      <main id="main">
        {/* HERO */}
        <section className="hero" id="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="pill">
                <svg className="ic"><use href="#i-check" /></svg>
                AI-POWERED REAL ESTATE AUTOMATION
              </div>

              <h1 className="hero-title">
                Your Real Estate Business<br />
                Is <span className="accent">Losing Leads</span> Every Day.
              </h1>

              <p className="hero-lead">
                <strong>We make sure you never lose another one.</strong>
              </p>

              <p className="hero-subtitle">
                CWA builds AI-powered automation systems for real estate agents,
                brokerages, developers, and teams across the USA.
              </p>

              <ul className="hero-bullets">
                <li><span className="check" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Respond instantly with AI</li>
                <li><span className="check" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Qualify buyers & sellers</li>
                <li><span className="check" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Book appointments automatically</li>
                <li><span className="check" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Follow up 24/7</li>
                <li><span className="check" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Close more deals</li>
              </ul>

              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="hero-stat-icon"><svg className="ic"><use href="#i-users" /></svg></span>
                  <div>
                    <div className="hero-stat-value">78%</div>
                    <div className="hero-stat-label">of leads are lost due to slow response</div>
                  </div>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-icon"><svg className="ic"><use href="#i-clock" /></svg></span>
                  <div>
                    <div className="hero-stat-value">5 Minutes</div>
                    <div className="hero-stat-label">is the average time leads go cold</div>
                  </div>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-icon"><svg className="ic"><use href="#i-phone" /></svg></span>
                  <div>
                    <div className="hero-stat-value">10–45 Min</div>
                    <div className="hero-stat-label">is how long most agents take to reply</div>
                  </div>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-icon"><svg className="ic"><use href="#i-cash" /></svg></span>
                  <div>
                    <div className="hero-stat-value">$1.6 Trillion</div>
                    <div className="hero-stat-label">in sales are lost annually due to poor follow-up</div>
                  </div>
                </div>
              </div>

              <div className="pricing-strip">
                <div className="pricing-strip-head">
                  <span className="pricing-strip-label">STARTING AT</span>
                  <span className="pricing-strip-value">$999</span>
                  <span className="pricing-strip-period">/MONTH</span>
                </div>
                <ul className="pricing-strip-badges">
                  <li><svg className="ic"><use href="#i-check" /></svg> AI Automation System</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> CRM Included</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Unlimited Users</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> AI Chat Agents</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Meta + Email Automation</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> FREE Performance Marketing</li>
                </ul>
              </div>

              <div className="hero-cta">
                <a
                  className="btn btn-primary"
                  href="https://link.yourmarketingai.com/widget/booking/tEkQ1ShbtAIklcrJBH2b"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Free Strategy Call <span aria-hidden="true">→</span>
                </a>
                <a className="btn btn-outline" href="#how-it-works">See Live Demo</a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-decor hero-decor-top" aria-hidden="true">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
              <div className="hero-photo">
                <div className="hero-photo-frame">
                  <div className="hero-photo-inner"></div>
                </div>
                <div className="hero-photo-cards">
                  <div className="hp-card">
                    <span className="hp-card-icon"><svg className="ic"><use href="#i-bolt" /></svg></span>
                    <span>Instant AI Response</span>
                  </div>
                  <div className="hp-card">
                    <span className="hp-card-icon"><svg className="ic"><use href="#i-calendar" /></svg></span>
                    <span>AI Appointment Booking</span>
                  </div>
                  <div className="hp-card">
                    <span className="hp-card-icon"><svg className="ic"><use href="#i-crm" /></svg></span>
                    <span>CRM Included</span>
                  </div>
                  <div className="hp-card">
                    <span className="hp-card-icon"><svg className="ic"><use href="#i-refresh" /></svg></span>
                    <span>Follow-Ups 24/7</span>
                  </div>
                  <div className="hp-card">
                    <span className="hp-card-icon"><svg className="ic"><use href="#i-handshake" /></svg></span>
                    <span>More Closings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 01 — BLEEDING REVENUE */}
        <section className="section section-band" id="problem">
          <div className="container section-grid">
            <div className="section-left">
              <div className="section-num">01</div>
              <h2 className="section-title">
                Most Real Estate Teams<br />Are <span className="accent-red">Bleeding Revenue</span><br />Without Realizing It.
              </h2>
              <p className="section-lead">
                Leads go unanswered. Follow-ups are inconsistent. Opportunities are lost to competitors who respond faster.
              </p>
              <a className="btn btn-primary btn-small" href="#features">
                Fix My Lead System <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="compare-cols">
              <div className="compare-card">
                <div className="compare-head compare-head-bad">Without Automation</div>
                <ul className="compare-list">
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> Missed calls after hours</li>
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> Slow text replies</li>
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> Unorganized lead tracking</li>
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> Manual appointment booking</li>
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> No consistent follow-up</li>
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> Cold leads forgotten</li>
                  <li><span className="mark mark-x" aria-hidden="true"><svg className="ic"><use href="#i-x" /></svg></span> Agents overwhelmed</li>
                </ul>
              </div>
              <div className="compare-card">
                <div className="compare-head compare-head-good">With CWA AI Systems</div>
                <ul className="compare-list">
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Instant AI responses</li>
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Automated lead nurturing</li>
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> AI appointment scheduling</li>
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Centralized CRM tracking</li>
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Automated reminders</li>
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Cold lead reactivation</li>
                  <li><span className="mark mark-c" aria-hidden="true"><svg className="ic"><use href="#i-check" /></svg></span> Higher conversion rates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — AI TALKS */}
        <section className="section" id="how-it-works">
          <div className="container section-grid">
            <div className="section-left">
              <div className="section-num">02</div>
              <h2 className="section-title">
                See How The AI Talks To<br />Your Leads <span className="accent">Automatically</span>
              </h2>
              <p className="section-lead">
                Professional conversations. Instant responses. More appointments booked.
              </p>
              <a className="btn btn-primary btn-small" href="#contact">
                See AI Demo <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="chats-grid">
              <article className="chat-card">
                <header className="chat-head">
                  <span className="chat-avatar">B</span>
                  <div className="chat-meta">
                    <span className="chat-title">Buyer Lead</span>
                    <span className="chat-status">online</span>
                  </div>
                  <span className="chat-head-icons" aria-hidden="true">
                    <svg className="ic"><use href="#i-video" /></svg>
                    <svg className="ic"><use href="#i-phone" /></svg>
                    <svg className="ic"><use href="#i-dots" /></svg>
                  </span>
                </header>
                <div className="chat-body">
                  <div className="bubble bubble-in">Hi, is the property in Miami Beach still available?<span className="bubble-time">10:32 AM</span></div>
                  <div className="bubble bubble-out">Yes, it's available!<br />4 Bed · Waterfront · Pool<br />Starting at $1.4M<span className="bubble-time">10:32 AM <svg className="bubble-checks"><use href="#i-checks" /></svg></span></div>
                  <div className="bubble bubble-in">Can I schedule a showing this weekend?<span className="bubble-time">10:34 AM</span></div>
                  <div className="bubble bubble-out">Absolutely! We have availability on Saturday 11 AM – 4 PM. Which time works for you?<span className="bubble-time">10:34 AM <svg className="bubble-checks"><use href="#i-checks" /></svg></span></div>
                  <div className="bubble bubble-in">Saturday at 2 PM works.<span className="bubble-time">10:35 AM</span></div>
                  <div className="bubble bubble-out">Done ✓ Your showing is scheduled for Sat at 2 PM. Brochure and details sent to your phone.<span className="bubble-time">10:35 AM <svg className="bubble-checks"><use href="#i-checks" /></svg></span></div>
                </div>
              </article>

              <article className="chat-card">
                <header className="chat-head">
                  <span className="chat-avatar">S</span>
                  <div className="chat-meta">
                    <span className="chat-title">Seller Lead</span>
                    <span className="chat-status">online</span>
                  </div>
                  <span className="chat-head-icons" aria-hidden="true">
                    <svg className="ic"><use href="#i-video" /></svg>
                    <svg className="ic"><use href="#i-phone" /></svg>
                    <svg className="ic"><use href="#i-dots" /></svg>
                  </span>
                </header>
                <div className="chat-body">
                  <div className="bubble bubble-in">I'm thinking of selling my house in Dallas. Do you offer free home evaluations?<span className="bubble-time">11:08 AM</span></div>
                  <div className="bubble bubble-out">Yes! We provide free home valuations and market analysis.<span className="bubble-time">11:08 AM <svg className="bubble-checks"><use href="#i-checks" /></svg></span></div>
                  <div className="bubble bubble-in">4 bed, 3 bath, around 2,800 sqft.<span className="bubble-time">11:09 AM</span></div>
                  <div className="bubble bubble-out">Great! Homes in your area are selling between $560K–$720K. Would you like a full report?<span className="bubble-time">11:09 AM <svg className="bubble-checks"><use href="#i-checks" /></svg></span></div>
                  <div className="bubble bubble-in">Yes, please.<span className="bubble-time">11:10 AM</span></div>
                  <div className="bubble bubble-out">Perfect. I've sent the report to your email. Would you like to schedule a consultation?<span className="bubble-time">11:10 AM <svg className="bubble-checks"><use href="#i-checks" /></svg></span></div>
                </div>
              </article>

              <article className="chat-card">
                <header className="chat-head">
                  <span className="chat-avatar">R</span>
                  <div className="chat-meta">
                    <span className="chat-title">Reactivation</span>
                    <span className="chat-status">online</span>
                  </div>
                  <span className="chat-head-icons" aria-hidden="true">
                    <svg className="ic"><use href="#i-video" /></svg>
                    <svg className="ic"><use href="#i-phone" /></svg>
                    <svg className="ic"><use href="#i-dots" /></svg>
                  </span>
                </header>
                <div className="chat-body">
                  <div className="bubble bubble-out">Hi John, just checking in regarding homes in Austin.<br /><br />New inventory matching your budget was just listed this week.<span className="bubble-time">9:15 AM <svg className="bubble-checks"><use href="#i-checks" /></svg></span></div>
                  <div className="bubble bubble-in">Yes! Please send the options.<span className="bubble-time">9:21 AM</span></div>
                  <div className="bubble bubble-out">Here you go. I've sent the latest listings, mortgage estimates, and tour options.<span className="bubble-time">9:21 AM <svg className="bubble-checks"><use href="#i-checks" /></svg></span></div>
                  <div className="bubble bubble-in">Let's schedule a tour.<span className="bubble-time">9:23 AM</span></div>
                  <div className="bubble bubble-out">Great! What day works best for you?<span className="bubble-time">9:23 AM <svg className="bubble-checks"><use href="#i-checks" /></svg></span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 03 — SPEED WINS */}
        <section className="section section-band" id="numbers">
          <div className="container section-grid">
            <div className="section-left">
              <div className="section-num">03</div>
              <h2 className="section-title">
                <span className="accent">Speed Wins</span><br />Real Estate Deals
              </h2>
              <p className="section-lead">
                The first agent to respond usually wins the conversation.
              </p>
              <a className="btn btn-primary btn-small" href="#features">
                See How It Works <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="compare-table" role="region" aria-label="Traditional vs CWA AI">
              <div className="ct-header">
                <div>Problem</div>
                <div>Traditional Teams</div>
                <div>CWA AI System</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon"><svg className="ic"><use href="#i-clock" /></svg></span> Lead Response Time</div>
                <div className="ct-cell ct-bad">10–45 mins</div>
                <div className="ct-cell ct-good">&lt; 5 sec</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon"><svg className="ic"><use href="#i-refresh" /></svg></span> Follow-Up Consistency</div>
                <div className="ct-cell ct-bad">Inconsistent</div>
                <div className="ct-cell ct-good">Automated</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon"><svg className="ic"><use href="#i-calendar" /></svg></span> Appointment Scheduling</div>
                <div className="ct-cell ct-bad">Manual</div>
                <div className="ct-cell ct-good">AI Assisted</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon"><svg className="ic"><use href="#i-bot" /></svg></span> Availability</div>
                <div className="ct-cell ct-bad">Office Hours Only</div>
                <div className="ct-cell ct-good">24/7</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon"><svg className="ic"><use href="#i-clipboard" /></svg></span> Lead Tracking</div>
                <div className="ct-cell ct-bad">Manual</div>
                <div className="ct-cell ct-good">Automated</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon"><svg className="ic"><use href="#i-crm" /></svg></span> CRM Updates</div>
                <div className="ct-cell ct-bad">Often ignored</div>
                <div className="ct-cell ct-good">Automated</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon"><svg className="ic"><use href="#i-facebook" /></svg></span> Lead Reactivation</div>
                <div className="ct-cell ct-bad">Rare</div>
                <div className="ct-cell ct-good">Built-In</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon"><svg className="ic"><use href="#i-email" /></svg></span> Email Follow-Ups</div>
                <div className="ct-cell ct-bad">Manual</div>
                <div className="ct-cell ct-good">Automated</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell"><span className="ct-icon"><svg className="ic"><use href="#i-target" /></svg></span> Lead Qualification</div>
                <div className="ct-cell ct-bad">Agent Dependent</div>
                <div className="ct-cell ct-good">AI Powered</div>
              </div>
            </div>
          </div>
        </section>

        {/* 04, 05, 06, 07 — FEATURE QUAD */}
        <section className="section" id="features">
          <div className="container">
            <div className="quad-grid">
              <article className="quad-card">
                <div className="quad-num">04</div>
                <h3 className="quad-title">Turn More Leads Into<br />Appointments Automatically</h3>
                <ul className="quad-list">
                  <li><svg className="ic"><use href="#i-check" /></svg> Instant AI Responses</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Automated SMS Follow-Ups</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> AI Qualification Questions</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Appointment Scheduling</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Lead Routing to Agents</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Reminder Sequences</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> CRM Syncing</li>
                </ul>
                <div className="quad-visual quad-visual-1" aria-hidden="true"></div>
                <a className="btn btn-primary btn-small btn-block" href="#contact">
                  Automate My Leads <span aria-hidden="true">→</span>
                </a>
              </article>

              <article className="quad-card">
                <div className="quad-num">05</div>
                <h3 className="quad-title">Automate Your Entire<br />Communication System</h3>
                <ul className="quad-list">
                  <li><svg className="ic"><use href="#i-check" /></svg> Instagram Automation</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Facebook Messenger Automation</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> AI Email Sequences</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Open House Follow-Ups</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Listing Update Campaigns</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Lead Nurturing Workflows</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Automated Reminders</li>
                </ul>
                <div className="quad-visual quad-visual-2" aria-hidden="true"></div>
                <a className="btn btn-primary btn-small btn-block" href="#contact">
                  See Automation <span aria-hidden="true">→</span>
                </a>
              </article>

              <article className="quad-card">
                <div className="quad-num">06</div>
                <h3 className="quad-title">One CRM To Manage<br />Your Entire Business</h3>
                <ul className="quad-list">
                  <li><svg className="ic"><use href="#i-check" /></svg> CRM Included</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Unlimited Users</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Team Management</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Sales Pipelines</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Automated Tasks</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Showing Tracking</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Reporting Dashboard</li>
                </ul>
                <div className="quad-visual quad-visual-crm" aria-hidden="true">
                  <svg className="crm-illust" viewBox="0 0 290 130" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="crmGradUSA" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0b4d3a" stopOpacity=".30" />
                        <stop offset="100%" stopColor="#0b4d3a" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <rect x="20" y="8" width="195" height="92" rx="7" fill="#fff" stroke="rgba(11,77,58,.20)" strokeWidth="1.4" />
                    <line x1="20" y1="22" x2="215" y2="22" stroke="rgba(11,77,58,.14)" strokeWidth="1" />
                    <circle cx="28" cy="15" r="1.5" fill="rgba(11,77,58,.32)" />
                    <circle cx="34" cy="15" r="1.5" fill="rgba(11,77,58,.22)" />
                    <circle cx="40" cy="15" r="1.5" fill="rgba(11,77,58,.22)" />
                    <path d="M30 80 L52 72 L74 65 L96 56 L118 48 L140 38 L162 32 L184 28 L205 22 L205 92 L30 92 Z" fill="url(#crmGradUSA)" />
                    <path d="M30 80 L52 72 L74 65 L96 56 L118 48 L140 38 L162 32 L184 28 L205 22" fill="none" stroke="#0b4d3a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="205" cy="22" r="8" fill="rgba(11,77,58,.18)" />
                    <circle cx="205" cy="22" r="3.5" fill="#0b4d3a" />
                    <path d="M105 100 h25 l-3 10 h-19 z" fill="rgba(11,77,58,.18)" />
                    <rect x="92" y="110" width="51" height="4" rx="2" fill="rgba(11,77,58,.22)" />
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
                <a className="btn btn-primary btn-small btn-block" href="#contact">
                  Get CRM Demo <span aria-hidden="true">→</span>
                </a>
              </article>

              <article className="quad-card" id="pricing">
                <div className="quad-num">07</div>
                <h3 className="quad-title">Why Real Estate Teams<br />Pay $999/Month</h3>
                <ul className="quad-list">
                  <li><svg className="ic"><use href="#i-check" /></svg> All-In-One AI System</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Replaces 8+ Expensive Tools</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Save Thousands Every Month</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Scale Without Hiring More Staff</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> More Leads. More Showings.</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> More Closings.</li>
                  <li><svg className="ic"><use href="#i-check" /></svg> Backed By Real Results.</li>
                </ul>
                <div className="quad-visual quad-visual-3" aria-hidden="true"></div>
                <a className="btn btn-primary btn-small btn-block" href="#contact">
                  Book Free Consultation <span aria-hidden="true">→</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* 08 — TESTIMONIALS */}
        <section className="section section-band" id="resources">
          <div className="container testimonial-section">
            <div className="testimonial-head">
              <div className="section-num">08</div>
              <h2 className="section-title">
                Built For Modern<br />Real Estate Teams
              </h2>
              <p className="testimonial-sub">Real reviews from real estate professionals across the USA.</p>
            </div>

            <div className="testimonials-grid">
              <article className="testimonial-card">
                <div className="testimonial-stars" aria-label="5 star rating">
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                </div>
                <p className="testimonial-quote">
                  "We used to lose leads constantly after business hours. Now every inquiry gets an instant response and our appointments increased dramatically."
                </p>
                <div className="testimonial-meta">
                  <img className="testimonial-avatar" src="https://randomuser.me/api/portraits/women/44.jpg" alt="" loading="lazy" />
                  <div className="testimonial-info">
                    <div className="testimonial-author">Sarah Johnson</div>
                    <div className="testimonial-role">Miami Real Estate Agent</div>
                  </div>
                  <span className="testimonial-source" aria-label="Review on Google">
                    <svg viewBox="0 0 24 24"><use href="#i-google" /></svg>
                  </span>
                </div>
              </article>

              <article className="testimonial-card">
                <div className="testimonial-stars" aria-label="5 star rating">
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                </div>
                <p className="testimonial-quote">
                  "Our agents can finally focus on closing deals instead of chasing follow-ups all day. This system changed everything."
                </p>
                <div className="testimonial-meta">
                  <img className="testimonial-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" loading="lazy" />
                  <div className="testimonial-info">
                    <div className="testimonial-author">Michael Davis</div>
                    <div className="testimonial-role">Dallas Brokerage Owner</div>
                  </div>
                  <span className="testimonial-source" aria-label="Review on Zillow">
                    <svg viewBox="0 0 24 24"><use href="#i-zillow" /></svg>
                  </span>
                </div>
              </article>

              <article className="testimonial-card">
                <div className="testimonial-stars" aria-label="5 star rating">
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                </div>
                <p className="testimonial-quote">
                  "The automation system paid for itself within the first month from recovered leads alone. Best ROI we've ever had on a tool."
                </p>
                <div className="testimonial-meta">
                  <img className="testimonial-avatar" src="https://randomuser.me/api/portraits/women/68.jpg" alt="" loading="lazy" />
                  <div className="testimonial-info">
                    <div className="testimonial-author">Jessica Martinez</div>
                    <div className="testimonial-role">Los Angeles Realtor</div>
                  </div>
                  <span className="testimonial-source" aria-label="Review on Realtor.com">
                    <svg viewBox="0 0 24 24"><use href="#i-realtor" /></svg>
                  </span>
                </div>
              </article>

              <article className="testimonial-card">
                <div className="testimonial-stars" aria-label="5 star rating">
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                  <svg className="ic ic-star"><use href="#i-star" /></svg>
                </div>
                <p className="testimonial-quote">
                  "Bookings tripled in 60 days. The AI handles the volume our team simply couldn't keep up with — even at 11 PM on a Sunday."
                </p>
                <div className="testimonial-meta">
                  <img className="testimonial-avatar" src="https://randomuser.me/api/portraits/men/52.jpg" alt="" loading="lazy" />
                  <div className="testimonial-info">
                    <div className="testimonial-author">Robert Chen</div>
                    <div className="testimonial-role">Phoenix Real Estate Team Lead</div>
                  </div>
                  <span className="testimonial-source" aria-label="Review on Facebook">
                    <svg viewBox="0 0 24 24"><use href="#i-facebook" /></svg>
                  </span>
                </div>
              </article>
            </div>

            <div className="logos-row" aria-label="Featured on">
              <span className="logo-item">
                <svg className="logo-svg" viewBox="0 0 24 24"><use href="#i-zillow" /></svg>
                <span className="logo-text logo-text-zillow">Zillow</span>
              </span>
              <span className="logo-item">
                <svg className="logo-svg" viewBox="0 0 24 24"><use href="#i-realtor" /></svg>
                <span className="logo-text logo-text-realtor">realtor.com</span>
              </span>
              <span className="logo-item">
                <svg className="logo-svg" viewBox="0 0 24 24"><use href="#i-facebook" /></svg>
                <span className="logo-text logo-text-fb">facebook</span>
              </span>
              <span className="logo-item">
                <svg className="logo-svg logo-svg-ig" viewBox="0 0 24 24"><use href="#i-instagram" /></svg>
                <span className="logo-text logo-text-ig">Instagram</span>
              </span>
              <span className="logo-item">
                <svg className="logo-svg" viewBox="0 0 24 24"><use href="#i-google" /></svg>
                <span className="logo-text logo-text-google">Google</span>
              </span>
            </div>
          </div>
        </section>

        {/* 09 — FINAL CTA */}
        <section className="section" id="contact">
          <div className="container final-grid">
            <div className="final-left">
              <div className="section-num">09</div>
              <h2 className="section-title">
                Ready To Scale Your<br />Real Estate Business<br />With <span className="accent">AI?</span>
              </h2>
              <ul className="final-bullets">
                <li><span className="check"><svg className="ic"><use href="#i-check" /></svg></span> AI Automation</li>
                <li><span className="check"><svg className="ic"><use href="#i-check" /></svg></span> CRM Included</li>
                <li><span className="check"><svg className="ic"><use href="#i-check" /></svg></span> Unlimited Users</li>
                <li><span className="check"><svg className="ic"><use href="#i-check" /></svg></span> AI Chat Agents</li>
                <li><span className="check"><svg className="ic"><use href="#i-check" /></svg></span> Automated Follow-Ups</li>
                <li><span className="check"><svg className="ic"><use href="#i-check" /></svg></span> FREE Performance Marketing</li>
              </ul>
              <div className="final-cta-row">
                <a
                  className="btn btn-primary"
                  href="https://link.yourmarketingai.com/widget/booking/tEkQ1ShbtAIklcrJBH2b"
                  target="_blank"
                  rel="noreferrer"
                >Book Free Strategy Call <span aria-hidden="true">→</span></a>
                <a className="btn btn-outline" href="#how-it-works">See Live Demo</a>
              </div>
            </div>
            <div className="final-visual" aria-hidden="true"></div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="about">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img className="footer-logo" src="/assets/logo.png" alt="Consult With Ankush" />
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#features"><svg className="ic"><use href="#i-trending-up" /></svg> More Leads</a>
            <a href="#features"><svg className="ic"><use href="#i-house" /></svg> More Showings</a>
            <a href="#features"><svg className="ic"><use href="#i-handshake" /></svg> More Closings</a>
            <a href="#features"><svg className="ic"><use href="#i-target" /></svg> More Growth</a>
          </nav>
          <div className="footer-trust">
            <span>Trusted by Real Estate Professionals</span>
            <span className="footer-trust-row">
              Across the United States.
              <svg className="flag-svg" aria-label="USA"><use href="#i-flag-us" /></svg>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
