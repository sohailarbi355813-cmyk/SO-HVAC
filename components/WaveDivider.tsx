"use client";

import { motion } from "framer-motion";

interface WaveDividerProps {
  fill: string;
  direction: "up" | "down";
  className?: string;
}

export default function WaveDivider({ fill, direction, className = "" }: WaveDividerProps) {
  const isDown = direction === "down";

  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${className}`}
      style={{
        height: "70px",
        transform: isDown ? "none" : "scaleY(-1)",
        marginBottom: isDown ? "-1px" : "0",
        marginTop: isDown ? "0" : "-1px",
      }}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <path
          d="M0,35 C180,70 360,0 540,35 C720,70 900,0 1080,35 C1260,70 1350,20 1440,35 L1440,70 L0,70 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
