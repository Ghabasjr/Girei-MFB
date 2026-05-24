"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#ffffff",
        borderBottom: "1px solid #f0f0f0",
        boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
      }}
    >
      <nav
        className="nav-row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 76,
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/girei2.png"
            alt="GIREI Microfinance Bank Ltd"
            width={130}
            height={42}
            priority
            style={{ objectFit: "contain" }}
          />
        </a>

        {/* Centered nav */}
        <ul
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "2.75rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="nav-link"
                style={{
                  color: "#0b0b0b",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <a
            href="/join"
            style={{
              background: "#004C3F",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "0.85rem 1.75rem",
              borderRadius: 12,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#006655";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#004C3F";
            }}
          >
            Open Account
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: 5,
            padding: 4,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 2,
                borderRadius: 2,
                background: menuOpen && i === 1 ? "transparent" : "#0b0b0b",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 2
                      ? "rotate(-45deg) translate(5px, -5px)"
                      : "none",
                transition: "transform 0.2s ease",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid #eee",
            padding: "1rem 1.5rem",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{ color: "#0b0b0b", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/join"
                style={{
                  background: "#004C3F",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "0.75rem 1.5rem",
                  borderRadius: 12,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Open Account
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        .nav-link:hover { color: #29B909 !important; }

        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
