"use client";

import { useEffect, useRef, useState } from "react";

type Quote = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const quotes: Quote[] = [
  {
    quote:
      "GMFB has been instrumental in helping my business grow. Their dedication to our community is unmatched.",
    name: "Hassan Abubakar",
    role: "Business Owner, Girei",
    image: "/heroImage.jpeg",
  },
  {
    quote:
      "Girei MFB gave me the loan I needed to expand my farm and improve my family's livelihood.",
    name: "Aliyu Mohammed",
    role: "Farmer, Adamawa",
    image: "/blogImage.jpg",
  },
  {
    quote:
      "The savings plan at Girei Microfinance Bank has helped me build a solid financial safety net.",
    name: "Ibrahim Yusuf",
    role: "Civil Servant, Girei",
    image: "/blog2.jpg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % quotes.length), 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observe = (el: HTMLElement | null, cls: string, delay = 0) => {
      if (!el) return;
      el.style.setProperty("--ts-delay", `${delay}ms`);
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
    observe(leftRef.current, "ts-visible", 0);
    observe(rightRef.current, "ts-visible", 150);
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const q = quotes[active];

  return (
    <section style={{ background: "#fff", padding: "3.5rem 1.5rem" }}>
      <div className="ts-grid">
        {/* LEFT: Testimonial card */}
        <div ref={leftRef} className="ts-col ts-card-left">
          <div className="ts-photo-wrap">
            <img src={q.image} alt={q.name} className="ts-photo" />
          </div>

          <div className="ts-content">
            <div className="ts-eyebrow">Trusted by Thousands</div>
            <h3 className="ts-h">What Customers Say</h3>
            <p className="ts-quote">&ldquo;{q.quote}&rdquo;</p>
            <div className="ts-author">
              <span className="ts-author-dash">—</span>{" "}
              <span className="ts-author-name">{q.name}</span>
            </div>
            <div className="ts-author-role">{q.role}</div>

            <div className="ts-dots">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  className={"ts-dot " + (i === active ? "ts-dot-active" : "")}
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Regulators */}
        <div ref={rightRef} className="ts-col ts-card-right">
          <h3 className="ts-reg-title">
            We are regulated &amp;<br />trusted
          </h3>

          <div className="ts-reg-list">
            <div className="ts-reg-row">
              <div className="ts-reg-logo ts-reg-logo-cbn" aria-hidden="true">
                {/* CBN crest stylization */}
                <img src="./Ellipse 390.png" alt="CBN" />
              </div>
              <div>
                <div className="ts-reg-line">Licensed by</div>
                <div className="ts-reg-name">Central Bank of Nigeria (CBN)</div>
              </div>
            </div>

            <div className="ts-reg-divider" />

            <div className="ts-reg-row">
              <div className="ts-reg-logo" aria-hidden="true">
                <img src="./Rectangle 21912.png" alt="NDIC" />
              </div>
              <div>
                <div className="ts-reg-line">Deposit Insured by</div>
                <div className="ts-reg-name">Nigeria Deposit Insurance Corporation (NDIC)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ts-grid {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.25rem;
          align-items: stretch;
        }
        @media (max-width: 900px) {
          .ts-grid { grid-template-columns: 1fr; }
        }

        .ts-col {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.55s ease var(--ts-delay, 0ms),
            transform 0.55s cubic-bezier(.22,.68,0,1.2) var(--ts-delay, 0ms);
        }
        .ts-col.ts-visible { opacity: 1; transform: translateY(0); }

        /* ── LEFT: testimonial card ── */
        .ts-card-left {
          background: #eef9ec;
          border-radius: 18px;
          padding: 1.5rem;
          display: flex;
          gap: 1.5rem;
          align-items: stretch;
        }
        .ts-photo-wrap {
          width: 200px;
          flex-shrink: 0;
          border-radius: 12px;
          overflow: hidden;
          background: #d6f0d0;
        }
        .ts-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .ts-content { flex: 1; padding: 0.4rem 0.4rem 0.4rem 0; min-width: 0; }
        .ts-eyebrow {
          font-size: 0.78rem;
          font-weight: 700;
          color: #29B909;
          margin-bottom: 0.35rem;
        }
        .ts-h {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0b0b0b;
          margin: 0 0 0.85rem;
        }
        .ts-quote {
          font-size: 0.92rem;
          line-height: 1.65;
          color: #4b5563;
          margin: 0 0 1rem;
        }
        .ts-author { font-size: 0.9rem; margin-bottom: 0.15rem; }
        .ts-author-dash { color: #29B909; font-weight: 800; }
        .ts-author-name { color: #29B909; font-weight: 700; }
        .ts-author-role { font-size: 0.78rem; color: #6b7280; }

        .ts-dots {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .ts-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #c8e0c0;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.25s, transform 0.25s;
        }
        .ts-dot-active {
          background: #025236;
          transform: scale(1.15);
        }

        /* ── RIGHT: regulators card ── */
        .ts-card-right {
          background: #eef9ec;
          border-radius: 18px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .ts-reg-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0b0b0b;
          margin: 0 0 1.25rem;
          line-height: 1.3;
        }
        .ts-reg-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .ts-reg-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .ts-reg-logo {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ts-reg-line {
          font-size: 0.78rem;
          color: #6b7280;
          margin-bottom: 0.1rem;
        }
        .ts-reg-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0b0b0b;
          line-height: 1.35;
        }
        .ts-reg-divider {
          height: 1px;
          background: #d6e8d0;
          margin: 0.3rem 0;
        }

        @media (max-width: 700px) {
          .ts-card-left { flex-direction: column; gap: 1rem; }
          .ts-photo-wrap { width: 100%; height: 220px; }
        }
      `}</style>
    </section>
  );
}
