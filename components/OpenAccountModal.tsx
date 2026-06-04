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

            <div className="open-account-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
                <div className="open-account-top">
                    <div className="open-account-icon">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle cx="12" cy="12" r="12" fill="#29B909" />
                            <path d="M7.5 12.8l3.2 3.2 6.2-6.2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h2>Thank You!</h2>
                    <p className="open-account-message">
                        Thank you for trusting Girei Microfinance Bank
                    </p>
                </div>

                <p className="open-account-copy">
                    Please visit our physical branch for more information about our products and services. Our friendly team is ready to assist you at any convenient time.
                </p>

                <div className="open-account-grid">
                    <div className="open-account-card">
                        <div className="open-account-card-label">Visit Our Branch</div>
                        <div className="open-account-card-body">
                            Along Mubi Road, Girei Main Market, P.O Box 1033, Girei, Adamawa State, Nigeria
                        </div>
                    </div>

                    <div className="open-account-card">
                        <div className="open-account-card-label">Our Contacts</div>
                        <div className="open-account-card-body">
                            <a href="mailto:info@gmfb.com">info@gmfb.com</a>
                        </div>
                    </div>
                </div>

                <button type="button" className="open-account-close-btn" onClick={onClose}>
                    Back
                </button>
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
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          padding: 2rem;
          border-radius: 28px;
          background: #ffffff;
          border: 1px solid #d1e8d4;
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.18);
          overflow: hidden;
          animation: gmfbPopIn 0.28s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .open-account-top {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          align-items: center;
          text-align: center;
        }

        .open-account-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(41, 185, 9, 0.12);
          border: 1px solid rgba(41, 185, 9, 0.2);
        }

        .open-account-top h2 {
          margin: 0;
          font-size: 2rem;
          font-weight: 800;
          color: #0b0b0b;
          letter-spacing: -0.02em;
        }

        .open-account-message {
          margin: 0;
          font-size: 1rem;
          color: #374151;
          line-height: 1.8;
        }

        .open-account-copy {
          margin: 0;
          font-size: 0.98rem;
          color: #4b5563;
          line-height: 1.9;
          max-width: 88%;
          align-self: center;
        }

        .open-account-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .open-account-card {
          background: #f8faf8;
          border: 1px solid #dfe7dc;
          border-radius: 20px;
          padding: 1.2rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .open-account-card-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: #112f1c;
        }

        .open-account-card-body {
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.75;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .open-account-card-body a {
          color: #004c3f;
          text-decoration: none;
          font-weight: 600;
        }

        .open-account-close-btn {
          align-self: center;
          width: 100%;
          max-width: 260px;
          padding: 0.95rem 1.4rem;
          border: none;
          border-radius: 14px;
          background: #004c3f;
          color: #fff;
          font-size: 0.98rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .open-account-close-btn:hover {
          background: #006655;
        }

        @media (max-width: 640px) {
          .open-account-modal {
            width: min(90vw, 100%);
            padding: 1.5rem;
            border-radius: 20px;
          }

          .open-account-grid {
            grid-template-columns: 1fr;
          }

          .open-account-copy {
            max-width: 100%;
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
