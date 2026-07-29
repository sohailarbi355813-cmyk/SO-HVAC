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
    <section id="process" suppressHydrationWarning className="relative py-24 sm:py-32 bg-[#FAFAFA] text-[#0F0F0F] border-b border-[#0F0F0F]/10 select-none overflow-hidden">
      {/* HVAC Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/expert-hvac.jpg')] bg-cover bg-center bg-fixed opacity-30 pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="text-[#0033FF] font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            How It Works
          </div>
          <h2 
            style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F0F0F]"
          >
            From First Call to Final Photo
          </h2>
          <p className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed font-light">
            No surprises, no pressure. Here&apos;s exactly what working with SO HVAC looks like.
          </p>
        </motion.div>

        {/* 4-Step Grid with Kinetic Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              suppressHydrationWarning
              whileHover={{ scale: 1.02, y: -6, borderColor: "rgba(0, 51, 255, 0.4)", transition: { type: "spring", stiffness: 350, damping: 18 } }}
              className="step bg-white hover:bg-white/90 backdrop-blur-xl rounded-[28px] border border-[#0F0F0F]/10 p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex flex-col justify-start group cursor-default"
            >
              <div 
                style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                className="w-12 h-12 rounded-full bg-[#0033FF] text-white font-extrabold text-2xl flex items-center justify-center mb-6 shadow-[0_4px_16px_rgba(0,51,255,0.4)] group-hover:scale-110 transition-transform duration-300"
              >
                {step.num}
              </div>

              <h3 
                style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                className="text-xl font-bold text-[#0F0F0F] mb-3 tracking-wide"
              >
                {step.title}
              </h3>

              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
