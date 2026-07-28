import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustMarquee from "@/components/TrustMarquee";
import ServicesGrid from "@/components/ServicesGrid";
import SecondOpinionPromo from "@/components/SecondOpinionPromo";
import HowItWorks from "@/components/HowItWorks";
import InstallCamShowcase from "@/components/InstallCamShowcase";
import FinancingSection from "@/components/FinancingSection";
import ReviewsSection from "@/components/ReviewsSection";
import ServiceAreas from "@/components/ServiceAreas";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#0B0E11] text-white selection:bg-[#FF6B00] selection:text-white">
      {/* 1. Utility Top Bar */}
      <UtilityBar />

      {/* 2. Main Navigation Bar */}
      <Navbar />

      {/* 3. Hero & Quote Form Card */}
      <HeroSection />

      {/* 4. Trust Strip */}
      <TrustMarquee />

      {/* 5. Our Services */}
      <ServicesGrid />

      {/* 6. Free Second Opinion Promo */}
      <SecondOpinionPromo />

      {/* 7. How It Works (Process) */}
      <HowItWorks />

      {/* 8. Before & After (InstallCam Proof) */}
      <InstallCamShowcase />

      {/* 9. Flexible Financing */}
      <FinancingSection />

      {/* 10. Reviews */}
      <ReviewsSection />

      {/* 11. Service Areas */}
      <ServiceAreas />

      {/* 12. Common Questions (FAQ) */}
      <FaqSection />

      {/* 13. Final CTA */}
      <FinalCtaSection />

      {/* 14. Footer */}
      <Footer />

      {/* 15. Sticky Bottom CTA Bar */}
      <StickyBottomBar />
    </main>
  );
}
