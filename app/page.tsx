import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustMarquee from "@/components/TrustMarquee";
import ServicesGrid from "@/components/ServicesGrid";
import BundleCards from "@/components/BundleCards";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Wave: Hero → Marquee */}
      <WaveDivider fill="var(--bg-secondary)" direction="down" />

      {/* Trust Marquee */}
      <section className="section-alt py-10">
        <TrustMarquee />
      </section>

      {/* Wave: Marquee → Services */}
      <WaveDivider fill="var(--bg-primary)" direction="up" />

      {/* Services */}
      <section id="services" className="py-28 px-4">
        <ServicesGrid />
      </section>

      {/* Wave: Services → Bundles */}
      <WaveDivider fill="var(--bg-secondary)" direction="down" />

      {/* Bundles */}
      <section id="bundles" className="section-alt py-28 px-4">
        <BundleCards />
      </section>

      {/* Wave: Bundles → Footer */}
      <WaveDivider fill="var(--bg-primary)" direction="up" />

      <Footer />
    </main>
  );
}
