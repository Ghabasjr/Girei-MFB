"use client";

export default function Testimonials() {
    return (
        <section style={{ background: "#f5f5f5", padding: "5rem 1.5rem" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
                {/* Heading */}
                <div>
                    <h1
                        style={{
                            textAlign: "center",
                            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                            fontWeight: 900,
                            color: "#111",
                            marginBottom: "2.5rem",
                        }}
                    >
                        Get Hired In
                        <span style={{ color: "#29B909" }}> 4 Quick Easy Steps</span>
                    </h1>

                    <p style={{ fontWeight: "400", fontSize: "clamp(14px, 2vw, 16px)", color: "#656565" }}>
                        The quickest and most effective way to get hired by top firms working
                        in your career interest area
                    </p>
                </div>

                {/* Card */}
                <div className="testimony-card">
                    {/* Avatar */}
                    <div
                        style={{
                            width: 90,
                            height: 90,
                            borderRadius: "50%",
                            overflow: "hidden",
                            background: "#000",
                            flexShrink: 0,
                        }}
                    >
                        <img
                            src="/aliyu.png"
                            alt="client"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>

                    {/* Divider */}
                    <div className="testimony-divider" />

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "#3d5c4a",
                                lineHeight: 1.7,
                                marginBottom: "1rem",
                            }}
                        >
                            As a business owner, Girei Microfinance Bank has supported my growth with timely loans, friendly staff, and reliable service, helping me expand operations, manage cash flow, and seize new opportunities.
                        </p>

                        <div>
                            <div style={{ fontWeight: 600, fontSize: "14px", color: "#111", marginBottom: "2px" }}>
                                A.S Abubakar
                            </div>
                            <div style={{ fontSize: "12px", color: "#6b7280" }}>
                                Senior Manager, SolutionX Tech Lab
                            </div>
                        </div>
                    </div>

                    {/* Quote Marks */}
                    <div
                        style={{
                            position: "absolute",
                            right: "2rem",
                            bottom: "1.5rem",
                            color: "#9bd3a8",
                            fontSize: "48px",
                            fontFamily: "Georgia, serif",
                            lineHeight: 1,
                        }}
                    >
                        ""
                    </div>
                </div>
            </div>

            <style>{`
                .testimony-card {
                    background: #dfe7e2;
                    border-radius: 20px;
                    padding: 2.5rem;
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    position: relative;
                    border: 1px solid #cfd8d3;
                    margin-top: 2rem;
                }
                .testimony-divider {
                    width: 2px;
                    height: 90px;
                    background: #6bbf7d;
                    flex-shrink: 0;
                }
                @media (max-width: 600px) {
                    .testimony-card {
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 1.5rem;
                        gap: 1rem;
                    }
                    .testimony-divider {
                        width: 40px;
                        height: 2px;
                    }
                }
            `}</style>
        </section>
    );
}
