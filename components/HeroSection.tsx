"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] w-full overflow-hidden flex flex-col justify-start pt-32 md:pt-40"
    >
      {/* 
        ========================================================================
        1. SEAMLESS FULL-PAGE BACKGROUND IMAGE (Untouched)
        ========================================================================
        We use the exact image provided as the full background, sitting behind 
        all text at z-0. We removed the multiply blend mode so it displays exactly 
        as generated.
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Desktop Landscape Background */}
        <div className="hidden lg:block absolute inset-0 w-full h-full">
          <Image
            src="/Gemini_Generated_Image_tda5x5tda5x5tda5.png"
            alt="HVAC Ultra-Pure Water Filtration System Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Mobile Portrait Background */}
        <div className="block lg:hidden absolute inset-0 w-full h-full">
          <Image
            src="/Gemini_Generated_Image_m7j6mmm7j6mmm7j6.png"
            alt="Mobile HVAC Water Filtration Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* 
        ========================================================================
        2. FLOATING TEXT & UI OVERLAYS (Exactly matching the reference)
        ========================================================================
        All text elements are perfectly positioned in front of the image (z-20).
      */}
      <div className="relative w-full max-w-[1800px] h-full min-h-[calc(100vh-80px)] mx-auto px-4 lg:px-8 z-20 pointer-events-none flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 py-8 lg:py-0">
        
        {/* LEFT SECTION: Badge & Headline */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-[25%] flex flex-col items-center lg:items-start justify-start gap-6 pointer-events-auto text-center lg:text-left"
        >
          {/* Blue Circular Badge */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex flex-col items-center justify-center text-center p-4 mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-[#0284c7] rounded-full opacity-15" />
            <span className="text-[var(--brand-navy)] font-display font-black text-2xl sm:text-3xl md:text-5xl block">NO. 1</span>
            <span className="text-[#0284c7] text-[8px] sm:text-[9px] md:text-[11px] font-bold uppercase leading-tight mt-1 tracking-widest">
              Brand in Water<br/>Filtration<br/>Systems
            </span>
          </div>

          {/* Main Headline Left */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-[var(--text-primary)] leading-[1.05] uppercase tracking-tight">
            Canada <br />
            has <br />
            <span className="font-bold text-[#0284c7] drop-shadow-sm">water<br/>problem</span>
          </h1>
        </motion.div>

        {/* CENTRAL SECTION: Top Title & Stage Labels (Hidden on Mobile for cleanliness) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden lg:flex w-full lg:w-[50%] flex-col justify-start items-center relative mt-16 lg:mt-4 pointer-events-none"
        >
          {/* Top Center Title */}
          <div className="absolute -top-12 md:-top-20 left-1/2 -translate-x-1/2 w-[120%] text-center pointer-events-auto">
            <h3 className="font-display text-xl md:text-4xl font-bold tracking-tight text-[var(--brand-navy)] uppercase">
              HVAC Ultra-Pure <br className="md:hidden" />Filtration System
            </h3>
          </div>

          {/* Untreated Water Label */}
          <div className="absolute top-[10%] md:top-[18%] left-[0%] md:-left-[10%] flex flex-col items-center pointer-events-auto">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--brand-navy)] mb-2 text-center leading-tight">Untreated <br/>Municipal Water</span>
            <div className="flex gap-2 text-gray-500 mb-1">
              <svg className="w-5 h-5 md:w-6 md:h-6 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.618.309a6 6 0 01-3.86.517l-2.388-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 000 2.828l1.16 1.16a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.618-.309a6 6 0 013.86-.517l2.388.477a2 2 0 001.022-.547l1.16-1.16a2 2 0 000-2.828l-1.16-1.16z" /></svg>
              <svg className="w-5 h-5 md:w-6 md:h-6 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div className="mt-1 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-gray-400 flex items-center justify-center drop-shadow-md bg-white/50 backdrop-blur-sm">
               <span className="text-[10px] font-bold text-gray-600">Cl₃</span>
            </div>
          </div>

          {/* Purified Water Label */}
          <div className="absolute top-[10%] md:top-[18%] right-[0%] md:-right-[10%] flex flex-col items-center pointer-events-auto">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--brand-navy)] mb-2 text-center leading-tight">Purified <br/>Home Water</span>
            <div className="flex gap-2 text-[#0ea5e9]">
              <svg className="w-5 h-5 md:w-7 md:h-7 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.5c-3.3 0-6-2.7-6-6 0-3.1 3.5-8.8 5.5-12 0.3-0.4 0.8-0.4 1 0 2 3.2 5.5 8.9 5.5 12 0 3.3-2.7 6-6 6z"/></svg>
              <svg className="w-5 h-5 md:w-7 md:h-7 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.5c-3.3 0-6-2.7-6-6 0-3.1 3.5-8.8 5.5-12 0.3-0.4 0.8-0.4 1 0 2 3.2 5.5 8.9 5.5 12 0 3.3-2.7 6-6 6z"/></svg>
            </div>
            <div className="flex gap-1 mt-2 text-[#7dd3fc]">
              <svg className="w-4 h-4 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.5c-3.3 0-6-2.7-6-6 0-3.1 3.5-8.8 5.5-12 0.3-0.4 0.8-0.4 1 0 2 3.2 5.5 8.9 5.5 12 0 3.3-2.7 6-6 6z"/></svg>
              <svg className="w-3 h-3 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.5c-3.3 0-6-2.7-6-6 0-3.1 3.5-8.8 5.5-12 0.3-0.4 0.8-0.4 1 0 2 3.2 5.5 8.9 5.5 12 0 3.3-2.7 6-6 6z"/></svg>
            </div>
          </div>

          {/* Bottom Stages */}
          <div className="absolute top-[400px] md:top-[500px] w-full flex justify-between px-4 pointer-events-auto">
            <div className="flex flex-col items-center relative w-1/3">
               <div className="absolute bottom-full mb-3 w-px h-16 md:h-28 bg-gray-600/50" />
               <span className="text-[10px] md:text-xs font-bold text-[var(--brand-navy)] text-center leading-tight tracking-wider uppercase">
                 STAGE 1:<br/><span className="font-normal text-gray-700">SEDIMENT FILTER</span>
               </span>
            </div>
            <div className="flex flex-col items-center relative w-1/3">
               <div className="absolute bottom-full mb-3 w-px h-16 md:h-28 bg-gray-600/50" />
               <span className="text-[10px] md:text-xs font-bold text-[var(--brand-navy)] text-center leading-tight tracking-wider uppercase">
                 STAGE 2:<br/><span className="font-normal text-gray-700">CARBON BLOCK</span>
               </span>
            </div>
            <div className="flex flex-col items-center relative w-1/3">
               <div className="absolute bottom-full mb-3 w-px h-16 md:h-28 bg-[#0ea5e9] shadow-[0_0_12px_#0ea5e9]" />
               <span className="text-[10px] md:text-xs font-bold text-[var(--brand-navy)] text-center leading-tight tracking-wider uppercase">
                 STAGE 3:<br/><span className="font-normal text-[#0ea5e9]">UV PURIFICATION</span>
               </span>
            </div>
          </div>

        </motion.div>

        {/* RIGHT SECTION: Headline */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full lg:w-[25%] flex flex-col justify-end lg:justify-start items-center lg:items-end text-center lg:text-right z-20 mt-auto lg:mt-0 pt-0 lg:pt-28 pointer-events-auto pb-20 lg:pb-0"
        >
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-[var(--text-primary)] leading-[1.05] uppercase tracking-tight">
            We <br />
            have <br />
            <span className="font-bold text-[#0284c7] drop-shadow-sm">the<br/>solution</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
