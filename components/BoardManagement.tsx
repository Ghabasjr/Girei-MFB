"use client";

import { useEffect, useRef } from "react";

type Leader = {
  name: string;
  role: string;
  initials: string;
  category: "Board" | "Management";
};

// NOTE: replace placeholder names/roles with real Board & Management data from GMFB.
const leaders: Leader[] = [
  { name: "Name TBC", role: "Chairman, Board of Directors", initials: "GM", category: "Board" },
  { name: "Name TBC", role: "Vice Chairman", initials: "GM", category: "Board" },
  { name: "Name TBC", role: "Non-Executive Director", initials: "GM", category: "Board" },
  { name: "Name TBC", role: "Independent Director", initials: "GM", category: "Board" },

  { name: "Name TBC", role: "Managing Director / CEO", initials: "GM", category: "Management" },
  { name: "Name TBC", role: "Executive Director, Operations", initials: "GM", category: "Management" },
  { name: "Name TBC", role: "Head, Risk & Compliance", initials: "GM", category: "Management" },
  { name: "Name TBC", role: "Head, Credit & Recovery", initials: "GM", category: "Management" },
];

function LeaderCard({ leader, animIndex }: { leader: Leader; animIndex: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--bm-delay", `${animIndex * 70}ms`);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("bm-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animIndex]);

  return (
    <div ref={ref} className="bm-card">
      <div className="bm-avatar">{leader.initials}</div>
      <div className="bm-tag">{leader.category}</div>
      <h4 className="bm-name">{leader.name}</h4>
      <p className="bm-role">{leader.role}</p>
    </div>
  );
}

export default function BoardManagement() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("bm-head-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="governance" style={{ background: "#f7faf8", padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={headRef} className="bm-head" style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              display: "inline-block",
              border: "1.5px solid #004C3F",
              borderRadius: 999,
              padding: "6px 18px",
              fontSize: 12,
              fontWeight: 600,
              color: "#004C3F",
              marginBottom: 14,
            }}
          >
            Governance
          </div>
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.7rem)", fontWeight: 800, color: "#111827", margin: 0 }}>
            Our Board &amp; Management
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#4b5563", maxWidth: 640, margin: "0.75rem auto 0", lineHeight: 1.6 }}>
            Girei Microfinance Bank is led by a board and management team with decades of
            combined experience in community banking, risk, credit, and operations
            committed to upholding CBN governance standards and serving the people of
            Adamawa.
          </p>
        </div>

        <div className="bm-grid">
          {leaders.map((l, i) => (
            <LeaderCard key={i} leader={l} animIndex={i} />
          ))}
        </div>
      </div>

      <style>{`
        .bm-head {
          opacity: 0;
          transform: translateY(-16px);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(.22,.68,0,1.2);
        }
        .bm-head.bm-head-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .bm-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.1rem;
        }
        @media (max-width: 900px) {
          .bm-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .bm-grid { grid-template-columns: 1fr; }
        }

        .bm-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          padding: 1.4rem 1rem 1.2rem;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          position: relative;
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.5s ease var(--bm-delay, 0ms),
            transform 0.5s cubic-bezier(.22,.68,0,1.2) var(--bm-delay, 0ms),
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }
        .bm-card.bm-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .bm-card:hover {
          border-color: #c3f5b0;
          box-shadow: 0 8px 28px rgba(41,185,9,0.12);
        }

        .bm-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          margin: 0 auto 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #004C3F, #29B909);
          color: #fff;
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: 0.05em;
        }
        .bm-tag {
          display: inline-block;
          background: #e6f4ea;
          color: #004C3F;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 999px;
          margin-bottom: 0.5rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .bm-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: #111827;
          margin: 0 0 0.25rem;
        }
        .bm-role {
          font-size: 0.78rem;
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
