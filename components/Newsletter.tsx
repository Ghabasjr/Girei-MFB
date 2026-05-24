"use client";

import { useState } from "react";

const ZOHO_FORM_URL = process.env.NEXT_PUBLIC_ZOHO_CAMPAIGN_FORM_URL || "";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!ZOHO_FORM_URL) {
      e.preventDefault();
      if (email.trim()) {
        setSubmitted(true);
        setEmail("");
      }
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      style={{
        padding: "4rem 0",
        background: "var(--green-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "-40%",
          right: "-5%",
          width: "40%",
          height: "200%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60%",
          left: "-8%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
        }}
      />

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="newsletter-grid"
        >
          {/* Left */}
          <div>
            <div
              style={{
                display: "inline-flex",
                gap: "0.5rem",
                background: "rgba(255,255,255,0.12)",
                padding: "0.35rem 0.9rem",
                borderRadius: "99px",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.85)",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              ✉️ Newsletter
            </div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.25,
                marginBottom: "0.75rem",
              }}
            >
              Bank News In Your Inbox
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              You&rsquo;re the first to know about all the exciting updates from our company.
              No spam, just value.
            </p>
          </div>

          {/* Right – Form */}
          <div>
            {submitted ? (
              <div
                style={{
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🎉</div>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>
                  You&rsquo;re subscribed!
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                  We&rsquo;ll keep you updated with the latest news.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action={ZOHO_FORM_URL || undefined}
                method={ZOHO_FORM_URL ? "POST" : undefined}
                target={ZOHO_FORM_URL ? "_blank" : undefined}
              >
                <div
                  style={{
                    display: "flex",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "99px",
                    padding: "0.35rem 0.35rem 0.35rem 1.25rem",
                    border: "1px solid rgba(255,255,255,0.25)",
                    gap: "0.5rem",
                  }}
                  className="newsletter-form"
                >
                  <input
                    type="email"
                    name="CONTACT_EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#fff",
                      fontSize: "0.9rem",
                      minWidth: 0,
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: "#fff",
                      color: "var(--green-dark)",
                      border: "none",
                      borderRadius: "99px",
                      padding: "0.65rem 1.5rem",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.9")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
                  >
                    Subscribe →
                  </button>
                </div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", marginTop: "0.6rem", paddingLeft: "1rem" }}>
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .newsletter-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
