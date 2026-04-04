"use client";

import React, { useState, useEffect, useRef } from "react";

function ATMModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      id="services"
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 10000, padding: '1.5rem'
      }} onClick={onClose}>
      <div style={{
        background: '#fff', padding: '2.5rem 2rem',
        borderRadius: 24, maxWidth: 420, width: '100%',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        textAlign: 'center'
      }} onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 20, right: 20,
            background: '#f3f4f6', border: 'none',
            width: 32, height: 32, borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.2rem', cursor: 'pointer', color: '#6b7280',
            transition: 'background 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#e5e7eb'}
          onMouseLeave={e => e.currentTarget.style.background = '#f3f4f6'}
        >&times;</button>
        <div style={{
          width: 70, height: 70, borderRadius: '20px',
          background: '#ecfdf5', display: 'flex', alignItems: 'center',
          justifyContent: 'center', margin: '0 auto 1.5rem',
          color: '#29B909', fontSize: '2rem', transform: 'rotate(-5deg)'
        }}>💳</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827', marginBottom: '0.75rem' }}>
          ATM Card Request
        </h3>
        <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '2rem' }}>
          Kindly visit any <strong>Girei Microfinance Bank</strong> physical office to request and pick up your ATM card.
          <br /><br />
          <span style={{ color: '#9ca3af', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Location</span><br />
          Giei Pont 2, 100, Adamawa State, Nigeria
        </p>
        <button
          onClick={onClose}
          style={{
            background: '#29B909', color: '#fff', border: 'none',
            borderRadius: 14, padding: '1rem 2rem', fontSize: '1rem',
            fontWeight: 700, cursor: 'pointer', width: '100%',
            boxShadow: '0 10px 15px -3px rgba(41, 185, 9, 0.3)',
            transition: 'transform 0.2s, background 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#229a07'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#29B909'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >Understood</button>
      </div>
    </div>
  );
}

function AccountMockup() {
  return (
    <div style={{ background: "#FAFCFB", borderRadius: 10, left: -50, padding: "10px 12px", width: 145, position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#29B909" }} />
        <span style={{ fontSize: "0.6rem", fontWeight: 800, color: "#111" }}>GIREI</span>
      </div>
      <div style={{ fontSize: "0.48rem", color: "#9ca3af", marginBottom: 6 }}>Open an Account With Us</div>
      {["Name", "Email Address", "Password"].map((ph, i) => (
        <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 4, padding: "3px 6px", fontSize: "0.48rem", color: "#9ca3af", marginBottom: 4 }}>{ph}</div>
      ))}
    </div>
  );
}

function LoanMockup() {
  return (
    <div style={{ background: "#FAFCFB", borderRadius: 10, left: -50, padding: "10px 12px", width: 148, position: "relative", zIndex: 3, transform: "translateX(-15px)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#29B909" }} />
        <span style={{ fontSize: "0.6rem", fontWeight: 800, color: "#111" }}>GIREI</span>
      </div>
      <div style={{ fontSize: "0.48rem", color: "#6b7280", marginBottom: 2 }}>Available Loan Offer</div>
      <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#111827", marginBottom: 2 }}>$500,000</div>
      <div style={{ fontSize: "0.43rem", color: "#9ca3af", marginBottom: 8 }}>No Hassle Just apply</div>
      <div style={{ background: "#29B909", color: "#fff", fontSize: "0.5rem", fontWeight: 700, textAlign: "center", borderRadius: 4, padding: "4px 0" }}>Apply Now</div>
    </div>
  );
}

function SavingsMockup() {
  return (
    <div style={{ background: "#FAFCFB", borderRadius: 10, left: -50, padding: "10px 12px", width: 140, position: "relative" }}>
      <div style={{ fontSize: "0.48rem", color: "#6b7280", marginBottom: 3 }}>Customer Satisfaction</div>
      <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#29B909", lineHeight: 1, marginBottom: 6 }}>99%</div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 3 }}>
        {[10, 16, 22, 28, 34, 40].map((h, i) => (
          <div key={i} style={{ width: 10, height: h, background: "#29B909", borderRadius: "3px 3px 2px 2px" }} />
        ))}
      </div>
    </div>
  );
}

function ATMMockup() {
  return (
    <div style={{ background: "linear-gradient(135deg,#1a7a3a,#29B909)", borderRadius: 12, padding: "12px 14px", width: 155, position: "relative", zIndex: 3, transform: "translateX(-15px)", left: -50 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }} />
          <span style={{ fontSize: "0.62rem", fontWeight: 800, color: "#fff" }}>GIREI</span>
        </div>
        <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.8)" }}>◉</div>
      </div>
      <div style={{ width: 22, height: 16, background: "rgba(255,255,255,0.35)", borderRadius: 3, marginBottom: 10 }} />
      <div style={{ fontSize: "0.55rem", fontWeight: 700, color: "#fff", letterSpacing: "0.12em", marginBottom: 10 }}>A.S. ABUBAKAR  12/00</div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#ff5f00", opacity: 0.9 }} />
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#eb001b", opacity: 0.9, marginLeft: -8 }} />
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div style={{ background: "#FAFCFB", borderRadius: 10, left: -50, padding: "10px 12px", width: 150, position: "relative", zIndex: 3, transform: "translateX(-15px)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#29B909" }} />
          <span style={{ fontSize: "0.6rem", fontWeight: 800, color: "#111" }}>GIREI</span>
        </div>
        <span style={{ fontSize: "0.55rem", color: "#374151", fontWeight: 600 }}>Aisha</span>
      </div>
      <div style={{ fontSize: "0.48rem", color: "#6b7280", marginBottom: 1 }}>Available Balance</div>
      <div style={{ fontSize: "1.05rem", fontWeight: 900, color: "#29B909", marginBottom: 8 }}>$100,000</div>
      <div style={{ display: "flex", gap: 5 }}>
        <div style={{ flex: 1, background: "#29B909", color: "#fff", borderRadius: 4, padding: "4px 0", fontSize: "0.5rem", fontWeight: 700, textAlign: "center" }}>Send</div>
        <div style={{ flex: 1, background: "#fff", color: "#29B909", border: "1px solid #29B909", borderRadius: 4, padding: "4px 0", fontSize: "0.5rem", fontWeight: 700, textAlign: "center" }}>Withdraw</div>
      </div>
    </div>
  );
}

function POSMockup() {
  return (
    <div style={{ background: "#FAFCFB", borderRadius: 10, left: -50, padding: "10px 12px", width: 145, position: "relative", zIndex: 3, transform: "translateX(-15px)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#29B909" }} />
        <span style={{ fontSize: "0.6rem", fontWeight: 800, color: "#111" }}>GIREI</span>
      </div>
      <div style={{ fontSize: "0.48rem", color: "#9ca3af", marginBottom: 6 }}>Open an Account With Us</div>
      {["Name", "Email Address", "Password"].map((ph, i) => (
        <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 4, padding: "3px 6px", fontSize: "0.48rem", color: "#9ca3af", marginBottom: 4 }}>{ph}</div>
      ))}
    </div>
  );
}

const mockups: Record<string, React.ReactNode> = {
  account: <AccountMockup />,
  loan: <LoanMockup />,
  savings: <SavingsMockup />,
  atm: <ATMMockup />,
  mobile: <MobileMockup />,
  pos: <POSMockup />,
};

const services = [
  { id: "account", title: "Account", btnText: "Open An Account", href: "/join", image: "/Rectangle 3271.png", imagePos: "center top", description: "Take control of your finances with flexible and secure accounts built for both individuals and businesses. Whether it's savings, current, or fixed deposit accounts, managing your money has never been easier." },
  { id: "loan", title: "Loan", btnText: "Apply For Loan", href: "/loan", image: "/Rectangle 3273.png", imagePos: "center center", description: "Get fast, dependable loans with repayment plans that fit your needs. Whether it's for personal use, business growth, or a specific project, our loan options are built to support you." },
  { id: "savings", title: "Savings", btnText: "Start Savings", href: "/join", image: "/Rectangle 3280.png", imagePos: "center center", description: "Our savings products are designed to encourage financial discipline, promote stability, and help individuals, families, and businesses achieve their short- and long-term financial goals securely." },
  { id: "atm", title: "ATM Card", btnText: "Request ATM", href: "#", image: "/Rectangle 3203.png", imagePos: "center center", description: "Access your funds anytime, anywhere with our secure and convenient ATM card, designed to make withdrawals, payments, and everyday transactions fast, easy, and reliable." },
  { id: "mobile", title: "Mobile Banking", btnText: "See Features", href: "/mobileBanking", image: "/Rectangle 3280.png", imagePos: "center center", description: "Manage your finances conveniently with our secure mobile banking service, allowing you to transfer funds, check balances, pay bills, and perform transactions anytime, anywhere." },
  { id: "pos", title: "POS Services", btnText: "Request POS", href: "/pos", image: "/Rectangle 3273.png", imagePos: "center center", description: "Our POS services provide secure, fast, and convenient payment solutions for businesses, enabling seamless transactions and improving customer experience." },
];

function ServiceCard({ service, onOpenModal, animIndex }: { service: typeof services[0]; onOpenModal: () => void; animIndex: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--svc-delay", `${animIndex * 80}ms`);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("svc-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animIndex]);

  const handleClick = (e: React.MouseEvent) => {
    if (service.id === "atm") { e.preventDefault(); onOpenModal(); }
  };

  return (
    <div
      ref={ref}
      className="svc-card"
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.13)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
    >
      {/* Image area */}
      <div style={{
        background: "#e8f9f0", position: "relative",
        minHeight: 185, display: "flex", alignItems: "center",
        justifyContent: "center", overflow: "hidden",
      }}>
        <img src={service.image} alt={service.title} style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: service.imagePos,
        }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          {mockups[service.id]}
        </div>
      </div>

      {/* Text content */}
      <div style={{ padding: "1rem 1.1rem 1.4rem", flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
        <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#111827", marginBottom: "0.45rem" }}>
          {service.title}
        </h3>
        <p style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.65, marginBottom: "1rem", flex: 1 }}>
          {service.description}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <a
            href={service.href || "#"}
            onClick={handleClick}
            style={{
              flex: 1, display: "block", background: "#29B909", color: "#fff",
              fontWeight: 600, fontSize: "1rem", padding: "0.5rem 0",
              borderRadius: "999px", textDecoration: "none", textAlign: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#22a006"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#29B909"; }}
          >
            {service.btnText}
          </a>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            border: "1.5px solid #29B909", background: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#29B909", fontSize: "0.8rem", flexShrink: 0, cursor: "pointer",
          }}>
            <img src="/stars.png" alt="stars" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("svc-heading-visible"); observer.disconnect(); }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" style={{ padding: "2rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Heading */}
        <div ref={headingRef} className="svc-heading" style={{ textAlign: "center", marginBottom: "2.5rem", marginTop: "1rem" }}>
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.6rem)", fontWeight: 800, color: "#111827" }}>
            Services Designed Around Your Needs
          </h2>
        </div>

        {/* Grid */}
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard
              key={s.id}
              service={s}
              onOpenModal={() => setIsModalOpen(true)}
              animIndex={i}
            />
          ))}
        </div>
      </div>

      {isModalOpen && <ATMModal onClose={() => setIsModalOpen(false)} />}

      <style>{`
        /* ── Heading: fade + slide down ── */
        .svc-heading {
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(.22,.68,0,1.2);
          will-change: opacity, transform;
        }
        .svc-heading.svc-heading-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Cards: fade + slide up with scale ── */
        .svc-card {
          background: #F2FBF5;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #d1fae5;
          display: flex;
          flex-direction: column;
          position: relative;
          opacity: 0;
          transform: translateY(40px) scale(0.96);
          transition:
            opacity 0.55s ease var(--svc-delay, 0ms),
            transform 0.55s cubic-bezier(.22,.68,0,1.2) var(--svc-delay, 0ms),
            box-shadow 0.25s ease,
            border-color 0.25s ease;
          will-change: opacity, transform;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .svc-card.svc-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Hover only after card is visible */
        .svc-card:not(.svc-visible):hover {
          transform: translateY(40px) scale(0.96) !important;
        }

        /* ── Grid layout ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr; }
          /* No stagger on mobile */
          .svc-card {
            --svc-delay: 0ms !important;
            transform: translateY(24px) scale(0.97);
          }
          .svc-card:not(.svc-visible):hover {
            transform: translateY(24px) scale(0.97) !important;
          }
        }
      `}</style>
    </section>
  );
}