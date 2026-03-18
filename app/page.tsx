import Navbar from "@/components/Navbar";
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
