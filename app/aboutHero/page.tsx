import Footer from "@/components/Footer";
import VisionMission from "@/components/mission";
import Navbar from "@/components/Navbar";
import Testimony from "@/components/Testimony";
import Vission from "@/components/Vission";
import WhoWeServe from "@/components/WhoWeServe";

export default function AboutHero() {
    return (
        <div>
            <Navbar />
            <section style={{ background: "#fff", padding: "2.5rem 2rem 0" }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>

                    {/* Top row: big title left, small subtext right */}
                    <div style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "2rem",
                        marginBottom: "1.5rem",
                    }}>
                        {/* Left: large bold title */}
                        <h1 style={{
                            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                            fontWeight: 900,
                            color: "#111827",
                            lineHeight: 1.15,
                            margin: 0,
                            flexShrink: 0,
                        }}>
                            Our Story, Vision,
                            <br />
                            And Values
                        </h1>

                        {/* Right: small paragraph */}
                        <p style={{
                            fontSize: "0.78rem",
                            color: "#4b5563",
                            lineHeight: 1.75,
                            maxWidth: 280,
                            margin: 0,
                            paddingTop: "0.25rem",
                            textAlign: "right",
                        }}>
                            We empower individuals and businesses with accessible financial
                            solutions that inspire growth and strengthen communities.
                        </p>
                    </div>

                    {/* Image banner with concave bottom-right corner notch */}
                    <div style={{
                        position: "relative",
                        borderRadius: 16,
                        overflow: "hidden",
                        width: "100%",
                        height: 220,
                    }}>
                        {/* The photo */}
                        <img
                            src="/Rectangle 3221.png"
                            alt="Our team"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                display: "block",
                            }}
                        />

                        {/* Concave bottom-right cutout — white radial-gradient overlay */}
                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            width: 60,
                            height: 60,
                            background: "radial-gradient(circle at top left, transparent 68%, #fff 70%)",
                            pointerEvents: "none",
                            zIndex: 2,
                        }} />
                    </div>

                </div>
            </section>
            <Vission />
            <VisionMission />
            <WhoWeServe />
            <Testimony />
            <Footer />
        </div>
    );
}