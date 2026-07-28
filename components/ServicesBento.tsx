"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Snowflake, Flame, Thermometer, Droplet, Waves, Wrench, Activity, SearchCheck, Zap } from "lucide-react";

const SERVICES = [
  {
    icon: Snowflake,
    title: "Air Conditioners",
    desc: "Right-sized AC installs with transparent pricing and InstallCam™ documentation of every step.",
    spanClass: "md:col-span-2", // Spans 2 columns across the top row
  },
  {
    icon: Flame,
    title: "Furnaces",
    desc: "High-efficiency furnace replacement, sized properly for your home — never upsold. Built for harsh cold winters with rigorous combustion safety testing and smart thermostat integration.",
    spanClass: "md:col-span-1 md:row-span-2 sm:min-h-[340px]", // Spans 2 vertical rows like an architectural tower
  },
  {
    icon: Thermometer,
    title: "Heat Pumps",
    desc: "Cold-climate heat pumps with rebate guidance. We'll tell you honestly if one fits your home.",
    spanClass: "md:col-span-1",
  },
  {
    icon: Droplet,
    title: "Tankless Water Heaters",
    desc: "Endless hot water and space savings, installed by SO Certified™ technicians.",
    spanClass: "md:col-span-1",
  },
  {
    icon: Waves,
    title: "Water Heaters",
    desc: "Tank replacements done same-week — with clear equipment and labour pricing.",
    spanClass: "md:col-span-1",
  },
  {
    icon: Wrench,
    title: "Repairs",
    desc: "Fast diagnosis and honest repair-vs-replace advice. We fix what can be fixed.",
    spanClass: "md:col-span-1",
  },
  {
    icon: Activity,
    title: "Maintenance",
    desc: "Seasonal tune-ups that protect your warranty and prevent mid-winter breakdowns.",
    spanClass: "md:col-span-1",
  },
  {
    icon: SearchCheck,
    title: "Second Opinions",
    desc: "Got a big quote? We'll review it free — and tell you if it's fair, oversized, or overpriced.",
    spanClass: "md:col-span-1",
  },
  {
    icon: Zap,
    title: "Emergency Service",
    desc: "No heat? No cooling? 24/7 response across the GTA, with upfront pricing before we start.",
    spanClass: "md:col-span-2", // Spans 2 columns to visually anchor the bottom of the grid
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 280, damping: 22 },
  },
};

export default function ServicesBento() {
  const gridRef = useRef<HTMLElement>(null);

  const handlePointerMove = (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    const section = gridRef.current;
    if (!section) return;

    const clientX = "touches" in e && e.touches.length > 0 ? e.touches[0].clientX : "clientX" in e ? (e as React.MouseEvent).clientX : 0;
    const clientY = "touches" in e && e.touches.length > 0 ? e.touches[0].clientY : "clientY" in e ? (e as React.MouseEvent).clientY : 0;

    const rect = section.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    section.style.setProperty("--mouse-x", `${x}px`);
    section.style.setProperty("--mouse-y", `${y}px`);

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
      ref={gridRef}
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
      className="relative w-full text-white py-28 px-6 sm:px-12 border-b border-white/10 select-none overflow-hidden group/section"
    >
      {/* Dynamic Pale Jewel Cursor Canvas Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-100 z-0"
        style={{
          background: `radial-gradient(750px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(214, 234, 248, 0.07), transparent 75%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#D6EAF8] bg-[#D6EAF8]/10 px-4 py-1.5 rounded-full border border-[#D6EAF8]/30 inline-block drop-shadow-[0_0_12px_rgba(214,234,248,0.3)]">
            03 &mdash; Our Services
          </span>
          <h2
            style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Everything residential HVAC. <br />
            <span className="text-[#D6EAF8]">Done right the first time.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-light max-w-xl mx-auto">
            Transparent pricing, zero salesperson markups, and photographic engineering validation on every single visit.
          </p>
        </div>

        {/* Asymmetrical Tailwind CSS Grid Matrix */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="svc-list grid grid-cols-1 md:grid-cols-3 gap-5 w-full"
        >
          {SERVICES.map((svc, idx) => {
            const IconComponent = svc.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                data-service={svc.title}
                className={`svc-card relative z-10 rounded-[32px] p-8 sm:p-9 overflow-hidden group/card bg-white/[0.02] backdrop-blur-xl border border-white/10 flex flex-col justify-between ${svc.spanClass}`}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                {/* Dynamic Responsive Spotlight Border & Surface Glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[32px] opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(400px circle at var(--card-x, 50%) var(--card-y, 50%), rgba(214, 234, 248, 0.5), transparent 70%)`,
                    mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    maskComposite: `exclude`,
                    WebkitMaskComposite: `xor`,
                    padding: `1.5px`,
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-[32px] opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(320px circle at var(--card-x, 50%) var(--card-y, 50%), rgba(214, 234, 248, 0.06), transparent 75%)`,
                  }}
                />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-[#D6EAF8] mb-6 shadow-inner group-hover/card:scale-110 group-hover/card:bg-white/[0.08] group-hover/card:border-[#D6EAF8] transition-all duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                    className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover/card:text-[#D6EAF8] transition-colors"
                  >
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-[#D6EAF8] opacity-80 group-hover/card:opacity-100 group-hover/card:translate-x-1.5 transition-all duration-300">
                  <span>Explore specifications</span>
                  <span className="text-base">&rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
