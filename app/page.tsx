"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
    <main className="relative overflow-x-hidden bg-[#0B0E11] bg-obsidian text-white selection:bg-[#FF6B00] selection:text-white">
      {/* ── $10k+ Studio Fixed Atmospheric Radial Gradients (Floating Glass Proof) ── */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        {/* Massive Solar Amber / Orange Floating Orb (Top Left Anchor) */}
        <div 
          className="absolute -top-[15%] -left-[10%] w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full blur-[170px] sm:blur-[210px] pointer-events-none animate-pulse opacity-85"
          style={{
            background: "radial-gradient(circle, rgba(232, 101, 10, 0.16) 0%, rgba(201, 85, 8, 0.08) 45%, transparent 75%)",
            animationDuration: "12s"
          }}
        />
        {/* Deep Cobalt / Sapphire Blue Floating Orb (Mid Right Anchor) */}
        <div 
          className="absolute top-[35%] -right-[15%] w-[800px] sm:w-[1050px] h-[800px] sm:h-[1050px] rounded-full blur-[190px] sm:blur-[230px] pointer-events-none opacity-90"
          style={{
            background: "radial-gradient(circle, rgba(45, 125, 210, 0.18) 0%, rgba(29, 100, 178, 0.08) 50%, transparent 80%)"
          }}
        />
        {/* Subtle Pale Jewel Accent Halo (Bottom Central Anchor) */}
        <div 
          className="absolute bottom-[5%] left-[20%] w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full blur-[160px] sm:blur-[190px] pointer-events-none opacity-75 animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(214, 234, 248, 0.12) 0%, rgba(214, 234, 248, 0.04) 50%, transparent 75%)",
            animationDuration: "16s"
          }}
        />
      </div>

      {/* 1. Utility Top Bar */}
      <UtilityBar />

      {/* 2. Main Navigation Bar */}
      <Navbar />

      {/* 3. Hero & Floating Quote Form Card Wrapped in Framer Motion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <HeroSection />
      </motion.div>

      {/* 4. Trust Strip */}
      <TrustMarquee />

      {/* 5. Our Services - Asymmetrical Bento Grid Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.75, type: "spring", damping: 22 }}
      >
        <ServicesGrid />
      </motion.div>

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
