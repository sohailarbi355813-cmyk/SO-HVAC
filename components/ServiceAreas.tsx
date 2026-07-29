"use client";

import React from "react";
import { MapPin } from "lucide-react";

const CITIES = [
  "Mississauga", "Brampton",
  "Toronto", "Etobicoke",
  "Oakville", "Milton",
  "Vaughan", "Georgetown",
  "Burlington", "Caledon",
  "Scarborough", "North York",
];

export default function ServiceAreas() {
  return (
    <section id="areas" suppressHydrationWarning className="relative py-24 sm:py-32 bg-[#F1F5F9] text-[#0F0F0F] border-b border-[#0F0F0F]/10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-[#0033FF] font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            Where We Work
          </div>
          <h2 
            style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F0F0F]"
          >
            Proudly Serving the Greater Toronto Area
          </h2>
          <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed font-light max-w-2xl mx-auto">
            Based in Mississauga, our SO Certified™ crews cover the entire GTA &mdash; usually with same-week installation and 24/7 emergency response.
          </p>
        </div>

        {/* City Chips */}
        <div className="city-chips flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto mb-16">
          {CITIES.map((city, idx) => (
            <span
              key={idx}
              className="px-6 py-3 rounded-xl text-sm sm:text-base font-bold text-black bg-blue-300 hover:bg-blue-400 border border-blue-400 shadow-md cursor-default select-none transition-all duration-300"
            >
              {city}
            </span>
          ))}
        </div>

        {/* Map Placeholder Stage */}
        <div className="max-w-4xl mx-auto">
          <div className="h-64 sm:h-80 rounded-[32px] bg-white border border-[#0F0F0F]/10 p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#0033FF]/10 border border-[#0033FF]/30 text-[#0033FF] flex items-center justify-center shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <p className="text-sm sm:text-base text-[#1A1A1A]/70 font-mono font-light max-w-md">
              EMBED &mdash; Google Map (GTA service radius)<br />
              <span className="text-xs text-[#1A1A1A]/40">Lazy-load below the fold &middot; facade pattern for CWV</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
