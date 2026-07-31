"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, FileText } from "lucide-react";

export default function SecondOpinionPromo() {
  return (
    <section id="second-opinion" suppressHydrationWarning className="relative py-24 sm:py-32 bg-[#F1F5F9] text-[#0F0F0F] border-b border-[#0F0F0F]/10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        <motion.div 
          suppressHydrationWarning
          initial={{ opacity: 0, y: 45, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white hover:bg-[#FAFAFA] backdrop-blur-2xl border border-[#0F0F0F]/10 hover:border-[#0033FF]/40 rounded-[32px] p-8 sm:p-14 shadow-[0_15px_40px_rgba(0,0,0,0.05)] relative overflow-hidden transition-colors duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Representative Card / Image Stage (5 Columns) */}
            <div className="lg:col-span-5">
              <div className="h-64 sm:h-72 rounded-2xl border border-[#0F0F0F]/10 relative overflow-hidden shadow-inner group">
                <img 
                  src="/ac-cleaning.jpg" 
                  alt="Technician reviewing quote" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content & Value Prop (7 Columns) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="text-[#0033FF] font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                THE SO HVAC DIFFERENCE
              </div>

              <h2 
                style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                className="text-3xl sm:text-5xl font-extrabold text-[#0F0F0F] tracking-tight leading-tight"
              >
                Built around better decisions—not bigger invoices.
              </h2>

              <p className="text-sm sm:text-lg text-[#0F0F0F]/80 leading-relaxed font-light">
                SO HVAC exists because homeowners are often asked to approve expensive replacements before anyone properly explains what is wrong, what is optional, and what is actually worth paying for.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-sm sm:text-base text-[#0F0F0F] font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#1B8A5A] text-white flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(27,138,90,0.3)]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span>Understand the issue first</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-[#0F0F0F] font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#1B8A5A] text-white flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(27,138,90,0.3)]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span>Equipment options explained plainly</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-[#0F0F0F] font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#1B8A5A] text-white flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(27,138,90,0.3)]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span>Homeowner decides without pressure</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/19055550142" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] font-extrabold text-base text-white shadow-[0_10px_35px_rgba(220,38,38,0.4)] hover:scale-[1.02] transition-all"
                >
                  <span>Review My Quote</span>
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
