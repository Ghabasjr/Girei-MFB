"use client";

import { useEffect, useRef } from "react";

type Card = {
  title: string;
  desc: string;
  iconBg: string;
  icon: React.ReactNode;
};

const cards: Card[] = [
  {
    title: "MSMEs & Small Businesses",
    desc: "Do you own a business?",
    iconBg: "#fee2c4",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3l3 3-9 9-3.7.7.7-3.7 9-9z" stroke="#ea580c" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9.3 14.7l-4-4 2-2 4 4" stroke="#ea580c" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Traders & Market Associations",
    desc: "Are you into trade?",
    iconBg: "#eef2ee",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="#9ca3af" strokeWidth="1.7" />
        <path d="M9 12h6M12 9v6" stroke="#9ca3af" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Farmers & Agribusinesses",
    desc: "Are you a farmer or into agribusiness?",
    iconBg: "#e6f4ea",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#29B909" strokeWidth="1.8" />
        <path d="M7 13c2 2 5 2 5 2s3 0 5-2" stroke="#29B909" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="9" r="1.5" fill="#29B909" />
      </svg>
    ),
  },
  {
    title: "Salary Earners",
    desc: "Looking for a flexible loan?",
    iconBg: "#e6f4ea",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5 21V6l7-4 7 4v15" stroke="#29B909" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M3 21h18" stroke="#29B909" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M10 21v-5h4v5" stroke="#29B909" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Rural Communities",
    desc: "Banking closer to you",
    iconBg: "#fde7d3",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 20V11l4-3v12H4z" fill="#ea580c" />
        <path d="M10 20V7l4-3v16h-4z" fill="#ea580c" />
        <path d="M16 20v-8l4-2v10h-4z" fill="#ea580c" />
      </svg>
    ),
  },
  {
    title: "Groups & Cooperatives",
    desc: "Savings made together",
    iconBg: "#e6f4ea",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#29B909" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#29B909" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#29B909" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#29B909" />
      </svg>
    ),
  },
];

export default function WhoWeServe() {
  const headRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observe = (el: HTMLElement | null, cls: string, delay = 0) => {
      if (!el) return;
      el.style.setProperty("--wws-delay", `${delay}ms`);
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add(cls);
            obs.disconnect();
          }
        },
        { threshold: 0.12 }
      );
      obs.observe(el);
      observers.push(obs);
    };
    observe(headRef.current, "wws-heading-visible", 0);
    cardRefs.current.forEach((el, i) => observe(el, "wws-card-visible", i * 80));
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      style={{
        background: "#025236",
        padding: "4rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle decorative curves */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08, pointerEvents: "none" }}
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <path d="M0 100 Q 300 200 600 100 T 1200 100" stroke="#ffffff" strokeWidth="1.2" fill="none" />
        <path d="M0 230 Q 300 330 600 230 T 1200 230" stroke="#ffffff" strokeWidth="1.2" fill="none" />
        <path d="M0 380 Q 300 480 600 380 T 1200 380" stroke="#ffffff" strokeWidth="1.2" fill="none" />
      </svg>

      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto" }}>
        <div ref={headRef} className="wws-heading" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#fff", margin: 0 }}>
            We Serve Different Customers
          </h2>
          <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.78)", margin: "0.6rem 0 0", fontWeight: 500 }}>
            We serve customers within and outside Girei
          </p>
        </div>

        <div className="wws-grid">
          {cards.map((c, i) => (
            <div
              key={c.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="wws-card"
            >
              <div className="wws-icon" style={{ background: c.iconBg }}>
                {c.icon}
              </div>
              <div className="wws-title">{c.title}</div>
              <div className="wws-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .wws-heading {
          opacity: 0;
          transform: translateY(-18px);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(.22,.68,0,1.2);
        }
        .wws-heading.wws-heading-visible { opacity: 1; transform: translateY(0); }

        .wws-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        @media (max-width: 860px) {
          .wws-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .wws-grid { grid-template-columns: 1fr; }
        }

        .wws-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          padding: 1.25rem 1.1rem;
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.5s ease var(--wws-delay, 0ms),
            transform 0.5s cubic-bezier(.22,.68,0,1.2) var(--wws-delay, 0ms),
            border-color 0.25s ease,
            background 0.25s ease;
        }
        .wws-card.wws-card-visible { opacity: 1; transform: translateY(0); }
        .wws-card:hover {
          border-color: rgba(41,185,9,0.55);
          background: rgba(255,255,255,0.07);
        }

        .wws-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .wws-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.3rem;
          line-height: 1.3;
        }
        .wws-desc {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
