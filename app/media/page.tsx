import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MediaPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "#f9fafb" }}>
        <h1 style={{ fontSize: "2rem", color: "#6b7280", fontWeight: 600 }}>Media Coming Soon</h1>
      </main>
      <Footer />
    </div>
  );
}
