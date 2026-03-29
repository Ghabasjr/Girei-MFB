export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "#f7f8f9",
        padding: "2rem 1.5rem 2rem",
      }}
    >
      {/* Section heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: 900,
          color: "#111827",
          marginBottom: "2.5rem",
        }}
      >
        Learn More About Who We Are
      </h2>

      <div className="about-card">
        {/* LEFT: Image + Satisfaction card */}
        <div
          className="about-image-col"
          style={{
            position: "relative",
            borderRadius: "16px 0 0 16px",
            overflow: "hidden",
          }}
        >
          <img
            src="/arewa.png"
            alt="Business professional"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />

          {/* Customer Satisfaction overlay card */}
          <div
            style={{
              position: "absolute",
              bottom: 16,
              right: -16,
              background: "#fff",
              borderRadius: 12,
              padding: "0.5rem 0.8rem 0.65rem",
              boxShadow: "0 6px 20px rgba(0,0,0,0.13)",
              minWidth: 140,
              zIndex: 5,
            }}
          >
            <div style={{ fontSize: "0.62rem", color: "#6b7280", fontWeight: 500, marginBottom: 3 }}>
              Customer Satisfaction
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#29B909", lineHeight: 1.1, marginBottom: 6 }}>
              99%
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
              {[6, 10, 14, 18, 22, 27].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: 8,
                    height: h,
                    background: "#29B909",
                    borderRadius: "2px 2px 1px 1px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div
          className="about-content-col"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.2rem, 2.6vw, 1.5rem)",
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Empowering Individuals &amp; Businesses
            <br />
            To Bank Smarter and Live Better
          </h3>

          <p
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#4b5563",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            At Girei, we empower individuals, businesses, and communities with
            accessible banking solutions, flexible loans, secure savings, and digital
            services designed to promote financial inclusion, growth, sustainability,
            and long-term economic development.
          </p>

          {/* Stats row */}
          <div className="about-stats-row">
            {[
              { number: "500", suffix: "+", label: "Customers Served" },
              { number: "1", suffix: "k+", label: "Loans Completed" },
              { number: "30", suffix: "+", label: "Years Of Banking" },
            ].map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value">
                  <span style={{ color: "#111827" }}>{stat.number}</span>
                  <span style={{ color: "#29B909" }}>{stat.suffix}</span>
                </div>
                <div className="stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-card {
          max-width: 900px;
          margin: auto auto;
          margin-bottom: 108px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.08);
          overflow: visible;
          display: flex;
          align-items: stretch;
          min-height: 220px;
        }
        .about-image-col {
          width: 240px;
          flex-shrink: 0;
        }
        .about-content-col {
          padding: 1.6rem 2rem 1.6rem 2.8rem;
        }
        .about-stats-row {
          display: flex;
          gap: 2.5rem;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .stat-value {
          font-size: 1.25rem;
          font-weight: 900;
          line-height: 0.5;
          margin-bottom: 3px;
        }
        .stat-label {
          font-size: 0.65rem;
          color: #6b7280;
          font-weight: 500;
        }

        @media (max-width: 700px) {
          .about-card {
            flex-direction: column;
            margin-bottom: 60px;
          }
          .about-image-col {
            width: 100%;
            height: 200px;
            border-radius: 16px 16px 0 0;
          }
          .about-content-col {
            padding: 1.4rem 1.2rem;
          }
          .about-stats-row {
            gap: 0.5rem;
            flex-wrap: nowrap;
            justify-content: space-between;
          }
          .stat-value {
            font-size: 1rem;
            margin-bottom: 8px;
            line-height: 1;
          }
          .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .stat-label {
            font-size: 0.55rem;
          }
        }
      `}</style>
    </section>
  );
}