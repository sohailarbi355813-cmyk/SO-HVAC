"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import ServicesBento from "@/components/ServicesBento";
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
  // Client-side fluid cursor-tracking logic for radial spotlight gradients
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e && e.touches.length > 0 ? e.touches[0].clientX : "clientX" in e ? (e as MouseEvent).clientX : 0;
      const clientY = "touches" in e && e.touches.length > 0 ? e.touches[0].clientY : "clientY" in e ? (e as MouseEvent).clientY : 0;

      // Global viewport custom properties for radial canvas spotlights
      document.documentElement.style.setProperty("--mouse-x", `${clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${clientY}px`);

      // Calculate localized relative pointer coordinates for every bento tile and floating form
      const interactiveElements = document.querySelectorAll(".svc-card, .form-card, .pay-card, .step, .rev-card, .faq-item");
      interactiveElements.forEach((el) => {
        const item = el as HTMLElement;
        const rect = item.getBoundingClientRect();
        item.style.setProperty("--card-x", `${clientX - rect.left}px`);
        item.style.setProperty("--card-y", `${clientY - rect.top}px`);
      });
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-[#FAFAFA] text-[#0F0F0F] selection:bg-[#0033FF] selection:text-white">
      {/* ── $10k+ Studio Fixed Atmospheric Radial Gradients (Light Mode Multiply) ── */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden mix-blend-multiply opacity-30">
        {/* Massive Cobalt Blue Floating Orb (Top Left Anchor) */}
        <div 
          className="absolute -top-[15%] -left-[10%] w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full blur-[170px] sm:blur-[210px] pointer-events-none animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(0, 51, 255, 0.4) 0%, rgba(0, 51, 255, 0.15) 45%, transparent 75%)",
            animationDuration: "12s"
          }}
        />
        {/* Deep Cyan / Ice Blue Floating Orb (Mid Right Anchor) */}
        <div 
          className="absolute top-[35%] -right-[15%] w-[800px] sm:w-[1050px] h-[800px] sm:h-[1050px] rounded-full blur-[190px] sm:blur-[230px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(77, 112, 255, 0.3) 0%, rgba(77, 112, 255, 0.1) 50%, transparent 80%)"
          }}
        />
        {/* Subtle Accent Halo (Bottom Central Anchor) */}
        <div 
          className="absolute bottom-[5%] left-[20%] w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full blur-[160px] sm:blur-[190px] pointer-events-none animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(0, 51, 255, 0.25) 0%, rgba(0, 51, 255, 0.05) 50%, transparent 75%)",
            animationDuration: "16s"
          }}
        />
      </div>


      {/* 2. Main Navigation Bar */}
      <Navbar />

      {/* 3. Hero & Floating Smoked Glass Quote Form Card */}
      <Hero />

      {/* 4. Trust Strip */}
      <TrustMarquee />

      {/* 5. Our Services - Smoked Glass Asymmetrical Bento Matrix */}
      <ServicesBento />

      {/* 6. Free Second Opinion Promo */}
      <SecondOpinionPromo />

      {/* 7. How It Works (Process Steps) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <HowItWorks />
      </motion.div>

      {/* 8. Before & After (InstallCam Proof) */}
      <InstallCamShowcase />

      {/* 9. Flexible Financing (Bento Calculator Module) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.75, type: "spring", damping: 22 }}
      >
        <FinancingSection />
      </motion.div>

      {/* 10. Reviews Bento Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <ReviewsSection />
      </motion.div>

      {/* 11. Service Areas */}
      <ServiceAreas />

      {/* 12. FAQ Accordions */}
      <FaqSection />

      {/* 13. Final Action Banner */}
      <FinalCtaSection />

      {/* 14. Footer */}
      <Footer />

      {/* 15. Sticky Mobile CTA Bar */}
      <StickyBottomBar />
    </main>
  );
}
