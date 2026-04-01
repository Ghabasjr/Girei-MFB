"use client";

import { useState } from "react";
import AccountDetailModal, { AccountDetail } from "./AccountDetailModal";

const accountSVGs: Record<string, string> = {
  "ADASHE": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#e6f9e0"/>
    <circle cx="30" cy="36" r="8" fill="#29B909"/>
    <path d="M18 56c0-7 5-11 12-11s12 4 12 11" fill="#004C3F"/>
    <circle cx="60" cy="36" r="8" fill="#29B909"/>
    <path d="M48 56c0-7 5-11 12-11s12 4 12 11" fill="#004C3F"/>
    <circle cx="45" cy="30" r="8" fill="#22a006"/>
    <path d="M33 52c0-7 5-11 12-11s12 4 12 11" fill="#003830"/>
    <circle cx="45" cy="68" r="9" fill="#FFD700" stroke="#FFA500" stroke-width="1.5"/>
    <text x="45" y="73" text-anchor="middle" font-size="10" fill="#7a5c00" font-weight="bold">₦</text>
  </svg>`,

  "Current Account Clubs": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#e0f0ff"/>
    <rect x="20" y="50" width="50" height="25" rx="3" fill="#004C3F"/>
    <rect x="28" y="42" width="34" height="12" rx="2" fill="#006655"/>
    <polygon points="45,18 15,42 75,42" fill="#29B909"/>
    <circle cx="37" cy="36" r="2.5" fill="#FFD700"/>
    <circle cx="45" cy="30" r="2.5" fill="#FFD700"/>
    <circle cx="53" cy="36" r="2.5" fill="#FFD700"/>
    <rect x="39" y="60" width="12" height="15" rx="2" fill="#FFD700"/>
  </svg>`,

  "Current Account Corporate": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#eaf4ff"/>
    <rect x="30" y="20" width="30" height="55" rx="3" fill="#004C3F"/>
    <rect x="34" y="25" width="6" height="6" rx="1" fill="#7dd3fc"/>
    <rect x="44" y="25" width="6" height="6" rx="1" fill="#7dd3fc"/>
    <rect x="34" y="35" width="6" height="6" rx="1" fill="#7dd3fc"/>
    <rect x="44" y="35" width="6" height="6" rx="1" fill="#7dd3fc"/>
    <rect x="34" y="45" width="6" height="6" rx="1" fill="#29B909"/>
    <rect x="44" y="45" width="6" height="6" rx="1" fill="#29B909"/>
    <rect x="34" y="55" width="6" height="6" rx="1" fill="#7dd3fc"/>
    <rect x="44" y="55" width="6" height="6" rx="1" fill="#7dd3fc"/>
    <rect x="40" y="64" width="10" height="11" rx="1" fill="#FFD700"/>
    <rect x="10" y="52" width="18" height="13" rx="3" fill="#29B909"/>
    <rect x="14" y="49" width="10" height="5" rx="2" fill="#004C3F"/>
  </svg>`,

  "Current Account Individual": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#f0fdf4"/>
    <circle cx="45" cy="28" r="12" fill="#29B909"/>
    <path d="M25 70c0-11 9-18 20-18s20 7 20 18" fill="#004C3F"/>
    <rect x="24" y="60" width="42" height="24" rx="4" fill="#004C3F"/>
    <rect x="28" y="65" width="14" height="10" rx="2" fill="#FFD700"/>
    <line x1="30" y1="79" x2="62" y2="79" stroke="#29B909" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  "Current Account Staff": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#fef9e7"/>
    <rect x="25" y="20" width="40" height="52" rx="5" fill="#004C3F"/>
    <rect x="35" y="14" width="20" height="10" rx="5" fill="#29B909"/>
    <circle cx="45" cy="40" r="10" fill="#e5e7eb"/>
    <path d="M32 60c0-7 6-12 13-12s13 5 13 12" fill="#006655"/>
    <rect x="33" y="64" width="24" height="4" rx="2" fill="#29B909"/>
    <circle cx="62" cy="22" r="8" fill="#FFD700"/>
    <text x="62" y="26" text-anchor="middle" font-size="10" fill="#7a5c00">★</text>
  </svg>`,

  "Long Term Deposit": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#fdf8e1"/>
    <rect x="40" y="60" width="10" height="18" rx="2" fill="#8B5E3C"/>
    <line x1="45" y1="60" x2="45" y2="30" stroke="#29B909" stroke-width="3"/>
    <ellipse cx="35" cy="45" rx="12" ry="7" fill="#29B909" transform="rotate(-20 35 45)"/>
    <ellipse cx="55" cy="38" rx="12" ry="7" fill="#22a006" transform="rotate(20 55 38)"/>
    <ellipse cx="45" cy="28" rx="10" ry="7" fill="#004C3F"/>
    <ellipse cx="45" cy="75" rx="16" ry="5" fill="#FFD700"/>
    <ellipse cx="45" cy="72" rx="16" ry="5" fill="#FFC300"/>
    <text x="45" y="75" text-anchor="middle" font-size="9" fill="#7a5c00" font-weight="bold">₦₦₦</text>
  </svg>`,

  "Current Account Micro Female": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#fce4f0"/>
    <circle cx="45" cy="26" r="11" fill="#e91e8c"/>
    <path d="M28 65c0-10 8-16 17-16s17 6 17 16" fill="#004C3F"/>
    <path d="M33 49 Q45 75 57 49" fill="#e91e8c" opacity="0.6"/>
    <rect x="58" y="52" width="18" height="13" rx="4" fill="#FFD700"/>
    <path d="M62 52 Q67 46 72 52" stroke="#FFA500" stroke-width="2" fill="none"/>
    <circle cx="22" cy="30" r="7" fill="#e91e8c" opacity="0.3"/>
    <text x="22" y="34" text-anchor="middle" font-size="10" fill="#e91e8c">♀</text>
  </svg>`,

  "Current Account Micro Male": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#e8f4fd"/>
    <circle cx="45" cy="26" r="11" fill="#1565C0"/>
    <path d="M28 65c0-10 8-16 17-16s17 6 17 16" fill="#004C3F"/>
    <rect x="36" y="49" width="18" height="14" rx="2" fill="#1565C0"/>
    <rect x="43" y="49" width="4" height="14" fill="#fff" opacity="0.4"/>
    <rect x="60" y="52" width="16" height="12" rx="3" fill="#004C3F"/>
    <rect x="64" y="49" width="8" height="4" rx="2" fill="#006655"/>
    <circle cx="20" cy="30" r="7" fill="#1565C0" opacity="0.2"/>
    <text x="20" y="34" text-anchor="middle" font-size="10" fill="#1565C0">♂</text>
  </svg>`,

  "Mandatory Deposit Female": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#fce4f0"/>
    <ellipse cx="45" cy="52" rx="22" ry="18" fill="#e91e8c" opacity="0.8"/>
    <circle cx="60" cy="46" r="8" fill="#e91e8c"/>
    <ellipse cx="24" cy="48" rx="5" ry="7" fill="#c2185b"/>
    <circle cx="57" cy="44" r="2" fill="#fff"/>
    <circle cx="57" cy="44" r="1" fill="#333"/>
    <rect x="37" y="36" width="16" height="3" rx="1.5" fill="#333"/>
    <circle cx="45" cy="29" r="7" fill="#FFD700"/>
    <text x="45" y="33" text-anchor="middle" font-size="9" fill="#7a5c00" font-weight="bold">₦</text>
    <rect x="32" y="67" width="6" height="10" rx="3" fill="#c2185b"/>
    <rect x="42" y="67" width="6" height="10" rx="3" fill="#c2185b"/>
    <rect x="52" y="67" width="6" height="10" rx="3" fill="#c2185b"/>
  </svg>`,

  "Mandatory Deposit Male": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#e8f4fd"/>
    <ellipse cx="45" cy="52" rx="22" ry="18" fill="#1565C0" opacity="0.8"/>
    <circle cx="60" cy="46" r="8" fill="#1565C0"/>
    <ellipse cx="24" cy="48" rx="5" ry="7" fill="#0d47a1"/>
    <circle cx="57" cy="44" r="2" fill="#fff"/>
    <circle cx="57" cy="44" r="1" fill="#333"/>
    <rect x="37" y="36" width="16" height="3" rx="1.5" fill="#333"/>
    <circle cx="45" cy="29" r="7" fill="#FFD700"/>
    <text x="45" y="33" text-anchor="middle" font-size="9" fill="#7a5c00" font-weight="bold">₦</text>
    <rect x="32" y="67" width="6" height="10" rx="3" fill="#0d47a1"/>
    <rect x="42" y="67" width="6" height="10" rx="3" fill="#0d47a1"/>
    <rect x="52" y="67" width="6" height="10" rx="3" fill="#0d47a1"/>
  </svg>`,

  "Medium Term Deposit": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#e8fdf0"/>
    <path d="M30 18 L60 18 L50 45 L30 45 Z" fill="#004C3F"/>
    <path d="M50 45 L60 72 L30 72 L40 45 Z" fill="#29B909"/>
    <rect x="27" y="15" width="36" height="5" rx="2" fill="#004C3F"/>
    <rect x="27" y="70" width="36" height="5" rx="2" fill="#004C3F"/>
    <circle cx="39" cy="62" r="4" fill="#FFD700"/>
    <circle cx="51" cy="62" r="4" fill="#FFD700"/>
    <circle cx="45" cy="57" r="4" fill="#FFC300"/>
  </svg>`,

  "Savings Account Non-Interest": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#f0fdf4"/>
    <path d="M55 22 A22 22 0 1 0 55 68 A14 14 0 1 1 55 22Z" fill="#004C3F"/>
    <polygon points="68,35 70,41 76,41 71,45 73,51 68,47 63,51 65,45 60,41 66,41" fill="#FFD700"/>
    <rect x="22" y="58" width="30" height="22" rx="4" fill="#29B909"/>
    <circle cx="37" cy="69" r="6" fill="#004C3F"/>
    <circle cx="37" cy="69" r="3" fill="#29B909"/>
    <rect x="48" y="64" width="4" height="10" rx="1" fill="#004C3F"/>
  </svg>`,

  "Savings Account Clubs": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#f3e5f5"/>
    <rect x="38" y="62" width="14" height="6" rx="2" fill="#8B5E3C"/>
    <rect x="31" y="68" width="28" height="5" rx="2" fill="#6D4C41"/>
    <path d="M30 28 L60 28 L56 55 Q45 62 34 55 Z" fill="#FFD700"/>
    <path d="M20 30 Q22 48 30 50 L34 42 Q28 40 28 30Z" fill="#FFC300"/>
    <path d="M70 30 Q68 48 60 50 L56 42 Q62 40 62 30Z" fill="#FFC300"/>
    <polygon points="45,34 47,40 53,40 48,44 50,50 45,46 40,50 42,44 37,40 43,40" fill="#fff" opacity="0.8"/>
  </svg>`,

  "Savings Account Corporate": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#e8f5e9"/>
    <rect x="18" y="22" width="54" height="50" rx="6" fill="#004C3F"/>
    <rect x="23" y="27" width="44" height="40" rx="4" fill="#006655"/>
    <circle cx="45" cy="47" r="14" fill="#004C3F" stroke="#29B909" stroke-width="2"/>
    <circle cx="45" cy="47" r="8" fill="#003830"/>
    <circle cx="45" cy="47" r="3" fill="#FFD700"/>
    <line x1="45" y1="34" x2="45" y2="37" stroke="#29B909" stroke-width="1.5"/>
    <line x1="45" y1="57" x2="45" y2="60" stroke="#29B909" stroke-width="1.5"/>
    <line x1="32" y1="47" x2="35" y2="47" stroke="#29B909" stroke-width="1.5"/>
    <line x1="55" y1="47" x2="58" y2="47" stroke="#29B909" stroke-width="1.5"/>
    <rect x="58" y="44" width="10" height="6" rx="3" fill="#FFD700"/>
  </svg>`,

  "Short Term Deposit": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#fff8e1"/>
    <path d="M45 15 Q58 28 58 50 L45 58 L32 50 Q32 28 45 15Z" fill="#004C3F"/>
    <path d="M45 15 Q52 28 52 50 L45 58 L38 50 Q38 28 45 15Z" fill="#29B909"/>
    <circle cx="45" cy="36" r="5" fill="#7dd3fc"/>
    <path d="M38 58 Q33 68 40 72 Q38 63 45 62 Q52 63 50 72 Q57 68 52 58" fill="#FF6B00"/>
    <path d="M40 58 Q37 65 42 68 Q41 62 45 62 Q49 62 48 68 Q53 65 50 58" fill="#FFD700"/>
    <line x1="62" y1="36" x2="72" y2="36" stroke="#29B909" stroke-width="2" stroke-linecap="round"/>
    <line x1="64" y1="44" x2="72" y2="44" stroke="#29B909" stroke-width="2" stroke-linecap="round"/>
    <line x1="62" y1="52" x2="70" y2="52" stroke="#29B909" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  "Savings Account Individual": `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" fill="#f0fdf4"/>
    <ellipse cx="45" cy="56" rx="24" ry="20" fill="#29B909"/>
    <ellipse cx="45" cy="36" rx="10" ry="8" fill="#22a006"/>
    <rect x="39" y="29" width="12" height="3" rx="1.5" fill="#004C3F"/>
    <circle cx="53" cy="54" r="2.5" fill="#fff"/>
    <circle cx="53" cy="54" r="1.2" fill="#222"/>
    <ellipse cx="60" cy="58" rx="5" ry="4" fill="#22a006"/>
    <circle cx="58.5" cy="57" r="1" fill="#004C3F"/>
    <circle cx="61.5" cy="57" r="1" fill="#004C3F"/>
    <ellipse cx="40" cy="32" rx="5" ry="6" fill="#22a006" transform="rotate(-10 40 32)"/>
    <rect x="30" y="73" width="7" height="8" rx="3.5" fill="#22a006"/>
    <rect x="40" y="73" width="7" height="8" rx="3.5" fill="#22a006"/>
    <rect x="50" y="73" width="7" height="8" rx="3.5" fill="#22a006"/>
    <path d="M21 52 Q14 48 18 42 Q22 36 19 30" stroke="#22a006" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </svg>`,
};

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
      // image: "/current-account.png",
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
      {/* LEFT: unique SVG illustration per account */}
      <div
        style={{
          width: 120,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.5rem",
        }}
        dangerouslySetInnerHTML={{ __html: accountSVGs[account.title] ?? accountSVGs["Savings Account Individual"] }}
      />

      {/* RIGHT: text + button */}
      <div style={{ flex: 1, padding: "1.1rem 1.1rem 1.1rem", display: "flex", flexDirection: "column" }}>
        {/* Tag top-right */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 20,
            background: account.tagColor,
            color: "#fff",
            fontSize: "15px",
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
            fontSize: "18px",
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
            fontSize: "15px",
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
              <span style={{ fontSize: "15px", color: "#374151" }}>{f}</span>
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
              fontSize: "15px",
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