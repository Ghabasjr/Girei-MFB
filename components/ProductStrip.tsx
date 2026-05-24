"use client";

type Item = { label: string; icon: React.ReactNode };

const items: Item[] = [
  {
    label: "Personal Loans",
    icon: (
      <img src="./save-money-dollar.png" alt="loans" />
    ),
  },
  {
    label: "SMEs Loans",
    icon: (
      <img src="./bank.png" alt="bank" />
    ),
  },
  {
    label: "Target Savings",
    icon: (
      <img src="./honey-01.png" alt="savings" />
    ),
  },
  {
    label: "Trade Financing",
    icon: (
      <img src="./money-exchange-03.png" alt="trade" />
    ),
  },
  {
    label: "Working Capital",
    icon: (
      <img src="./coins-01.png" alt="working capital" />
    ),
  },
  {
    label: "Digital Banking",
    icon: (
      <img src="./bitcoin-withdraw.png" alt="digital banking" />
    ),
  },
];

export default function ProductStrip() {
  return (
    <section
      aria-label="Our products"
      style={{
        width: "100%",
        background: "rgba(2, 82, 54, 0.9)",
        padding: "1.1rem 1.5rem",
      }}
    >
      <div className="ps-row">
        {items.map((it, i) => (
          <div className="ps-item" key={it.label}>
            <span className="ps-icon" aria-hidden="true">{it.icon}</span>
            <span className="ps-label">{it.label}</span>
            {i < items.length - 1 && <span className="ps-divider" aria-hidden="true" />}
          </div>
        ))}
      </div>

      <style>{`
        .ps-row {
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          flex-wrap: nowrap;
        }
        .ps-item {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 600;
          white-space: nowrap;
          flex: 1;
          justify-content: center;
          position: relative;
        }
        .ps-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(41, 185, 9, 0.12);
        }
        .ps-divider {
          position: absolute;
          right: -0.25rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 26px;
          background: rgba(41, 185, 9, 0.45);
        }
        @media (max-width: 1024px) {
          .ps-row {
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.75rem 1.5rem;
          }
          .ps-divider { display: none; }
          .ps-item { flex: 0 0 auto; }
        }
        @media (max-width: 600px) {
          .ps-item { font-size: 0.82rem; }
          .ps-icon { width: 28px; height: 28px; }
        }
      `}</style>
    </section>
  );
}
