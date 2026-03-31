"use client";

import { useState } from "react";

const faqItems = [
  {
    question: " How do I open an account",
    answer: "Visit any branch with valid ID, BVN, passport photos, and complete the account opening form successfully.",
  },
  {
    question: "What documents are required for account",
    answer: "You need valid identification, BVN, passport photographs, and a recent utility bill for address verification purposes."
  },
  {
    question: "How can I apply for loans",
    answer: " Visit the bank, submit application, provide required documents, and undergo assessment before loan approval and disbursement process."
  },
  {
    question: "What types of loans are available",
    answer: " We offer business, agricultural, salary, education, and personal loans tailored to meet different customer financial needs."
  },
  {
    question: "How long does loan approval take",
    answer: " Loan approval depends on documentation, verification, and assessment, but processing is designed to be fast and efficient."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ padding: "4rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>

        {/* Title only — no pill tag, no subtext */}
        <h2 style={{
          textAlign: "center",
          fontSize: "1.7rem",
          fontWeight: 800,
          color: "#111827",
          marginBottom: "2.5rem",
        }}>
          Questions We&rsquo;re Often Asked
        </h2>

        {/* FAQ list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            const isLast = i === faqItems.length - 1;
            return (
              <div
                key={i}
                style={{
                  borderBottom: isLast ? "none" : "1px solid #e5e7eb",
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.1rem 0",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                >
                  <span style={{
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    color: isOpen ? "#29B909" : "#111827",
                    lineHeight: 1.4,
                    transition: "color 0.2s",
                  }}>
                    {item.question}
                  </span>

                  {/* ⊕ circle with + — outlined, green when open, gray when closed */}
                  <div style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    border: `1.5px solid ${isOpen ? "#29B909" : "#9ca3af"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isOpen ? "#29B909" : "#9ca3af",
                    fontSize: "1rem",
                    fontWeight: 400,
                    flexShrink: 0,
                    transition: "all 0.2s",
                    lineHeight: 1,
                  }}>
                    {isOpen ? "−" : "+"}
                  </div>
                </button>

                {/* Answer — no background, just text */}
                {isOpen && (
                  <div style={{ paddingBottom: "1rem" }}>
                    <p style={{
                      fontSize: "0.82rem",
                      color: "#6b7280",
                      lineHeight: 1.75,
                      margin: 0,
                      maxWidth: 420,
                    }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}