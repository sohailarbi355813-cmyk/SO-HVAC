"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";

export default function FinancingSection() {
  const [cost, setCost] = useState(5340);
  
  // Real-time monthly payment calculation over 60 months
  const monthlyPayment = Math.round(cost / 60);
  
  // Track fill calculation (Range: $2,500 to $15,000)
  const percentage = ((cost - 2500) / (15000 - 2500)) * 100;

  return (
    <section id="financing" suppressHydrationWarning className="fin relative py-24 sm:py-32 bg-[#0B0E11] text-white border-b border-white/10 select-none overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#E8650A]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#D6EAF8]/[0.08] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 text-[#E8650A] font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              <Calculator className="w-4 h-4 text-[#E8650A]" />
              <span>Flexible Financing &amp; Calculator</span>
            </div>

            <h2 
              style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              Comfort Now. Easy Monthly Payments.
            </h2>

            <p className="text-base sm:text-xl text-white/80 leading-relaxed font-light">
              Simple pre-authorized payment plans arranged directly with us &mdash; no third-party dealer fees inflating your price. Use our dynamic calculator to estimate your exact monthly investment in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#quote"
                onClick={(e) => {
                  const el = document.getElementById("quote");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-4 rounded-2xl bg-[#E8650A] hover:bg-[#C95508] font-extrabold text-base text-white shadow-[0_10px_35px_rgba(232,101,10,0.4)] hover:scale-[1.02] transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Lock In Your Price</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#quote"
                onClick={(e) => {
                  const el = document.getElementById("quote");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/20 hover:border-[#D6EAF8]/50 font-extrabold text-base text-white transition-all inline-flex items-center justify-center"
              >
                See Available Rebates
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Pay Card Container (.pay-card) */}
          <div className="lg:col-span-5">
            <motion.div 
              suppressHydrationWarning
              whileHover={{ scale: 1.02, y: -6, borderColor: "rgba(214, 234, 248, 0.95)", boxShadow: "0 25px 90px rgba(0,0,0,0.85), 0 0 32px rgba(214,234,248,0.32)", transition: { type: "spring", stiffness: 350, damping: 18 } }}
              className="pay-card bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-2xl rounded-[36px] p-8 sm:p-11 border border-white/15 shadow-[0_25px_90px_rgba(0,0,0,0.7)] text-left flex flex-col justify-between space-y-8 relative overflow-hidden transition-colors duration-300 group cursor-default"
            >
              <div className="space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-mono font-bold text-[#D6EAF8] uppercase tracking-widest">
                    Live Payment Calculator
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#E8650A]/20 text-[#E8650A] text-xs font-mono font-bold border border-[#E8650A]/40 shadow-sm">
                    60-MONTH PLAN
                  </span>
                </div>
                
                {/* Dynamic Monthly Price Display (.price) */}
                <div>
                  <span className="text-xs text-white/60 font-medium uppercase tracking-wider block mb-2">
                    Estimated Monthly Investment
                  </span>
                  <div 
                    style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                    className="price text-6xl sm:text-7xl font-extrabold text-[#E8650A] tracking-tight mb-3 transition-all duration-100 drop-shadow-[0_4px_30px_rgba(232,101,10,0.35)] flex items-baseline"
                  >
                    <span>${monthlyPayment}</span>
                    <span className="text-2xl sm:text-3xl font-bold text-white/80 ml-1">/mo</span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#D6EAF8]/85 font-mono bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/5 inline-block">
                    Total System Cost: <strong className="text-white font-bold text-base ml-1">${cost.toLocaleString()}</strong> <span className="text-white/60">(Installed)</span>
                  </div>
                </div>

                {/* Range Slider Track with Glowing Pale Jewel Accent */}
                <div className="space-y-3 pt-2">
                  <input
                    type="range"
                    min="2500"
                    max="15000"
                    step="100"
                    value={cost}
                    onChange={(e) => setCost(Number(e.target.value))}
                    aria-label="Adjust total HVAC installation cost"
                    style={{
                      background: `linear-gradient(to right, #D6EAF8 0%, #D6EAF8 ${percentage}%, rgba(255,255,255,0.12) ${percentage}%, rgba(255,255,255,0.12) 100%)`,
                      boxShadow: "0 0 22px rgba(214, 234, 248, 0.45), inset 0 1px 3px rgba(0, 0, 0, 0.6)"
                    }}
                    className="fin-slider w-full h-3.5 rounded-full appearance-none cursor-pointer focus:outline-none transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(214,234,248,0.75)]"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-white/50 tracking-wider uppercase">
                    <span>$2,500 (Basic Zone)</span>
                    <span>$15,000 (Cryo Inverter)</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light pt-4 border-t border-white/[0.08]">
                  Zero down &middot; No hidden dealer fees &middot; Pre-authorized payment plans arranged directly with SO HVAC mechanical engineers.
                </p>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
