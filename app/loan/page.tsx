import Navbar from "@/components/Navbar";
import { MapPin, PhoneIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import LoanGrid from "@/components/LoanGrid";

export default function Loan() {
    return (
        <>
            <Navbar />
            <div style={{
                position: "relative",
                overflow: "hidden",
                minHeight: 110,
                display: "flex",
                alignItems: "center",
                background: "#29B909",
            }}>
                {/* Small dark green stripe section — far right corner only */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "15%",
                    height: "100%",
                    backgroundImage: `repeating-linear-gradient(
            135deg,
            #1a6b2a 0px,
            #1a6b2a 10px,
            #fff 10px,
            #fff 20px
          )`,
                }} />

                {/* Text on light green left side */}
                <p style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: 0,
                    padding: "2rem 3rem",
                    maxWidth: 480,
                    lineHeight: 1.45,
                    position: "relative",
                    zIndex: 1,
                }}>
                    Join Girei Microfinance Bank and experience trusted
                    <br />community banking built for you.
                </p>
            </div>
            <section style={{
                background: "#fff",
                padding: "3rem 2rem 3.5rem",
            }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>

                    {/* Pill tag */}
                    <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
                        <span style={{
                            display: "inline-block",
                            border: "1px solid #d1d5db",
                            borderRadius: 999,
                            padding: "0.4rem 1.4rem",
                            fontSize: "0.78rem",
                            color: "#374151",
                            fontWeight: 500,
                        }}>
                            Why choose our Bank
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 style={{
                        textAlign: "center",
                        fontSize: "1.45rem",
                        fontWeight: 800,
                        color: "#111827",
                        marginBottom: "2rem",
                    }}>
                        Secure, simple, rewarding banking experience.
                    </h2>

                    {/* 3 feature cards */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1.25rem",
                    }}>
                        {[
                            {
                                title: "CBN Licensed",
                                desc: "Fully licensed and regulated by the Central Bank of Nigeria.",
                                bg: "#DBFF0036",
                            },
                            {
                                title: "24/7 Mobile Banking",
                                desc: "Secure mobile banking access anytime, anywhere, with complete financial control.",
                                bg: "#29B90936",
                            },
                            {
                                title: "CBN Licensed",
                                desc: "Secure mobile banking access anytime, anywhere, with complete financial control.",
                                bg: "#1D4ED836",
                            },
                        ].map((card, i) => (
                            <div key={i} style={{
                                background: card.bg,
                                borderRadius: 14,
                                padding: "1.5rem 1.4rem",
                            }}>
                                <h4 style={{
                                    fontSize: "0.95rem",
                                    fontWeight: 800,
                                    color: "#111827",
                                    marginBottom: "0.75rem",
                                }}>
                                    {card.title}
                                </h4>
                                <p style={{
                                    fontSize: "0.78rem",
                                    color: "#4b5563",
                                    lineHeight: 1.75,
                                    margin: 0,
                                }}>
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            {/* Loan Grid */}

            <LoanGrid />
            {/* ── Footer ── */}
            <footer style={{
                background: "#004C3F",
                color: "rgba(255,255,255,0.75)",
                paddingTop: "5rem",
                paddingBottom: 0,
            }}>
                <div style={{ margin: "0 auto", padding: "2rem 2rem" }}>

                    {/* Main grid: 4 columns */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1.4fr 1fr 1.3fr 1.2fr",
                        gap: "2.5rem",
                        paddingBottom: "3rem",
                    }}>

                        {/* Col 1: Brand */}
                        <div>
                            {/* Logo box */}
                            <div style={{
                                background: "#fff",
                                borderRadius: 10,
                                padding: "8px 12px",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6,
                                marginBottom: "1rem",
                            }}>
                                <Image src="/girei2.png" alt="Girei Microfinance Bank" width={100} height={100} />
                            </div>

                            <p style={{ fontSize: "0.78rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "1.25rem", maxWidth: 200 }}>
                                Girei Microfinance Bank Limited, formerly Girei Community Bank, was established to empower the unbanked and under-banked by delivering reliable and inclusive financial services.
                            </p>

                            {/* Social icons */}
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                {[
                                    { label: "in", icon: "in" },
                                    { label: "f", icon: "f" },
                                    { label: "ig", icon: "◎" },
                                    { label: "x", icon: "𝕏" },
                                ].map((s, i) => (
                                    <a key={i} href="#" style={{
                                        width: 32, height: 32,
                                        borderRadius: "50%",
                                        background: "#29B909",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#fff",
                                        fontWeight: 700,
                                        fontSize: "0.72rem",
                                        textDecoration: "none",
                                        flexShrink: 0,
                                    }}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Col 2: Quick Links */}
                        <div>
                            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "0.88rem", marginBottom: "1.1rem" }}>Quick Links</h4>
                            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                                {["About Us", "Account & Deposit", "Loan & Credit", "Digital Banking", "ATM Card", "POS Services"].map((item, i) => (
                                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#fff", display: "inline-block", flexShrink: 0 }} />
                                        <a href="#" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", textDecoration: "none" }}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3: Short Links */}
                        <div>
                            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "0.88rem", marginBottom: "1.1rem" }}>Short Links</h4>
                            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                                {["Privacy", "Anti Money Laundering Policy", "Terms & Conditions", "Risk Management", "Downloadable Forms", "Help Center"].map((item, i) => (
                                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#fff", display: "inline-block", flexShrink: 0 }} />
                                        <a href="#" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", textDecoration: "none" }}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 4: Contact Us */}
                        <div>
                            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "0.88rem", marginBottom: "1.1rem" }}>Contact Us</h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                                {/* Address */}
                                <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                                    <MapPin size={12} color="#29B909" />
                                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>Giei Pont 2, 100, Adamawa state, Nigeria</span>
                                </div>
                                {/* Phone */}
                                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                    <PhoneIcon size={12} color="#29B909" />
                                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)" }}>07011079676</span>
                                </div>
                                {/* Email */}
                                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                    <MailIcon size={12} color="#29B909" />
                                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)" }}>gireibank@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div style={{
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        padding: "1.25rem 0",
                        textAlign: "center",
                    }}>
                        <p style={{ fontSize: "0.78rem", color: "white", margin: 0 }}>
                            2026 Girei Microfinance Bank | All Right Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}