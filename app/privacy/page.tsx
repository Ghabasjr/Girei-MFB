import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <div style={{
        position: "relative",
        background: "#004C3F",
        padding: "4rem 2rem",
        textAlign: "center"
      }}>
        <h1 style={{
          color: "#fff",
          fontSize: "clamp(2rem, 5vw, 2.75rem)",
          fontWeight: 800,
          margin: 0,
        }}>
          Privacy Policy
        </h1>
        <p style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: "1rem",
          marginTop: "1rem",
          maxWidth: "600px",
          marginInline: "auto"
        }}>
          We Value Your Privacy
        </p>
      </div>

      {/* Content Section */}
      <section style={{
        background: "#f9fafb",
        padding: "4rem 1.5rem",
      }}>
        <div style={{
          maxWidth: 900,
          margin: "0 auto",
          background: "#fff",
          padding: "3rem 2.5rem",
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
        }}>
          <p style={{
            fontSize: "1.05rem",
            color: "#374151",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}>
            At <strong>Girei Microfinance Bank Ltd.</strong> (hereinafter called “Girei MFB”), we treat your personal information as private and confidential. We are dedicated to protecting your privacy and providing you with the highest level of security at any point of interaction with us. This Privacy Policy describes what personal information we collect, what we do with it and how we protect it.
          </p>
          <p style={{
            fontSize: "1.05rem",
            color: "#374151",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}>
            This policy (together with our Terms and Conditions) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By continuing to visit our website (www.gmfbank.com.ng) and other Girei MFB customer touchpoint, you accept and consent to the practices described in this policy.
          </p>

          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#111827",
            marginBottom: "1.25rem",
          }}>
            Information we collect and use
          </h2>
          
          <ul style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            marginBottom: "3rem"
          }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span style={{ color: "#29B909", fontSize: "1.2rem", lineHeight: 1 }}>•</span>
              <span style={{ color: "#374151", fontSize: "1.05rem", lineHeight: 1.6 }}>
                We collect information about you from a variety of sources, such as website visits, applications, identification documents, curriculum vitae, personal financial statements, interactions with relationship managers, and other third parties (credit bureaus, payment gateways, other financial institutions...), and other written or electronic communication reflecting information such as your name, address, passport details, identification numbers, biometric information, telephone number, location, occupation, assets, income and any other information we deem necessary.
              </span>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span style={{ color: "#29B909", fontSize: "1.2rem", lineHeight: 1 }}>•</span>
              <span style={{ color: "#374151", fontSize: "1.05rem", lineHeight: 1.6 }}>
                We may also use your transactional account history including your account balance, payment records, and debit, credit card usage. We may also use information received from third parties such as family, solicitors, friends, or employers, website, social media pages made public by you, government agencies, regulators, supervisory or credit agencies.
              </span>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span style={{ color: "#29B909", fontSize: "1.2rem", lineHeight: 1 }}>•</span>
              <span style={{ color: "#374151", fontSize: "1.05rem", lineHeight: 1.6 }}>
                We may also collect other information such as video footage of you whenever you step into any of our branches, telephone conversations when you call any of our contact center lines, and geographic information of any of our branch ATMs when you use our ATMs.
              </span>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span style={{ color: "#29B909", fontSize: "1.2rem", lineHeight: 1 }}>•</span>
              <span style={{ color: "#374151", fontSize: "1.05rem", lineHeight: 1.6 }}>
                We also collect data from "Prospective Employee" for recruitment purposes, including for medical screening.
              </span>
            </li>
          </ul>

          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#111827",
            marginBottom: "1.25rem",
          }}>
            Privacy Policy Consent
          </h2>
          <p style={{
            fontSize: "1.05rem",
            color: "#374151",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}>
            The bank takes your privacy seriously and only processes your personal information to make your banking experience better. In accordance with NDPR and other applicable regulations, signing below indicates your consent to the processing of your personal data by Girei Microfinance Bank, its strategic service provides, Girei Microfinance Bank’s as detailed in our Privacy Policy available at <a href="https://www.gmfbank.com.ng/privacy-policy" style={{ color: "#29B909", textDecoration: "underline" }}>https://www.gmfbank.com.ng/privacy-policy</a>.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}
