"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * WaterFlowOverlay
 * Generates an animated liquid flow illusion over the hero section pipes:
 * - Left Side: Murky, sediment-filled unfiltered water flowing UPWARDS into the intake.
 * - Right Side: Crystal-clear, glowing purified blue water flowing DOWNWARDS out to your home.
 */
export default function WaterFlowOverlay() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate deterministic randomized particle arrays for seamless CSS/Framer animation
  const leftParticles = Array.from({ length: 15 }, (_, i) => ({
    id: `mud-${i}`,
    size: Math.floor(Math.random() * 10) + 6, // 6px to 16px
    left: `${Math.floor(Math.random() * 60) + 20}%`, // random position inside pipe corridor
    duration: Math.random() * 3 + 4, // 4s to 7s speed
    delay: Math.random() * 4,
    opacity: Math.random() * 0.4 + 0.3,
    color: ["bg-[#78350f]", "bg-[#854d0e]", "bg-[#a16207]", "bg-[#451a03]"][i % 4],
    blur: i % 2 === 0 ? "blur-[1px]" : "blur-0",
  }));

  const rightParticles = Array.from({ length: 20 }, (_, i) => ({
    id: `pure-${i}`,
    size: Math.floor(Math.random() * 8) + 4, // 4px to 12px
    left: `${Math.floor(Math.random() * 60) + 20}%`,
    duration: Math.random() * 2 + 2.5, // 2.5s to 4.5s (fast crisp water)
    delay: Math.random() * 3,
    opacity: Math.random() * 0.5 + 0.5,
    color: ["bg-cyan-400", "bg-sky-300", "bg-blue-400", "bg-white"][i % 4],
    glow: i % 2 === 0 ? "shadow-[0_0_10px_rgba(56,189,248,0.9)]" : "shadow-[0_0_6px_rgba(255,255,255,0.8)]",
  }));

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden flex justify-between w-full h-full max-w-[1700px] mx-auto">
      {/* 
        ====================================================================
        LEFT CORRIDOR: MUDDY / IMPURE WATER (Flowing UPWARDS into intake)
        ==================================================================== 
      */}
      <div className="relative w-[25%] sm:w-[22%] lg:w-[18%] h-full flex flex-col justify-end ml-[4%] sm:ml-[8%] lg:ml-[12%] overflow-hidden opacity-80 sm:opacity-95">
        {/* Subtle upwards amber water current tint */}
        <motion.div
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scaleY: [0.98, 1.02, 0.98],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-0 bottom-0 h-[85%] bg-gradient-to-t from-amber-900/30 via-yellow-950/20 to-transparent blur-md pointer-events-none"
        />

        {/* Rising sediment particles & bubbles */}
        {leftParticles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: "110%", x: "0%" }}
            animate={{
              y: "-10%",
              x: ["0%", "-15%", "10%", "0%"],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            style={{
              width: p.size,
              height: p.size * 1.2,
              left: p.left,
              opacity: p.opacity,
            }}
            className={`absolute rounded-full ${p.color} ${p.blur} pointer-events-none`}
          />
        ))}

        {/* Floating text badge for animation explanation */}
        <div className="absolute bottom-12 left-0 right-0 hidden lg:flex flex-col items-center opacity-40 text-[11px] font-display font-bold uppercase tracking-widest text-[#a16207]">
          <span>▲ Impure Intake</span>
        </div>
      </div>

      {/* 
        ====================================================================
        RIGHT CORRIDOR: CRYSTAL PURE WATER (Flowing DOWNWARDS to home)
        ==================================================================== 
      */}
      <div className="relative w-[25%] sm:w-[22%] lg:w-[18%] h-full flex flex-col justify-start mr-[4%] sm:mr-[8%] lg:mr-[12%] overflow-hidden opacity-90 sm:opacity-100">
        {/* Crisp shimmering downwards pure water stream tint */}
        <motion.div
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scaleY: [1, 1.05, 1],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-0 top-0 h-[85%] bg-gradient-to-b from-cyan-400/30 via-blue-500/20 to-transparent blur-md pointer-events-none"
        />

        {/* Cascading purified glowing droplets */}
        {rightParticles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: "-20%", x: "0%" }}
            animate={{
              y: "110%",
              x: ["0%", "15%", "-10%", "0%"],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            style={{
              width: p.size,
              height: p.size * 1.4,
              left: p.left,
              opacity: p.opacity,
            }}
            className={`absolute rounded-full ${p.color} ${p.glow} pointer-events-none`}
          />
        ))}

        {/* Shimmering pure vertical light beams */}
        <motion.div
          animate={{
            y: ["-100%", "100%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[2px] h-[40%] bg-gradient-to-b from-transparent via-cyan-300 to-transparent left-1/3 shadow-[0_0_8px_#38bdf8]"
        />
        <motion.div
          animate={{
            y: ["-100%", "100%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute w-[3px] h-[50%] bg-gradient-to-b from-transparent via-white to-transparent left-2/3 shadow-[0_0_10px_#7dd3fc]"
        />

        {/* Floating text badge for animation explanation */}
        <div className="absolute bottom-12 left-0 right-0 hidden lg:flex flex-col items-center opacity-50 text-[11px] font-display font-bold uppercase tracking-widest text-[#0284c7]">
          <span>▼ Pure Cascade</span>
        </div>
      </div>
    </div>
  );
}
