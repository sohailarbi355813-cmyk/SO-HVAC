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
        
        {/* Services List - 9 Cards in Asymmetrical Bento Matrix with Dynamic Border Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((svc, idx) => {
            const IconComp = svc.icon;
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
                className="svc-card bg-[#151B24] rounded-[28px] border border-white/[0.07] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.5)] flex flex-col justify-between group cursor-pointer relative overflow-hidden"
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
                  <div className="tile w-14 h-14 rounded-2xl bg-white/[0.03] border border-[#D6EAF8]/25 flex items-center justify-center text-[#D6EAF8] mb-6 group-hover:bg-[#E8650A] group-hover:border-[#E8650A] group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(214,234,248,0.08)] group-hover:shadow-[0_0_30px_rgba(232,101,10,0.55)] group-hover:scale-110">
                    <IconComp className="w-7 h-7 stroke-[1.75] shrink-0 transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <h3 
                    style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                    className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-[#D6EAF8] transition-colors"
                  >
                    {svc.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">
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
