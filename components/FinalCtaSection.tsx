"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section suppressHydrationWarning className="relative bg-[#0033FF] text-white py-20 sm:py-28 select-none overflow-hidden">
      {/* Subtle depth lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center space-y-8">
        <h2 
          style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
        >
          Ready for an Honest HVAC Quote?
        </h2>
        
        <p className="text-lg sm:text-2xl text-white/95 max-w-2xl mx-auto font-normal leading-relaxed">
          Free quotes. Free second opinions. Zero pressure. That&apos;s the SO HVAC standard.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
          <a
            href="https://wa.me/19055550142" target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#DC2626] text-white font-extrabold text-base uppercase tracking-wider shadow-lg hover:shadow-2xl hover:bg-[#B91C1C] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <span>Get My Free Quote</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </a>

          <a
            href="tel:9055550142"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white font-extrabold text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2.5"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call (905) 555-0142</span>
          </a>
        </div>
      </div>
    </section>
  );
}
