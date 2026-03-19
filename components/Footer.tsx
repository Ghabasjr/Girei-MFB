"use client";

import { MailIcon, MapPin, PhoneIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* ── Newsletter Banner ── */}
      <div className="newsletter-wrapper">
        <div className="newsletter-inner">
          {/* Left text */}
          <div className="newsletter-text">
            <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 800, color: "#fff", marginBottom: "0.6rem", lineHeight: 1.2 }}>
              Bank News In Your Inbox
            </h3>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: 0 }}>
              Yes, you can make use of the covenant mfb debit card for payments on spotify and other payment websites that accept verve cards.
            </p>
          </div>

          {/* Right: email input + subscribe */}
          <div className="newsletter-input-row">
            <span style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
              <MailIcon />
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "0.8rem",
                color: "#374151",
                background: "transparent",
                minWidth: 0,
              }}
            />
            <button style={{
              background: "#29B909",
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: "0.55rem 1.2rem",
              fontSize: "0.78rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}>
              <Image src="/sent.png" alt="Subscribe" width={16} height={16} /> Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer id="contact" style={{
        background: "#004C3F",
        color: "rgba(255,255,255,0.75)",
        paddingTop: "5rem",
        paddingBottom: 0,
      }}>
        <div style={{ margin: "0 auto", padding: "2rem 1.5rem" }}>

          {/* Main grid: 4 columns → stacks on mobile */}
          <div className="footer-grid">

            {/* Col 1: Brand */}
            <div>
              <div style={{
                background: "#fff",
                borderRadius: 10,
                padding: "8px 12px",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                marginBottom: "1rem",
              }}>
                <a href="/">
                  <Image src="/girei2.png" alt="Girei Microfinance Bank" width={100} height={100} />
                </a>
              </div>

              <p style={{ fontSize: "0.78rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "1.25rem", maxWidth: 200 }}>
                Girei Microfinance Bank Limited, formerly Girei Community Bank, was established to empower the unbanked and under-banked by delivering reliable and inclusive financial services.
              </p>

              {/* Social icons */}
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {[
                  { label: "in", icon: "in" },
                  { label: "f", icon: "f" },
                  { label: "ig", icon: "◎" },
                  { label: "x", icon: "𝕏" },
                ].map((s, i) => (
                  <a key={i} href="#" style={{
                    width: 32, height: 32,
                    borderRadius: "50%",
                    background: "#29B909",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    textDecoration: "none",
                    flexShrink: 0,
                  }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "0.88rem", marginBottom: "1.1rem" }}>Quick Links</h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {["About Us", "Account & Deposit", "Loan & Credit", "Digital Banking", "ATM Card", "POS Services"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#fff", display: "inline-block", flexShrink: 0 }} />
                    <a href="#" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", textDecoration: "none" }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Short Links */}
            <div>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "0.88rem", marginBottom: "1.1rem" }}>Short Links</h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {["Privacy", "Anti Money Laundering Policy", "Terms & Conditions", "Risk Management", "Downloadable Forms", "Help Center"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#fff", display: "inline-block", flexShrink: 0 }} />
                    <a href={item === "Privacy" ? "/privacy" : "#"} style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", textDecoration: "none" }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "0.88rem", marginBottom: "1.1rem" }}>Contact Us</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <MapPin size={12} color="#29B909" />
                  <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>Giei Pont 2, 100, Adamawa state, Nigeria</span>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <PhoneIcon size={12} color="#29B909" />
                  <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)" }}>07011079676</span>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <MailIcon size={12} color="#29B909" />
                  <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)" }}>gireibank@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "1.25rem 0",
            textAlign: "center",
          }}>
            <p style={{ fontSize: "0.78rem", color: "white", margin: 0 }}>
              2026 Girei Microfinance Bank | All Right Reserved
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .newsletter-wrapper {
          position: relative;
          z-index: 10;
          padding: 0 1.5rem;
        }
        .newsletter-inner {
          max-width: 700px;
          margin: 0 auto;
          background: linear-gradient(to bottom, #025236 0%, #04B879 100%);
          border-radius: 20px;
          padding: 2.5rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          box-shadow: 0 8px 40px rgba(2,82,54,0.25);
          position: relative;
          top: 40px;
        }
        .newsletter-text {
          flex: 1;
        }
        .newsletter-input-row {
          background: #fff;
          border-radius: 999px;
          display: flex;
          align-items: center;
          padding: 0.3rem 0.3rem 0.3rem 1rem;
          gap: 0.5rem;
          min-width: 260px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.3fr 1.2fr;
          gap: 2.5rem;
          padding-bottom: 3rem;
        }

        @media (max-width: 900px) {
          .newsletter-inner {
            flex-direction: column;
            align-items: stretch;
            padding: 2rem 1.5rem;
            gap: 1.5rem;
          }
          .newsletter-input-row {
            min-width: 0;
            width: 100%;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .newsletter-wrapper {
            padding: 0 1rem;
          }
          .newsletter-inner {
            padding: 1.5rem 1rem;
            border-radius: 14px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }
        }
      `}</style>
    </>
  );
}