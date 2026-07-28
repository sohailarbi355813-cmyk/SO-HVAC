"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "How much does a new furnace cost in the GTA?",
    a: "Most high-efficiency furnace installations in the GTA range from $4,500–$7,500 installed, depending on size, venting, and brand. We'll always show you the equipment cost and labour separately — and if another quote seems high, bring it to us for a free second opinion.",
  },
  {
    q: "What is a free second opinion, and is there a catch?",
    a: "No catch. We review your existing quote line by line and tell you if it's fair. If it is, we'll say so with complete mechanical engineering transparency.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes — simple pre-authorized monthly payment plans arranged directly with us, with terms in writing before you commit and zero hidden dealer fees.",
  },
  {
    q: "How fast can you install a new AC or furnace?",
    a: "Most installations happen within the same week, and emergency no-heat or cryo-cooling failure situations are prioritized 24/7 across Greater Toronto.",
  },
  {
    q: "Are your technicians licensed and insured?",
    a: "Yes. All work is performed exclusively by TSSA-licensed, fully insured SO Certified™ mechanical engineers.",
  },
  {
    q: "What rebates are available for heat pumps in Ontario?",
    a: "Rebate programs change frequently — we track them directly for you and handle all necessary paperwork for any government energy program your new system qualifies for.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" suppressHydrationWarning className="relative py-24 sm:py-32 bg-[#0B0E11] text-white border-b border-white/10 select-none overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E8650A]/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#2D7DD2]/[0.06] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#E8650A] font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            <HelpCircle className="w-4 h-4 text-[#E8650A]" />
            <span>Common Questions</span>
          </div>
          <h2 
            style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Answers Before You Ask
          </h2>
          <p className="text-sm sm:text-base text-white/65 leading-relaxed font-light">
            Marked up with FAQPage structural schema for rich engineering transparency.
          </p>
        </div>

        {/* Fluid Spring-Animated Accordion Matrix (.faq-item) */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`faq-item rounded-[28px] transition-all duration-300 border backdrop-blur-xl overflow-hidden group ${
                  isOpen
                    ? "bg-white/[0.06] border-[#E8650A]/55 shadow-[0_20px_65px_rgba(0,0,0,0.65)]"
                    : "bg-white/[0.03] hover:bg-white/[0.06] border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
                }`}
              >
                {/* Interactive Question Trigger (.summary) */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="summary w-full text-left px-6 sm:px-8 py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <span 
                    style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                    className="text-lg sm:text-xl font-bold text-white tracking-wide leading-snug group-hover:text-[#D6EAF8] transition-colors duration-200"
                  >
                    {faq.q}
                  </span>

                  {/* 180-Degree Rotating SVG Icon Container */}
                  <div 
                    className={`w-10 h-10 rounded-full bg-white/[0.05] border border-white/15 flex items-center justify-center shrink-0 text-[#E8650A] transition-all duration-500 ease-[cubic-bezier(0.34,1.45,0.64,1)] ${
                      isOpen 
                        ? "rotate-180 bg-[#E8650A] text-white border-[#E8650A] shadow-[0_0_20px_rgba(232,101,10,0.65)] scale-105" 
                        : "group-hover:border-white/35 group-hover:scale-105"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 stroke-[2.5] transition-transform duration-500" />
                  </div>
                </button>

                {/* Fluid CSS Grid Height Transition Envelope */}
                <div 
                  className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-7 pt-3 text-sm sm:text-base text-white/80 font-light leading-relaxed border-t border-white/[0.08] bg-black/10">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
