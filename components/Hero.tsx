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
      <section className="relative w-full flex flex-col" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
        {/* Main hero row */}
        <div className="flex" style={{ minHeight: "78vh" }}>

          {/* ── LEFT PANEL ── */}
          <div
            className="relative flex flex-col justify-center"
            style={{
              width: "54%",
              padding: "3.5rem 3.5rem 3.5rem 4rem",
              background: "#f9fafb",
              /* subtle dot pattern */
              // backgroundImage:
              //   "radial-gradient(circle, #b6d4c0 1px, transparent 1px)",
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
              <span style={{ fontSize: "16px", color: "#000000", fontWeight: 400, fontStyle: "regular" }}>
                Welcome To Girei Microfinance Bank
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "58px",
                fontWeight: 900,
                lineHeight: "65px",
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
              style={{
                fontSize: "20px",
                fontWeight: 400,
                fontStyle: "regular",
                color: "#4b5563",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: 370,
              }}
            >
              Girei Microfinance Bank Limited, formerly Girei Community Bank,
              was established to empower the unbanked and under-banked by
              delivering reliable and inclusive financial services.
            </p>

            {/* CTA */}
            <a
              href="#"
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
            className="relative overflow-hidden"
            style={{ flex: 1 }}
          >
            {/* Background photo */}
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80"
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
                      // background: "linear-gradient(135deg,#4ade80,#15803d)",
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
        <div
          style={{
            background: "#0b3d2e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            padding: "0.9rem 2rem",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {navItems.map((item, i) => (
            <a
              key={i}
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                color: "#1a1a1a",
                fontSize: "0.75rem",
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
    </>
  );
}