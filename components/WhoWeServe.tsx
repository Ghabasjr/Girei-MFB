"use client";

import { useEffect, useRef } from "react";

const cards = [
  {
    iconBg: "#FEE8D6",
    title: "MSMEs & Small Businesses",
    desc: "Do you own a business?",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 3L18 21M18 3L6 21" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="6" cy="7" r="2.5" fill="#ea580c" />
        <circle cx="18" cy="17" r="2.5" fill="#ea580c" />
      </svg>
    ),
  },
  {
    iconBg: "#EDE9FE",
    title: "Traders & Market Associations",
    desc: "Are you into trade?",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="2" fill="#7c3aed" />
        <rect x="12" y="2" width="8" height="8" rx="2" fill="#7c3aed" />
        <rect x="2" y="12" width="8" height="8" rx="2" fill="#7c3aed" />
        <rect x="12" y="12" width="8" height="8" rx="2" fill="#7c3aed" />
      </svg>
    ),
  },
  {
    iconBg: "#FEF3C7",
    title: "Farmers & Agribusinesses",
    desc: "Are you a farmer or into agribusiness?",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.5 2 6 5 6 9v5l-2 2v1h16v-1l-2-2V9c0-4-2.5-7-6-7z" fill="#f97316" />
        <path d="M10 20a2 2 0 004 0" fill="#f97316" />
      </svg>
    ),
  },
  {
    iconBg: "#D1FAE5",
    title: "Salary Earners",
    desc: "Looking for a flexible loan?",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5 21C5 21 7 13 15 10C15 10 12 17 5 21Z" fill="#16a34a" />
        <path d="M5 3v18" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    iconBg: "#FEE2E2",
    title: "Rural Communities",
    desc: "Banking closer to you",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="2" fill="#ef4444" />
        <rect x="12" y="2" width="8" height="8" rx="2" fill="#ef4444" />
        <rect x="2" y="12" width="8" height="8" rx="2" fill="#ef4444" />
        <rect x="12" y="12" width="8" height="8" rx="2" fill="#ef4444" />
      </svg>
    ),
  },
  {
    iconBg: "#FEF9C3",
    title: "Groups & Cooperatives",
    desc: "Savings made together",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="2" fill="#eab308" />
        <rect x="12" y="2" width="8" height="8" rx="2" fill="#eab308" />
        <rect x="2" y="12" width="8" height="8" rx="2" fill="#eab308" />
        <rect x="12" y="12" width="8" height="8" rx="2" fill="#eab308" />
      </svg>
    ),
  },
];

export default function WhoWeServe() {
  const headingRef = useRef<HTMLDivElement>(null);
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

    observe(headingRef.current, "wws-heading-visible", 0);
    cardRefs.current.forEach((el, i) => observe(el, "wws-card-visible", i * 80));

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      className="whoweserve-wrapper"
      style={{
        background: "linear-gradient(to bottom, #025236 0%, #04B879 100%)",
        padding: "4rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ flex: 1, padding: "0 1rem" }}>

        {/* Heading */}
        <div ref={headingRef} className="wws-heading" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: 800, color: "#fff", marginBottom: "0.5rem",
          }}>
            Who We Serve
          </h2>
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.85)", margin: 0 }}>
            We serve different customers across the globe
          </p>
        </div>

        {/* Cards grid */}
        <div className="who-we-serve-grid">
          {cards.map((card, i) => (
            <div
              key={card.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="wws-card"
              style={{ "--wws-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              {/* Icon */}
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: card.iconBg,
                display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "1rem",
              }}>
                {card.icon}
              </div>
              <div style={{
                fontSize: "0.92rem", fontWeight: 700,
                color: "#111827", marginBottom: "0.4rem", lineHeight: 1.3,
              }}>
                {card.title}
              </div>
              <div style={{ fontSize: "0.95rem", color: "#9ca3af", lineHeight: 1.5 }}>
                {card.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Heading: fade + slide down ── */
        .wws-heading {
          opacity: 0;
          transform: translateY(-24px);
          transition:
            opacity 0.6s ease var(--wws-delay, 0ms),
            transform 0.6s cubic-bezier(.22,.68,0,1.2) var(--wws-delay, 0ms);
          will-change: opacity, transform;
        }
        .wws-heading.wws-heading-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Cards: fade + slide up ── */
        .wws-card {
          background: #fff;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          opacity: 0;
          transform: translateY(36px) scale(0.96);
          transition:
            opacity 0.5s ease var(--wws-delay, 0ms),
            transform 0.5s cubic-bezier(.22,.68,0,1.25) var(--wws-delay, 0ms),
            box-shadow 0.28s ease,
            border-color 0.28s ease;
          will-change: opacity, transform;
        }
        .wws-card.wws-card-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ── Card hover ── */
        .wws-card.wws-card-visible:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 32px rgba(0,0,0,0.18);
        }

        /* ── Grid layout ── */
        .who-we-serve-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          max-width: 860px;
          margin: 0 auto;
        }
        @media (max-width: 860px) {
          .who-we-serve-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .who-we-serve-grid { grid-template-columns: 1fr; }
          /* Faster, no stagger on mobile single column */
          .wws-card {
            --wws-delay: 0ms !important;
            transform: translateY(20px) scale(0.97);
          }
        }
        @media (max-width: 768px) {
          .whoweserve-wrapper {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}