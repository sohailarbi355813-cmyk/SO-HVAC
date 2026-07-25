"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  accentColor: "red" | "navy" | "blue" | "cyan" | "orange";
  icon: ReactNode;
}

const services: ServiceCard[] = [
  {
    id: "service-ac",
    title: "Air Conditioning",
    description:
      "High-efficiency central AC systems installed with precision. Stay cool all summer with energy-saving units from top-tier brands.",
    accentColor: "blue",
    icon: (
      /* Cooling / Ice Snowflake Icon */
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="22" />
          <path d="m20 16-4-4 4-4" />
          <path d="m4 8 4 4-4 4" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="m16 4-4 4-4-4" />
          <path d="m8 20 4-4 4 4" />
        </svg>
      </div>
    ),
  },
  {
    id: "service-furnace",
    title: "Furnace",
    description:
      "Modern, efficient furnace installations that provide reliable, even heat throughout your home during the harshest winters.",
    accentColor: "red",
    icon: (
      /* Heating / Hot Fire Flame Icon */
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/30 flex items-center justify-center text-red-600 shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      </div>
    ),
  },
  {
    id: "service-heatpump",
    title: "Heat Pump",
    description: "Year-round comfort with a single system. Heat pumps offer exceptional efficiency for both heating and cooling in one unit.",
    accentColor: "navy",
    icon: (
      /* Dual Thermal Loop / Heat & Cool Icon */
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1a2e5a]/20 to-purple-500/10 border border-[#1a2e5a]/30 flex items-center justify-center text-[#1a2e5a] shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <path d="M17 13v4a5 5 0 0 1-10 0v-4" />
          <path d="M3 11 h4 l-2 -3 z" fill="currentColor" />
          <path d="M17 13 h4 l-2 3 z" fill="currentColor" />
        </svg>
      </div>
    ),
  },
  {
    id: "service-water-heater",
    title: "Water Heater",
    description:
      "Reliable hot water on demand with traditional or hybrid water heaters installed by certified technicians.",
    accentColor: "orange",
    icon: (
      /* Hot Steaming Water Droplet Icon */
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 flex items-center justify-center text-orange-600 shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v6" />
          <path d="M12 22a7 7 0 0 0 7-7c0-2-2-5-7-11-5 6-7 9-7 11a7 7 0 0 0 7 7z" />
          <path d="M8.5 9.5 7 8" />
          <path d="M15.5 9.5 17 8" />
        </svg>
      </div>
    ),
  },
  {
    id: "service-tankless",
    title: "Tankless Water Heater",
    description:
      "Endless hot water with zero standby heat loss. Save space and energy with a modern on-demand tankless system.",
    accentColor: "red",
    icon: (
      /* High-tech Instant Flow / Tankless Unit Icon */
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-red-500/10 border border-rose-500/30 flex items-center justify-center text-rose-600 shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M7 20v-4" />
          <path d="M17 20v-4" />
          <path d="M12 20v-4" />
          <circle cx="12" cy="10" r="2" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    ),
  },
  {
    id: "service-water-purification",
    title: "Water Purification",
    description:
      "Crystal-clear, pure water throughout your home. From softeners to reverse osmosis systems — water you can trust.",
    accentColor: "cyan",
    icon: (
      /* Pure Sparkling Water / Filtration Icon */
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-2-5-7-11-5 6-7 9-7 11a7 7 0 0 0 7 7z" />
          <path d="m19 8 1 1-1 1" />
          <path d="m5 8-1 1 1 1" />
          <path d="M12 15v2" />
          <path d="M10 17h4" />
        </svg>
      </div>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

function ServiceCard({ service, index }: { service: ServiceCard; index: number }) {
  const isRed = service.accentColor === "red";
  const isNavy = service.accentColor === "navy";
  const isCyan = service.accentColor === "cyan";
  const isOrange = service.accentColor === "orange";
  const accentColor = isRed
    ? "var(--brand-red)"
    : isNavy
    ? "var(--brand-navy)"
    : isCyan
    ? "#0284c7"
    : isOrange
    ? "#ea580c"
    : "#2563eb";
  const hoverShadow = isRed
    ? "0 20px 56px rgba(220,38,38,0.16), 0 8px 20px rgba(220,38,38,0.09)"
    : isNavy
    ? "0 20px 56px rgba(26,46,90,0.20), 0 8px 20px rgba(26,46,90,0.12)"
    : isCyan
    ? "0 20px 56px rgba(2,132,199,0.18), 0 8px 20px rgba(2,132,199,0.10)"
    : "0 20px 56px rgba(29,95,168,0.16), 0 8px 20px rgba(29,95,168,0.09)";
  const hoverBorder = isRed
    ? "rgba(220,38,38,0.30)"
    : isNavy
    ? "rgba(26,46,90,0.35)"
    : isCyan
    ? "rgba(2,132,199,0.35)"
    : "rgba(37,99,235,0.30)";

  // Staggered vertical offsets for organic layout feel
  const verticalOffset = [0, 20, -10, 10, -20, 0][index] ?? 0;

  return (
    <motion.div
      variants={cardVariants}
      id={service.id}
      whileHover={{
        y: verticalOffset - 8,
        scale: 1.03,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      style={{ marginTop: verticalOffset }}
      onClick={() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      className="group relative flex flex-col gap-5 p-7 rounded-[20px] cursor-pointer"
      role="article"
      aria-label={service.title}
    >
      {/* Card background */}
      <div
        className="absolute inset-0 rounded-[20px] transition-all duration-300"
        style={{
          background: "var(--bg-primary)",
          boxShadow: "var(--shadow-sm)",
          border: "1px solid var(--border-color)",
        }}
      />
      <div
        className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: hoverShadow,
          border: `1px solid ${hoverBorder}`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-5">
        {/* Icon */}
        <div className="w-14 h-14 flex-shrink-0">
          {service.icon}
        </div>

        {/* Text */}
        <div>
          <h3
            className="font-display font-bold text-[28px] lg:text-[32px] leading-tight mb-3 transition-colors duration-200"
            style={{ color: "var(--text-primary)" }}
          >
            {service.title}
          </h3>
          <p className="font-body text-[16px] leading-relaxed text-[var(--text-secondary)]">
            {service.description}
          </p>
        </div>

        {/* CTA link */}
        <a
          href="#contact"
          onClick={(e) => {
            e.stopPropagation();
            const el = document.getElementById("contact");
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 text-[16px] font-body font-semibold transition-all duration-200 group-hover:gap-3 w-fit"
          style={{ color: accentColor }}
        >
          Learn More
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
      />
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
        className="text-center mb-20"
      >
        <span
          className="inline-block text-xs font-display font-700 uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5"
          style={{
            background: "rgba(26,46,90,0.10)",
            color: "var(--brand-navy)",
            border: "1px solid rgba(26,46,90,0.20)",
          }}
        >
          What We Do
        </span>
        <h2
          className="font-display font-bold mb-5"
          style={{ fontSize: "clamp(40px, 4vw, 48px)", color: "var(--text-primary)" }}
        >
          Our Services
        </h2>
        <p className="font-body text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          From keeping you warm in winter to purifying every drop of water — we
          install, maintain, and guarantee every system we touch.
        </p>
      </motion.div>

      {/* Staggered Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </motion.div>
    </div>
  );
}
