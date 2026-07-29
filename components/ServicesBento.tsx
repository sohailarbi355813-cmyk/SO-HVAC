"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    id: "01",
    title: "Air Conditioners",
    desc: "Right-sized AC installs with transparent pricing and InstallCam™ documentation of every step.",
  },
  {
    id: "02",
    title: "Furnaces",
    desc: "High-efficiency furnace replacement, sized properly for your home — never upsold. Built for harsh cold winters.",
  },
  {
    id: "03",
    title: "Heat Pumps",
    desc: "Cold-climate heat pumps with rebate guidance. We'll tell you honestly if one fits your home.",
  },
  {
    id: "04",
    title: "Tankless",
    desc: "Endless hot water and space savings, installed by SO Certified™ technicians.",
  },
  {
    id: "05",
    title: "Second Opinions",
    desc: "Got a big quote? We'll review it free — and tell you if it's fair or overpriced.",
  }
];

export default function ServicesBento() {
  const containerRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#FAFAFA] text-[#0F0F0F] py-32 px-6 sm:px-12 border-b border-[#0033FF]/10 overflow-hidden"
    >
      {/* HVAC Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/expert-hvac-vertical.png')] bg-cover bg-center bg-fixed opacity-30 pointer-events-none"
      />
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] rounded-full mix-blend-multiply blur-[150px] bg-[radial-gradient(circle,_#0033FF_0%,_transparent_60%)] -translate-y-1/2" />
      </motion.div>

      <div className="relative z-10 max-w-[90vw] mx-auto">
        <div className="mb-24">

          <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none text-[#0F0F0F] max-w-3xl">
            Everything HVAC. <br />
            Done right the first time.
          </h2>
        </div>

        <div className="flex flex-col w-full border-t border-[#0F0F0F]/10">
          {SERVICES.map((svc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-[#0F0F0F]/10 py-8 md:py-12 cursor-pointer flex flex-col md:flex-row md:items-center justify-between"
            >
              {/* Massive Title */}
              <div className="flex items-center gap-8 md:gap-16 z-10">
                <span className="font-mono text-[#0F0F0F] text-lg md:text-2xl font-bold opacity-30 group-hover:opacity-80 transition-opacity">
                  {svc.id}
                </span>
                <h3 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter text-[#0F0F0F] group-hover:text-[#0033FF] transition-colors duration-500 origin-left group-hover:scale-[1.03] transform">
                  {svc.title}
                </h3>
              </div>

              {/* Reveal Description on Hover (Desktop) or always show (Mobile) */}
              <div className="z-10 mt-6 md:mt-0 md:max-w-md w-full md:text-right overflow-hidden">
                <p className="font-sans text-[#1A1A1A]/80 text-lg md:text-xl font-medium md:opacity-0 md:translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {svc.desc}
                </p>
              </div>

              {/* Hover Image Reveal Mask (Abstract) */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-[#0033FF]/5 -z-0 origin-bottom"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
