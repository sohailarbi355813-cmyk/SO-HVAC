"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  accentColor: "red" | "navy" | "blue";
  icon: ReactNode;
}

const services: ServiceCard[] = [
  {
    id: "service-ac",
    title: "Air Conditioning",
    description:
      "High-efficiency central AC systems installed with precision. Stay cool all summer with energy-saving units from top-tier brands.",
    accentColor: "navy",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect width="48" height="48" rx="12" fill="rgba(26,46,90,0.10)" />
        <path d="M10 24h28M24 10v28M16 16l16 16M32 16L16 32" stroke="#1a2e5a" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="6" stroke="#1a2e5a" strokeWidth="2.5"/>
        <circle cx="24" cy="24" r="2" fill="#1a2e5a" />
      </svg>
    ),
  },
  {
    id: "service-furnace",
    title: "Furnace",
    description:
      "Modern, efficient furnace installations that provide reliable, even heat throughout your home during the harshest winters.",
    accentColor: "red",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect width="48" height="48" rx="12" fill="rgba(220,38,38,0.1)" />
        <rect x="12" y="14" width="24" height="22" rx="3" stroke="var(--brand-red)" strokeWidth="2.5"/>
        <path d="M12 20h24" stroke="var(--brand-red)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M18 20v16M30 20v16" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <path d="M20 11c0 0 2-2 4 0s4 0 4 0" stroke="var(--brand-red)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "service-heatpump",
    title: "Heat Pump",
    description: "Year-round comfort with a single system. Heat pumps offer exceptional efficiency for both heating and cooling in one unit.",
    accentColor: "navy",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect width="48" height="48" rx="12" fill="rgba(26,46,90,0.10)" />
        <path d="M24 34V14" stroke="#1a2e5a" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M17 21l7-7 7 7" stroke="#1a2e5a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 27l7 7 7-7" stroke="#1a2e5a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        <circle cx="24" cy="24" r="12" stroke="#1a2e5a" strokeWidth="2" strokeDasharray="4 4"/>
      </svg>
    ),
  },
  {
    id: "service-water-heater",
    title: "Water Heater",
    description:
      "Reliable hot water on demand with traditional or hybrid water heaters installed by certified technicians.",
    accentColor: "red",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect width="48" height="48" rx="12" fill="rgba(220,38,38,0.1)" />
        <rect x="14" y="10" width="20" height="28" rx="10" stroke="var(--brand-red)" strokeWidth="2.5"/>
        <path d="M20 38h8" stroke="var(--brand-red)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M22 20c0 0 0 2 2 4s2 4 2 4" stroke="var(--brand-red-light)" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
        <circle cx="24" cy="18" r="2" fill="var(--brand-red)" opacity="0.6"/>
      </svg>
    ),
  },
  {
    id: "service-tankless",
    title: "Tankless Water Heater",
    description:
      "Endless hot water with zero standby heat loss. Save space and energy with a modern on-demand tankless system.",
    accentColor: "red",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect width="48" height="48" rx="12" fill="rgba(220,38,38,0.1)" />
        <rect x="14" y="10" width="20" height="28" rx="4" stroke="var(--brand-red)" strokeWidth="2.5"/>
        <path d="M14 20h20M14 28h20" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <path d="M21 24h6" stroke="var(--brand-red)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M18 38v2M30 38v2" stroke="var(--brand-red)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 10V8M28 10V8" stroke="var(--brand-red)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "service-water-purification",
    title: "Water Purification",
    description:
      "Crystal-clear, pure water throughout your home. From softeners to reverse osmosis systems — water you can trust.",
    accentColor: "navy",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect width="48" height="48" rx="12" fill="rgba(26,46,90,0.10)" />
        <path d="M24 10s-10 10-10 18a10 10 0 0020 0C34 20 24 10 24 10z" stroke="#1a2e5a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 28a6 6 0 008 0" stroke="#1d5fa8" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
        <circle cx="24" cy="26" r="2" fill="#1d5fa8" opacity="0.5"/>
      </svg>
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
  const accentColor = isRed
    ? "var(--brand-red)"
    : isNavy
    ? "var(--brand-navy)"
    : "var(--brand-blue)";
  const accentBg = isRed
    ? "rgba(220,38,38,0.08)"
    : isNavy
    ? "rgba(26,46,90,0.08)"
    : "rgba(29,95,168,0.08)";
  const hoverShadow = isRed
    ? "0 20px 56px rgba(220,38,38,0.16), 0 8px 20px rgba(220,38,38,0.09)"
    : isNavy
    ? "0 20px 56px rgba(26,46,90,0.20), 0 8px 20px rgba(26,46,90,0.12)"
    : "0 20px 56px rgba(29,95,168,0.16), 0 8px 20px rgba(29,95,168,0.09)";
  const hoverBorder = isRed
    ? "rgba(220,38,38,0.30)"
    : isNavy
    ? "rgba(26,46,90,0.35)"
    : "rgba(29,95,168,0.30)";
  const topAccentColor = accentColor;

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
            className="font-display font-800 text-xl mb-2.5 transition-colors duration-200"
            style={{ color: "var(--text-primary)" }}
          >
            {service.title}
          </h3>
          <p className="font-body text-sm leading-relaxed text-[var(--text-secondary)]">
            {service.description}
          </p>
        </div>

        {/* CTA link */}
        <div
          className="flex items-center gap-2 text-sm font-display font-700 transition-all duration-200 group-hover:gap-3"
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
        </div>
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
          className="font-display font-900 mb-5"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--text-primary)" }}
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
