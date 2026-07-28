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
    <section id="installcam" suppressHydrationWarning className="ba relative py-24 sm:py-32 bg-[#03070F] text-white border-b border-white/10 select-none overflow-hidden">
      {/* Ambient background depth */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#E8650A]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-[#38BDF8] font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            <Camera className="w-4 h-4 text-[#38BDF8] animate-pulse" />
            <span>InstallCam™ &middot; Real Jobs, Real Photos</span>
          </div>
          <h2 
            style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Before &amp; After: Work We&apos;re Proud to Show
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
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
          className="ba-item relative max-w-5xl mx-auto h-[440px] sm:h-[520px] lg:h-[600px] rounded-[36px] bg-[#0E1523] border border-white/15 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] select-none cursor-ew-resize group"
        >
          {/* TAG AFTER (Right Corner) */}
          <span className="tag-after absolute top-6 right-6 sm:top-8 sm:right-8 z-30 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-950/70 backdrop-blur-xl border border-[#D6EAF8]/40 text-[#D6EAF8] font-mono text-xs sm:text-sm font-bold tracking-[0.15em] shadow-[0_6px_25px_rgba(0,0,0,0.6)]">
            <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
            <span>AFTER</span>
          </span>

          {/* TAG BEFORE (Left Corner) */}
          <span className="tag-before absolute top-6 left-6 sm:top-8 sm:left-8 z-30 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-950/70 backdrop-blur-xl border border-[#D6EAF8]/40 text-[#D6EAF8] font-mono text-xs sm:text-sm font-bold tracking-[0.15em] shadow-[0_6px_25px_rgba(0,0,0,0.6)]">
            <AlertTriangle className="w-4 h-4 text-[#E8650A] shrink-0" />
            <span>BEFORE</span>
          </span>

          {/* AFTER LAYER (Full Base Canvas - Pristine Modern Install) */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#06101E] via-[#0D1F3C] to-[#153462] p-8 sm:p-14 flex flex-col justify-end items-end text-right">
            {/* Architectural Grid Texture Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            
            <div className="relative z-10 max-w-md space-y-2 bg-[#050B14]/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
              <div className="text-[#38BDF8] font-mono text-xs font-bold tracking-wider uppercase">
                Pristine Engineering &amp; TSSA Compliance
              </div>
              <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                IMAGE &mdash; New high-efficiency install, clean lines, labelled shutoffs, vibration dampeners (WebP)
              </p>
            </div>
          </div>

          {/* BEFORE LAYER (Clipped Canvas - Old Corroded Install) */}
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-bl from-[#1A1816] via-[#141210] to-[#0A0908] p-8 sm:p-14 flex flex-col justify-end items-start text-left z-20 transition-all duration-75"
            style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}
          >
            {/* Rust / Dark Sepia Noise Texture */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C95508_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            
            <div className="relative z-10 max-w-md space-y-2 bg-[#120F0D]/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
              <div className="text-[#E8650A] font-mono text-xs font-bold tracking-wider uppercase">
                Ineffective &amp; Overpriced System
              </div>
              <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed">
                IMAGE &mdash; Old furnace, corroded venting, exposed ductwork, inefficient energy drain (real job-site photo, WebP)
              </p>
            </div>
          </div>

          {/* SLIDER HANDLE & VERTICAL DIVIDER LINE */}
          <div 
            className="absolute top-0 bottom-0 z-40 pointer-events-none flex items-center justify-center transition-all duration-75"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          >
            {/* Razor Divider Line with Light Projection */}
            <div className="w-[2px] h-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9),0_0_35px_rgba(214,234,248,0.7)]" />

            {/* Glowing White Pill Handle */}
            <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white text-slate-950 shadow-[0_0_35px_rgba(255,255,255,1),0_8px_30px_rgba(0,0,0,0.85)] flex items-center justify-center border-[3px] border-[#0E1523] transition-transform duration-300 group-hover:scale-110">
              <ArrowLeftRight className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2.5] text-[#0B0E11]" />
            </div>
          </div>

          {/* Seamless Native Range Overlay for Immediate Tactile Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-50 m-0 touch-none"
            aria-label="Before and after HVAC installation comparison slider"
          />
        </motion.div>

        <p className="text-center text-xs text-white/50 mt-6 font-mono tracking-widest uppercase">
          &larr; Drag slider left or right to compare job quality &rarr;
        </p>

      </div>
    </section>
  );
}
