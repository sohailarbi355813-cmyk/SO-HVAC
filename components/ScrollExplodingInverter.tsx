"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LAYER_SPECS = [
  {
    title: "Acoustic Titanium Shell",
    subtitle: "Component 01 — Exterior Housing Architecture",
    description:
      "Constructed from vibration-dampened matte composite alloys designed to blend effortlessly into residential interiors. Operates at a quiet 18dB sound profile—eliminating mechanical starting hums while preserving continuous indoor airflow.",
    specs: ["18dB Sound Rating", "Vibration-Isolated Mounting", "Hydrophobic Coated Evaporator"],
  },
  {
    title: "Twin-Rotary Magnetic Inverter",
    subtitle: "Component 02 — Variable Compressor Core",
    description:
      "Unlike basic single-speed equipment that spikes electrical draw on startup, the brushless magnetic compressor continuously scales its operational output between 15% and 100% capacity. Assures primary thermal transfer in freezing temperatures down to -25°C.",
    specs: ["24.5 SEER2 Certified Rating", "R-32 Eco Refrigerant Loop", "Zero Frost Defrost Modulation"],
  },
  {
    title: "Medical Filtration Array",
    subtitle: "Component 03 — True-HEPA Air Sanctuary",
    description:
      "Integrated micro-filtration designed to purge domestic environments of respiratory irritants. A high-density fibrous matrix captures 99.97% of mold spores, allergen dust particles, and seasonal irritants without creating restrictive airflow static pressure.",
    specs: ["99.97% Micron Capture Ratio", "Zero Static Pressure Drop", "Antimicrobial Honeycomb Bed"],
  },
];

export default function ScrollExplodingInverter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const shellRef = useRef<HTMLDivElement>(null);
  const compressorRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const ctx = gsap.context(() => {
      if (!triggerRef.current) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          pin: triggerRef.current,
          scrub: 1.2,
          onUpdate: (self) => {
            const prog = self.progress;
            if (prog < 0.35) setActiveIndex(0);
            else if (prog < 0.7) setActiveIndex(1);
            else setActiveIndex(2);
          },
        },
      });

      // Initial compact assembled state
      gsap.set(shellRef.current, { y: 0, scale: 1, zIndex: 30, opacity: 1 });
      gsap.set(compressorRef.current, { y: 0, scale: 0.92, zIndex: 20, opacity: 0 });
      gsap.set(filterRef.current, { y: 0, scale: 0.85, zIndex: 10, opacity: 0 });

      // Phase 1: Elevate exterior shell to present internal twin-rotary compressor
      timeline
        .to(shellRef.current, {
          y: -200,
          scale: 0.88,
          opacity: 0.35,
          duration: 2,
          ease: "power2.inOut",
        }, "step1")
        .to(compressorRef.current, {
          opacity: 1,
          y: 0,
          scale: 1.04,
          duration: 2,
          ease: "power2.inOut",
        }, "step1");

      // Phase 2: Shift compressor upward and introduce filtration cartridge in active plane
      timeline
        .to(shellRef.current, { y: -280, opacity: 0.1, duration: 2 }, "step2")
        .to(compressorRef.current, {
          y: -160,
          scale: 0.88,
          opacity: 0.35,
          duration: 2,
          ease: "power2.inOut",
        }, "step2")
        .to(filterRef.current, {
          opacity: 1,
          y: 20,
          scale: 1.04,
          duration: 2,
          ease: "power2.inOut",
        }, "step2");

    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  const activeSpec = LAYER_SPECS[activeIndex];

  return (
    <section ref={sectionRef} suppressHydrationWarning className="relative w-full bg-[#03060D] text-white border-b border-white/[0.06]">
      
      <div ref={triggerRef} className="relative w-full h-screen min-h-[750px] max-h-[1100px] overflow-hidden flex flex-col justify-center px-6 sm:px-12 lg:px-20">
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#03060D] via-slate-950 to-[#03060D] pointer-events-none" />
        
        {/* Minimalist Header with Generous Negative Space */}
        <div className="absolute top-12 inset-x-0 z-40 max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between border-b border-white/[0.06] pb-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-slate-400 block">
              Structural Teardown Analysis
            </span>
            <span style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }} className="text-xl font-bold text-white tracking-tight">
              Hardware Component Layering
            </span>
          </div>

          <div className="flex items-center gap-3">
            {LAYER_SPECS.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-700 ease-out ${
                  activeIndex === i ? "w-10 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]" : "w-3 bg-slate-800"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Relaxed Asymmetrical Layout: Hardware Dissection vs Editorial Typography */}
        <div className="relative z-20 max-w-7xl mx-auto w-full h-full pt-32 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: LAYERED HARDWARE STACK (Depth & Layering via Soft Glass Elevation) */}
          <div className="lg:col-span-7 relative h-[450px] sm:h-[580px] flex items-center justify-center">
            
            <div ref={shellRef} className="absolute inset-x-0 mx-auto flex justify-center max-w-lg">
              <div className="w-full aspect-[16/10] bg-slate-900/40 rounded-3xl p-6 border border-white/[0.08] backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.85)] relative flex items-center justify-center">
                <Image
                  src="/smart-inverter.png"
                  alt="Acoustic Titanium Shell"
                  fill
                  className="object-contain p-6 select-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
                  priority
                />
              </div>
            </div>

            <div ref={compressorRef} className="absolute inset-x-0 mx-auto flex justify-center max-w-lg">
              <div className="w-full aspect-[16/10] bg-slate-900/60 rounded-3xl p-6 border border-white/[0.08] backdrop-blur-2xl shadow-[0_35px_100px_rgba(0,0,0,0.95)] relative flex items-center justify-center">
                <Image
                  src="/exploded-compressor.png"
                  alt="Twin Rotary Magnetic Inverter"
                  fill
                  className="object-contain p-6 select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                />
              </div>
            </div>

            <div ref={filterRef} className="absolute inset-x-0 mx-auto flex justify-center max-w-lg">
              <div className="w-full aspect-[16/10] bg-slate-900/70 rounded-3xl p-6 border border-white/[0.08] backdrop-blur-2xl shadow-[0_35px_100px_rgba(0,0,0,0.95)] relative flex items-center justify-center">
                <Image
                  src="/hepa-filter.png"
                  alt="Medical True HEPA Array"
                  fill
                  className="object-contain p-6 select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                />
              </div>
            </div>

          </div>

          {/* RIGHT: EDITORIAL TYPOGRAPHY WITH LOOSE BODY CADENCE & CLEAR HIERARCHY */}
          <div className="lg:col-span-5 text-left space-y-8">
            
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 font-bold">
              {activeSpec.subtitle}
            </div>

            <h3 style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }} className="text-4xl sm:text-5xl font-extrabold text-white tracking-tighter leading-[1.04]">
              {activeSpec.title}
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-[1.8] font-sans font-normal">
              {activeSpec.description}
            </p>

            {/* Clean Spec Checklist */}
            <div className="pt-4 space-y-3.5 border-t border-white/[0.06]">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-2">
                Engineering Tolerances
              </div>
              {activeSpec.specs.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#quote"
                className="group inline-flex items-center gap-3 text-sm font-bold text-white hover:text-amber-400 transition-colors"
              >
                <span>Request Custom Floorplan Evaluation</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

        {/* Minimal Bottom Guideline */}
        <div className="absolute bottom-8 inset-x-0 max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between text-[11px] font-mono text-slate-500 tracking-wider">
          <span>HIGH-CAPACITY INVERTER SERIES</span>
          <span>APPROVED FOR $7,100 ONTARIO INCENTIVE</span>
        </div>

      </div>
    </section>
  );
}
