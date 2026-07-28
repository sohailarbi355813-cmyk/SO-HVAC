"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    quote: "SO HVAC quoted us $3,000 less than the first company — and explained exactly why. The install was spotless and they sent photos of everything.",
    name: "Harpreet S.",
    location: "Mississauga · Google Review",
  },
  {
    quote: "They told me my furnace didn't need replacing — just a $340 repair. Who does that? Customers for life now.",
    name: "Melissa T.",
    location: "Brampton · Google Review",
  },
  {
    quote: "Fast, clean, professional. The InstallCam photos gave me total peace of mind while I was at work.",
    name: "David O.",
    location: "Etobicoke · Google Review",
  },
];

export default function ReviewsSection() {
  return (
    <section suppressHydrationWarning className="rev relative bg-[#151B24] py-24 sm:py-32 border-b border-white/10 text-white select-none overflow-hidden">
      {/* Subtle Atmospheric Light Source */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#E8650A]/[0.08] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#2D7DD2]/[0.08] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3 px-2"
        >
          <div className="text-[#E8650A] font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            Homeowners Trust Us
          </div>
          <h2 
            style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Rated 4.9/5 by GTA Homeowners
          </h2>
        </motion.div>

        {/* Reviews Cards in Fading Scroll Container (.rev-scroll) */}
        <div 
          className="rev-scroll flex sm:grid sm:grid-cols-3 gap-6 sm:gap-8 mb-14 overflow-x-auto sm:overflow-x-visible py-4 px-4 sm:px-0 snap-x snap-mandatory no-scrollbar"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)"
          }}
        >
          {REVIEWS.map((rev, i) => (
            <motion.div
              key={i}
              suppressHydrationWarning
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ 
                scale: 1.02, 
                y: -6, 
                borderColor: "rgba(214, 234, 248, 0.95)",
                boxShadow: "0 25px 85px rgba(0,0,0,0.85), 0 0 32px rgba(214,234,248,0.32)",
                transition: { type: "spring", stiffness: 350, damping: 18 }
              }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rev-card min-w-[300px] sm:min-w-0 flex-1 bg-[#0A0E15] hover:bg-[#0D131D] rounded-[28px] border border-white/[0.07] p-8 shadow-[0_20px_65px_rgba(0,0,0,0.6)] flex flex-col justify-between group cursor-default snap-center relative overflow-hidden"
            >
              <div className="space-y-6">
                {/* Vivid High-Contrast Warning Stars (.stars) */}
                <div className="stars flex items-center gap-1.5 text-[#FFA700] drop-shadow-[0_0_10px_rgba(255,167,0,0.6)]">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-5 h-5 fill-[#FFA700] text-[#FFA700] shrink-0" />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base text-white/80 leading-relaxed italic font-light">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>
              
              <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-col">
                <strong className="text-base font-bold text-white tracking-wide">
                  {rev.name}
                </strong>
                <span className="text-xs text-white/55 font-mono tracking-wider mt-0.5">
                  {rev.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action CTA */}
        <div className="text-center">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/20 hover:border-[#FFA700]/60 font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:scale-105 group"
          >
            <span>Read All Reviews on Google</span>
            <Star className="w-4 h-4 fill-[#FFA700] text-[#FFA700] group-hover:scale-110 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
