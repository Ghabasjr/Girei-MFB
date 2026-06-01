"use client";

import { useEffect, useRef } from "react";

type Tip = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

const tips: Tip[] = [
  {
    id: 1,
    title: "5 Ways To Start an Emergency Fund",
    excerpt: "Learn simple steps to start saving for unexpected expenses.",
    image: "/heroimage.jpeg",
    href: "#",
  },
  {
    id: 2,
    title: "Smart Borrowing: How to Get the Right Loan",
    excerpt: "Understand what to look for before applying for a personal or business loan.",
    image: "/blogImage.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "Grow Your SME with Working Capital",
    excerpt: "Practical ways to use working-capital loans to scale your small business.",
    image: "/blog2.jpg",
    href: "#",
  },
];

function TipCard({ tip, animIndex }: { tip: Tip; animIndex: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tip-delay", `${animIndex * 90}ms`);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("tip-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animIndex]);

  return (
    <div ref={ref} className="tip-card">
      <div className="tip-img-wrap">
        <img src={tip.image} alt={tip.title} className="tip-img object-contain" />
      </div>
      <div className="tip-body">
        <h3 className="tip-title">{tip.title}</h3>
        <p className="tip-excerpt">{tip.excerpt}</p>
        <a href={tip.href} className="tip-link">
          Learn More
          <span aria-hidden="true" className="tip-arrow">→</span>
        </a>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("tip-head-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#ffffff", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={headRef} className="tip-head" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="tip-eyebrow">FINANCE TIPS</div>
          <h2 className="tip-h">Financial Tips &amp; Insight</h2>
        </div>

        <div className="tip-grid">
          {tips.map((t, i) => (
            <TipCard key={t.id} tip={t} animIndex={i} />
          ))}
        </div>
      </div>

      <style>{`
        .tip-head {
          opacity: 0;
          transform: translateY(-16px);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(.22,.68,0,1.2);
        }
        .tip-head.tip-head-visible { opacity: 1; transform: translateY(0); }
        .tip-eyebrow {
          font-size: 0.78rem;
          font-weight: 800;
          color: #29B909;
          letter-spacing: 0.18em;
          margin-bottom: 0.5rem;
        }
        .tip-h {
          font-size: clamp(1.4rem, 2.6vw, 1.85rem);
          font-weight: 800;
          color: #0b0b0b;
          margin: 0;
        }

        .tip-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .tip-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .tip-grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; }
        }

        .tip-card {
          background: #ffffff;
          border: 1px solid #e7eee5;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.55s ease var(--tip-delay, 0ms),
            transform 0.55s cubic-bezier(.22,.68,0,1.2) var(--tip-delay, 0ms),
            box-shadow 0.22s ease,
            border-color 0.22s ease;
        }
        .tip-card.tip-visible { opacity: 1; transform: translateY(0); }
        .tip-card:hover {
          border-color: #29B909;
          box-shadow: 0 10px 28px rgba(2,82,54,0.08);
        }

        .tip-img-wrap {
          width: 100%;
          height: 180px;
          overflow: hidden;
        }
        .tip-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .tip-card:hover .tip-img { transform: scale(1.04); }

        .tip-body {
          padding: 1.1rem 1.2rem 1.3rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .tip-title {
          font-size: 1rem;
          font-weight: 800;
          color: #0b0b0b;
          margin: 0 0 0.5rem;
          line-height: 1.35;
        }
        .tip-excerpt {
          font-size: 0.85rem;
          color: #6b7280;
          line-height: 1.55;
          margin: 0 0 1rem;
          flex: 1;
        }
        .tip-link {
          color: #29B909;
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: gap 0.2s;
          width: fit-content;
        }
        .tip-link:hover { gap: 0.7rem; }
        .tip-arrow { font-size: 1rem; line-height: 1; }
      `}</style>
    </section>
  );
}
