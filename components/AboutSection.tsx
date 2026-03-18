export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "#f7f8f9",
        padding: "2rem 2rem 2rem 3rem",
      }}
    >
      {/* Section heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontStyle: 'bold',
          fontWeight: 900,
          color: "#111827",
          marginBottom: "2.5rem",
        }}
      >
        Learn More About Who We Are
      </h2>

      <div
        style={{
          maxWidth: 900,
          margin: "auto auto",
          marginBottom: "108px",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
          overflow: "visible",
          display: "flex",
          alignItems: "stretch",
          minHeight: 220,
        }}
      >
        {/* LEFT: Image + Satisfaction card */}
        <div
          style={{
            position: "relative",
            width: 240,
            flexShrink: 0,
            borderRadius: "16px 0 0 16px",
            overflow: "hidden",
          }}
        >
          <img
            src="/Rectangle 3072.png"
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
            <div
              style={{
                fontSize: "0.62rem",
                color: "#6b7280",
                fontWeight: 500,
                marginBottom: 3,
              }}
            >
              Customer Satisfaction
            </div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 900,
                color: "#29B909",
                lineHeight: 1.1,
                marginBottom: 6,
              }}
            >
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
          style={{
            flex: 1,
            padding: "1.6rem 2rem 1.6rem 2.8rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          <h3
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Empowering Individuals &amp; Businesses to
            <br />
            Bank Smatter and Live Better
          </h3>

          <p
            style={{
              fontSize: "13px",
              fontWeight: 400,
              color: "#4b5563",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 420,
            }}
          >
            At Girei, we empower individuals, businesses, and communities with
            accessible banking solutions, flexible loans, secure savings, and digital
            services designed to promote financial inclusion, growth, sustainability,
            and long-term economic development.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start" }}>
            {[
              { number: "500", suffix: "+", label: "Customers Served" },
              { number: "1", suffix: "k+", label: "Loans Completed" },
              { number: "30", suffix: "+", label: "Years Of Banking" },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: 3,
                  }}
                >
                  <span style={{ color: "#111827" }}>{stat.number}</span>
                  <span style={{ color: "#29B909" }}>{stat.suffix}</span>
                </div>
                <div style={{ fontSize: "0.65rem", color: "#6b7280", fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}