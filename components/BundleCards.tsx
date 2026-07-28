"use client";

import React from "react";
import { motion } from "framer-motion";

const bundles = [
  {
    id: "bundle-ac",
    badge: "Most Popular Deal",
    title: "New 2 Ton AC Unit",
    subtitle: "Whisper-Quiet SEER2 High Efficiency Cooling",
    price: "$2,899",
    note: "+ HST Installed",
    desc: "A turnkey residential Air Conditioning replacement package engineered for superior summer comfort and ultra-low noise operation.",
    features: [
      "Premium Mechanical Brands (Lennox, Carrier, York)",
      "Same-Week Guaranteed Priority Installation",
      "Full City Permit & TSSA Safety Inspection Included",
      "InstallCam™ Timestamped Photo Proof of Lines",
      "10-Year Comprehensive Parts & Labour Warranty",
      "Free In-Home Engineering Assessment & Sizing",
    ],
    highlight: true,
    accent: "from-[#FF6B00] via-[#FF8A3D] to-[#EA580C]",
    glow: "shadow-[0_20px_80px_rgba(255,107,0,0.2)] border-[#FF6B00]/70",
    cta: "Claim $2,899 AC Package",
  },
  {
    id: "bundle-water",
    badge: "Complete Home Water Solution",
    title: "Complete Water Bundle",
    subtitle: "Whole-Home Softener + Reverse Osmosis Station",
    price: "$2,899",
    note: "+ HST Installed",
    desc: "Transform your home's water quality with our double-system bundle: protect appliances from hard scaling while enjoying bottled-quality drinking water on tap.",
    features: [
      "High-Capacity Heavy-Duty Resin Water Softener Tank",
      "Under-Sink 5-Stage Reverse Osmosis Drinking Station",
      "Prevents Limescale Build-up on Showers & Pipes",
      "Professional TSSA Licensed Master Installation",
      "10-Year Manufacturer Equipment Warranty Guarantee",
      "Free In-Home Hardness & Total Dissolved Solids Test",
    ],
    highlight: false,
    accent: "from-[#0072F5] via-[#38BDF8] to-[#0284C7]",
    glow: "shadow-[0_20px_80px_rgba(56,189,248,0.15)] border-sky-500/40 hover:border-sky-500/80",
    cta: "Claim Complete Water Bundle",
  },
];

export default function BundleCards() {
  return (
    <section id="bundles" className="relative py-28 sm:py-36 bg-[#03070E] text-white overflow-hidden border-y border-white/[0.08]">
      {/* Background aesthetic atmospheric bloom */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-[#38BDF8] font-bold text-xs uppercase tracking-[0.2em] mb-4"
          >
            <span>Signature Packages</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-normal text-4xl sm:text-6xl lg:text-7xl text-white tracking-normal mb-5 leading-none"
          >
            Unbeatable Value. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAD60] via-[#FF6B00] to-[#EA580C]">
              Zero Hidden Dealer Fees.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto"
          >
            We bundle industry-leading heating, cooling, and pure water filtration into all-inclusive flat pricing deals. Know your complete installed investment upfront.
          </motion.p>
        </div>

        {/* VIP Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {bundles.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`rounded-[34px] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden transition-all duration-500 bg-[#0A1220]/90 backdrop-blur-3xl border-2 ${item.glow}`}
            >
              {/* Glowing Top Atmospheric Banner Rim */}
              <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${item.accent}`} />
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Badge Row */}
                <div className="flex justify-between items-center mb-6">
                  <span className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    item.highlight 
                      ? "bg-[#FF6B00]/20 text-[#FFAD60] border border-[#FF6B00]/40 shadow-[0_0_20px_rgba(255,107,0,0.25)]"
                      : "bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30"
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
                    <span>{item.badge}</span>
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#CBD5E1]/60">Package 0{idx + 1}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display font-normal text-3xl sm:text-5xl text-white mb-2 leading-tight tracking-normal">
                  {item.title}
                </h3>
                <span className="text-xs sm:text-sm font-semibold text-[#CBD5E1]/80 block mb-6 tracking-wide">
                  {item.subtitle}
                </span>
                
                <p className="font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-10 font-light">
                  {item.desc}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-3.5 pb-8 border-b border-white/[0.12] mb-8">
                  <span className={`font-display font-normal text-6xl sm:text-[80px] leading-none text-transparent bg-clip-text bg-gradient-to-r ${item.accent} drop-shadow-lg`}>
                    {item.price}
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                      {item.note}
                    </span>
                    <span className="text-xs text-[#64748B] font-light">Comprehensive flat installation rate</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex flex-col gap-4 mb-10 text-sm sm:text-[15px]">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3.5">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                        item.highlight 
                          ? "bg-[#FF6B00]/20 text-[#FF8A3D] shadow-[0_0_10px_rgba(255,107,0,0.4)]"
                          : "bg-[#38BDF8]/20 text-[#38BDF8] shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                      }`}>
                        ✓
                      </span>
                      <span className="text-[#E2E8F0] font-normal leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#quote"
                  onClick={(e) => {
                    const el = document.getElementById("quote");
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`w-full py-4 rounded-2xl font-body font-bold text-base sm:text-lg text-white text-center justify-center flex items-center gap-2.5 transition-all duration-300 shadow-xl ${
                    item.highlight
                      ? "bg-gradient-to-r from-[#FF6B00] via-[#F97316] to-[#EA580C] hover:shadow-[0_12px_45px_rgba(255,107,0,0.6)] hover:scale-[1.01]"
                      : "bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-white/40"
                  }`}
                >
                  <span>{item.cta}</span>
                  <span className="text-xl">➔</span>
                </a>
                <span className="text-[11px] text-[#64748B] text-center font-light mt-3 block">
                  Over 140 homeowners claimed this exact package across the GTA this season
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
