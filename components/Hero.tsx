"use client";
export default function Hero() {
  const navItems = [
    "Loans & Credit Facilities",
    "Savings & Deposit Services",
    "Financial Inclusion",
    "Community Development",
    "Digital & Electronic Banking",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full flex flex-col hero-section" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
        {/* Main hero row */}
        <div className="hero-row" style={{ minHeight: "78vh" }}>

          {/* ── LEFT PANEL ── */}
          <div
            className="hero-left"
            style={{
              background: "#f9fafb",
              backgroundSize: "28px 28px",
              borderRight: "1px solid #e2e8f0",
              zIndex: 1,
            }}
          >
            {/* Welcome pill */}
            <div
              className="inline-flex items-center gap-2 mb-5"
              style={{
                background: "#fff",
                border: "1px solid #d1fae5",
                borderRadius: "999px",
                padding: "5px 14px 5px 10px",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "clamp(13px, 2vw, 16px)", color: "#000000", fontWeight: 400 }}>
                Welcome To Girei Microfinance Bank
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-headline"
              style={{
                fontWeight: 900,
                lineHeight: 1.15,
                color: "#111827",
                marginBottom: "1.1rem",
                letterSpacing: "-0.01em",
              }}
            >
              Where Community
              <br />
              Growth Meets{" "}
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  padding: "2px 6px",
                }}
              >
                Financial
                {/* Top-left corner */}
                <span style={{
                  position: "absolute", top: 0, left: 0,
                  width: 10, height: 10,
                  borderTop: "2.5px dotted #16a34a",
                  borderLeft: "2.5px dotted #16a34a",
                }} />
                {/* Top-right corner */}
                <span style={{
                  position: "absolute", top: 0, right: 0,
                  width: 10, height: 10,
                  borderTop: "2.5px dotted #16a34a",
                  borderRight: "2.5px dotted #16a34a",
                }} />
                {/* Bottom-left corner */}
                <span style={{
                  position: "absolute", bottom: 0, left: 0,
                  width: 10, height: 10,
                  borderBottom: "2.5px dotted #16a34a",
                  borderLeft: "2.5px dotted #16a34a",
                }} />
                {/* Bottom-right corner */}
                <span style={{
                  position: "absolute", bottom: 0, right: 0,
                  width: 10, height: 10,
                  borderBottom: "2.5px dotted #16a34a",
                  borderRight: "2.5px dotted #16a34a",
                }} />
              </span>
              <br />
              <span style={{ color: "#16a34a" }}>Opportunity</span>
            </h1>

            {/* Subtext */}
            <p
              className="hero-subtext"
              style={{
                fontWeight: 400,
                color: "#4b5563",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Girei Microfinance Bank Limited, formerly Girei Community
              Bank, was established to empower the unbanked and under-banked by delivering reliable and inclusive financial services.
            </p>

            {/* CTA */}
            <a
              href="/join"
              style={{
                display: "inline-block",
                background: "#16a34a",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "0.75rem 2rem",
                borderRadius: "999px",
                textDecoration: "none",
                width: "fit-content",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#15803d")}
              onMouseLeave={e => (e.currentTarget.style.background = "#16a34a")}
            >
              Open An Account
            </a>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div
            className="hero-right relative overflow-hidden"
          >
            {/* Background photo */}
            <img
              src="/market.png"
              alt="Community banking"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
            {/* Dark green overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(160deg, rgba(5,30,15,0.65) 0%, rgba(10,50,25,0.45) 50%, rgba(5,25,12,0.7) 100%)",
              }}
            />

            {/* Testimonial card */}
            <div
              className="hero-testimonial-card"
              style={{
                position: "absolute",
                bottom: "18%",
                left: "50%",
                transform: "translateX(-50%)",
                width: 290,
                background: "#fff",
                borderRadius: 16,
                padding: "1rem 1.1rem",
                boxShadow: "0 16px 48px rgba(0,0,0,0.22)",
                zIndex: 5,
              }}
            >
              {/* Header row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                {/* Avatar + name */}
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      flexShrink: 0,
                    }}
                  >
                    <img src="/Ellipse 68.png" alt="image" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>
                      Kabir Sani
                    </div>
                    <div style={{ fontSize: "0.65rem", color: "#16a34a", fontWeight: 600 }}>
                      Business Owner
                    </div>
                  </div>
                </div>

                {/* Stacked avatars + 1k+ */}
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ display: "flex" }}>
                    {[
                      "/Ellipse 68.png",
                      "/Ellipse 69.png",
                      "/Ellipse 70.png",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`avatar-${i}`}
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          border: "2px solid #fff",
                          marginLeft: i === 0 ? 0 : -7,
                          objectFit: "cover",
                        }}
                      />
                    ))}
                  </div>
                  <span style={{ fontSize: "0.63rem", color: "#6b7280", fontWeight: 500, whiteSpace: "nowrap" }}>
                    1k+ Others
                  </span>
                </div>
              </div>

              {/* Quote */}
              <p style={{ fontSize: "13px", color: "#000000", lineHeight: "14px", fontWeight: 500, fontStyle: "normal", margin: 0 }}>
                As a business owner, Girei Microfinance Bank has assisted
                my growth reliably financially.
              </p>

              {/* Slide indicators */}
              <div style={{ display: "flex", gap: 5, marginTop: 10, alignItems: "center" }}>
                <div style={{ width: 22, height: 5, borderRadius: 99, background: "#f59e0b" }} />
                <div style={{ width: 8, height: 5, borderRadius: 99, background: "#f59e0b", opacity: 0.45 }} />
                <div style={{ width: 8, height: 5, borderRadius: 99, background: "#f59e0b", opacity: 0.45 }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM NAV BAR ── */}
        <div className="hero-bottom-nav">
          {navItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="hero-nav-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                color: "#1a1a1a",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "0.5rem 1.25rem",
                borderRadius: "999px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                border: "1px solid #e5e7eb",
                transition: "background 0.15s, color 0.15s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#f0fdf4";
                e.currentTarget.style.color = "#15803d";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#1a1a1a";
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </section>

      <style>{`
        .hero-row {
          display: flex;
        }
        .hero-left {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 54%;
          padding: 3.5rem 3.5rem 3.5rem 4rem;
        }
        .hero-right {
          flex: 1;
          position: relative;
          min-height: 320px;
        }
        .hero-headline {
          font-size: 58px;
          line-height: 65px;
        }
        .hero-subtext {
          font-size: 18px;
          max-width: 370px;
        }
        .hero-bottom-nav {
          background: #0b3d2e;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.9rem 2rem;
          width: 100%;
          box-sizing: border-box;
          flex-wrap: wrap;
        }
        .hero-testimonial-card {
          display: block;
        }

        @media (max-width: 900px) {
          .hero-left {
            width: 100%;
            padding: 2.5rem 1.5rem;
            border-right: none;
            border-bottom: 1px solid #e2e8f0;
          }
          .hero-row {
            flex-direction: column;
            min-height: auto !important;
          }
          .hero-right {
            min-height: 300px;
          }
          .hero-headline {
            font-size: clamp(32px, 7vw, 52px);
            line-height: 1.15;
          }
          .hero-subtext {
            font-size: clamp(15px, 2.5vw, 18px);
            max-width: 100%;
          }
          .hero-testimonial-card {
            width: 240px !important;
          }
        }

        @media (max-width: 600px) {
          .hero-left {
            padding: 2rem 1rem;
          }
          .hero-headline {
            font-size: clamp(26px, 8vw, 40px);
          }
          .hero-right {
            min-height: 250px;
          }
          .hero-testimonial-card {
            display: none;
          }
          .hero-bottom-nav {
            padding: 0.75rem 1rem;
            gap: 0.5rem;
            justify-content: flex-start;
            overflow-x: auto;
            flex-wrap: nowrap;
          }
          .hero-nav-pill {
            flex-shrink: 0;
          }
        }
      `}</style>
    </>
  );
}