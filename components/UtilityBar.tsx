"use client";

import React from "react";
import { Zap, Phone } from "lucide-react";

export default function UtilityBar() {
  return (
    <div className="bg-[#0B1E33] text-white py-2.5 px-6 sm:px-12 border-b border-white/10 text-xs sm:text-sm font-medium z-[110] relative select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-white/80">Serving homeowners across the Greater Toronto Area</span>
        <span className="text-white/80">Transparent quotes · Honest advice · Professional installation</span>
      </div>
    </div>
  );
}
