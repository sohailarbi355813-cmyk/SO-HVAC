"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface Bundle {
  id: string;
  badge: string;
  title: string;
  subtitle?: string;
  price: string;
  priceNote: string;
  features: string[];
  ctaText: string;
  gradient: string;
  glowColor: string;
  accentColor: string;
  accentBg: string;
  checkColor: string;
  icon: ReactNode;
}

const bundles: Bundle[] = [
  {
    id: "bundle-ac",
    badge: "Most Popular",
    title: "New 2 Ton AC Unit",
    subtitle: undefined,
    price: "$2,899",
    priceNote: "+ HST",
    features: [
      "Premium Brands (Lennox, Carrier, York)",
      "Faster Installation — Same Week",
      "Energy Efficient SEER-Rated Systems",
      "Full Permit & Inspection Included",
      "10-Year Parts & Labour Warranty",
      "Free In-Home Assessment",
    ],
    ctaText: "Get This Deal",
    gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 60%, #991b1b 100%)",
    glowColor: "rgba(220,38,38,0.35)",
    accentColor: "#dc2626",
    accentBg: "rgba(220,38,38,0.08)",
    checkColor: "#f97316",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <circle cx="32" cy="32" r="30" stroke="rgba(220,38,38,0.3)" strokeWidth="2"/>
        <path d="M16 32h32M32 16v32M22 22l20 20M42 22L22 42" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="8" stroke="#dc2626" strokeWidth="3"/>
        <circle cx="32" cy="32" r="3" fill="#dc2626"/>
      </svg>
    ),
  },
  {
    id: "bundle-water",
    badge: "Best Value",
    title: "Complete Water Bundle",
    subtitle: "Water Softener + Reverse Osmosis",
    price: "$2,899",
    priceNote: "+ HST",
    features: [
      "Premium Water Softener System",
      "Reverse Osmosis (RO) Filtration",
      "Quality You Can Taste & Trust",
      "Professional Certified Installation",
      "10-Year Manufacturer Warranty",
      "Free In-Home Water Assessment",
    ],
    ctaText: "Get This Deal",
    gradient: "linear-gradient(135deg, #1a2e5a 0%, #0f1e3d 60%, #080f1e 100%)",
    glowColor: "rgba(26,46,90,0.45)",
    accentColor: "#1a2e5a",
    accentBg: "rgba(26,46,90,0.08)",
    checkColor: "#1d5fa8",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <circle cx="32" cy="64" r="28" stroke="rgba(26,46,90,0.3)" strokeWidth="2"/>
        <path d="M32 8s-18 18-18 30a18 18 0 0036 0C50 26 32 8 32 8z" stroke="#1a2e5a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 38a10 10 0 0020 0" stroke="#1d5fa8" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
        <circle cx="32" cy="36" r="4" fill="#1a2e5a" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function BundleCards() {
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
            background: "rgba(29,78,216,0.1)",
            color: "var(--brand-blue)",
            border: "1px solid rgba(29,78,216,0.2)",
          }}
        >
          Limited Time Offer
        </span>
        <h2
          className="font-display font-bold mb-5"
          style={{ fontSize: "clamp(40px, 4vw, 48px)", color: "var(--text-primary)" }}
        >
          Premium Bundles
        </h2>
        <p className="font-body text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          Everything you need, packaged at an unbeatable price. No hidden fees.
          No surprises. Just exceptional value.
        </p>
      </motion.div>

      {/* Bundle cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {bundles.map((bundle, index) => (
          <motion.div
            key={bundle.id}
            id={bundle.id}
            initial={{ opacity: 0, y: 40, x: index === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { type: "spring", stiffness: 280, damping: 20 },
            }}
            className="group relative rounded-[28px] overflow-hidden cursor-pointer"
          >
            {/* Card body */}
            <div
              className="relative flex flex-col h-full"
              style={{
                background: "var(--bg-primary)",
                border: "1px solid var(--border-color)",
                borderRadius: "28px",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Top gradient bar */}
              <div
                className="h-1.5 w-full"
                style={{ background: bundle.gradient }}
              />

              {/* Header area */}
              <div
                className="relative px-8 pt-8 pb-6 overflow-hidden"
                style={{ background: bundle.accentBg }}
              >
                {/* Decorative background orb */}
                <div
                  className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20 blur-3xl"
                  style={{ background: bundle.accentColor }}
                />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    {/* Badge */}
                    <span
                      className="inline-flex w-fit items-center gap-1.5 text-xs font-display font-800 uppercase tracking-wider px-3 py-1.5 rounded-full"
                      style={{
                        background: bundle.gradient,
                        color: "#fff",
                        boxShadow: `0 4px 16px ${bundle.glowColor}`,
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                      {bundle.badge}
                    </span>

                    {/* Title */}
                    <div>
                      <h3
                        className="font-display font-bold text-[28px] sm:text-[32px] leading-tight"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {bundle.title}
                      </h3>
                      {bundle.subtitle && (
                        <p
                          className="font-body text-[16px] mt-1 font-medium"
                          style={{ color: bundle.accentColor, opacity: 0.85 }}
                        >
                          {bundle.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {bundle.icon}
                  </div>
                </div>

                {/* Price */}
                <div className="relative z-10 flex items-end gap-2 mt-6">
                  <span
                    className="font-display font-900 leading-none"
                    style={{
                      fontSize: "clamp(2.8rem, 6vw, 3.8rem)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {bundle.price}
                  </span>
                  <span
                    className="font-body font-600 text-base mb-2 text-[var(--text-secondary)]"
                  >
                    {bundle.priceNote}
                  </span>
                </div>
              </div>

              {/* Features list */}
              <div className="px-8 py-7 flex flex-col gap-4 flex-grow">
                <ul className="flex flex-col gap-3.5" role="list">
                  {bundle.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{
                          background: `${bundle.checkColor}20`,
                        }}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={bundle.checkColor}
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="font-body text-[16px] leading-snug text-[var(--text-secondary)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <motion.a
                  href="#contact"
                  id={`${bundle.id}-cta`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="flex w-full items-center justify-center gap-2.5 py-4 rounded-2xl font-body font-semibold text-[18px] tracking-wide text-white transition-shadow duration-300"
                  style={{
                    background: bundle.gradient,
                    boxShadow: `0 8px 32px ${bundle.glowColor}`,
                  }}
                >
                  {bundle.ctaText}
                  <svg
                    className="w-5 h-5"
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
                </motion.a>

                <p className="text-center font-body text-xs text-[var(--text-muted)] mt-4">
                  No commitment · Free assessment · Permit included
                </p>
              </div>

              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{
                  boxShadow: `0 0 0 1px ${bundle.accentColor}40, 0 32px 80px ${bundle.glowColor}`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
