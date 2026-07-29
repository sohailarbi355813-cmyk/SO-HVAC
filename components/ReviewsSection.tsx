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
    <section suppressHydrationWarning className="rev relative bg-[#FAFAFA] py-24 sm:py-32 border-b border-[#0F0F0F]/10 text-[#0F0F0F] select-none overflow-hidden">
      {/* Subtle Atmospheric Light Source */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#0033FF]/[0.08] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#4D70FF]/[0.08] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3 px-2"
        >
          <div className="text-[#0033FF] font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            Homeowners Trust Us
          </div>
          <h2 
            style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F0F0F]"
          >
            Rated 4.9/5 by GTA Homeowners
          </h2>
        </motion.div>

        {/* Reviews Cards in Fading Scroll Container (.rev-scroll) */}
        <div 
          className="rev-scroll flex sm:grid sm:grid-cols-3 gap-6 sm:gap-8 mb-14 overflow-x-auto sm:overflow-x-visible py-4 px-4 sm:px-0 snap-x snap-mandatory no-scrollbar"
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
                borderColor: "rgba(59, 130, 246, 0.4)",
                boxShadow: "0 25px 85px rgba(0,0,0,0.08), 0 0 32px rgba(59,130,246,0.2)",
                transition: { type: "spring", stiffness: 350, damping: 18 }
              }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rev-card min-w-[300px] sm:min-w-0 flex-1 bg-blue-500/10 hover:bg-blue-500/20 backdrop-blur-3xl rounded-[28px] border border-blue-500/20 p-8 shadow-[0_20px_65px_rgba(0,0,0,0.05)] flex flex-col justify-between group cursor-default snap-center relative overflow-hidden transition-colors duration-300"
            >
              <div className="space-y-6">
                {/* Vivid High-Contrast Warning Stars (.stars) */}
                <div className="stars flex items-center gap-1.5 text-[#FFA700] drop-shadow-[0_0_10px_rgba(255,167,0,0.3)]">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-5 h-5 fill-[#FFA700] text-[#FFA700] shrink-0" />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed italic font-light">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>
              
              <div className="pt-6 mt-6 border-t border-[#0F0F0F]/10 flex flex-col">
                <strong className="text-base font-bold text-[#0F0F0F] tracking-wide">
                  {rev.name}
                </strong>
                <span className="text-xs text-[#1A1A1A]/60 font-mono tracking-wider mt-0.5">
                  {rev.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
