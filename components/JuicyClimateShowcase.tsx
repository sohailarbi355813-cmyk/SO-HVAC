"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Minus, Shield, Zap, Wind, Award, ChevronRight } from "lucide-react";

const BENTO_ADVANTAGES = [
  {
    title: "18dB Acoustic Signature",
    subtitle: "Undetectable Operational Noise",
    desc: "While legacy compressors generate disruptive mechanical drone at 65dB, our variable-speed twin-rotary motors run virtually silently in outdoor residential environments.",
    metric: "72% Quieter",
    colSpan: "lg:col-span-7",
    bgAccent: "from-amber-500/10 via-amber-950/20 to-slate-950/80",
    borderGlow: "group-hover:border-amber-500/40",
    image: "/smart-inverter.png",
  },
  {
    title: "-25°C Nordic Capacity",
    subtitle: "Sub-Zero Thermal Transfer",
    desc: "Maintains dependable primary indoor heating through extreme Ontario cold snaps without relying on costly electric resistance backup heating strips.",
    metric: "100% Heat at -15°C",
    colSpan: "lg:col-span-5",
    bgAccent: "from-cyan-500/10 via-slate-900/50 to-slate-950/90",
    borderGlow: "group-hover:border-cyan-500/40",
    image: "/exploded-compressor.png",
  },
  {
    title: "$7,100 Provincial Rebates",
    subtitle: "Maximum Efficiency Incentives",
    desc: "Engineered to exceed federal and provincial clean heating mandates, directly reducing your initial hardware investment with verified rebate auditing.",
    metric: "SEER2 Certified",
    colSpan: "lg:col-span-5",
    bgAccent: "from-emerald-500/10 via-slate-900/50 to-slate-950/90",
    borderGlow: "group-hover:border-emerald-500/40",
    image: null,
  },
  {
    title: "45% Reduction in Power Draw",
    subtitle: "Magnetic Inverter Modulation",
    desc: "Replaces standard on/off energy surges with continuous RPM adjustments. The brushless magnetic compressor dynamically scales output to match the precise heat loss rate of your building envelope.",
    metric: "Variable RPM",
    colSpan: "lg:col-span-7",
    bgAccent: "from-orange-500/10 via-slate-900/60 to-slate-950/90",
    borderGlow: "group-hover:border-orange-500/40",
    image: "/hepa-filter.png",
  },
];

export default function JuicyClimateShowcase() {
  const [selectedConfig, setSelectedConfig] = useState<"heating" | "cooling" | "filtration">("heating");

  return (
    <section className="relative w-full bg-[#03060D] text-white py-32 sm:py-44 border-b border-white/[0.06] overflow-hidden">
      
      {/* Soft Ambient Studio Backdrop */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-gradient-to-l from-amber-500/[0.04] to-transparent rounded-full blur-[180px]" />
        <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Editorial Section Introduction with Generous Negative Space */}
        <div className="max-w-3xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-amber-400 text-xs font-mono tracking-[0.2em] uppercase">
            <span>Engineering Differentiation</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }} className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white leading-[1.05]">
            Breaking Past Mechanical Averages.
          </h2>
          <p className="text-lg text-slate-300 leading-[1.8] font-sans">
            Traditional residential HVAC hardware relies on outdated single-speed compressors that generate disruptive acoustic vibration and excessive power surges. We design cleanly around magnetic variable modulation.
          </p>
        </div>

        {/* FLUID BENTO BOX MATRIX: Relaxed Grid with Overlapping Imagery & Soft Inner Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-28">
          {BENTO_ADVANTAGES.map((card, i) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`${card.colSpan} relative rounded-3xl p-8 sm:p-11 bg-gradient-to-b ${card.bgAccent} border border-white/[0.07] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden group ${card.borderGlow} transition-colors duration-500`}
            >
              {/* Soft Ambient Inner Highlight */}
              <div className="absolute top-0 right-0 p-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono font-bold text-white shadow-sm">
                  {card.metric}
                </span>
              </div>

              <div className="space-y-4 max-w-md z-20 relative">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block">
                  {card.subtitle}
                </span>
                <h3 style={{ fontFamily: "var(--font-outfit), sans-serif" }} className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal pt-2">
                  {card.desc}
                </p>
              </div>

              {/* Organically Overlapping Studio Hardware Cutouts (Breaks out of rigid borders!) */}
              {card.image && (
                <div className="relative w-full h-48 sm:h-56 mt-8 -mb-6 -mr-6 z-10 pointer-events-none transform group-hover:scale-105 transition-transform duration-700 ease-out">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain object-right-bottom filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)]"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ORGANIC EQUIPMENT SELECTOR: Hand-Crafted Interactive Configuration */}
        <div className="pt-12 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
                  Hardware Specifications
                </span>
                <h3 style={{ fontFamily: "var(--font-outfit), sans-serif" }} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Modular Inverter Architecture.
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed font-sans">
                  Select a mechanical subsystem below to evaluate component tolerances, thermal range capability, and integrated air filtration characteristics.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setSelectedConfig("heating")}
                  className={`w-full p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex items-start justify-between group ${
                    selectedConfig === "heating"
                      ? "bg-amber-500/10 border-amber-500/60 shadow-[0_10px_35px_rgba(245,158,11,0.15)] text-white"
                      : "bg-slate-900/30 border-white/[0.06] text-slate-400 hover:bg-slate-900/60 hover:border-white/15 hover:text-slate-200"
                  }`}
                >
                  <div className="space-y-1 pr-4">
                    <div className="text-base font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                      Sub-Zero Nordic Heat Pump Core
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed font-normal">
                      High-compression rotary extraction maintaining 100% capacity in freezing climates.
                    </div>
                  </div>
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 transition-all ${selectedConfig === "heating" ? "bg-amber-500 shadow-[0_0_10px_#f59e0b]" : "bg-slate-700"}`} />
                </button>

                <button
                  onClick={() => setSelectedConfig("cooling")}
                  className={`w-full p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex items-start justify-between group ${
                    selectedConfig === "cooling"
                      ? "bg-amber-500/10 border-amber-500/60 shadow-[0_10px_35px_rgba(245,158,11,0.15)] text-white"
                      : "bg-slate-900/30 border-white/[0.06] text-slate-400 hover:bg-slate-900/60 hover:border-white/15 hover:text-slate-200"
                  }`}
                >
                  <div className="space-y-1 pr-4">
                    <div className="text-base font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                      Cryo-Inverter Cooling Housing
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed font-normal">
                      Variable continuous low-RPM humidity removal without severe temperature swings.
                    </div>
                  </div>
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 transition-all ${selectedConfig === "cooling" ? "bg-amber-500 shadow-[0_0_10px_#f59e0b]" : "bg-slate-700"}`} />
                </button>

                <button
                  onClick={() => setSelectedConfig("filtration")}
                  className={`w-full p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex items-start justify-between group ${
                    selectedConfig === "filtration"
                      ? "bg-amber-500/10 border-amber-500/60 shadow-[0_10px_35px_rgba(245,158,11,0.15)] text-white"
                      : "bg-slate-900/30 border-white/[0.06] text-slate-400 hover:bg-slate-900/60 hover:border-white/15 hover:text-slate-200"
                  }`}
                >
                  <div className="space-y-1 pr-4">
                    <div className="text-base font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                      Medical True-HEPA Air Sanitation
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed font-normal">
                      Integrated micro-filtration array trapping 99.97% of indoor particulates and mold spores.
                    </div>
                  </div>
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 transition-all ${selectedConfig === "filtration" ? "bg-amber-500 shadow-[0_0_10px_#f59e0b]" : "bg-slate-700"}`} />
                </button>
              </div>
            </div>

            {/* Asymmetrical Floating Showcase Monitor */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              <div className="relative w-full aspect-[16/11] rounded-3xl bg-gradient-to-tr from-slate-950/90 via-slate-900/60 to-slate-900/40 border border-white/[0.08] p-8 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.85)] overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(245,158,11,0.06)_0,transparent_100%)] pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedConfig}
                    initial={{ opacity: 0, scale: 0.94, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={
                        selectedConfig === "heating"
                          ? "/exploded-compressor.png"
                          : selectedConfig === "cooling"
                          ? "/smart-inverter.png"
                          : "/hepa-filter.png"
                      }
                      alt="Selected mechanical system preview"
                      fill
                      className="object-contain p-6 select-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 inset-x-8 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/[0.06] pt-4">
                  <span>SERIES CERTIFICATION • ONTARIO 2026</span>
                  <span className="text-amber-400 font-bold uppercase">10-Year Comprehensive Parts Protection</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
