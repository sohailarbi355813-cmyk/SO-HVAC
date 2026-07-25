"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SOHVACLogo from "@/components/SOHVACLogo";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Bundles", href: "#bundles" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--border-color)] shadow-[var(--shadow-sm)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center group" id="nav-logo">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Desktop Logo */}
            <div className="hidden sm:block">
              <SOHVACLogo variant="navbar" width={200} />
            </div>
            {/* Mobile Logo */}
            <div className="block sm:hidden">
              <SOHVACLogo variant="navbar" width={150} />
            </div>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-body font-medium text-sm transition-colors duration-200 relative group"
              id={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--brand-red)] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="bg-[#dc2626] text-white hover:bg-[#b91c1c] font-bold tracking-wider rounded-full text-xs px-6 py-2.5 shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] uppercase transition-colors"
            id="nav-cta"
          >
            Free Assessment
          </motion.a>
        </nav>

        {/* Mobile: hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <motion.button
            id="mobile-menu-toggle"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 rounded-lg flex items-center justify-center border border-[var(--border-color)] bg-[var(--bg-tertiary)] relative z-[100] pointer-events-auto cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <div className="flex flex-col gap-[5px] w-5 pointer-events-none">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-full bg-[var(--text-primary)] rounded-full"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-full bg-[var(--text-primary)] rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-full bg-[var(--text-primary)] rounded-full"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu (Premium Full-Screen Overlay) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-[var(--bg-primary)]/90 backdrop-blur-2xl border-t border-[var(--border-color)]/30 z-40 overflow-y-auto"
            id="mobile-menu"
          >
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] gap-10 px-6 py-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 25 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-[var(--text-primary)] font-display font-medium text-4xl tracking-tight relative group flex flex-col items-center"
                >
                  {link.label}
                  <span className="absolute -bottom-3 w-1/2 h-[2px] bg-[var(--brand-red)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                onClick={() => setMenuOpen(false)}
                className="btn-primary text-center mt-8 px-10 py-4 text-lg w-full max-w-[280px] justify-center shadow-[0_8px_32px_-4px_rgba(220,38,38,0.4)]"
              >
                Free Assessment
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
