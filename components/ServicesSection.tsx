"use client";

import { useEffect, useRef } from "react";

type Category = {
  title: string;
  items: string[];
  href: string;
  cta: string;
  icon: React.ReactNode;
};

const categories: Category[] = [
  {
    title: "Personal Banking",
    href: "/join",
    cta: "Explore Personal Banking",
    items: [
      "Savings Accounts",
      "Target Savings",
      "Personal Loans",
      "Children / Education Savings",
    ],
    icon: (
      <img src="./save.png" alt="save" />
    ),
  },
  {
    title: "Business Banking",
    href: "/loan",
    cta: "Explore Business Banking",
    items: [
      "SMEs Loans",
      "Working Capital",
      "Trade Financing",
      "Business Current Account",
    ],
    icon: (
      <img src="./banking.png" alt="bank" />
    ),
  },
  {
    title: "Digital Services",
    href: "/mobileBanking",
    cta: "Explore Digital Services",
    items: [
      "Fund Transfers",
      "POS / Agency Banking",
      "Airtime & Data Top-up",
      "Bills Payments",
    ],
    icon: (
      <img src="bitcoin-withdraw (1).png" alt="" />
    ),
  },
];

function CategoryCard({ cat, animIndex }: { cat: Category; animIndex: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--svc-delay", `${animIndex * 100}ms`);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("svc-card-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animIndex]);

  return (
    <div ref={ref} className="svc-card">
      <div className="svc-card-head">
        <div className="svc-card-icon">{cat.icon}</div>
        <h3 className="svc-card-title">{cat.title}</h3>
      </div>

      <ul className="svc-card-list">
        {cat.items.map((item) => (
          <li key={item}>
            <span className="svc-card-check" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#29B909" strokeWidth="1.7" />
                <path d="M8 12.5l2.5 2.5L16 9.5" stroke="#29B909" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a href={cat.href} className="svc-card-cta">
        {cat.cta}
      </a>
    </div>
  );
}

export default function ServicesSection() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("svc-head-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" style={{ background: "#f6f8f6", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={headRef} className="svc-head" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="svc-eyebrow">OUR PRODUCT</div>
          <h2 className="svc-title">Banking Solutions Designed For You</h2>
        </div>

        <div className="svc-grid">
          {categories.map((c, i) => (
            <CategoryCard key={c.title} cat={c} animIndex={i} />
          ))}
        </div>
      </div>

      <style>{`
        .svc-head {
          opacity: 0;
          transform: translateY(-18px);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(.22,.68,0,1.2);
        }
        .svc-head.svc-head-visible { opacity: 1; transform: translateY(0); }
        .svc-eyebrow {
          font-size: 0.78rem;
          font-weight: 800;
          color: #29B909;
          letter-spacing: 0.18em;
          margin-bottom: 0.5rem;
        }
        .svc-title {
          font-size: clamp(1.4rem, 2.6vw, 1.85rem);
          font-weight: 800;
          color: #0b0b0b;
          margin: 0;
        }

        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
        }

        .svc-card {
          background: #f3faf3;
          border-radius: 16px;
          border: 1px solid #d6f0d0;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.55s ease var(--svc-delay, 0ms),
            transform 0.55s cubic-bezier(.22,.68,0,1.2) var(--svc-delay, 0ms),
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }
        .svc-card.svc-card-visible { opacity: 1; transform: translateY(0); }
        .svc-card:hover {
          border-color: #29B909;
          box-shadow: 0 10px 28px rgba(2,82,54,0.10);
        }

        .svc-card-head {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }
        .svc-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #025236;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .svc-card-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0b0b0b;
          margin: 0;
        }

        .svc-card-list {
          list-style: none;
          margin: 0 0 1.5rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          flex: 1;
        }
        .svc-card-list li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: #4b5563;
        }
        .svc-card-check { display: inline-flex; flex-shrink: 0; }

        .svc-card-cta {
          background: #025236;
          color: #fff;
          font-weight: 700;
          font-size: 0.88rem;
          padding: 0.85rem 1rem;
          border-radius: 10px;
          text-decoration: none;
          text-align: center;
          transition: background 0.2s, transform 0.15s;
          display: block;
        }
        .svc-card-cta:hover { background: #03734a; }
      `}</style>
    </section>
  );
}
