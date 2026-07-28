"use client";

import React from "react";
import { Star, ShieldCheck, Camera, Clock } from "lucide-react";

const SIGNALS = [
  { icon: Star, text: "Rated 4.9/5 on Google", color: "text-[#FFC107]" },
  { icon: ShieldCheck, text: "TSSA Licensed", color: "text-[#10B981]" },
  { icon: Camera, text: "InstallCam™ Proof", color: "text-[#38BDF8]" },
  { icon: Clock, text: "Same-Week Install", color: "text-[#FF6B00]" },
];

export default function TrustMarquee() {
  return (
    <section suppressHydrationWarning className="relative bg-[#03070F] border-b border-white/[0.08] py-8 lg:py-12 select-none z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center justify-between">
          {SIGNALS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-md px-5 py-3 rounded-2xl border border-white/[0.08] text-xs sm:text-sm font-medium text-[#E2E8F0] transition-all duration-300 shadow-sm justify-center sm:justify-start"
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
