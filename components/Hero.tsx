"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
      className="relative w-full min-h-[50vh] pt-6 pb-12 lg:pt-12 lg:pb-20 bg-[#FAFAFA] text-[#0F0F0F] overflow-hidden flex items-start justify-center selection:bg-[#0033FF] selection:text-white"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/hero-bg-mobile.png')] md:bg-[url('/hero-bg.png')] bg-cover bg-center md:bg-top bg-no-repeat"
      />

      {/* Sharp, asymmetrical content block */}
      <motion.div 
        style={{ y: y2 }}
        className="relative z-10 flex flex-col md:flex-row items-end justify-between w-full max-w-[90vw] mx-auto mt-2 border-t-2 border-b-2 border-[#0033FF]/20 py-8 md:py-12"
      >
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-sans font-extrabold tracking-tight leading-[1.1] mb-8 text-white">
            Smart <span className="relative inline-block italic font-display text-[#DC2626]">HVAC</span><br /> Solutions for Modern Homes
          </h2>
        </div>

        <div className="flex flex-col mt-16 md:mt-0 md:text-right w-full md:w-auto border-t border-[#0033FF]/20 md:border-t-0 pt-8 md:pt-0">
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
        </div>
      </motion.div>
    </section>
  );
}
