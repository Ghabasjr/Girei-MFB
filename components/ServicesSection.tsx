"use client";

function AccountMockup() {
  return (
    <div style={{ background: "#fff", borderRadius: 10, padding: "10px 12px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", width: 145, position: "relative", zIndex: 3 }}>
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
    <div style={{ background: "#fff", borderRadius: 10, padding: "10px 12px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", width: 148, position: "relative", zIndex: 3 }}>
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
    <div style={{ background: "#fff", borderRadius: 10, padding: "10px 12px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", width: 140, position: "relative", zIndex: 3 }}>
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
    <div style={{ background: "linear-gradient(135deg,#1a7a3a,#29B909)", borderRadius: 12, padding: "12px 14px", boxShadow: "0 8px 24px rgba(0,0,0,0.25)", width: 155, position: "relative", zIndex: 3 }}>
      {/* top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }} />
          <span style={{ fontSize: "0.62rem", fontWeight: 800, color: "#fff" }}>GIREI</span>
        </div>
        {/* wifi symbol */}
        <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.8)" }}>◉</div>
      </div>
      {/* chip */}
      <div style={{ width: 22, height: 16, background: "rgba(255,255,255,0.35)", borderRadius: 3, marginBottom: 10 }} />
      {/* card number */}
      <div style={{ fontSize: "0.55rem", fontWeight: 700, color: "#fff", letterSpacing: "0.12em", marginBottom: 10 }}>A.S. ABUBAKAR  12/00</div>
      {/* mastercard circles */}
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
    <div style={{ background: "#fff", borderRadius: 10, padding: "10px 12px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", width: 150, position: "relative", zIndex: 3 }}>
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
    <div style={{ background: "#fff", borderRadius: 10, padding: "10px 12px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", width: 145, position: "relative", zIndex: 3 }}>
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

const mockups = {
  account: <AccountMockup />,
  loan: <LoanMockup />,
  savings: <SavingsMockup />,
  atm: <ATMMockup />,
  mobile: <MobileMockup />,
  pos: <POSMockup />,
};

const services = [
  { id: "account", title: "Account", btnText: "Open An Account", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80", imagePos: "center top", description: "Take control of your finances with flexible and secure accounts built for both individuals and businesses. Whether it's savings, current, or fixed deposit accounts, managing your money has never been easier." },
  { id: "loan", title: "Loan", btnText: "Apply For Loan", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80", imagePos: "center center", description: "Get fast, dependable loans with repayment plans that fit your needs. Whether it's for personal use, business growth, or a specific project, our loan options are built to support you." },
  { id: "savings", title: "Savings", btnText: "Start Savings", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", imagePos: "center center", description: "Our savings products are designed to encourage financial discipline, promote stability, and help individuals, families, and businesses achieve their short- and long-term financial goals securely." },
  { id: "atm", title: "ATM Card", btnText: "Request ATM", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80", imagePos: "center center", description: "Access your funds anytime, anywhere with our secure and convenient ATM card, designed to make withdrawals, payments, and everyday transactions fast, easy, and reliable." },
  { id: "mobile", title: "Mobile Banking", btnText: "See Features", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80", imagePos: "center center", description: "Manage your finances conveniently with our secure mobile banking service, allowing you to transfer funds, check balances, pay bills, and perform transactions anytime, anywhere." },
  { id: "pos", title: "POS Services", btnText: "Request POS", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", imagePos: "center center", description: "Our POS services provide secure, fast, and convenient payment solutions for businesses, enabling seamless transactions and improving customer experience." },
];

function ServiceCard({ service }: any) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      overflow: "hidden",
      border: "1px solid #d1fae5",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      transition: "transform 0.25s, box-shadow 0.25s",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.12)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
    >
      {/* ── Image area with light green bg ── */}
      <div style={{
        background: "#e8f9f0",
        position: "relative",
        minHeight: 185,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        <img src={service.image} alt={service.title} style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: service.imagePos, opacity: 0.5,
        }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          {mockups[service.id]}
        </div>
      </div>

      {/* ── Text content ── */}
      <div style={{
        padding: "1rem 1.1rem 1.4rem", flex: 1, display: "flex", flexDirection: "column",
        /* concave bottom-right corner via clip-path */
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)",
        position: "relative",
      }}>
        <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#111827", marginBottom: "0.45rem" }}>
          {service.title}
        </h3>
        <p style={{ fontSize: "0.75rem", color: "#6b7280", lineHeight: 1.65, marginBottom: "1rem", flex: 1 }}>
          {service.description}
        </p>

        {/* Footer row */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          {/* Filled green button */}
          <a href="#" style={{
            flex: 1,
            display: "block",
            background: "#29B909",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.72rem",
            padding: "0.5rem 0",
            borderRadius: "999px",
            textDecoration: "none",
            textAlign: "center",
            transition: "background 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#22a006"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#29B909"; }}
          >
            {service.btnText}
          </a>

          {/* Outlined circle with ✦ star — sits in the concave notch */}
          <div style={{
            width: 32, height: 32,
            borderRadius: "50%",
            border: "1.5px solid #29B909",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#29B909",
            fontSize: "0.8rem",
            flexShrink: 0,
            cursor: "pointer",
          }}>
            ✦
          </div>
        </div>
      </div>

      {/* ── Concave quarter-circle cutout bottom-right ── */}
      <div style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 36,
        height: 36,
        background: "#f0fdf4",
        borderTopLeftRadius: "100%",
        pointerEvents: "none",
      }} />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: "4rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#111827" }}>
            Services Designed Around Your Needs
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {services.map(s => <ServiceCard key={s.id} service={s} />)}
        </div>
      </div>
    </section>
  );
}