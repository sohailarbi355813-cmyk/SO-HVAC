"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "1",
    title: "Free In-Home Assessment",
    desc: "We measure your home properly, inspect your current system, and listen to what you actually need.",
  },
  {
    num: "2",
    title: "Transparent Quote",
    desc: "Equipment cost, labour, and options — itemized in writing. Compare us to anyone.",
  },
  {
    num: "3",
    title: "Premium Installation",
    desc: "SO Certified™ technicians install to manufacturer spec, with InstallCam™ photos of every stage.",
  },
  {
    num: "4",
    title: "Follow-Up & Warranty",
    desc: "We register your warranty, walk you through your system, and check in after 30 days.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" suppressHydrationWarning className="relative py-24 sm:py-32 bg-[#0B0E11] text-white border-b border-white/10 select-none overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8650A]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="text-[#E8650A] font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            How It Works
          </div>
          <h2 
            style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            From First Call to Final Photo
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
            No surprises, no pressure. Here&apos;s exactly what working with SO HVAC looks like.
          </p>
        </motion.div>

        {/* 4-Step Grid with Kinetic Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              suppressHydrationWarning
              whileHover={{ scale: 1.02, y: -6, borderColor: "rgba(214, 234, 248, 0.95)", transition: { type: "spring", stiffness: 350, damping: 18 } }}
              className="step bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl rounded-[28px] border border-white/10 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col justify-start group cursor-default"
            >
              <div 
                style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                className="w-12 h-12 rounded-full bg-[#E8650A] text-white font-extrabold text-2xl flex items-center justify-center mb-6 shadow-[0_4px_16px_rgba(232,101,10,0.5)] group-hover:scale-110 transition-transform duration-300"
              >
                {step.num}
              </div>

              <h3 
                style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                className="text-xl font-bold text-white mb-3 tracking-wide"
              >
                {step.title}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
