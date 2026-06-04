"use client";

import { useEffect, useRef } from "react";

type NewsItem = {
  id: number;
  tag: string;
  title: string;
  image: string;
  href: string;
};

const news: NewsItem[] = [
  {
    id: 1,
    tag: "Savings & Current Account",
    title: "Why people open accounts in GMFB",
    image: "/Rectangle4.png",
    href: "#",
  },
  {
    id: 2,
    tag: "Savings & Current Account",
    title: "GMFB has disbursed 200billion last year",
    image: "/Rectangle2.png",
    href: "#",
  },
  {
    id: 3,
    tag: "Savings & Current Account",
    title: "GMFB Customers are stunned by our customer service",
    image: "/Rectangle3.png",
    href: "#",
  },
];

function NewsCard({ item, animIndex }: { item: NewsItem; animIndex: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--news-delay", `${animIndex * 90}ms`);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("news-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animIndex]);

  return (
    <div ref={ref} className="news-card">
      <div className="news-img-wrap">
        <img src={item.image} alt={item.title} className="news-img" />
      </div>
      <div className="news-body">
        <div className="news-tag">{item.tag}</div>
        <h3 className="news-title">{item.title}</h3>
        <a href={item.href} className="news-link">
          Read More <span aria-hidden="true" className="news-arrow">→</span>
        </a>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("news-head-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#f6f8f6", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={headRef} className="news-head" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="news-eyebrow">NEWS &amp; UPDATE</div>
          <h2 className="news-h">Stay Informed</h2>
          <p className="news-sub">Latest news, updates, and events from GMFB</p>
        </div>

        <div className="news-grid">
          {news.map((n, i) => (
            <NewsCard key={n.id} item={n} animIndex={i} />
          ))}
        </div>
      </div>

      <style>{`
        .news-head {
          opacity: 0;
          transform: translateY(-16px);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(.22,.68,0,1.2);
        }
        .news-head.news-head-visible { opacity: 1; transform: translateY(0); }
        .news-eyebrow {
          font-size: 0.78rem;
          font-weight: 800;
          color: #025236;
          letter-spacing: 0.18em;
          margin-bottom: 0.4rem;
        }
        .news-h {
          font-size: clamp(1.4rem, 2.6vw, 1.85rem);
          font-weight: 800;
          color: #0b0b0b;
          margin: 0 0 0.5rem;
        }
        .news-sub {
          font-size: 0.9rem;
          color: #6b7280;
          margin: 0;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .news-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .news-grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; }
        }

        .news-card {
          background: transparent;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.55s ease var(--news-delay, 0ms),
            transform 0.55s cubic-bezier(.22,.68,0,1.2) var(--news-delay, 0ms);
        }
        .news-card.news-visible { opacity: 1; transform: translateY(0); }

        .news-img-wrap {
          width: 100%;
          height: 220px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 1rem;
        }
        .news-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .news-card:hover .news-img { transform: scale(1.04); }

        .news-body { display: flex; flex-direction: column; gap: 0.55rem; }
        .news-tag {
          font-size: 0.8rem;
          font-weight: 700;
          color: #29B909;
        }
        .news-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0b0b0b;
          margin: 0;
          line-height: 1.4;
        }
        .news-link {
          color: #0b0b0b;
          font-weight: 600;
          font-size: 0.88rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.4rem;
          width: fit-content;
          transition: gap 0.2s, color 0.2s;
        }
        .news-link:hover { gap: 0.7rem; color: #29B909; }
        .news-arrow { font-size: 1rem; line-height: 1; }
      `}</style>
    </section>
  );
}
