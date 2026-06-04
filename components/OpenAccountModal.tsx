"use client";

import { useEffect } from "react";

interface OpenAccountModalProps {
  open: boolean;
  onClose: () => void;
}

export default function OpenAccountModal({ open, onClose }: OpenAccountModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div className="open-account-backdrop" onClick={onClose} />

      <div className="open-account-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>

        {/* Success Icon */}
        <div className="open-account-top">
          <div className="open-account-icon">
            <img src="./Ellipse 391.png" alt="success" />
          </div>
          <h2>Thank You!</h2>
          <p className="open-account-message">
            Thank you for trusting <span className="open-account-brand">Girei Microfinance Bank</span>
          </p>
        </div>

        {/* Divider */}
        <div className="open-account-divider" />

        {/* Description */}
        <p className="open-account-copy">
          Please visit our physical branch for more information about our products and services. Our friendly team is ready to assist you at any convenient time.
        </p>

        {/* Card */}
        <div className="open-account-card">
          <div className="open-account-card-row">

            {/* Visit Our Branch */}
            <div className="open-account-card-item">
              <span className="open-account-card-icon" aria-hidden="true">
                <img src="./bank.png" alt="location" />
              </span>
              <div>
                <div className="open-account-card-label">Visit Our Branch</div>
                <div className="open-account-card-body">
                  Along Mubi Road, Girei Main Market, P.O Box 1033, Girei, Adamawa State, Nigeria
                </div>
              </div>
            </div>

            {/* Our Contacts */}
            <div className="open-account-card-item">
              <span className="open-account-card-icon" aria-hidden="true">
                <img src="./customer-support.png" alt="call" />
              </span>
              <div>
                <div className="open-account-card-label">Our Contacts</div>
                <div className="open-account-card-body">
                  <a href="mailto:info@gmfb.com">info@gmfb.com</a>
                </div>
                <div className="open-account-card-body">
                  <a href="mailto:info@gmfb.com">info@gmfb.com</a>
                </div>
              </div>
            </div>

          </div>

          {/* Back Button */}
          <button type="button" className="open-account-close-btn" onClick={onClose}>
            Back
          </button>
        </div>
      </div>

      <style>{`
        .open-account-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.58);
          backdrop-filter: blur(3px);
          z-index: 9997;
          animation: gmfbFadeIn 0.24s ease;
        }

        .open-account-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 9999;
          width: min(560px, 92vw);
          max-height: calc(100vh - 3rem);
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          padding: 2rem 2rem 2.2rem;
          border-radius: 28px;
          background: #ffffff;
          border: 1px solid #d1e8d4;
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.18);
          overflow-y: auto;
          animation: gmfbPopIn 0.28s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* ── Top section ── */
        .open-account-top {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          align-items: center;
          text-align: center;
        }

        .open-account-icon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(41, 185, 9, 0.10);
        }

        .open-account-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .open-account-top h2 {
          margin: 0.4rem 0 0;
          font-size: 2.2rem;
          font-weight: 900;
          color: #0b2a1a;
          letter-spacing: -0.02em;
        }

        .open-account-message {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.7;
        }

        .open-account-brand {
          color: #29B909;
          font-weight: 700;
        }

        /* ── Divider ── */
        .open-account-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #c8e6c9 20%, #004c3f 50%, #c8e6c9 80%, transparent);
          margin: 0 1rem;
        }

        /* ── Description ── */
        .open-account-copy {
          margin: 0;
          font-size: 0.97rem;
          color: #6b7280;
          line-height: 1.85;
          text-align: center;
          padding: 0 0.5rem;
        }

        /* ── Card ── */
        .open-account-card {
          background: #f0f7f1;
          border: 1px solid #d4e8d6;
          border-radius: 20px;
          padding: 1.4rem 1.4rem 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .open-account-card-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .open-account-card-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .open-account-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #d6ecd8;
          flex-shrink: 0;
        }

        .open-account-card-icon img {
          width: 22px;
          height: 22px;
          object-fit: contain;
        }

        .open-account-card-label {
          font-size: 0.95rem;
          font-weight: 800;
          color: #29B909;
          margin-bottom: 0.35rem;
        }

        .open-account-card-body {
          font-size: 0.88rem;
          color: #374151;
          line-height: 1.7;
        }

        .open-account-card-body a {
          color: #374151;
          text-decoration: none;
          font-weight: 400;
          display: block;
        }

        /* ── Back button ── */
        .open-account-close-btn {
          width: 100%;
          padding: 1rem;
          border: none;
          border-radius: 14px;
          background: #004c3f;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
          letter-spacing: 0.01em;
        }

        .open-account-close-btn:hover {
          background: #006655;
        }

        /* ── Responsive ── */
        @media (max-width: 480px) {
          .open-account-modal {
            width: min(94vw, 100%);
            padding: 1.5rem 1.2rem;
            border-radius: 20px;
          }

          .open-account-card-row {
            grid-template-columns: 1fr;
          }
        }

        @keyframes gmfbFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes gmfbPopIn {
          from { opacity: 0; transform: translate(-50%, -52%) scale(0.96); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </>
  );
}