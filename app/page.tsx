import { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Home | GIREI Microfinance Bank",
  description:
    "Welcome to GIREI Microfinance Bank. Experience trusted community banking built for you. Explore our accounts, loans, and digital services today.",
  openGraph: {
    title: "Home | GIREI Microfinance Bank",
    description: "Welcome to GIREI Microfinance Bank. Experience trusted community banking built for you.",
  }
};

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhoWeServe from "@/components/WhoWeServe";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <WhoWeServe />
        <ServicesSection />
        <Testimonials />
        <BlogSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
