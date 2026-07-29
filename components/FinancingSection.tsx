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
    <section id="financing" suppressHydrationWarning className="fin relative py-24 sm:py-32 bg-[#F1F5F9] text-[#0F0F0F] border-b border-[#0F0F0F]/10 select-none overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#0033FF]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#4D70FF]/[0.08] rounded-full blur-[160px] pointer-events-none" />

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
            <div className="inline-flex items-center gap-2 text-[#0033FF] font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              <Calculator className="w-4 h-4 text-[#0033FF]" />
              <span>Flexible Financing &amp; Calculator</span>
            </div>

            <h2 
              style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F0F0F] tracking-tight leading-tight"
            >
              Comfort Now. Easy Monthly Payments.
            </h2>

            <p className="text-base sm:text-xl text-[#1A1A1A]/80 leading-relaxed font-light">
              Simple pre-authorized payment plans arranged directly with us &mdash; no third-party dealer fees inflating your price. Use our dynamic calculator to estimate your exact monthly investment in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/19055550142" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] font-extrabold text-base text-white shadow-[0_10px_35px_rgba(220,38,38,0.4)] hover:scale-[1.02] transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Lock In Your Price</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/19055550142" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-white hover:bg-white/90 border border-[#0F0F0F]/20 hover:border-[#DC2626]/50 font-extrabold text-base text-[#DC2626] shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all inline-flex items-center justify-center"
              >
                See Available Rebates
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Pay Card Container (.pay-card) */}
          <div className="lg:col-span-5">
            <motion.div 
              suppressHydrationWarning
              whileHover={{ scale: 1.02, y: -6, borderColor: "rgba(59, 130, 246, 0.4)", boxShadow: "0 25px 90px rgba(0,0,0,0.1), 0 0 32px rgba(59,130,246,0.2)", transition: { type: "spring", stiffness: 350, damping: 18 } }}
              className="pay-card bg-blue-500/10 hover:bg-blue-500/20 backdrop-blur-3xl rounded-[36px] p-8 sm:p-11 border border-blue-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.08)] text-left flex flex-col justify-between space-y-8 relative overflow-hidden transition-colors duration-300 group cursor-default"
            >
              <div className="space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-[#0F0F0F]/10 pb-4">
                  <span className="text-xs font-mono font-bold text-[#0033FF] uppercase tracking-widest">
                    Live Payment Calculator
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#0033FF]/10 text-[#0033FF] text-xs font-mono font-bold border border-[#0033FF]/30 shadow-sm">
                    60-MONTH PLAN
                  </span>
                </div>
                
                {/* Dynamic Monthly Price Display (.price) */}
                <div className="text-center pt-4">
                  <p className="text-sm text-[#1A1A1A]/70 font-mono tracking-wider mb-2 uppercase">Estimated Monthly Investment</p>
                  <div className="flex items-start justify-center text-[#0F0F0F]">
                    <span className="text-3xl font-bold mt-2">$</span>
                    <span 
                      style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                      className="text-8xl sm:text-9xl font-extrabold tracking-tighter"
                    >
                      {monthlyPayment}
                    </span>
                    <span className="text-2xl font-bold mt-16 text-[#1A1A1A]/60">/mo</span>
                  </div>
                </div>

                {/* Dynamic Total System Cost */}
                <div className="text-center pb-4">
                  <p className="text-sm font-medium text-[#0F0F0F]">
                    Total System Cost: <span className="font-bold">${cost.toLocaleString()}</span> <span className="text-[#1A1A1A]/60 font-normal">(Installed)</span>
                  </p>
                </div>

              </div>

              {/* Custom Branded Slider Control */}
              <div className="relative pt-6 border-t border-[#0F0F0F]/10 space-y-4">
                <input
                  type="range"
                  min="2500"
                  max="15000"
                  step="50"
                  value={cost}
                  onChange={(e) => setCost(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #0033FF ${percentage}%, rgba(0,0,0,0.1) ${percentage}%)`
                  }}
                  className="fin-slider w-full h-3 rounded-full appearance-none outline-none"
                />
                
                {/* Slider Scale Labels */}
                <div className="flex justify-between items-center text-xs font-mono text-[#1A1A1A]/60 font-bold tracking-wider">
                  <span>$2,500 (BASIC ZONE)</span>
                  <span>$15,000 (CRYO INVERTER)</span>
                </div>
              </div>

              {/* Fine Print Assurances */}
              <div className="pt-4">
                <p className="text-xs text-[#1A1A1A]/60 leading-relaxed font-light">
                  <strong className="text-[#0033FF]">Zero down &middot; No hidden dealer fees</strong> &middot; Pre-authorized payment plans arranged directly with SO HVAC mechanical engineers.
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
