"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Can I use my debit card to make payment",
    answer: "Yes, you can make use of the covenant mfb debit card for payments on spotify and other payment websites that accept verve cards.",
  },
  { question: "Can I use my debit card to make payment", answer: "Yes, you can make use of the covenant mfb debit card for payments on spotify and other payment websites that accept verve cards." },
  { question: "Can I use my debit card to make payment", answer: "Yes, you can make use of the covenant mfb debit card for payments on spotify and other payment websites that accept verve cards." },
  { question: "Can I use my debit card to make payment", answer: "Yes, you can make use of the covenant mfb debit card for payments on spotify and other payment websites that accept verve cards." },
  { question: "Can I use my debit card to make payment", answer: "Yes, you can make use of the covenant mfb debit card for payments on spotify and other payment websites that accept verve cards." },
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
                    +
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