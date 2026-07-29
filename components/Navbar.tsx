"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SOHVACLogo from "@/components/SOHVACLogo";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#second-opinion" },
  { label: "How It Works", href: "#process" },
  { label: "InstallCam™", href: "#installcam" },
  { label: "Financing", href: "#financing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background window scroll when mobile nav overlay is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // JavaScript Toggle Function for .burger button (.is-active state)
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAFAFA]/95 backdrop-blur-xl border-b border-[#0F0F0F]/10 shadow-xl"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center group" id="nav-logo">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center"
            >
              <div className="hidden sm:block">
                <SOHVACLogo variant="navbar" width={200} />
              </div>
              <div className="block sm:hidden">
                <SOHVACLogo variant="navbar" width={160} />
              </div>
            </motion.div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  const el = document.getElementById(link.href.replace("#", ""));
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-[var(--text-body)] hover:text-[#DC2626] dark:text-white/80 dark:hover:text-[#D6EAF8] font-body font-semibold text-sm transition-colors duration-200 relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Call button + Free Quote button + Fluid Burger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9055550142"
              title="Call SO HVAC Now"
              aria-label="Call SO HVAC Now"
              className="w-10 h-10 rounded-full bg-[#FEE2E2] dark:bg-white/[0.05] dark:border dark:border-[#D6EAF8]/30 flex items-center justify-center text-[#DC2626] dark:text-[#D6EAF8] hover:bg-[#DC2626] hover:text-white dark:hover:bg-[#D6EAF8] dark:hover:text-[#0B0E11] transition-all shadow-sm active:scale-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z" />
              </svg>
            </a>

            <a
              href="https://wa.me/19055550142" target="_blank" rel="noopener noreferrer"
              onClick={(e) => {
                const el = document.getElementById("quote");
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hidden sm:inline-flex px-6 py-2.5 rounded-full bg-[#DC2626] hover:bg-[#EF4444] text-white font-extrabold text-sm shadow-[0_4px_18px_rgba(220, 38, 38,0.45)] transition-all hover:scale-105 active:scale-95"
            >
              Get Free Quote
            </a>

            {/* .burger Button with internal <i> spans and JavaScript .is-active Toggle */}
            <button
              onClick={toggleMenu}
              className={`burger lg:hidden w-11 h-11 rounded-xl flex items-center justify-center border border-white/15 bg-white/[0.05] hover:bg-white/[0.12] hover:border-[#D6EAF8]/80 text-[#D6EAF8] relative z-[110] active:scale-90 transition-all shadow-md ${
                menuOpen ? "is-active" : ""
              }`}
              aria-label="Toggle mobile navigation"
            >
              <div className="burger-box relative w-6 h-5 flex flex-col justify-center items-center pointer-events-none">
                <i />
                <i />
                <i />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay (.nav-overlay) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="nav-overlay is-active lg:hidden fixed inset-0 w-full h-full z-[100] flex flex-col justify-between overflow-y-auto select-none pt-[86px]"
            style={{
              backgroundColor: "rgba(11, 14, 17, 0.85)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
            id="mobile-menu"
          >
            {/* Close Button Inside Overlay */}
            <button 
              onClick={toggleMenu}
              className="absolute top-4 right-4 sm:right-8 w-11 h-11 rounded-xl flex items-center justify-center border border-white/15 bg-white/[0.05] text-[#D6EAF8] hover:bg-white/[0.12] hover:border-[#D6EAF8]/80 active:scale-90 transition-all shadow-md z-[110]"
              aria-label="Close mobile navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Overlay Kinetic Links Cascade */}
            <div className="flex flex-col items-center justify-center flex-1 gap-6 px-6 py-8 my-auto">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-space), system-ui, sans-serif",
                    animationDelay: `${(i + 1) * 50}ms`,
                    transitionDelay: `${(i + 1) * 50}ms`,
                  }}
                  onClick={(e) => {
                    setMenuOpen(false);
                    const el = document.getElementById(link.href.replace("#", ""));
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="overlay-link text-white font-extrabold text-3xl sm:text-4xl tracking-tight relative group drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
                >
                  <span>{link.label}</span>
                  <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-[#D6EAF8] transition-all duration-300 mr-auto mt-1.5 shadow-[0_0_12px_#D6EAF8]" />
                </a>
              ))}

              <a
                href="#quote"
                style={{
                  animationDelay: `${(navLinks.length + 1) * 50}ms`,
                  transitionDelay: `${(navLinks.length + 1) * 50}ms`,
                }}
                onClick={() => setMenuOpen(false)}
                className="overlay-link w-full max-w-[280px] py-4 px-8 rounded-2xl bg-[#DC2626] hover:bg-[#EF4444] text-white font-extrabold text-lg text-center justify-center flex items-center gap-2 shadow-[0_12px_38px_rgba(220, 38, 38,0.55)] transition-all hover:scale-105 mt-4"
              >
                <span>Get My Free Quote</span>
              </a>
            </div>

            {/* Overlay Footer Contact Strip */}
            <div className="text-center pb-8 px-6 text-xs text-white/60 font-light border-t border-white/10 pt-6 shrink-0 bg-black/20">
              <span>Need emergency HVAC service? Call </span>
              <a href="tel:9055550142" className="text-[#D6EAF8] font-bold font-mono tracking-wide underline hover:text-white transition-colors">
                (905) 555-0142
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
