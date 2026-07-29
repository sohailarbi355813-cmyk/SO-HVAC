import React from "react";

export default function Swoosh({ color = "currentColor", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      className={`absolute left-0 w-full h-[0.3em] top-[95%] pointer-events-none ${className}`}
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2,15 Q30,2 60,10 T98,5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-[draw_1s_ease-out_forwards]"
        strokeDasharray="100"
        strokeDashoffset="100"
      />
      <style>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
}
