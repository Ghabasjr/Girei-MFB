export default function VisionMission() {
    return (
        <section style={{ background: "#fff", padding: "2rem 1.5rem 3rem" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <div className="mission-grid">

                    {/* ── Vision Card ── */}
                    <div style={{
                        background: "#fff",
                        borderRadius: 16,
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                        padding: "1.5rem 1rem",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                    }}>
                        <div style={{ position: "absolute", top: 16, right: 16, color: "#29B909", fontSize: "1rem", lineHeight: 1 }}>
                            <img src="/stars.png" alt="Mission" width={50} height={50} />
                        </div>
                        <h3 style={{ fontSize: "clamp(1rem, 2.5vw, 1rem)", fontWeight: 800, color: "#111827", lineHeight: "100%", marginBottom: "1.5rem" }}>
                            Our Vision
                        </h3>
                        <p style={{ fontSize: "clamp(10px, 2vw, 16px)", color: "#011B12", lineHeight: "1.6", fontWeight: 400, margin: 0 }}>
                            To build a successful business hinged on exceptional service delivery that will meet the
                            needs of Customers through effective, efficient and healthy operations while maintaining the
                            highest level of professionalism and integrity.
                        </p>
                    </div>

                    {/* ── Mission Card ── */}
                    <div style={{
                        background: "#fff",
                        borderRadius: 16,
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                        padding: "1rem 1rem",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                    }}>
                        <div style={{ position: "absolute", top: 16, right: 16, color: "#29B909", fontSize: "1.1rem", lineHeight: 1 }}>
                            <img src="/stars.png" alt="Mission" width={50} height={50} />
                        </div>
                        <h3 style={{ fontSize: "clamp(1rem, 2.5vw, 1rem)", fontWeight: 800, color: "#111827", lineHeight: "100%", marginBottom: "1.5rem" }}>
                            Our Mission
                        </h3>
                        <p style={{ fontSize: "clamp(10px, 2vw, 16px)", color: "#011B12", lineHeight: "1.6", fontWeight: 400, margin: 0 }}>
                            To transact and build an enduring business with articulated and strategic direction in the
                            microfinance sub-sector towards alleviating poverty in both rural and urban settings.
                        </p>
                    </div>

                    {/* RIGHT: Regulators */}
                    <div className="ts-col ts-card-right">
                        <h3 className="ts-reg-title">
                            We are regulated &amp;<br />trusted
                        </h3>

                        <div className="ts-reg-list">
                            <div className="ts-reg-row">
                                <div className="ts-reg-logo ts-reg-logo-cbn" aria-hidden="true">
                                    {/* CBN crest stylization */}
                                    <img src="./Ellipse 390.png" alt="CBN" />
                                </div>
                                <div>
                                    <div className="ts-reg-line">Licensed by</div>
                                    <div className="ts-reg-name">Central Bank of Nigeria (CBN)</div>
                                </div>
                            </div>

                            <div className="ts-reg-divider" />

                            <div className="ts-reg-row">
                                <div className="ts-reg-logo" aria-hidden="true">
                                    <img src="./Rectangle 21912.png" alt="NDIC" />
                                </div>
                                <div>
                                    <div className="ts-reg-line">Deposit Insured by</div>
                                    <div className="ts-reg-name">Nigeria Deposit Insurance Corporation (NDIC)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                .mission-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 1.25rem;
                    align-items: stretch;
                }
                @media (max-width: 768px) {
                    .mission-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                }
                @media (max-width: 500px) {
                    .mission-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
}