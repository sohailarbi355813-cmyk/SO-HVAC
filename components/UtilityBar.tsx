"use client";

import React from "react";
import { Zap, Phone } from "lucide-react";

export default function UtilityBar() {
  return (
    <div className="bg-[#0B1E33] text-white py-2.5 px-6 sm:px-12 border-b border-white/10 text-xs sm:text-sm font-medium z-[110] relative select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#DC2626] font-extrabold tracking-wider">
          <Zap className="w-4 h-4 fill-current text-[#DC2626]" />
          <span>24/7 Emergency</span>
        </div>

        <a
          href="tel:9055550142"
          className="flex items-center gap-2 text-[#D6EAF8] hover:text-white transition-colors font-extrabold tracking-wide"
        >
          <Phone className="w-3.5 h-3.5 fill-current text-[#2D7DD2]" />
          <span>(905) 555-0142</span>
        </a>
      </div>
    </div>
  );
}
