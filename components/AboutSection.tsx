"use client";

import { useEffect, useRef } from "react";

export default function AboutSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observe = (el: HTMLElement | null, cls: string, delay = 0) => {
      if (!el) return;
      el.style.setProperty("--anim-delay", `${delay}ms`);
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

    observe(imageRef.current, "ab-img-visible", 0);
    observe(contentRef.current, "ab-content-visible", 150);
    statRefs.current.forEach((el, i) => observe(el, "ab-stat-visible", 300 + i * 100));

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="about" style={{ background: "#f7f8f9", padding: "2rem 1.5rem 2rem" }}>
      <div className="about-card" ref={cardRef}>

        {/* LEFT: Image */}
        <div className="about-image-col ab-img" ref={imageRef}>
          <div style={{ position: "relative", width: "100%", height: "100%", overflow: "visible", zIndex: 10 }}>
            <img
              src="/arewa.png"
              alt="Business professional"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center top",
                display: "block", borderRadius: 12,
              }}
            />
            {/* Customer Satisfaction overlay */}
            <div style={{
              position: "absolute", bottom: 16, right: -30,
              background: "#fff", borderRadius: 12,
              padding: "0.4rem 0.6rem 0.5rem",
              boxShadow: "0 6px 20px rgba(0,0,0,0.13)",
              minWidth: 90, zIndex: 10,
            }}>
              <div style={{ fontSize: "0.55rem", color: "#6b7280", fontWeight: 500, marginBottom: 2 }}>
                Customer Satisfaction
              </div>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "#29B909", lineHeight: 1.1, marginBottom: 4 }}>
                99%
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
                {[10, 16, 22, 28, 35, 43].map((h, i) => (
                  <div key={i} style={{
                    width: "14px", height: h,
                    background: "#29B909",
                    borderRadius: "10px 10px 6px 6px",
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div
          className="about-content-col ab-content"
          ref={contentRef}
          style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem" }}
        >
          <h3 style={{
            fontSize: "clamp(1.2rem, 2.6vw, 1.3rem)", fontWeight: 700,
            color: "#111827", lineHeight: 1.3, margin: 0, marginBottom: "0.5rem",
          }}>
            Empowering Individuals &amp; Businesses To Bank <br />Smarter and Live Better
          </h3>

          <p style={{
            fontSize: "16px", fontWeight: 400, color: "#4b5563",
            lineHeight: 1.5, margin: 0, marginBottom: "1.5rem",
          }}>
            At Girei, we empower individuals, businesses, and communities with
            accessible banking solutions, flexible loans, secure savings, and digital
            services designed to promote financial inclusion, growth, sustainability,
            and long-term economic development.
          </p>

          {/* Stats row */}
          <div className="about-stats-row">
            {[
              { number: "500", suffix: "+", label: "Customers Served" },
              { number: "1", suffix: "k+", label: "Loans Completed" },
              { number: "30", suffix: "+", label: "Years Of Banking" },
            ].map((stat, i) => (
              <div
                key={i}
                className="ab-stat"
                ref={(el) => { statRefs.current[i] = el; }}
                style={{ display: "flex", alignItems: "center", gap: "4rem" }}
              >
                {i > 0 && (
                  <div style={{ width: 1, height: 40, background: "#29B909", opacity: 0.3 }} />
                )}
                <div className="stat-item">
                  <div className="stat-value">
                    <span style={{ color: "#111827" }}>{stat.number}</span>
                    <span style={{ color: "#29B909" }}>{stat.suffix}</span>
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Card ── */
        .about-card {
          max-width: 900px;
          margin: 50px auto 50px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.08);
          overflow: visible;
          display: flex;
          align-items: center;
          padding: 1.2rem;
          gap: 0;
        }

        /* ── Image: slide in from left ── */
        .ab-img {
          opacity: 0;
          transform: translateX(-48px);
          transition:
            opacity 0.6s ease var(--anim-delay, 0ms),
            transform 0.6s cubic-bezier(.22,.68,0,1.2) var(--anim-delay, 0ms);
          will-change: opacity, transform;
        }
        .ab-img.ab-img-visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Content: slide in from right ── */
        .ab-content {
          opacity: 0;
          transform: translateX(48px);
          transition:
            opacity 0.6s ease var(--anim-delay, 0ms),
            transform 0.6s cubic-bezier(.22,.68,0,1.2) var(--anim-delay, 0ms);
          will-change: opacity, transform;
        }
        .ab-content.ab-content-visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Stats: fade + pop up ── */
        .ab-stat {
          opacity: 0;
          transform: translateY(20px) scale(0.92);
          transition:
            opacity 0.45s ease var(--anim-delay, 0ms),
            transform 0.45s cubic-bezier(.22,.68,0,1.35) var(--anim-delay, 0ms);
          will-change: opacity, transform;
        }
        .ab-stat.ab-stat-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ── Static layout styles ── */
        .about-image-col {
          width: 220px;
          height: 240px;
          flex-shrink: 0;
          position: relative;
          margin-right: 1.5rem;
        }
        .about-content-col {
          padding: 0.4rem 1.8rem 0.4rem 1.2rem;
        }
        .about-stats-row {
          display: flex;
          gap: 0;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .stat-value {
          font-size: 1.5rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 0.65rem;
          color: #6b7280;
          font-weight: 500;
        }

        /* ── Mobile ── */
        @media (max-width: 700px) {
          .about-card {
            flex-direction: column;
            margin-bottom: 60px;
            padding: 1rem;
          }
          .about-image-col {
            width: 100%;
            height: 200px;
            margin-right: 0;
            margin-bottom: 1.2rem;
          }
          /* On mobile: image fades up instead of sliding left */
          .ab-img {
            transform: translateY(32px);
          }
          .ab-img.ab-img-visible {
            transform: translateY(0);
          }
          /* Content fades up too */
          .ab-content {
            transform: translateY(32px);
          }
          .ab-content.ab-content-visible {
            transform: translateY(0);
          }
          .about-content-col {
            padding: 0.4rem 0.2rem;
          }
          .about-stats-row {
            gap: 0.5rem;
            flex-wrap: nowrap;
            justify-content: space-between;
          }
          .stat-value {
            font-size: 1rem;
            margin-bottom: 8px;
          }
          .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .stat-label {
            font-size: 0.55rem;
          }
        }
      `}</style>
    </section>
  );
}