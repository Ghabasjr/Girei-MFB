"use client";

import { useState, useRef, useEffect } from "react";
import LoanDetailModal, { LoanDetail } from "./LoanDetailModal";

const loans: (LoanDetail & {
  description: string;
  image: string;
  features: string[];
})[] = [
    {
      title: "Agric Loan",
      description: "Flexible financing supporting farmers and agricultural production growth needs.",
      image: "/hausa.png",
      features: ["Farm input funding", "Equipment purchase support", "Working capital access", "Seasonal repayment options", "Business expansion support"],
      overview: "Agric Loan provides financial support to farmers for crop production, farm inputs, and equipment purchase, promoting increased productivity and sustainable agricultural development.",
      benefits: ["Farm input financing", "Equipment purchase", "Seasonal repayment", "Working capital", "Production support"],
      requirements: ["Valid ID", "BVN", "Passport photographs", "Farm inspection report", "Guarantor"],
      targetAudience: ["Crop farmers", "Rural farmers", "Agribusiness owners", "Cooperatives", "Smallholder farmers"],
    },
    {
      title: "Building Loan",
      description: "Structured financing solution for residential and commercial building projects.",
      image: "/hausa2.png",
      features: ["Construction funding", "Flexible repayment", "Project support", "Progressive disbursement", "Secure financing"],
      overview: "Building Loan provides structured financing to individuals and organizations for residential and commercial construction, with progressive disbursement that aligns with project milestones.",
      benefits: ["Construction funding", "Progressive disbursement", "Project milestone support", "Flexible repayment", "Secure financing"],
      requirements: ["Valid ID", "BVN", "Building plan approval", "Land documents", "Guarantor"],
      targetAudience: ["Homeowners", "Real estate developers", "Construction firms", "Individuals", "Corporate bodies"],
    },
    {
      title: "Business Loan",
      description: "Accessible funding designed to support business growth and expansion.",
      image: "/hausa3.png",
      features: ["Working capital", "Inventory purchase", "Business expansion", "Flexible repayment", "Quick processing"],
      overview: "Business Loan enables entrepreneurs and business owners to access funding for working capital, inventory, and expansion needs with fast processing and flexible repayment terms.",
      benefits: ["Working capital access", "Inventory purchase", "Business expansion", "Flexible repayment", "Quick processing"],
      requirements: ["Valid ID", "BVN", "Business registration", "Bank statements (6 months)", "Guarantor"],
      targetAudience: ["SMEs", "Entrepreneurs", "Business owners", "Traders", "Retailers"],
    },
    {
      title: "Education Loan",
      description: "Financial support for tuition and educational related expenses.",
      image: "/hausa4.png",
      features: ["School fees payment", "Flexible repayment", "Quick approval", "Secure funding", "Education support"],
      overview: "Education Loan helps families and individuals cover tuition, school fees, and other educational expenses with ease, ensuring learning is never interrupted due to financial constraints.",
      benefits: ["School fees payment", "Quick approval", "Flexible repayment", "Secure funding", "Education continuity"],
      requirements: ["Valid ID", "BVN", "Admission letter", "Passport photographs", "Guarantor"],
      targetAudience: ["Students", "Parents", "Guardians", "Education seekers", "Sponsored learners"],
    },
    {
      title: "Enterprise Loan",
      description: "Growth-focused financing tailored for established and expanding enterprises.",
      image: "/hausa5.png",
      features: ["Business expansion", "Equipment purchase", "Structured repayment", "Working capital", "Growth support"],
      overview: "Enterprise Loan offers growth-focused financing designed for established businesses looking to expand operations, procure equipment, and manage working capital with structured repayment plans.",
      benefits: ["Business expansion funding", "Equipment purchase", "Structured repayment", "Working capital", "Growth support"],
      requirements: ["Valid ID", "BVN", "CAC documents", "2 years financial statements", "Guarantor"],
      targetAudience: ["Established enterprises", "Manufacturing firms", "Trading companies", "Service businesses", "Corporate SMEs"],
    },
    {
      title: "FAM-INPUT",
      description: "Specialized loan supporting family agricultural input financing needs.",
      image: "/hausa6.png",
      features: ["Seeds purchase", "Fertilizer funding", "Farm tools", "Seasonal repayment", "Production support"],
      overview: "FAM-INPUT is a family agricultural input loan designed to help farmers access essential inputs like seeds, fertilizers, and tools, with seasonal repayment aligned to harvest cycles.",
      benefits: ["Seeds purchase support", "Fertilizer funding", "Farm tools access", "Seasonal repayment", "Production boost"],
      requirements: ["Valid ID", "BVN", "Farm ownership proof", "Passport photographs", "Guarantor"],
      targetAudience: ["Family farmers", "Smallholder farmers", "Rural households", "Agric cooperatives", "Subsistence farmers"],
    },
    {
      title: "Medium Scale Loan (F)",
      description: "Empowering women entrepreneurs with medium-scale business financing solutions.",
      image: "/hausa7.png",
      features: ["Business capital", "Expansion funding", "Flexible repayment", "Growth support", "Financial inclusion"],
      overview: "Medium Scale Loan (F) is a targeted financing product empowering women entrepreneurs to scale their businesses with capital, expansion funding, and flexible repayment structures promoting financial inclusion.",
      benefits: ["Business capital access", "Expansion funding", "Flexible repayment", "Financial inclusion", "Growth support"],
      requirements: ["Valid ID", "BVN", "Business registration", "Passport photographs", "Guarantor"],
      targetAudience: ["Women entrepreneurs", "Female business owners", "Market women", "Female traders", "Women cooperatives"],
    },
    {
      title: "Irrigation Loan",
      description: "Interest-free support for irrigation and water management projects.",
      image: "/hausa8.png",
      features: ["Irrigation equipment", "Water systems", "Farm productivity", "Flexible tenure", "Agricultural support"],
      overview: "Irrigation Loan supports farmers in acquiring irrigation equipment and water management systems to enhance farm productivity and ensure year-round agricultural output.",
      benefits: ["Irrigation equipment funding", "Water system support", "Farm productivity boost", "Flexible tenure", "Agric support"],
      requirements: ["Valid ID", "BVN", "Farm documents", "Irrigation plan", "Guarantor"],
      targetAudience: ["Dry-season farmers", "Crop farmers", "Agric cooperatives", "Rural farmers", "Irrigation scheme members"],
    },
    {
      title: "Livestock Finance",
      description: "Financing solution supporting livestock farming and animal production.",
      image: "/hausa9.png",
      features: ["Livestock purchase", "Feed supply funding", "Farm expansion", "Working capital", "Production growth"],
      overview: "Livestock Finance enables farmers to purchase animals, fund feed supply, and expand livestock operations with working capital support that drives production growth.",
      benefits: ["Livestock purchase", "Feed funding", "Farm expansion", "Working capital", "Production growth"],
      requirements: ["Valid ID", "BVN", "Farm ownership proof", "Livestock plan", "Guarantor"],
      targetAudience: ["Livestock farmers", "Poultry farmers", "Cattle rearers", "Dairy farmers", "Agric entrepreneurs"],
    },
    {
      title: "Micro-Agric Loan",
      description: "Small-scale agricultural financing for micro farmers and producers.",
      image: "/hausa10.png",
      features: ["Farm inputs", "Seasonal repayment", "Quick access", "Production support", "Micro-farm growth"],
      overview: "Micro-Agric Loan offers accessible small-scale agricultural financing for micro farmers, ensuring quick access to farm inputs and production support with seasonal repayment flexibility.",
      benefits: ["Farm input access", "Seasonal repayment", "Quick loan access", "Production support", "Micro-farm growth"],
      requirements: ["Valid ID", "BVN", "Farm description", "Passport photographs", "Guarantor"],
      targetAudience: ["Micro farmers", "Kitchen gardeners", "Subsistence farmers", "Rural producers", "Youth in agriculture"],
    },
    {
      title: "Medical Loan",
      description: "Financial assistance for urgent medical and healthcare expenses.",
      image: "/hausa11.png",
      features: ["Hospital bills", "Medical procedures", "Drug purchase", "Quick processing", "Emergency support"],
      overview: "Medical Loan provides fast financial assistance to cover hospital bills, medical procedures, drug purchases, and other urgent healthcare expenses for individuals and families.",
      benefits: ["Hospital bill cover", "Medical procedures", "Drug purchase support", "Quick processing", "Emergency relief"],
      requirements: ["Valid ID", "BVN", "Medical invoice/referral", "Passport photographs", "Guarantor"],
      targetAudience: ["Individuals", "Families", "Employees", "Low-income earners", "Emergency cases"],
    },
    {
      title: "M-Farm Loan",
      description: "Dedicated financing supporting male farmers agricultural activities.",
      image: "/hausa12.png",
      features: ["Farm inputs", "Equipment purchase", "Seasonal repayment", "Working capital", "Productivity support"],
      overview: "M-Farm Loan is a dedicated agricultural financing product supporting male farmers in accessing inputs, equipment, and working capital to improve farm productivity and output.",
      benefits: ["Farm input funding", "Equipment purchase", "Seasonal repayment", "Working capital", "Productivity support"],
      requirements: ["Valid ID", "BVN", "Farm documents", "Passport photographs", "Guarantor"],
      targetAudience: ["Male farmers", "Crop producers", "Agric cooperatives", "Farm laborers", "Rural entrepreneurs"],
    },
    {
      title: "Medium Scale Loan",
      description: "Business financing for growing medium-scale enterprises expansion.",
      image: "/hausa13.png",
      features: ["Expansion capital", "Equipment funding", "Structured repayment", "Growth support", "Flexible terms"],
      overview: "Medium Scale Loan provides medium-sized businesses with the capital needed for expansion, equipment procurement, and structured growth with flexible repayment terms.",
      benefits: ["Expansion capital", "Equipment funding", "Structured repayment", "Growth support", "Flexible loan terms"],
      requirements: ["Valid ID", "BVN", "Business CAC docs", "6-month bank statement", "Guarantor"],
      targetAudience: ["Medium enterprises", "Growing businesses", "Manufacturing firms", "Trading companies", "Service providers"],
    },
    {
      title: "Rearing Loan",
      description: "Specialized financing for livestock and poultry rearing businesses.",
      image: "/hausa14.png",
      features: ["Animal purchase", "Feed funding", "Farm expansion", "Working capital", "Production support"],
      overview: "Rearing Loan specializes in financing livestock and poultry rearing businesses, providing capital for animal purchase, feed supply, and farm expansion with strong production support.",
      benefits: ["Animal purchase funding", "Feed supply support", "Farm expansion", "Working capital", "Production growth"],
      requirements: ["Valid ID", "BVN", "Farm inspection report", "Passport photographs", "Guarantor"],
      targetAudience: ["Poultry farmers", "Livestock rearers", "Agric entrepreneurs", "Food producers", "Rural farmers"],
    },
    {
      title: "Small Scale Loan (F)",
      description: "Micro-credit solution empowering women entrepreneurs business growth.",
      image: "/hausa15.png",
      features: ["Small capital", "Quick approval", "Flexible repayment", "Business support", "Financial inclusion"],
      overview: "Small Scale Loan (F) is a micro-credit product designed to empower women at the grassroots level by providing accessible financing, quick approval, and flexible repayment for business growth.",
      benefits: ["Business capital access", "Quick loan approval", "Flexible repayment", "Business support", "Financial inclusion"],
      requirements: ["Valid ID", "BVN", "Passport photographs", "Group membership (optional)", "Guarantor"],
      targetAudience: ["Women entrepreneurs", "Market traders", "Female artisans", "Female smallholders", "Women cooperatives"],
    },
    {
      title: "Small Scale Loan (Male)",
      description: "Micro-credit designed for male small business operators growth.",
      image: "/hausa16.png",
      features: ["Startup capital", "Quick processing", "Flexible repayment", "Business support", "Expansion funding"],
      overview: "Small Scale Loan (Male) provides male small business operators with startup capital, fast loan processing, and flexible repayment options to fuel business growth and expansion.",
      benefits: ["Startup capital", "Quick processing", "Flexible repayment", "Business support", "Expansion funding"],
      requirements: ["Valid ID", "BVN", "Passport photographs", "Business description", "Guarantor"],
      targetAudience: ["Male entrepreneurs", "Artisans", "Male traders", "Young business owners", "Micro-business operators"],
    },
    {
      title: "Staff Loan",
      description: "Exclusive loan facility designed for bank staff members.",
      image: "/hausa17.png",
      features: ["Salary-backed repayment", "Quick approval", "Flexible terms", "Emergency support", "Internal benefit"],
      overview: "Staff Loan is an exclusive financial benefit for bank employees, offering salary-backed repayment, fast approval, and flexible terms for personal and emergency financial needs.",
      benefits: ["Salary-backed repayment", "Quick approval", "Flexible loan terms", "Emergency support", "Staff-only benefit"],
      requirements: ["Staff ID", "Employment letter", "Payslip", "BVN", "HR endorsement"],
      targetAudience: ["Bank employees", "Branch staff", "Head office staff", "Contract staff", "Staff on confirmed appointment"],
    },
    {
      title: "Solar Energy Loan",
      description: "Financing solution supporting solar power installation projects.",
      image: "/hausa18.png",
      features: ["Solar system purchase", "Energy access", "Flexible repayment", "Long tenure", "Sustainable solution"],
      overview: "Solar Energy Loan finances the purchase and installation of solar power systems for homes and businesses, enabling energy independence with long tenure and flexible repayment.",
      benefits: ["Solar system funding", "Energy access support", "Long repayment tenure", "Flexible terms", "Sustainable solution"],
      requirements: ["Valid ID", "BVN", "Solar installation quote", "Passport photographs", "Guarantor"],
      targetAudience: ["Homeowners", "Small businesses", "Rural households", "Schools", "Healthcare facilities"],
    },
  ];

function LoanCard({
  loan,
  onOpenModal,
  animIndex,
}: {
  loan: typeof loans[0];
  onOpenModal: (loan: LoanDetail) => void;
  animIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("lc-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="lc-card"
      style={{ "--lc-delay": `${animIndex * 50}ms` } as React.CSSProperties}
    >
      <div className="lc-img-wrap" style={{ overflow: "hidden", height: 180 }}>
        <img
          src={loan.image}
          alt={loan.title}
          className="lc-img"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div
        style={{
          padding: "18px 18px 20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>
          {loan.title}
        </h3>
        <p style={{ fontSize: 12.5, color: "#6b7280", margin: "0 0 14px", lineHeight: 1.6 }}>
          {loan.description}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 7,
            marginBottom: 20,
            flex: 1,
          }}
        >
          {loan.features.map((feature, j) => (
            <div
              key={j}
              className="feature-row"
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "#374151" }}
            >
              <span className="dot-anim-wrap" style={{ display: "inline-flex", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#29B909" fillOpacity="0.15" />
                  <path d="M5 8l2 2 4-4" stroke="#29B909" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {feature}
            </div>
          ))}
        </div>
        <button
          className="lc-btn"
          onClick={() => onOpenModal(loan)}
        >
          Apply For Loan
        </button>
      </div>
    </div>
  );
}

export default function LoanSection() {
  const [selectedLoan, setSelectedLoan] = useState<LoanDetail | null>(null);

  return (
    <>
      <div style={{ background: "#f0f4f0", padding: "48px 1.5rem", fontFamily: "sans-serif" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div
            style={{
              display: "inline-block",
              border: "1.5px solid #111827",
              borderRadius: 999,
              padding: "7px 22px",
              fontSize: 13,
              fontWeight: 500,
              color: "#111827",
              marginBottom: 20,
            }}
          >
            Why choose our Bank
          </div>
          <h2
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.35,
              margin: 0,
            }}
          >
            Join Girei Microfinance Bank and experience trusted
            <br className="loan-heading-br" />
            community banking built for you.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="loan-grid">
          {loans.map((loan, i) => (
            <LoanCard key={i} loan={loan} onOpenModal={setSelectedLoan} animIndex={i} />
          ))}
        </div>
      </div>

      <LoanDetailModal loan={selectedLoan} onClose={() => setSelectedLoan(null)} />

      <style>{`
        .loan-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 960px;
          margin: 0 auto;
        }
        @media (max-width: 900px) {
          .loan-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .loan-grid {
            grid-template-columns: 1fr;
          }
          .loan-heading-br {
            display: none;
          }
        }

        /* ── Card base (hidden before scroll) ── */
        .lc-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          position: relative;
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity 0.55s ease var(--lc-delay, 0ms),
            transform 0.55s cubic-bezier(.22,.68,0,1.2) var(--lc-delay, 0ms),
            box-shadow 0.28s ease,
            border-color 0.28s ease;
          will-change: opacity, transform;
        }

        /* ── Visible state (added by IntersectionObserver) ── */
        .lc-card.lc-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Hover: lift + green glow shadow ── */
        .lc-card:hover {
          box-shadow:
            0 8px 32px rgba(41,185,9,0.15),
            0 2px 8px rgba(0,0,0,0.08);
          border-color: #c3f5b0;
          transform: translateY(-5px);
        }
        .lc-card:not(.lc-visible):hover {
          transform: translateY(36px);
        }
        .lc-card.lc-visible:hover {
          transform: translateY(-5px);
        }

        /* ── Image scaling on hover ── */
        .lc-img {
          transition: transform 0.4s ease;
        }
        .lc-card:hover .lc-img {
          transform: scale(1.05);
        }

        /* ── Open Account button with shimmer ── */
        .lc-btn {
          display: block;
          width: 100%;
          position: relative;
          overflow: hidden;
          background: #29B909;
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          padding: 12px 0;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          text-align: center;
          transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .lc-btn::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transition: left 0.45s ease;
        }
        .lc-btn:hover::after {
          left: 150%;
        }
        .lc-btn:hover {
          background: #22a006;
          transform: scale(1.03);
          box-shadow: 0 4px 16px rgba(41,185,9,0.35);
        }
        .lc-btn:active {
          transform: scale(0.97);
        }
        
        /* ── Feature dot pulse on hover ── */
        @keyframes lc-dot-pop {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.7); }
          100% { transform: scale(1); }
        }
        .lc-card:hover .feature-row .dot-anim-wrap {
          animation: lc-dot-pop 0.4s ease;
        }
      `}</style>
    </>
  );
}