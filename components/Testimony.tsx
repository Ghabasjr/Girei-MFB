"use client";

export default function Testimonials() {
    return (
        <section
            style={{
                background: "#f5f5f5",
                padding: "5rem 0",
            }}
        >
            <div
                style={{
                    maxWidth: 900,
                    margin: "0 auto",
                    padding: "0 1rem",
                }}
            >
                {/* Heading */}
                <div>

                    <h1
                        style={{
                            textAlign: "center",
                            fontSize: "40px",
                            fontWeight: 900,
                            color: "#111",
                            marginBottom: "2.5rem",
                        }}
                    >
                        Get Hired In
                        <span style={{
                            color: "#29B909",
                        }}> 4 Quick Easy Steps</span>
                    </h1>

                    <p
                        style={{
                            fontWeight: "400",
                            fontSize: "16px",
                            color: "#656565"
                        }}>
                        The quickest and most effective way to get hired by top firms working
                        in your career interest area
                    </p>
                </div>

                {/* Card */}
                <div
                    style={{
                        background: "#dfe7e2",
                        borderRadius: 20,
                        padding: "2.5rem 2.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                        position: "relative",
                        border: "1px solid #cfd8d3",
                    }}
                >
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
                    <div
                        style={{
                            width: 2,
                            height: 90,
                            background: "#6bbf7d",
                            flexShrink: 0,
                        }}
                    />

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "#3d5c4a",
                                lineHeight: 1.7,
                                marginBottom: "1rem",
                                maxWidth: 520,
                            }}
                        >
                            As a business owner, Girei Microfinance Bank has supported my growth with timely loans, friendly staff, and reliable service, helping me expand operations, manage cash flow, and seize new opportunities.
                        </p>

                        <div>
                            <div
                                style={{
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    color: "#111",
                                    marginBottom: "2px",
                                }}
                            >
                                A.S Abubakar
                            </div>
                            <div
                                style={{
                                    fontSize: "12px",
                                    color: "#6b7280",
                                }}
                            >
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
                        ””
                    </div>
                </div>
            </div>
        </section>
    );
}
