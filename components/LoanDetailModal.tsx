"use client";

import { useEffect } from "react";

export type LoanDetail = {
  title: string;
  overview: string;
  benefits: string[];
  requirements: string[];
  targetAudience: string[];
};

interface LoanDetailModalProps {
  loan: LoanDetail | null;
  onClose: () => void;
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flexShrink: 0, marginTop: "1px" }}
    >
      {/* Outer ring (light green) */}
      <circle cx="10" cy="10" r="10" fill="#29B909" fillOpacity="0.18" />
      {/* Inner filled circle */}
      <circle cx="10" cy="10" r="7" fill="#29B909" />
      {/* White checkmark */}
      <path
        d="M6 10.5l2.8 2.8 5-5"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LoanDetailModal({ loan, onClose }: LoanDetailModalProps) {
  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = loan ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [loan]);

  if (!loan) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 9998,
          backdropFilter: "blur(3px)",
          animation: "loanFadeIn 0.2s ease",
        }}
      />

      {/* Modal card */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          width: "min(600px, 96vw)",
          maxHeight: "92vh",
          overflowY: "auto",
          borderRadius: 16,
          background: "#fff",
          boxShadow: "0 32px 90px rgba(0,0,0,0.28)",
          animation: "loanPopIn 0.28s cubic-bezier(0.34,1.4,0.64,1)",
          display: "flex",
          flexDirection: "column",
          scrollbarWidth: "thin",
        }}
      >
        {/* ── HEADER: bright green bar with dark pill ─── */}
        <div
          style={{
            background: "#29B909",
            borderRadius: "16px 16px 0 0",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            position: "relative",
          }}
        >
          {/* Left line */}
          <div
            style={{
              flex: 1,
              height: 2,
              background: "rgba(255,255,255,0.45)",
              borderRadius: 2,
            }}
          />

          {/* Dark title pill */}
          <div
            style={{
              background: "#004C3F",
              borderRadius: 999,
              padding: "8px 24px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
              maxWidth: "62%",
            }}
          >
            <span style={{ color: "#29B909", fontSize: "0.75rem" }}>✦</span>
            <span
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.92rem",
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {loan.title}
            </span>
            <span style={{ color: "#29B909", fontSize: "0.75rem" }}>✦</span>
          </div>

          {/* Right line */}
          <div
            style={{
              flex: 1,
              height: 2,
              background: "rgba(255,255,255,0.45)",
              borderRadius: 2,
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.2)",
              border: "none",
              color: "#fff",
              fontSize: "1.15rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
              transition: "background 0.15s",
              zIndex: 2,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.35)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.2)"; }}
          >
            ×
          </button>
        </div>

        {/* ── BODY ─────────────────────────────────────── */}
        <div style={{ padding: "22px 28px 0" }}>

          {/* Overview badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#29B909",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              padding: "6px 22px",
              borderRadius: 8,
              marginBottom: 16,
              letterSpacing: "0.01em",
            }}
          >
            Overview
          </div>

          {/* Overview text — mint tinted background box */}
          <div
            style={{
              background: "#f0faf0",
              borderRadius: 12,
              padding: "16px 18px",
              marginBottom: 22,
              border: "1px solid #d4edda",
            }}
          >
            <p
              style={{
                fontSize: "0.84rem",
                color: "#1f2937",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {loan.overview}
            </p>
          </div>

          {/* Three-column section */}
          <div className="modal-details-grid">
            {/* Benefit */}
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  color: "#111827",
                  marginTop: 0,
                  marginBottom: 12,
                }}
              >
                Benefit
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {loan.benefits.map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <CheckIcon />
                    <span style={{ fontSize: "0.78rem", color: "#374151", lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  color: "#111827",
                  marginTop: 0,
                  marginBottom: 12,
                }}
              >
                Requirements
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {loan.requirements.map((r, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <CheckIcon />
                    <span style={{ fontSize: "0.78rem", color: "#374151", lineHeight: 1.5 }}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  color: "#111827",
                  marginTop: 0,
                  marginBottom: 12,
                }}
              >
                Target Audience
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {loan.targetAudience.map((t, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <CheckIcon />
                    <span style={{ fontSize: "0.78rem", color: "#374151", lineHeight: 1.5 }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── FOOTER ───────────────────────────────────── */}
        <div
          style={{
            background: "#004C3F",
            borderRadius: "0 0 16px 16px",
            padding: "13px 24px",
            textAlign: "center",
            marginTop: "auto",
          }}
        >
          <p style={{ margin: 0, color: "#fff", fontSize: "0.82rem", lineHeight: 1.5 }}>
            <a
              href="/join"
              style={{
                color: "#6ee64a",
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              Click Here to Apply
            </a>
            {" "}Or visit{" "}
            <span style={{ fontWeight: 600 }}>Girei Microfinance Bank Branch in Your Area</span>
          </p>
        </div>
      </div>

      <style>{`
        .modal-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          column-gap: 16px;
          margin-bottom: 24px;
        }
        @media (max-width: 600px) {
          .modal-details-grid {
            grid-template-columns: 1fr;
            row-gap: 20px;
          }
        }
        @keyframes loanFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes loanPopIn {
          from { opacity: 0; transform: translate(-50%, -47%) scale(0.93); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </>
  );
}
