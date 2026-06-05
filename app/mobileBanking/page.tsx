import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MobileBankingPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />

            {/* Top banner */}
            <div style={{
                position: "relative",
                overflow: "hidden",
                minHeight: 110,
                display: "flex",
                alignItems: "center",
                background: "#004C3F",
            }}>
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

                <p style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: 0,
                    padding: "2rem 2rem",
                    maxWidth: 900,
                    lineHeight: 1.45,
                    position: "relative",
                    zIndex: 1,
                }}>
                    Join Girei Microfinance Bank and experience trusted community banking built for you.
                </p>
            </div>

            {/* Intro */}
            <section style={{ background: "#fff", padding: "3rem 2rem 3.5rem" }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>

                    {/* Pill tag */}
                    <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
                        <p style={{ color: "#29B909", fontSize: '16px', fontWeight: 700, margin: 0 }}>Why choose our Bank</p>
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

                </div>
            </section>

            {/* Cards grid (2 columns) */}
            <section style={{ background: "#fff", padding: "2rem 1rem 3rem" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div className="mobile-grid">
                        {[
                            { title: "Agric Loan", desc: "GMFB offers Agric Loans to support farmers and agribusinesses with accessible financing. Grow your agricultural activities, improve productivity, expand operations, and achieve sustainable success through ethical financing." },
                            { title: "Business Loan", desc: "GMFB offers Business Loans to help entrepreneurs and enterprises grow with confidence. Access flexible financing to expand operations, increase productivity, meet working capital needs, and achieve business goals successfully." },
                            { title: "Education Loan", desc: "GMFB offers Education Loans to support students, parents, and educational institutions with accessible financing. Cover tuition and related expenses conveniently while pursuing academic goals and investing in a brighter future." },
                            { title: "Medical Loan", desc: "GMFB offers Medical Loans to help individuals and families manage healthcare expenses with ease. Access timely financing for medical needs, treatments, and emergencies while maintaining financial stability and peace of mind." },
                            { title: "Enterprise Loan", desc: "GMFB offers Enterprise Loans designed to support small and medium-sized businesses. Access flexible financing to expand operations, purchase equipment, increase productivity, and achieve sustainable growth with confidence." },
                            { title: "Building Loan", desc: "GMFB offers Building Loans to support residential and commercial construction projects. Access flexible financing to build, renovate, or complete properties while achieving your development goals with confidence and ease." },
                            { title: "Tricycle Loan", desc: "GMFB offers Tricycle Loans to help individuals and entrepreneurs acquire tricycles for transportation and income generation. Finance your transport business, grow your business, and improve your earning potential with ease." },
                            { title: "Solar Energy Loan", desc: "GMFB offers Solar Energy Loans to help individuals and businesses access reliable renewable power solutions. Finance solar installations, reduce energy costs, and enjoy sustainable, efficient electricity for everyday needs." },
                        ].map((c, i) => (
                            <div key={i} className="mobile-card">
                                <div className="mobile-card-inner">
                                    <div className="card-art" aria-hidden />
                                    <div style={{ flex: 1 }}>
                                        <h3 className="card-title">{c.title}</h3>
                                        <p className="card-desc">{c.desc}</p>
                                        <div style={{ marginTop: 12 }}>
                                            <button className="card-cta">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
                .mobile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
                .mobile-card { background: #fff; border-radius: 12px; border: 1px solid #e6eef0; box-shadow: 0 4px 18px rgba(2,6,23,0.04); padding: 18px; display: flex; align-items: center; }
                .mobile-card-inner { display: flex; gap: 18px; align-items: flex-start; }
                .card-art { width: 84px; height: 84px; background: #eef9ef; border-radius: 8px; flex-shrink: 0; }
                .card-title { font-size: 1.05rem; font-weight: 800; color: #0f1724; margin: 0 0 0.45rem 0; }
                .card-desc { margin: 0; color: #4b5563; line-height: 1.6; font-size: 0.95rem; }
                .card-cta { background: #004C3F; color: #fff; border: none; padding: 0.5rem 0.8rem; border-radius: 10px; font-weight: 700; cursor: pointer; margin-top: 6px; }
                .card-cta:hover { background: #0e6b4f; }
                @media (max-width: 900px) { .mobile-grid { grid-template-columns: 1fr; } .mobile-card { padding: 14px; } .card-art { width: 72px; height: 72px; } }
            `}</style>
        </div>
    );
}
