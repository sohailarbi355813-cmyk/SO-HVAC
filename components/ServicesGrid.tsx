"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Snowflake, Flame, Thermometer, Droplet, Waves, Wrench, Activity, SearchCheck, Zap } from "lucide-react";

const SERVICES = [
  {
    icon: Snowflake,
    title: "Air Conditioners",
    desc: "Right-sized AC installs with transparent pricing and InstallCam™ documentation of every step.",
  },
  {
    icon: Flame,
    title: "Furnaces",
    desc: "High-efficiency furnace replacement, sized properly for your home — never upsold.",
  },
  {
    icon: Thermometer,
    title: "Heat Pumps",
    desc: "Cold-climate heat pumps with rebate guidance. We'll tell you honestly if one fits your home.",
  },
  {
    icon: Droplet,
    title: "Tankless Water Heaters",
    desc: "Endless hot water and space savings, installed by SO Certified™ technicians.",
  },
  {
    icon: Waves,
    title: "Water Heaters",
    desc: "Tank replacements done same-week — with clear equipment and labour pricing.",
  },
  {
    icon: Wrench,
    title: "Repairs",
    desc: "Fast diagnosis and honest repair-vs-replace advice. We fix what can be fixed.",
  },
  {
    icon: Activity,
    title: "Maintenance",
    desc: "Seasonal tune-ups that protect your warranty and prevent mid-winter breakdowns.",
  },
  {
    icon: SearchCheck,
    title: "Second Opinions",
    desc: "Got a big quote? We'll review it free — and tell you if it's fair, oversized, or overpriced.",
  },
  {
    icon: Zap,
    title: "Emergency Service",
    desc: "No heat? No cooling? 24/7 response across the GTA, with upfront pricing before we start.",
  },
];

export default function ServicesGrid() {
  const gridRef = useRef<HTMLElement>(null);

  const handlePointerMove = (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    const section = gridRef.current;
    if (!section) return;

    const clientX = "touches" in e && e.touches.length > 0 ? e.touches[0].clientX : "clientX" in e ? (e as React.MouseEvent).clientX : 0;
    const clientY = "touches" in e && e.touches.length > 0 ? e.touches[0].clientY : "clientY" in e ? (e as React.MouseEvent).clientY : 0;

    const rect = section.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Canvas background accent spotlight
    section.style.setProperty("--mouse-x", `${x}px`);
    section.style.setProperty("--mouse-y", `${y}px`);

    // Iterate across all .svc-card tiles to illuminate borders near pointer
    const cards = section.querySelectorAll(".svc-card");
    cards.forEach((card) => {
      const el = card as HTMLElement;
      const cardRect = el.getBoundingClientRect();
      el.style.setProperty("--card-x", `${clientX - cardRect.left}px`);
      el.style.setProperty("--card-y", `${clientY - cardRect.top}px`);
    });
  };

  return (
    <section 
      id="services" 
      ref={gridRef}
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
      suppressHydrationWarning 
      className="relative w-full bg-[#0B0E11] text-white py-24 sm:py-32 border-b border-white/10 select-none overflow-hidden"
    >
      {/* JavaScript-Driven Pale Jewel Cursor Tracking Canvas Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-100 z-0"
        style={{
          background: `radial-gradient(750px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(214, 234, 248, 0.08), transparent 80%)`
        }}
      />

      {/* Atmospheric Background Glows (Multi-Layer Depth) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E8650A]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#2D7DD2]/10 rounded-full blur-[160px] pointer-events-none" />

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
            Our Services
          </div>
          <h2 
            style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Everything Your Home&apos;s Comfort Depends On
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
            From new installs to 24/7 emergency repairs — one team, transparent pricing, premium workmanship.
          </p>
        </motion.div>
        
        {/* Services List - Highly Asymmetrical Bento CSS Grid (.svc-list) */}
        <div className="svc-list max-w-5xl mx-auto">
          {SERVICES.map((svc, idx) => {
            const IconComp = svc.icon;
            const isDouble = svc.title === "Air Conditioners" || svc.title === "Emergency Service";

            return (
              <motion.div
                key={idx}
                suppressHydrationWarning
                whileHover={{ 
                  scale: 1.02, 
                  y: -6,
                  borderColor: "rgba(214, 234, 248, 0.95)",
                  boxShadow: "0 30px 90px rgba(0, 0, 0, 0.85), 0 0 32px rgba(214, 234, 248, 0.32)",
                  transition: { type: "spring", stiffness: 350, damping: 18 }
                }}
                data-service={svc.title}
                className={`svc-card bg-[#151B24] rounded-[28px] border border-white/[0.07] ${
                  isDouble
                    ? "p-8 sm:p-10 min-h-[240px] sm:min-h-[260px] col-span-2 justify-between"
                    : "p-6 sm:p-7 aspect-square min-h-[270px] col-span-1 justify-between"
                } shadow-[0_15px_45px_rgba(0,0,0,0.5)] flex flex-col group cursor-pointer relative overflow-hidden`}
                onClick={() => {
                  const el = document.getElementById("quote");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {/* Reactive Pale Jewel Spotlight Border & Surface Illumination */}
                <div 
                  className="pointer-events-none absolute inset-0 rounded-[28px] opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(350px circle at var(--card-x, -20%) var(--card-y, -20%), rgba(214, 234, 248, 0.5), transparent 70%)`,
                    mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    maskComposite: `exclude`,
                    WebkitMaskComposite: `xor`,
                    padding: `1.5px`
                  }}
                />
                <div 
                  className="pointer-events-none absolute inset-0 rounded-[28px] opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(280px circle at var(--card-x, -20%) var(--card-y, -20%), rgba(214, 234, 248, 0.05), transparent 75%)`
                  }}
                />

                <div className="relative z-10">
                  <div className={`tile ${isDouble ? "w-16 h-16 mb-7" : "w-13 h-13 mb-5"} rounded-2xl bg-white/[0.04] border border-[#D6EAF8]/30 flex items-center justify-center text-[#D6EAF8] group-hover:bg-[#E8650A] group-hover:border-[#E8650A] group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(214,234,248,0.1)] group-hover:shadow-[0_0_35px_rgba(232,101,10,0.6)] group-hover:scale-110`}>
                    <IconComp className={`${isDouble ? "w-8 h-8" : "w-6 h-6"} stroke-[1.75] shrink-0 transition-transform duration-300 group-hover:rotate-6`} />
                  </div>
                  <h3 
                    style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                    className={`${isDouble ? "text-2xl sm:text-3xl font-extrabold mb-3.5" : "text-lg sm:text-xl font-bold mb-2.5"} text-white tracking-tight group-hover:text-[#D6EAF8] transition-colors`}
                  >
                    {svc.title}
                  </h3>
                  <p className={`text-white/70 leading-relaxed font-light ${isDouble ? "text-base sm:text-lg max-w-2xl mb-8" : "text-xs sm:text-sm mb-5"}`}>
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 relative z-10">
                  <span className="text-xs font-bold text-[#E8650A] group-hover:text-[#FF8A3D] uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
