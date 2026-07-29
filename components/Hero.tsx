"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Swoosh from "@/components/Swoosh";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -4]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[85vh] py-24 lg:py-32 bg-[#FAFAFA] text-[#0F0F0F] overflow-hidden flex items-center justify-center selection:bg-[#0033FF] selection:text-white"
    >
      {/* Massive Stylish Typography Bleed - Light Mode */}
      <motion.div 
        style={{ y: y1, scale, rotate }}
        className="absolute w-full flex flex-col items-center justify-center pointer-events-none z-0 mix-blend-multiply opacity-5"
      >
        <h1 className="text-[18vw] leading-[0.75] font-display font-bold tracking-tighter whitespace-nowrap text-[#0033FF]">
          Atmosphere
        </h1>
        <h1 className="text-[18vw] leading-[0.75] font-display font-bold italic tracking-tighter whitespace-nowrap ml-32">
          Engineered
        </h1>
      </motion.div>

      {/* Sharp, asymmetrical content block */}
      <motion.div 
        style={{ y: y2 }}
        className="relative z-10 flex flex-col md:flex-row items-end justify-between w-full max-w-[90vw] mx-auto mt-12 border-t-2 border-b-2 border-[#0033FF]/20 py-16"
      >
        <div className="max-w-3xl">
          <p className="font-mono text-[#0033FF] uppercase tracking-[0.4em] text-xs mb-8 font-bold">
            01 &mdash; The SO HVAC Standard
          </p>
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8 text-[#0F0F0F]">
            Honest <span className="relative inline-block italic text-[#0033FF] pr-2">Climate<Swoosh color="#0033FF" className="opacity-80 translate-y-2 md:translate-y-4" /></span><br/> Control
          </h2>
          <p className="font-sans text-xl font-medium text-[#1A1A1A]/70 max-w-xl leading-relaxed">
            We tore down the standard commission model. You consult straight with SO Certified™ installation technicians. Zero pressure. Total transparency.
          </p>
        </div>

        <div className="flex flex-col gap-8 mt-16 md:mt-0 md:text-right w-full md:w-auto border-t border-[#0033FF]/20 md:border-t-0 pt-8 md:pt-0">
          <motion.a 
            href="https://wa.me/19055550142" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="bg-[#DC2626] text-white rounded-full pl-6 pr-2 py-2 md:pl-8 md:pr-3 md:py-3 flex items-center justify-start md:justify-end gap-6 hover:bg-[#B91C1C] shadow-xl transition-all font-sans text-lg md:text-xl font-bold self-start md:self-end"
          >
            Book a visit
            <span className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#DC2626] stroke-[3]" />
            </span>
          </motion.a>
          <motion.a 
            href="#second-opinion"
            whileHover={{ x: -15, color: "#0033FF" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="text-xl md:text-3xl font-display uppercase font-medium tracking-tight flex items-center justify-start md:justify-end gap-4 text-[#0F0F0F]/40 hover:text-[#0F0F0F] transition-colors"
          >
            Audit Competitor Quote
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
