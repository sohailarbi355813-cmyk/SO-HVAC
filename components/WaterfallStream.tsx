"use client";

import { motion } from "framer-motion";

export default function WaterfallStream() {
  return (
    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-40 h-[80%] z-0 pointer-events-none opacity-90 mix-blend-screen">
      <svg width="100%" height="100%" viewBox="0 0 100 1000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0" />
            <stop offset="10%" stopColor="#bae6fd" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="90%" stopColor="#0ea5e9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background stream */}
        <path 
          d="M 30,0 C 40,300 10,700 40,1000" 
          stroke="url(#waterGrad)" 
          strokeWidth="15" 
          fill="none" 
          filter="url(#glow)"
        />
        <path 
          d="M 70,0 C 60,300 90,700 60,1000" 
          stroke="url(#waterGrad)" 
          strokeWidth="20" 
          fill="none" 
          filter="url(#glow)"
        />

        {/* Animated droplets/flow lines */}
        <motion.path 
          d="M 50,0 C 45,300 55,700 50,1000" 
          stroke="#fff" 
          strokeWidth="6" 
          fill="none" 
          strokeDasharray="40 100"
          animate={{ strokeDashoffset: [140, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M 35,0 C 25,300 45,700 35,1000" 
          stroke="#e0f2fe" 
          strokeWidth="4" 
          fill="none" 
          strokeDasharray="20 80"
          animate={{ strokeDashoffset: [100, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M 65,0 C 75,300 55,700 65,1000" 
          stroke="#bae6fd" 
          strokeWidth="5" 
          fill="none" 
          strokeDasharray="60 120"
          animate={{ strokeDashoffset: [180, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}
