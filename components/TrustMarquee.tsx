"use client";

import React from "react";
import { Star, ShieldCheck, Camera, Clock } from "lucide-react";

const SIGNALS = [
  { icon: Star, text: "Rated 4.9/5 on Google", color: "text-white" },
  { icon: ShieldCheck, text: "TSSA Licensed", color: "text-white" },
  { icon: Camera, text: "InstallCam™ Proof", color: "text-white" },
  { icon: Clock, text: "Same-Week Install", color: "text-white" },
];

export default function TrustMarquee() {
  return (
    <section suppressHydrationWarning className="relative bg-[#0033FF] border-b border-[#0F0F0F]/10 py-8 lg:py-12 select-none z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center justify-between">
          {SIGNALS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 bg-white/[0.15] hover:bg-white/[0.25] backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 text-xs sm:text-sm font-bold text-white transition-all duration-300 shadow-sm justify-center sm:justify-start"
              >
                <IconComp className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${item.color}`} />
                <span className="tracking-wide">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
