"use client";

import React from "react";
import Link from "next/link";

export default function AboutContent() {
    return (
        <section style={{ background: "#fff", padding: "3rem 1.5rem 2rem" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>

                {/* ── Two column row ── */}
                <div className="vision-grid">

                    {/* ── LEFT COL: paragraph top + photo bottom ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        <p style={{
                            fontSize: "0.82rem",
                            color: "#374151",
                            lineHeight: 1.85,
                            margin: 0,
                        }}>
                            Our team consists of experienced, dedicated, and community-focused
                            professionals committed to delivering exceptional microfinance services
                            tailored to our customers' needs. With integrity, transparency,
                            accountability, and innovation at our core, we work collaboratively to
                            empower customers, strengthen communities, and promote sustainable
                            financial growth and long-term economic development.
                        </p>

                        {/* Photo with concave bottom-right notch */}
                        <div style={{
                            flex: 1,
                            borderRadius: 14,
                            overflow: "hidden",
                            position: "relative",
                            height: 240
                        }}>
                            <img
                                src="/Rectangle 3205.png"
                                alt="Team members"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center 10%",
                                    display: "block",
                                }}
                            />
                            {/* Concave bottom-right notch */}
                            <div style={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                width: 52,
                                height: 52,
                                background: "radial-gradient(circle at top left, transparent 68%, #fff 70%)",
                                pointerEvents: "none",
                                zIndex: 2,
                            }} />
                        </div>
                    </div>

                    {/* ── RIGHT COL: dark green card with concave top-left notch ── */}
                    <Link
                        href="/join"
                        style={{
                            textDecoration: "none",
                            display: "block",
                            background: "#025236",
                            borderRadius: 16,
                            padding: "2.5rem 2rem",
                            alignItems: "center",
                            position: "relative",
                            overflow: "hidden",
                            transition: "transform 0.2s, box-shadow 0.2s",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.12)"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                    >
                        {/* Concave top-left notch — white quarter circle */}
                        <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: 52,
                            height: 52,
                            background: "radial-gradient(circle at bottom right, transparent 68%, #fff 70%)",
                            pointerEvents: "none",
                            zIndex: 2,
                        }} />

                        <p style={{
                            fontSize: "0.85rem",
                            color: "rgba(255,255,255,0.88)",
                            lineHeight: 1.9,
                            margin: 0,
                            position: "relative",
                            zIndex: 3,
                        }}>
                            Girei Microfinance Bank Limited, formerly Girei Community
                            Bank, was established to empower the unbanked and
                            under-banked by delivering reliable and inclusive financial
                            services. Since its inception, the bank has remained
                            committed to supporting individuals, traders, farmers,
                            and small businesses through accessible credit, savings
                            solutions, and community-focused banking initiatives.
                        </p>

                        {/* Small visual cue to indicate it's a link */}
                        <div style={{
                            position: "absolute",
                            bottom: "1rem",
                            right: "1.5rem",
                            color: "#29B909",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            opacity: 0.8
                        }}>
                            →
                        </div>
                    </Link>
                </div>

                {/* ── Stats bar ── */}
                <div className="vision-stats-bar">
                    {[
                        { number: "500", suffix: "+", label: "Customer", sublabel: "Served" },
                        { number: "1k", suffix: "+", label: "Loans", sublabel: "Completed" },
                        { number: "30", suffix: "+", label: "Years Of", sublabel: "Banking" },
                    ].map((stat, i) => (
                        <React.Fragment key={stat.number}>
                            {i > 0 && (
                                <div style={{
                                    width: 1,
                                    height: 40,
                                    background: "#e5e7eb",
                                    flexShrink: 0,
                                }} />
                            )}
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.6rem",
                            }}>
                                <div style={{
                                    fontSize: "2rem",
                                    fontWeight: 900,
                                    color: "#29B909",
                                    lineHeight: 1,
                                    whiteSpace: "nowrap",
                                }}>
                                    {stat.number}{stat.suffix}
                                </div>
                                <div style={{ lineHeight: 1.4 }}>
                                    <div style={{ fontSize: "0.7rem", color: "#6b7280", fontWeight: 500 }}>{stat.label}</div>
                                    <div style={{ fontSize: "0.7rem", color: "#6b7280", fontWeight: 500 }}>{stat.sublabel}</div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>

            </div>

            <style>{`
                .vision-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                    align-items: stretch;
                }
                .vision-stats-bar {
                    border: 1.5px solid #29B909;
                    border-radius: 30px;
                    padding: 1rem 3.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: #fff;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                @media (max-width: 700px) {
                    .vision-grid {
                        grid-template-columns: 1fr;
                    }
                    .vision-stats-bar {
                        padding: 1rem 1.5rem;
                        justify-content: center;
                        border-radius: 16px;
                        gap: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
}