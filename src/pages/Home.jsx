import { useMemo, useState } from "react";
import logoPng from "../assets/logo.png";
import "../styles.css";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const bookingUrl =
    "https://api.hiighvance.com/widget/booking/tEkQ1ShbtAIklcrJBH2b";

  const navClassName = useMemo(() => {
    return navOpen ? "nav open" : "nav";
  }, [navOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header" id="top">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Consult With Ankush">
            <img className="brand-logo" src={logoPng} alt="" aria-hidden="true" />
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={navOpen}
            aria-controls="site-nav"
            onClick={() => setNavOpen((v) => !v)}
          >
            <span className="sr-only">Open menu</span>
            <span className="hamburger" aria-hidden="true"></span>
          </button>

          <nav className={navClassName} id="site-nav" onClick={() => setNavOpen(false)}>
            <a className="nav-link" href="#getting-started">
              Getting Started
            </a>
            <a className="nav-link" href="#agent-studio">
              Agent Studio
            </a>
            <a className="nav-link" href="#knowledge-base">
              Knowledge Base
            </a>
            <a
              className="nav-link nav-cta"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Book Now
            </a>
          </nav>

          <div className="header-actions">
            <a
              className="btn btn-primary btn-small"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Book Now
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="getting-started">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="pill">AI‑POWERED PLATFORM</div>

              <h1 className="hero-title">
                Your Business is <span className="italic-accent">Losing</span>
                <br />
                Customers Every Day
              </h1>

              <p className="hero-subtitle">
                Right now, you’re missing <strong>62%</strong> of your after‑hours calls and
                ignoring <strong>78%</strong> of your chat messages. Our AI Agents plug the
                leaks in your business, responding to every lead instantly and rescuing up
                to <strong>$200k</strong> in “no‑show” revenue, completely on autopilot.
              </p>

              <div className="hero-cta">
                <a
                  className="btn btn-primary"
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Now <span aria-hidden="true">→</span>
                </a>
              </div>

            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="orb-wrap">
                <div className="orb">
                  <div className="orb-core"></div>
                  <div className="orb-glow"></div>
                  <div className="orb-sparkles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="badge badge-left">
                  <div className="badge-icon">★</div>
                  <div className="badge-text">
                    <div className="badge-title">Review replied</div>
                    <div className="badge-sub">5s ago</div>
                  </div>
                </div>

                <div className="badge badge-right">
                  <div className="badge-icon">✓</div>
                  <div className="badge-text">
                    <div className="badge-title">Booking confirmed</div>
                    <div className="badge-sub">8s ago</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="comparison" id="conversation-ai">
          <div className="container">
            <h2 className="section-title">Numbers don’t lie</h2>
            <p className="section-subtitle">
              80% of leads are lost in the first 5 minutes. Respond to leads instantly, beat your
              competition.
            </p>

            <div className="table-card" role="region" aria-label="Human vs AI comparison">
              <div className="table-header">
                <div></div>
                <div className="th">
                  <span className="th-pill">
                    <span className="th-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 12a4.2 4.2 0 1 0 0-8.4A4.2 4.2 0 0 0 12 12Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                        <path
                          d="M4 20.4c1.6-4.3 6.9-5.9 8-5.9s6.4 1.6 8 5.9"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    Human Agent
                  </span>
                </div>
                <div className="th">
                  <span className="th-pill th-pill-ai">
                    <span className="th-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2.8 13.5 7a5.5 5.5 0 0 0 3.5 3.5l4.2 1.5-4.2 1.5A5.5 5.5 0 0 0 13.5 17L12 21.2 10.5 17A5.5 5.5 0 0 0 7 13.5L2.8 12 7 10.5A5.5 5.5 0 0 0 10.5 7L12 2.8Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    AI Agent
                  </span>
                </div>
                <div className="th th-right">
                  <span className="th-pill th-pill-muted">Revenue impact</span>
                </div>
                <div className="th th-right">
                  <span className="th-pill th-pill-muted">Estimate</span>
                </div>
              </div>

              {[
                ["Missed Calls Every Month", "62%", "<3%", "Very High", "+$12k–$28k/mo", "high"],
                ["Missed Chat Conversations", "78%", "0%", "High", "+$8k–$18k/mo", "high"],
                ["Employee Availability", "8 hrs/day", "24×7", "High", "+$6k–$14k/mo", "high"],
                ["Response Time", "~34 min", "<1 sec", "Medium–High", "+$4k–$10k/mo", "mid"],
                ["Review Response Rate", "11%", "98%", "Medium", "+$2k–$6k/mo", "med"],
                ["Lead Conversion Rate", "23%", "48%", "Very High", "+$15k–$40k/mo", "high"],
              ].map(([metric, human, ai, impact, estimate, impactClass]) => (
                <div className="table-row" key={metric}>
                  <div className="td metric">{metric}</div>
                  <div className="td value">{human}</div>
                  <div className="td value accent">{ai}</div>
                  <div className={`td impact ${impactClass}`}>{impact}</div>
                  <div className="td estimate">{estimate}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="feature" id="agent-studio">
          <div className="container feature-grid">
            <div className="chat-card">
              <div className="chat-head">
                <span className="chat-title">
                  <span className="spark" aria-hidden="true"></span> Lead Conversion
                </span>
                <span className="chat-person">John Doe</span>
              </div>

              <div className="chat-body">
                <div className="bubble bubble-user">
                  Hey, I’m looking for a new Ford XLT in black with remote tailgate.
                </div>
                <div className="bubble bubble-ai">
                  Hi there, good news, we have two of those on the lot. Do you want to come by for a test drive today?
                </div>
                <div className="bubble bubble-user">
                  That sounds good. Can you send me pricing details?
                </div>
                <div className="bubble bubble-user">
                  Also, what is the fastest way to get started?
                </div>
                <div className="bubble bubble-ai">
                  Absolutely. I sent over pricing details and the quickest next step is to book a 15‑minute onboarding call.
                </div>
              </div>
            </div>

            <div className="feature-copy">
              <div className="eyebrow">SALES AGENT</div>
              <h3 className="feature-title">
                Turn leads into <span className="italic-accent">revenue</span>, on autopilot
              </h3>
              <p className="feature-text">
                Turn leads from any channel into more sales or appointments around the clock, with a goal‑oriented AI Employee personalized to your business and your customers.
              </p>
              <a className="text-link" href="#top">
                Get Started <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="feature feature-reverse" id="voice-ai">
          <div className="container feature-grid">
            <div className="feature-copy">
              <div className="eyebrow">APPOINTMENT SCHEDULER</div>
              <h3 className="feature-title">
                Book more appointments, <span className="italic-accent">automatically</span>
              </h3>
              <p className="feature-text">
                Turn leads into new business around the clock by automatically collecting appointment details, driving more bookings, and identifying opportunities to optimize schedules.
              </p>
              <a className="text-link" href="#top">
                Get Started <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="chat-card">
              <div className="chat-head">
                <span className="chat-title">
                  <span className="calendar" aria-hidden="true"></span> Appointment Scheduler
                </span>
                <span className="chat-person">John Doe</span>
              </div>

              <div className="chat-body">
                <div className="bubble bubble-user">
                  Need to reschedule my appointment. Do you have anything after 4 PM today?
                </div>
                <div className="bubble bubble-ai">
                  Yes, I can move you to 4:30 PM today. Should I confirm that slot?
                </div>
                <div className="bubble bubble-user">4:30 PM works.</div>
                <div className="bubble bubble-user">Please text me the address too.</div>
                <div className="bubble bubble-ai">
                  Done. Your appointment is set for 4:30 PM, and I just sent the address to your phone.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature" id="knowledge-base">
          <div className="container feature-grid">
            <div className="review-card">
              <div className="review-head">
                <span className="review-badge">★</span>
                <div>
                  <div className="review-title">Review Response Agent</div>
                  <div className="review-sub">AI‑crafted replies for customer feedback</div>
                </div>
              </div>

              <div className="review-body">
                <div className="review-user">
                  <div className="review-avatar">SS</div>
                  <div>
                    <div className="review-name">Sara Smith</div>
                    <div className="stars" aria-label="5 star rating">
                      <span aria-hidden="true">★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="review-text">
                  The technicians was super nice and the prices were great. They were easy to schedule with and able to see me the same day.
                </p>
                <div className="auto-reply">
                  <div className="auto-tag">
                    <span className="spark" aria-hidden="true"></span> AI Agent • Auto‑reply
                  </div>
                  <p>
                    We’re glad you enjoyed your experience with us, Sara! We appreciate your business and thank you for choosing Johnson HVAC.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-copy">
              <div className="eyebrow">AI REPUTATION MANAGER</div>
              <h3 className="feature-title">
                Build a 5‑star reputation <span className="italic-accent">on autopilot</span>
              </h3>
              <p className="feature-text">
                Show up higher on Google by automatically responding to reviews with personalized and professional replies, while retaining full control over which reviews are addressed.
              </p>
              <a className="text-link" href="#top">
                Get Started <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="cta" aria-label="Call to action">
          <div className="container cta-card">
            <div className="cta-copy">
              <div className="cta-kicker">Start Your Automation Journey Today!</div>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary cta-btn" href={bookingUrl} target="_blank" rel="noreferrer">
                Book Now
              </a>
              <a className="btn btn-outline cta-btn" href={bookingUrl} target="_blank" rel="noreferrer">
                Schedule a Consult
              </a>
            </div>
          </div>
        </section>

        <footer className="site-footer" id="agent-logs">
          <div className="container">
            <div className="footer-bottom">
              <div className="footer-info">
                <div className="footer-title">Consult With Ankush</div>
                <div className="footer-copy">
                  © {new Date().getFullYear()} Consult With Ankush. All rights reserved.
                </div>
              </div>

              <div className="footer-nav" aria-label="Footer links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#support">Contact Support</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
