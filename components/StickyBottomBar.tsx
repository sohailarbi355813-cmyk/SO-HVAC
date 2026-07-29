"use client";

import React, { useEffect, useState, useRef } from "react";

export default function StickyBottomBar() {
  const [visible, setVisible] = useState(false);
  const quoteBtnRef = useRef<HTMLAnchorElement>(null);

  // Handle scroll visibility threshold
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Award-Winning Magnetic Button Pull Engine (Tight Boundary Sensor)
  useEffect(() => {
    const btn = quoteBtnRef.current;
    if (!btn) return;

    const handlePointerMove = (clientX: number, clientY: number) => {
      if (!btn) return;
      
      const rect = btn.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;

      // Distance from thumb/cursor to exact center of button
      const deltaX = clientX - btnCenterX;
      const deltaY = clientY - btnCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Tight proximity threshold: ~35px outside physical button boundary
      const tightRadius = Math.max(rect.width, rect.height) / 2 + 35;

      if (distance < tightRadius) {
        // Dampened magnetic pull strength, clamped to maximum ±12px horizontal and ±8px vertical
        const pullX = Math.max(-12, Math.min(12, deltaX * 0.25));
        const pullY = Math.max(-8, Math.min(8, deltaY * 0.25));

        btn.style.transform = `translate(${pullX}px, ${pullY}px) scale(1.04)`;
        btn.style.boxShadow = "0 12px 40px rgba(214, 234, 248, 0.75)";
      } else {
        // Smooth snap back to zero resting coordinates once thumb exits boundary
        btn.style.transform = "translate(0px, 0px) scale(1)";
        btn.style.boxShadow = "0 6px 25px rgba(214, 234, 248, 0.35)";
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        handlePointerMove(touch.clientX, touch.clientY);
      }
    };

    const handleReset = () => {
      if (btn) {
        btn.style.transform = "translate(0px, 0px) scale(1)";
        btn.style.boxShadow = "0 6px 25px rgba(214, 234, 248, 0.35)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleReset, { passive: true });
    window.addEventListener("scroll", handleReset, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleReset);
      window.removeEventListener("scroll", handleReset);
    };
  }, []);

  return (
    <div
      suppressHydrationWarning
      className={`sticky-bar fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 px-5 flex gap-3.5 shadow-[0_-15px_45px_rgba(0,0,0,0.1)] transition-transform duration-300 select-none ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)"
      }}
    >
      <a
        href="tel:9055550142"
        className="flex-1 py-3.5 px-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-[#D6EAF8]/40 text-white font-extrabold text-center flex items-center justify-center gap-2 active:scale-95 transition-all text-sm tracking-wide shadow-sm"
      >
        <span>Call Now</span>
      </a>
      <a
        ref={quoteBtnRef}
        href="https://wa.me/19055550142" target="_blank" rel="noopener noreferrer"
        style={{
          transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease, background-color 0.2s ease",
          willChange: "transform, box-shadow"
        }}
        className="flex-[1.25] py-3.5 px-5 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-center flex items-center justify-center gap-2 shadow-[0_6px_25px_rgba(220,38,38,0.35)] active:scale-95 text-sm tracking-wide cursor-pointer"
      >
        <span>Get a Free Quote</span>
      </a>
    </div>
  );
}
