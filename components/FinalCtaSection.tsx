"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section suppressHydrationWarning className="relative bg-[#E8650A] text-white py-20 sm:py-28 select-none overflow-hidden">
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
            href="#quote"
            onClick={(e) => {
              const el = document.getElementById("quote");
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-[#0B1E33] font-extrabold text-base uppercase tracking-wider shadow-2xl hover:bg-slate-100 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <span>Get My Free Quote</span>
            <ArrowRight className="w-5 h-5 text-[#E8650A]" />
          </a>

          <a
            href="tel:9055550142"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-white font-extrabold text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2.5"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call (905) 555-0142</span>
          </a>
        </div>
      </div>
    </section>
  );
}
