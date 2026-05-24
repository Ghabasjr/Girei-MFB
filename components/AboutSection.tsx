"use client";

import { useEffect, useRef } from "react";

type Impact = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

const impacts: Impact[] = [
  {
    value: "50,000+",
    label: "Happy Customers",
    icon: (
      <img src="./user-group-03.png" alt="user" />
    ),
  },
  {
    value: "₦280B+",
    label: "Total Asset",
    icon: (
      <img src="./money-receive-circle.png" alt="asset" />
    ),
  },
  {
    value: "30+",
    label: "Communities Served",
    icon: (
      <img src="./group-items.png" alt="group" />
    ),
  },
  {
    value: "150+",
    label: "Dedicated Staff",
    icon: (
      <img src="./work.png" alt="work" />
    ),
  },
];

const bullets = [
  "Deep community roots in Girei, Adamawa",
  "Personalized financial solutions",
  "Strong governance and professional management",
  "Supporting individuals, SMEs and local development",
];

export default function AboutSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observe = (el: HTMLElement | null, cls: string, delay = 0) => {
      if (!el) return;
      el.style.setProperty("--ab-delay", `${delay}ms`);
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add(cls);
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    };
    observe(leftRef.current, "ab-visible", 0);
    observe(midRef.current, "ab-visible", 120);
    observe(rightRef.current, "ab-visible", 240);
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="about" style={{ background: "#fff", padding: "3.5rem 1.5rem" }}>
      <div className="ab-grid">
        {/* LEFT: photo with 32+ overlay */}
        <div ref={leftRef} className="ab-col ab-photo-wrap">
          <img src="/Rectangle 3072.png" alt="Girei Microfinance Bank professional" className="ab-photo" />
          <div className="ab-32-card">
            <div className="ab-32-value">32+</div>
            <div className="ab-32-label">
              Years of Commitment
              <br />
              to Our Community
            </div>
          </div>
        </div>

        {/* MIDDLE: heading + bullets + CTA */}
        <div ref={midRef} className="ab-col ab-content">
          <div className="ab-eyebrow">About GMFB</div>
          <h2 className="ab-heading">Rooted In Girei. Committed to You.</h2>
          <p className="ab-body">
            Established in 1992, GMFB has grown from a community initiative to a
            licensed and trusted financial institution dedicated to driving
            financial inclusion and economic growth.
          </p>

          <ul className="ab-bullets">
            {bullets.map((b, i) => (
              <li key={i}>
                <span className="ab-check" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#025236" fillOpacity="0.18" />
                    <path d="M8 12.5l2.5 2.5L16 9.5" stroke="#025236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <a href="/aboutHero" className="ab-cta">Learn More About Us</a>
        </div>

        {/* RIGHT: Our Impacts card */}
        <div ref={rightRef} className="ab-col ab-impacts-card">
          <h3 className="ab-impacts-title">Our Impacts</h3>
          <div className="ab-impacts-list">
            {impacts.map((it) => (
              <div className="ab-impact-row" key={it.label}>
                <div className="ab-impact-icon">{it.icon}</div>
                <div>
                  <div className="ab-impact-value">{it.value}</div>
                  <div className="ab-impact-label">{it.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ab-grid {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.15fr 0.85fr;
          gap: 1.5rem;
          align-items: stretch;
        }
        .ab-col {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.55s ease var(--ab-delay, 0ms),
            transform 0.55s cubic-bezier(.22,.68,0,1.2) var(--ab-delay, 0ms);
        }
        .ab-col.ab-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─── LEFT: photo ─── */
        .ab-photo-wrap {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          min-height: 360px;
        }
        .ab-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          position: absolute;
          inset: 0;
        }
        .ab-32-card {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: #fff;
          border-radius: 14px;
          padding: 1rem 1.2rem;
          box-shadow: 0 10px 24px rgba(0,0,0,0.15);
          min-width: 150px;
        }
        .ab-32-value {
          font-size: 2.6rem;
          font-weight: 900;
          color: #025236;
          line-height: 1;
          margin-bottom: 0.35rem;
        }
        .ab-32-label {
          font-size: 0.78rem;
          color: #4b5563;
          font-weight: 500;
          line-height: 1.4;
        }

        /* ─── MIDDLE: content ─── */
        .ab-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ab-eyebrow {
          font-size: 0.85rem;
          font-weight: 700;
          color: #29B909;
          margin-bottom: 0.6rem;
        }
        .ab-heading {
          font-size: clamp(1.4rem, 2.6vw, 1.8rem);
          font-weight: 800;
          color: #0b0b0b;
          margin: 0 0 0.9rem;
          line-height: 1.25;
        }
        .ab-body {
          font-size: 1.1  rem;
          color: #4b5563;
          line-height: 1.65;
          margin: 0 0 1.25rem;
        }
        .ab-bullets {
          list-style: none;
          margin: 0 0 1.5rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .ab-bullets li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: #0b0b0b;
        }
        .ab-check {
          display: inline-flex;
          flex-shrink: 0;
        }
        .ab-cta {
          align-self: flex-start;
          background: #025236;
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0.85rem 1.6rem;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .ab-cta:hover {
          background: #03734a;
        }

        /* ─── RIGHT: Our Impacts ─── */
        .ab-impacts-card {
          background: #f1faef;
          border-radius: 16px;
          padding: 1.4rem 1.25rem;
          border: 1px solid #d6f0d0;
          display: flex;
          flex-direction: column;
        }
        .ab-impacts-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #025236;
          margin: 0 0 1rem;
        }
        .ab-impacts-list {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .ab-impact-row {
          background: #fff;
          border-radius: 12px;
          padding: 0.8rem 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          border: 1px solid #e5f4dd;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ab-impact-row:hover {
          transform: translateX(3px);
          box-shadow: 0 4px 14px rgba(2,82,54,0.08);
        }
        .ab-impact-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #e6f4ea;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ab-impact-value {
          font-size: 1rem;
          font-weight: 800;
          color: #025236;
          line-height: 1.1;
        }
        .ab-impact-label {
          font-size: 0.72rem;
          color: #6b7280;
          margin-top: 2px;
        }

        /* ─── Responsive ─── */
        @media (max-width: 1024px) {
          .ab-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          .ab-impacts-card {
            grid-column: 1 / -1;
          }
          .ab-impacts-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }
        @media (max-width: 700px) {
          .ab-grid {
            grid-template-columns: 1fr;
          }
          .ab-photo-wrap { min-height: 320px; }
          .ab-impacts-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
