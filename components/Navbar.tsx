"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#004C3F",
        borderBottom: "1px solid #e8e8e8",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      }}
    >
      <nav className="container-xl" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
          <Image
            src="/girei.png"
            alt="GIREI Logo"
            width={120}
            height={40}
            priority
            style={{ objectFit: "contain" }}
          />
        </a>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "white",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#2EC05E")}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "white")}
              >
                {link.label}
                {(link as any).icon !== undefined && <ChevronDown size={14} />}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="desktop-nav">
          <a href="/join" className="btn-primary" style={{ padding: "0.6rem 1.4rem", fontSize: "0.88rem" }}>
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
            gap: "5px",
            padding: "4px",
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
                background: menuOpen && i === 1 ? "transparent" : "white",
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
            background: "#004C3F",
            borderTop: "1px solid #eee",
            padding: "1rem 1.5rem",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} style={{ display: "flex", alignItems: "center", gap: "6px", color: "white", fontWeight: 500, textDecoration: "none", fontSize: "1rem" }}
                  onClick={() => setMenuOpen(false)}>
                  {link.label}
                  {(link as any).icon !== undefined && <ChevronDown size={16} />}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Open Account
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
