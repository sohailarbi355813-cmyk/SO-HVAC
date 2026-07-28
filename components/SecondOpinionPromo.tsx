"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, FileText } from "lucide-react";

export default function SecondOpinionPromo() {
  return (
    <section id="second-opinion" suppressHydrationWarning className="relative py-24 sm:py-32 bg-[#050B14] text-white border-b border-white/10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        <motion.div 
          suppressHydrationWarning
          initial={{ opacity: 0, y: 45, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/[0.03] hover:bg-white/[0.05] backdrop-blur-2xl border border-white/10 hover:border-[#E8650A]/40 rounded-[32px] p-8 sm:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.6)] relative overflow-hidden transition-colors duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Representative Card / Image Stage (5 Columns) */}
            <div className="lg:col-span-5">
              <div className="h-64 sm:h-72 rounded-2xl bg-[#03060D] border border-white/10 p-6 flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden shadow-inner group">
                <div className="w-14 h-14 rounded-2xl bg-[#E8650A]/10 border border-[#E8650A]/30 text-[#E8650A] flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-md">
                  <FileText className="w-7 h-7" />
                </div>
                <p className="text-xs sm:text-sm font-mono text-white/60 tracking-wider">
                  IMAGE &mdash; Technician reviewing a competitor quote with homeowner (WebP, lazy-loaded)
                </p>
              </div>
            </div>

            {/* Content & Value Prop (7 Columns) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="text-[#E8650A] font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                Free Second Opinion
              </div>

              <h2 
                style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
              >
                Already Have a Quote? Don&apos;t Sign It Yet.
              </h2>

              <p className="text-sm sm:text-lg text-white/80 leading-relaxed font-light">
                The average GTA homeowner overpays by $2,000&ndash;$4,000 on HVAC replacements. Send us your quote and we&apos;ll review it free &mdash; the equipment, the sizing, and the price.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-sm sm:text-base text-white font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#1B8A5A] text-white flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(27,138,90,0.4)]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span>Line-by-line quote review in plain English</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-white font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#1B8A5A] text-white flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(27,138,90,0.4)]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span>We flag oversized equipment and inflated pricing</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-white font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#1B8A5A] text-white flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(27,138,90,0.4)]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span>No pressure &mdash; even if you go with the other company</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#quote"
                  onClick={(e) => {
                    const el = document.getElementById("quote");
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#E8650A] hover:bg-[#C95508] font-extrabold text-base text-white shadow-[0_10px_35px_rgba(232,101,10,0.4)] hover:scale-[1.02] transition-all"
                >
                  <span>Get My Free Quote Review</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
