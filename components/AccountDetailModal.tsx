"use client";

import { useEffect } from "react";

export type AccountDetail = {
  title: string;
  overview: string;
  benefits: string[];
  requirements: string[];
  targetAudience: string[];
};

interface AccountDetailModalProps {
  account: AccountDetail | null;
  onClose: () => void;
}

function CheckCircle() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flexShrink: 0, marginTop: "2px" }}
    >
      <circle cx="10" cy="10" r="10" fill="#29B909" />
      <path
        d="M5.5 10.5l3 3 5.5-5.5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AccountDetailModal({
  account,
  onClose,
}: AccountDetailModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = account ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [account]);

  if (!account) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 9998,
          backdropFilter: "blur(3px)",
          animation: "gmfbFadeIn 0.2s ease",
        }}
      />

      {/* Modal wrapper */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          width: "min(560px, 96vw)",
          maxHeight: "92vh",
          overflowY: "auto",
          borderRadius: 12,
          background: "#fff",
          border: "2px solid #1a6b4a",
          boxShadow: "0 32px 80px rgba(0,0,0,0.3)",
          animation: "gmfbPopIn 0.28s cubic-bezier(0.34,1.4,0.64,1)",
          display: "flex",
          flexDirection: "column",
          scrollbarWidth: "thin",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── HEADER ─────────────────────────────────────── */}
        <div
          style={{
            background: "#004C3F",
            borderRadius: "10px 10px 0 0",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            position: "relative",
          }}
        >
          {/* Left horizontal line */}
          <div
            style={{
              flex: 1,
              height: 1.5,
              background: "rgba(255,255,255,0.35)",
              borderRadius: 2,
            }}
          />

          {/* Title pill */}
          <div
            style={{
              background: "#003830",
              borderRadius: 999,
              padding: "7px 22px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
              maxWidth: "65%",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span style={{ color: "#29B909", fontSize: "0.7rem", lineHeight: 1 }}>✦</span>
            <span
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.88rem",
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {account.title}
            </span>
            <span style={{ color: "#29B909", fontSize: "0.7rem", lineHeight: 1 }}>✦</span>
          </div>

          {/* Right horizontal line */}
          <div
            style={{
              flex: 1,
              height: 1.5,
              background: "rgba(255,255,255,0.35)",
              borderRadius: 2,
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              fontSize: "1.1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
              transition: "background 0.15s",
              zIndex: 2,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
            }}
          >
            ×
          </button>
        </div>

        {/* ── BODY ───────────────────────────────────────── */}
        <div style={{ padding: "20px 24px 0 24px" }}>
          {/* Overview badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#29B909",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.8rem",
              padding: "5px 20px",
              borderRadius: 999,
              marginBottom: 14,
              letterSpacing: "0.01em",
            }}
          >
            Overview
          </div>

          {/* Overview text */}
          <p
            style={{
              fontSize: "0.8rem",
              color: "#374151",
              lineHeight: 1.75,
              marginBottom: 18,
              marginTop: 0,
            }}
          >
            {account.overview}
          </p>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e5e7eb",
              marginBottom: 16,
            }}
          />

          {/* Three-column table */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              columnGap: 12,
              rowGap: 0,
              marginBottom: 20,
            }}
          >
            {/* ─ Benefit column ─ */}
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: "#111827",
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                Benefit
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 7,
                }}
              >
                {account.benefits.map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
                    <CheckCircle />
                    <span style={{ fontSize: "0.72rem", color: "#374151", lineHeight: 1.45 }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ─ Requirements column ─ */}
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: "#111827",
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                Requirements
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 7,
                }}
              >
                {account.requirements.map((r, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
                    <CheckCircle />
                    <span style={{ fontSize: "0.72rem", color: "#374151", lineHeight: 1.45 }}>
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ─ Target Audience column ─ */}
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: "#111827",
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                Target Audience
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 7,
                }}
              >
                {account.targetAudience.map((t, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
                    <CheckCircle />
                    <span style={{ fontSize: "0.72rem", color: "#374151", lineHeight: 1.45 }}>
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── FOOTER ─────────────────────────────────────── */}
        <div
          style={{
            background: "#004C3F",
            borderRadius: "0 0 10px 10px",
            padding: "12px 20px",
            textAlign: "center",
            marginTop: "auto",
          }}
        >
          <p style={{ color: "#fff", fontSize: "0.78rem", margin: 0, lineHeight: 1.5 }}>
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
            &nbsp; Or visit &nbsp;
            <span style={{ fontWeight: 600 }}>
              Girei Microfinance Bank Branch in Your Area
            </span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes gmfbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes gmfbPopIn {
          from { opacity: 0; transform: translate(-50%, -47%) scale(0.93); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </>
  );
}
