"use client";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* ── LEFT PANEL ── */}
        <div className="hero-left">
          {/* Welcome pill */}
          <div className="hero-welcome-pill">
            <img src="./halfLogo.png" alt="half logo" />
            <span>WELCOME TO GIREI MICROFINANCE BANK</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            Building Stronger
            <br />
            Communities Through
            <br />
            <span className="hero-headline-accent">Financial Empowerment</span>
          </h1>

          {/* Subtext */}
          <p className="hero-subtext">
            For over 32 years, Girei Microfinance Bank Limited (GMFB) has been a trusted
            financial partner to individuals, businesses, and communities in Girei,
            Adamawa and beyond.
          </p>

          {/* CTAs */}
          <div className="hero-cta-row">
            <a href="/join" className="hero-btn hero-btn-primary">
              Start Your Startup
            </a>
            <a href="#services" className="hero-btn hero-btn-secondary">
              Explore Our Services
            </a>
          </div>

        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="hero-right">
          <div className="hero-image-wrap">
            <img src="/hero-pic.png" alt="Community banking in Girei" className="hero-image" />

            {/* Promise overlay card */}
            <div className="hero-promise-card">
              <h3 className="hero-promise-title">Our Promise</h3>
              <p className="hero-promise-body">
                To deliver simple, reliable and inclusive financial solutions that
                improve lives and grow businesses.
              </p>
              <div className="hero-promise-footer">
                <img src="./People.png" alt="people" />
                <span className="hero-promise-footer-text">
                  Proudly serving Girei and surrounding communities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Trust badges: 2+1 layout matching the hero-grid columns ── */}
      <div className="hero-badges-row">
        <div className="hero-badges-left">
          <div className="hero-badge">
            <img src="./Ellipse 390.png" alt="licence" height={25} width={25} />
            <div className="hero-badge-text">
              <div className="hero-badge-title">Licensed by CBN</div>
              <div className="hero-badge-sub">Licensed Microfinance Bank</div>
            </div>
          </div>

          <div className="hero-badge">
            <img src="./Rectangle 21912.png" alt="ndic" height={30} width={45} />
            <div className="hero-badge-text">
              <div className="hero-badge-title">Deposit Insured by NDIC</div>
              <div className="hero-badge-sub">Your deposits are protected</div>
            </div>
          </div>
        </div>

        <div className="hero-badges-right">
          <div className="hero-badge">
            <img src="./Protect.png" alt="secure" height={25} width={25} />
            <div className="hero-badge-text">
              <div className="hero-badge-title">Safe &amp; Secure</div>
              <div className="hero-badge-sub">Your security is our priority</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          background: #ffffff;
          padding: 3rem 3rem 3rem;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }
        .hero-grid {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 2.25rem;
          align-items: stretch;
        }

        /* ─── LEFT ─── */
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 1rem;
        }
        .hero-welcome-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #e9f8ec;
          border: 1px solid #c3f5b0;
          border-radius: 999px;
          padding: 7px 16px 7px 10px;
          width: fit-content;
          font-size: 0.78rem;
          font-weight: 700;
          color: #004C3F;
          letter-spacing: 0.03em;
          margin-bottom: 1.5rem;
        }
        .hero-welcome-leaf {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: #fff;
          border-radius: 50%;
        }
        .hero-headline {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: #0b0b0b;
          margin: 0 0 1.25rem;
        }
        .hero-headline-accent {
          color: #29B909;

        }
        .hero-subtext {
          font-size: 1.25rem;
          line-height: 1.65;
          color: #4b5563;
          margin: 0 0 1.75rem;
          max-width: 540px;
        }
        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 2.25rem;
        }
        .hero-btn {
          display: inline-block;
          padding: 0.95rem 1.9rem;
          font-size: 0.95rem;
          font-weight: 700;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.15s;
        }
        .hero-btn-primary {
          background: #004C3F;
          color: #fff;
        }
        .hero-btn-primary:hover {
          background: #006655;
        }
        .hero-btn-secondary {
          background: #fff;
          color: #004C3F;
          border: 1.5px solid #004C3F;
        }
        .hero-btn-secondary:hover {
          background: #f0fdf4;
        }

        /* ─── Trust badges: 2 under left column, 1 under right column ─── */
        .hero-badges-row {
          max-width: 1320px;
          margin: -3rem auto 0;
          display: flex;
          flex-wrap: wrap;
          gap: 3.2rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .hero-badges-left {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        .hero-badges-right {
          display: flex;
          align-items: center;
        }
        .hero-badge {
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .hero-badge-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hero-badge-title {
          font-size: 0.88rem;
          font-weight: 400;
          color: #0b0b0b;
          line-height: 1.25;
        }
        .hero-badge-sub {
          font-size: 0.72rem;
          color: #6b7280;
          line-height: 1.3;
          margin-top: 2px;
        }

        /* ─── RIGHT ─── */
        .hero-right {
          display: flex;
          align-items: stretch;
        }
        .hero-image-wrap {
          position: relative;
          width: 100%;
          min-height: 520px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
        }
        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .hero-promise-card {
          position: absolute;
          bottom: 1.4rem;
          right: 1.4rem;
          background: #004C3F;
          color: #fff;
          border-radius: 18px;
          padding: 1.3rem 1.4rem 1.2rem;
          max-width: 320px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.25);
        }
        .hero-promise-title {
          font-size: 1.15rem;
          font-weight: 800;
          margin: 0 0 0.5rem;
        }
        .hero-promise-body {
          font-size: 0.85rem;
          line-height: 1.55;
          color: rgba(255,255,255,0.9);
          margin: 0 0 1rem;
        }
        .hero-promise-footer {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(255,255,255,0.18);
        }
        .hero-promise-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          flex-shrink: 0;
        }
        .hero-promise-footer-text {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.92);
          line-height: 1.45;
          font-weight: 500;
        }

        /* ─── Responsive ─── */
        @media (max-width: 1024px) {
          .hero-grid { gap: 1.75rem; }
          .hero-image-wrap { min-height: 460px; }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-image-wrap { min-height: 420px; }
          .hero-badges-row {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .hero-badges-left { gap: 1.5rem; }
        }
        @media (max-width: 600px) {
          .hero-section { padding: 1.5rem 1rem 2rem; }
          .hero-headline { font-size: clamp(1.7rem, 8vw, 2.4rem); }
          .hero-subtext { font-size: 0.95rem; }
          .hero-cta-row .hero-btn {
            flex: 1;
            text-align: center;
            padding: 0.85rem 1rem;
          }
          .hero-image-wrap { min-height: 360px; }
          .hero-promise-card {
            bottom: 1rem;
            right: 1rem;
            left: 1rem;
            max-width: none;
            padding: 1.1rem 1.2rem;
          }
          .hero-badges-row {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .hero-badges-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
