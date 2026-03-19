import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function POSPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "#f9fafb" }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: "2.5rem", color: "#111827", fontWeight: 800, marginBottom: '0.5rem' }}>POS Services</h1>
          <p style={{ fontSize: "1.1rem", color: "#6b7280" }}>Request your POS terminal — Coming Soon</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
