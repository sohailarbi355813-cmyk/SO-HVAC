"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, Camera, CheckCircle2, AlertTriangle } from "lucide-react";

export default function InstallCamShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (client_x: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = client_x - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 3) percentage = 3;
    if (percentage > 97) percentage = 97;
    setSliderPosition(percentage);
  };

  return (
    <section id="installcam" suppressHydrationWarning className="ba relative py-24 sm:py-32 bg-[#FAFAFA] text-[#0F0F0F] border-b border-[#0F0F0F]/10 select-none overflow-hidden">
      {/* Ambient background depth */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#0033FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0022AA]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-[#0033FF] font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            <Camera className="w-4 h-4 text-[#0033FF] animate-pulse" />
            <span>InstallCam™ &middot; Real Jobs, Real Photos</span>
          </div>
          <h2 
            style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F0F0F]"
          >
            Before &amp; After: Work We&apos;re Proud to Show
          </h2>
          <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-light">
            Every SO HVAC install is photo-documented start to finish. Slide across to inspect our real GTA installation transformations.
          </p>
        </motion.div>

        {/* SINGLE INTERACTIVE CSS COMPARISON SLIDER (.ba container) */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          ref={containerRef}
          onMouseMove={(e) => {
            if (e.buttons === 1) handlePointerMove(e.clientX);
          }}
          onTouchMove={(e) => {
            if (e.touches[0]) handlePointerMove(e.touches[0].clientX);
          }}
          onClick={(e) => handlePointerMove(e.clientX)}
          className="ba-item relative max-w-5xl mx-auto h-[440px] sm:h-[520px] lg:h-[600px] rounded-[36px] bg-[#FFFFFF] border border-[#0F0F0F]/10 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] select-none cursor-ew-resize group"
        >
          {/* TAG AFTER (Right Corner) */}
          <span className="tag-after absolute top-6 right-6 sm:top-8 sm:right-8 z-30 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-[#0F0F0F]/10 text-[#0F0F0F] font-mono text-xs sm:text-sm font-bold tracking-[0.15em] shadow-md">
            <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
            <span>AFTER</span>
          </span>

          {/* TAG BEFORE (Left Corner) */}
          <span className="tag-before absolute top-6 left-6 sm:top-8 sm:left-8 z-30 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-[#0F0F0F]/10 text-[#0F0F0F] font-mono text-xs sm:text-sm font-bold tracking-[0.15em] shadow-md">
            <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0" />
            <span>BEFORE</span>
          </span>

          {/* AFTER LAYER (Full Base Canvas - Pristine Modern Install) */}
          <div className="absolute inset-0 w-full h-full p-8 sm:p-14 flex flex-col justify-end items-end text-right">
            {/* The After Image */}
            <img src="/after-hvac.jpg" alt="New efficient HVAC system" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

            {/* Subtle shadow overlay to make the info card pop */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            
            <div className="relative z-10 max-w-md space-y-2 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#0033FF]/20 shadow-xl">
              <div className="text-[#0033FF] font-mono text-xs font-bold tracking-wider uppercase">
                Pristine Engineering &amp; TSSA Compliance
              </div>
              <p className="text-sm sm:text-base text-[#0F0F0F] font-medium leading-relaxed">
                New high-efficiency install with clean lines, properly labelled shutoffs, and vibration dampeners.
              </p>
            </div>
          </div>

          {/* BEFORE LAYER (Clipped Canvas - Old Corroded Install) */}
          <div 
            className="absolute inset-0 w-full h-full p-8 sm:p-14 flex flex-col justify-end items-start text-left z-20 transition-all duration-75"
            style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}
          >
            {/* The Before Image */}
            <img src="/before-hvac.jpg" alt="Old inefficient HVAC system" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

            {/* Subtle shadow overlay to make the info card pop */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

            <div className="relative z-10 max-w-sm space-y-2 bg-[#F1F5F9]/90 backdrop-blur-md p-6 rounded-2xl border border-black/10 shadow-xl">
              <div className="text-[#DC2626] font-mono text-xs font-bold tracking-wider uppercase">
                Ineffective &amp; Overpriced System
              </div>
              <p className="text-sm sm:text-base text-[#0F0F0F] font-medium leading-relaxed">
                Old furnace with corroded venting, exposed ductwork, and severe energy drain.
              </p>
            </div>
          </div>

          {/* Center Dragger (The Line) */}
          <div 
            className="absolute top-0 bottom-0 z-30 w-1 bg-[#0033FF] shadow-[0_0_15px_rgba(0,51,255,0.8)] cursor-ew-resize flex items-center justify-center pointer-events-none transition-all duration-75"
            style={{
              left: `${sliderPosition}%`,
              transform: "translateX(-50%)"
            }}
          >
            <div className="w-12 h-12 rounded-full bg-white border-[3px] border-[#0033FF] flex items-center justify-center shadow-[0_4px_15px_rgba(0,51,255,0.4)] pointer-events-auto">
              <ArrowLeftRight className="w-5 h-5 text-[#0033FF]" />
            </div>
          </div>
          
        </motion.div>

        <p className="text-center text-xs sm:text-sm font-mono text-[#1A1A1A]/50 mt-6 tracking-widest uppercase">
          &larr; Drag slider left or right to compare job quality &rarr;
        </p>

      </div>
    </section>
  );
}
