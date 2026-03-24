"use client";

import { useState } from "react";
import AccountDetailModal, { AccountDetail } from "./AccountDetailModal";

const accounts: (AccountDetail & {
  tag: string;
  tagColor: string;
  desc: string;
  features: string[];
  btn: string;
})[] = [
    {
      tag: "Savings",
      tagColor: "#004C3F",
      title: "ADASHE",
      desc: "Community savings account providing the defined group financial benefits.",
      features: ["Group savings structure", "Flexible contribution amounts", "Encourage financial discipline", "Easy account options", "Secure fund management"],
      btn: "Open Account",
      overview: "Adashe is a community-based savings account that enables groups to pool funds together and achieve collective financial goals. It supports regular contributions and transparent fund management tailored for community groups.",
      benefits: ["Group savings structure", "Flexible contribution amounts", "Encourage financial discipline", "Easy account options", "Secure fund management"],
      requirements: ["Group registration", "Valid IDs of members", "Signed group agreement", "Passport photographs", "BVN of signatories"],
      targetAudience: ["Community groups", "Social clubs", "Cooperatives", "Thrift societies", "Neighbourhood groups"],
    },
    {
      tag: "Current",
      tagColor: "#004C3F",
      title: "Current Account Clubs",
      desc: "Popular current account designed for registered social groups and associations.",
      features: ["Multiple signatories allowed", "Easy fund management", "Mobile access", "Track payment records"],
      btn: "Open Account",
      overview: "Current Account for Clubs enables registered associations to manage funds efficiently, support transactions, and maintain transparency with secure banking solutions tailored for organized groups.",
      benefits: ["Multiple signatories", "Easy fund access", "Transparent records", "Secure deposits", "Transaction support"],
      requirements: ["Registration certificate", "Constitution of club", "Valid IDs of signatories", "Passport photographs", "BVN"],
      targetAudience: ["Registered clubs", "Associations", "Alumni groups", "Alumni groups", "Social organizations"],
    },
    {
      tag: "Current",
      tagColor: "#004C3F",
      title: "Current Account Corporate",
      desc: "Efficient current accounts tailored for corporates and business owners.",
      features: ["Business cheques for support", "Multiple signatories", "Overdraft eligibility", "Detailed statements"],
      btn: "Open Account",
      overview: "Corporate Current Account supports business transactions, providing secure banking, flexible withdrawals, overdraft access, and efficient financial management solutions for registered companies.",
      benefits: ["Business transactions", "Overdraft access", "Multiple signatories", "Secure deposits", "Detailed statements"],
      requirements: ["CAC documents", "Board resolution", "Valid IDs of directors", "Utility bill", "BVN of signatories"],
      targetAudience: ["SMEs", "Registered companies", "Enterprises", "Enterprises", "Corporate organizations"],
    },
    {
      tag: "Current",
      tagColor: "#004C3F",
      title: "Current Account Individual",
      desc: "Reliable current account for individuals providing banking access.",
      features: ["Unlimited transactions", "ATM card priority", "Mobile banking access", "Secure fund storage"],
      btn: "Open Account",
      overview: "Individual Current Account offers flexible transactions, secure deposits, and convenient banking services for customers requiring frequent withdrawals and everyday financial management.",
      benefits: ["Unlimited transactions", "ATM access", "Mobile banking", "Easy transfers", "Secure account"],
      requirements: ["Valid ID", "Passport photographs", "Utility bill", "BVN", "Completed form"],
      targetAudience: ["Traders", "Salary earners", "Professionals", "Business owners", "Individuals"],
    },
    {
      tag: "Current",
      tagColor: "#004C3F",
      title: "Current Account Staff",
      desc: "Specially tailored account designed for corporate staff accounts.",
      features: ["Salary processing", "Minimal transaction fees", "Overdraft facilities", "Mobile banking access"],
      btn: "Open Account",
      overview: "Current Account for Staff provides seamless salary management, overdraft access, and convenient mobile banking solutions designed specifically for employees of registered organizations.",
      benefits: ["Salary processing", "Overdraft access", "Minimal fees", "Mobile banking", "Statement access"],
      requirements: ["Employment letter", "Valid ID", "Passport photographs", "BVN", "Utility bill"],
      targetAudience: ["Company employees", "Organization staff", "Salary earners", "Civil servants", "Professionals"],
    },
    {
      tag: "Deposit",
      tagColor: "#004C3F",
      title: "Long Term Deposit",
      desc: "High-yield deposit account for long-term investment goals.",
      features: ["Attractive interest rates", "Capital protection", "Flexible maturity options", "Secure investment guide"],
      btn: "Open Account",
      overview: "Long Term Deposit account is designed for customers looking to grow their savings over an extended period with attractive fixed interest rates and capital safety guarantees.",
      benefits: ["High interest rates", "Capital protection", "Flexible maturity", "Auto-renewal option", "Secure investment"],
      requirements: ["Valid ID", "Minimum deposit", "Passport photographs", "BVN", "Completed form"],
      targetAudience: ["Investors", "Retirees", "Long-term savers", "Business owners", "Individuals"],
    },
    {
      tag: "Current",
      tagColor: "#004C3F",
      title: "Current Account Micro Female",
      desc: "Specialized micro account supporting female entrepreneurs and business women.",
      features: ["Business transaction support", "Flexible deposits", "Loan access advantage", "Reduced service fees", "Mobile access"],
      btn: "Open Account",
      overview: "Current Account Micro Female is a tailored financial solution empowering women entrepreneurs with easy access to transactions, reduced fees, and preferential loan eligibility.",
      benefits: ["Business transactions", "Loan access", "Reduced fees", "Flexible deposits", "Mobile access"],
      requirements: ["Valid ID", "Passport photographs", "BVN", "Business registration (if any)", "Utility bill"],
      targetAudience: ["Female entrepreneurs", "Market women", "Small business owners", "Female traders", "Women professionals"],
    },
    {
      tag: "Current",
      tagColor: "#004C3F",
      title: "Current Account Micro Male",
      desc: "Dedicated micro account supporting male entrepreneurs and small business owners.",
      features: ["Business transaction and co.", "Loan eligibility", "Easy deposits", "Mobile access"],
      btn: "Open Account",
      overview: "Current Account Micro Male supports male entrepreneurs and small business owners with essential banking services, loan eligibility, and convenient mobile access.",
      benefits: ["Business transactions", "Loan eligibility", "Easy deposits", "Mobile access", "Reduced fees"],
      requirements: ["Valid ID", "Passport photographs", "BVN", "Business registration (if any)", "Utility bill"],
      targetAudience: ["Male entrepreneurs", "Artisans", "Small business owners", "Male traders", "Micro-business operators"],
    },
    {
      tag: "Deposit",
      tagColor: "#004C3F",
      title: "Mandatory Deposit Female",
      desc: "Structured savings plan designed for female customers commitment.",
      features: ["Fixed periodic deposits", "Encourages discipline", "Secure savings growth", "Loan qualification support", "Transparent records"],
      btn: "Open Account",
      overview: "Mandatory Deposit Female is a disciplined savings plan that requires regular contributions, helping female customers build financial habits and qualify for loan products.",
      benefits: ["Fixed deposits", "Loan qualification", "Savings discipline", "Transparent records", "Secure growth"],
      requirements: ["Valid ID", "Passport photographs", "BVN", "Account application form", "Initial deposit"],
      targetAudience: ["Female customers", "Market women", "Women entrepreneurs", "Female salary earners", "Women groups"],
    },
    {
      tag: "Deposit",
      tagColor: "#004C3F",
      title: "Mandatory Deposit Male",
      desc: "Mandatory savings account promoting consistent financial discipline.",
      features: ["Scheduled contributions", "Builds savings habit", "Secure fund keeping", "Loan support advantage", "Easy tracking"],
      btn: "Open Account",
      overview: "Mandatory Deposit Male promotes financial discipline among male customers through scheduled deposits that build savings culture and improve loan eligibility.",
      benefits: ["Scheduled savings", "Loan support", "Financial discipline", "Secure keeping", "Easy tracking"],
      requirements: ["Valid ID", "Passport photographs", "BVN", "Account application form", "Initial deposit"],
      targetAudience: ["Male customers", "Artisans", "Male traders", "Male salary earners", "Entrepreneurs"],
    },
    {
      tag: "Deposit",
      tagColor: "#004C3F",
      title: "Medium Term Deposit",
      desc: "Secure medium-term investment account with competitive interest benefits.",
      features: ["Fixed tenure option", "Attractive returns", "Capital protection", "Flexible renewal", "Safe investment"],
      btn: "Open Account",
      overview: "Medium Term Deposit offers a balanced investment horizon with competitive interest rates and capital protection for customers seeking moderate-term financial growth.",
      benefits: ["Attractive returns", "Capital protection", "Fixed tenure", "Flexible renewal", "Safe investment"],
      requirements: ["Valid ID", "Minimum deposit", "Passport photographs", "BVN", "Completed form"],
      targetAudience: ["Investors", "Salary earners", "Business owners", "SMEs", "Individuals"],
    },
    {
      tag: "Savings",
      tagColor: "#004C3F",
      title: "Savings Account Non-Interest",
      desc: "Non-interest savings account suitable for ethical banking preferences.",
      features: ["No interest earnings", "Secure deposits", "Flexible withdrawals", "Account statements", "Mobile banking access"],
      btn: "Open Account",
      overview: "Savings Account Non-Interest is designed for customers who prefer ethical banking without interest, providing secure deposits, flexible access, and transparent account records.",
      benefits: ["No interest (ethical)", "Secure deposits", "Flexible withdrawals", "Account statements", "Mobile banking"],
      requirements: ["Valid ID", "Passport photographs", "BVN", "Account form", "Utility bill"],
      targetAudience: ["Ethical banking seekers", "Muslim customers", "Individuals", "Groups", "Professionals"],
    },
    {
      tag: "Savings",
      tagColor: "#004C3F",
      title: "Savings Account Clubs",
      desc: "Savings account tailored for clubs and community groups.",
      features: ["Group savings management", "Flexible contributions", "Secure fund storage", "Transparent records", "Easy withdrawals"],
      btn: "Open Account",
      overview: "Savings Account for Clubs is designed for clubs and organized groups to collectively save, manage, and grow their funds with transparent and secure banking solutions.",
      benefits: ["Group management", "Flexible contributions", "Secure storage", "Transparent records", "Easy withdrawals"],
      requirements: ["Club constitution", "Registration certificate", "Signatories' IDs", "Passport photographs", "BVN"],
      targetAudience: ["Social clubs", "Registered groups", "Alumni associations", "Cooperatives", "Community groups"],
    },
    {
      tag: "Deposit",
      tagColor: "#004C3F",
      title: "Savings Account Corporate",
      desc: "Secure savings account designed for corporate organizations.",
      features: ["Business savings option", "Interest earnings", "Secure deposits", "Easy monitoring", "Statement access"],
      btn: "Open Account",
      overview: "Savings Account Corporate provides businesses with a secure, interest-bearing savings solution that supports cash management, financial planning, and business growth.",
      benefits: ["Interest earnings", "Secure deposits", "Business savings", "Easy monitoring", "Statement access"],
      requirements: ["CAC documents", "Board resolution", "Directors' IDs", "Utility bill", "BVN of signatories"],
      targetAudience: ["SMEs", "Registered companies", "Enterprises", "Corporate organizations", "NGOs"],
    },
    {
      tag: "Savings",
      tagColor: "#004C3F",
      title: "Short Term Deposit",
      desc: "Short-term fixed deposit account with competitive returns.",
      features: ["Fixed short tenure", "Attractive interest", "Capital safety", "Flexible maturity", "Secure investment"],
      btn: "Open Account",
      overview: "Short Term Deposit allows customers to park their funds for a brief period while earning attractive interest rates, with capital safety and flexible maturity options.",
      benefits: ["Attractive interest", "Capital safety", "Flexible maturity", "Short tenure", "Secure investment"],
      requirements: ["Valid ID", "Minimum deposit", "Passport photographs", "BVN", "Completed form"],
      targetAudience: ["Short-term investors", "Salary earners", "Traders", "Business owners", "Individuals"],
    },
    {
      tag: "Savings",
      tagColor: "#004C3F",
      title: "Savings Account Individual",
      desc: "Personal savings account for secure and steady financial growth.",
      features: ["Interest earnings", "Easy deposits", "Flexible withdrawals", "ATM access", "Mobile banking"],
      btn: "Open Account",
      overview: "Savings Account Individual is a straightforward personal savings solution with interest earnings, ATM access, and mobile banking designed for individuals seeking steady financial growth.",
      benefits: ["Interest earnings", "Easy deposits", "Flexible withdrawals", "ATM access", "Mobile banking"],
      requirements: ["Valid ID", "Passport photographs", "BVN", "Utility bill", "Completed form"],
      targetAudience: ["Individuals", "Students", "Salary earners", "Traders", "Professionals"],
    },
  ];

function AccountCard({
  account,
  onOpenModal,
}: {
  account: typeof accounts[0];
  onOpenModal: (account: AccountDetail) => void;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid #e5e7eb",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        display: "flex",
        position: "relative",
      }}
    >
      {/* LEFT: coin jar image */}
      <div
        style={{
          width: 120,
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="/coin-jar.png"
          alt="Savings jar"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>

      {/* RIGHT: text + button */}
      <div style={{ flex: 1, padding: "1.1rem 1.1rem 1.1rem", display: "flex", flexDirection: "column" }}>
        {/* Tag top-right */}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: account.tagColor,
            color: "#fff",
            fontSize: "0.6rem",
            fontWeight: 700,
            padding: "2px 10px",
            borderRadius: 999,
            zIndex: 2,
          }}
        >
          {account.tag}
        </div>

        <h3
          style={{
            fontSize: "0.85rem",
            fontWeight: 800,
            color: "#111827",
            marginBottom: "0.35rem",
            paddingRight: "3.5rem",
            lineHeight: 1.3,
          }}
        >
          {account.title}
        </h3>
        <p
          style={{
            fontSize: "0.68rem",
            color: "#6b7280",
            lineHeight: 1.6,
            marginBottom: "0.65rem",
          }}
        >
          {account.desc}
        </p>

        {/* Bullet features */}
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            flex: 1,
          }}
        >
          {account.features.map((f, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#29B909",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "0.67rem", color: "#374151" }}>{f}</span>
            </li>
          ))}
        </ul>

        {/* Open Account Button */}
        <div style={{ marginTop: "0.85rem" }}>
          <button
            onClick={() => onOpenModal(account)}
            style={{
              display: "block",
              width: "100%",
              background: "#29B909",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.72rem",
              padding: "0.5rem 0",
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              textAlign: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#22a006"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#29B909"; }}
          >
            {account.btn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AccountsGrid() {
  const [selectedAccount, setSelectedAccount] = useState<AccountDetail | null>(null);

  return (
    <>
      <section style={{ background: "#fff", padding: "2rem 1rem 3rem" }}>
          <div className="accounts-grid">
            {accounts.map((account, i) => (
              <AccountCard
                key={i}
                account={account}
                onOpenModal={setSelectedAccount}
              />
            ))}
          </div>
      </section>

      <AccountDetailModal
        account={selectedAccount}
        onClose={() => setSelectedAccount(null)}
      />

      <style>{`
        .accounts-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1.25rem;
        }
        @media (max-width: 900px) {
          .accounts-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .accounts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}