"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Shield, Lock } from "lucide-react";

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  
  const sectionRef = useRef<HTMLElement>(null);

  const handlePointerMove = (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    const section = sectionRef.current;
    if (!section) return;
    
    const clientX = "touches" in e && e.touches.length > 0 ? e.touches[0].clientX : "clientX" in e ? (e as React.MouseEvent).clientX : 0;
    const clientY = "touches" in e && e.touches.length > 0 ? e.touches[0].clientY : "clientY" in e ? (e as React.MouseEvent).clientY : 0;
    
    const rect = section.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    // Update global canvas light tracking
    section.style.setProperty("--mouse-x", `${x}px`);
    section.style.setProperty("--mouse-y", `${y}px`);

    // Update relative coordinates for smoked glass quote card border spotlight
    const card = section.querySelector(".form-card") as HTMLElement;
    if (card) {
      const cardRect = card.getBoundingClientRect();
      card.style.setProperty("--card-x", `${clientX - cardRect.left}px`);
      card.style.setProperty("--card-y", `${clientY - cardRect.top}px`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
      suppressHydrationWarning 
      className="hero relative w-full text-white pt-16 sm:pt-24 pb-28 border-b border-white/10 select-none z-30 overflow-hidden group/section"
      style={{
        backgroundImage: "radial-gradient(circle at 90% 10%, rgba(32, 92, 164, 0.22) 0%, rgba(232, 101, 10, 0.08) 35%, rgba(11, 14, 17, 0) 70%)"
      }}
    >
      {/* JavaScript-Driven Pale Jewel Cursor Tracking Canvas Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-100 z-0"
        style={{
          background: `radial-gradient(700px circle at var(--mouse-x, 85%) var(--mouse-y, 15%), rgba(214, 234, 248, 0.09), transparent 80%)`
        }}
      />

      {/* Simulated Light Source Ambient Atmosphere Layer */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-[#D6EAF8]/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* HERO CONTENT AREA (Left 7 Columns) */}
          <div className="lg:col-span-7 space-y-8 pt-2">
            
            {/* Trust Badges Strip */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="badges text-xs font-mono font-extrabold uppercase px-3.5 py-1.5 rounded-full text-[#D6EAF8] border border-[#D6EAF8]/35 drop-shadow-[0_0_12px_rgba(214,234,248,0.3)] transition-all duration-300">
                01 &mdash; Verified Engineering
              </span>
              <span className="badges inline-flex items-center gap-1 text-xs font-bold font-mono px-3.5 py-1.5 rounded-full text-[#D6EAF8] border border-[#D6EAF8]/30 drop-shadow-[0_0_12px_rgba(214,234,248,0.25)] transition-all duration-300">
                <Star className="w-3.5 h-3.5 fill-current text-[#E8650A]" />
                <span>4.9 ★ Google (1,240+ Reviews)</span>
              </span>
              <span className="badges text-xs font-bold font-mono px-3.5 py-1.5 rounded-full text-[#D6EAF8] border border-[#D6EAF8]/30 drop-shadow-[0_0_12px_rgba(214,234,248,0.25)] transition-all duration-300">
                SO Certified™ Experts
              </span>
            </div>

            {/* Display Headline */}
            <h1 
              style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
              className="text-4xl sm:text-6xl xl:text-[64px] font-extrabold text-white tracking-tight leading-[1.08]"
            >
              Honest HVAC. <br />
              <span className="text-[#D6EAF8]">Zero Salesmen.</span> <br />
              Just S-Tier Technicians.
            </h1>

            {/* Subheadline Value Proposition */}
            <p className="text-base sm:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
              We eliminated commission salespeople so you stop overpaying for heating and cooling in the Greater Toronto Area. You consult straight with SO Certified™ installation technicians who size your furnace or AC properly, document every step with InstallCam™, and stand by upfront flat-rate pricing before we lift a wrench.
            </p>

            {/* Primary & Secondary Action Array */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <motion.a 
                href="#quote"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E8650A] hover:bg-[#FF7A1A] text-white font-extrabold text-base uppercase tracking-wider shadow-[0_12px_35px_rgba(232,101,10,0.4)] hover:shadow-[0_18px_45px_rgba(232,101,10,0.6)] flex items-center justify-center gap-3 transition-colors"
              >
                <span>Claim Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a 
                href="#second-opinion"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-[#D6EAF8] font-bold text-base border border-white/20 hover:border-[#D6EAF8] flex items-center justify-center gap-2 transition-all shadow-inner"
              >
                <Shield className="w-4 h-4 text-[#D6EAF8]" />
                <span>Upload Competitor Quote</span>
              </motion.a>
            </div>

            {/* Value Proposition Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white font-mono">$0</p>
                <p className="text-xs text-white/60 mt-0.5">Sales Commission Markups</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white font-mono">100%</p>
                <p className="text-xs text-white/60 mt-0.5">InstallCam™ Verified</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white font-mono">10 Yr</p>
                <p className="text-xs text-white/60 mt-0.5">Parts &amp; Labor Warranty</p>
              </div>
            </div>

          </div>

          {/* FLOATING QUOTE FORM CARD WRAPPED IN FRAMER MOTION (Right 5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            id="quote" 
            className="form-card lg:col-span-5 rounded-[32px] p-8 sm:p-10 relative z-40 lg:-mb-20 xl:-mb-28 lg:translate-y-6 space-y-6 transition-all duration-500 hover:shadow-[0_45px_135px_rgba(0,0,0,0.85)] group/card overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 25px 85px rgba(0, 0, 0, 0.7)"
            }}
          >
            {/* Dynamic Pale Jewel Spotlight Border & Surface Illumination Overlay */}
            <div 
              className="pointer-events-none absolute inset-0 rounded-[32px] opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(450px circle at var(--card-x, 50%) var(--card-y, 50%), rgba(214, 234, 248, 0.45), transparent 65%)`,
                mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                maskComposite: `exclude`,
                WebkitMaskComposite: `xor`,
                padding: `1.5px`
              }}
            />
            <div 
              className="pointer-events-none absolute inset-0 rounded-[32px] opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(350px circle at var(--card-x, 50%) var(--card-y, 50%), rgba(214, 234, 248, 0.06), transparent 75%)`
              }}
            />

            <div className="border-b border-white/10 pb-5 relative z-10">
              <h2 
                style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
              >
                Get Your Free Quote
              </h2>
              <p className="text-xs sm:text-sm text-[#D6EAF8]/75 mt-1.5 font-light">
                60-second form &middot; No obligation &middot; We reply within 1 business hour
              </p>
            </div>

            {submitted ? (
              <div className="py-16 text-center space-y-4 relative z-10">
                <div className="w-14 h-14 bg-[#1B8A5A]/20 text-[#1B8A5A] rounded-full flex items-center justify-center mx-auto border border-[#1B8A5A]/40 shadow-inner">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Quote Request Received!</h3>
                <p className="text-sm text-[#D6EAF8]/80 max-w-xs mx-auto font-light">
                  An SO HVAC engineer will review your inquiry within 1 business hour.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#E8650A] hover:text-[#FF8A3D] underline uppercase tracking-wider font-mono font-bold mt-2 inline-block transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="space-y-2">
                  <label className="field block text-sm font-semibold text-[#D6EAF8] tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Amandeep Singh"
                    className="control w-full h-12 px-4 rounded-xl text-white placeholder:text-white/35 focus:outline-none transition-all duration-250 text-sm shadow-inner"
                    style={{
                      backgroundColor: "transparent",
                      background: "transparent",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid #D6EAF8",
                      appearance: "none",
                      WebkitAppearance: "none"
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="field block text-sm font-semibold text-[#D6EAF8] tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(905) 555-0000"
                    className="control w-full h-12 px-4 rounded-xl text-white placeholder:text-white/35 focus:outline-none transition-all duration-250 text-sm shadow-inner"
                    style={{
                      backgroundColor: "transparent",
                      background: "transparent",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid #D6EAF8",
                      appearance: "none",
                      WebkitAppearance: "none"
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="field block text-sm font-semibold text-[#D6EAF8] tracking-wide">
                    What do you need?
                  </label>
                  <div className="relative w-full group/select">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                      className="control w-full h-12 pl-4 pr-11 rounded-xl text-white focus:outline-none transition-all duration-250 text-sm shadow-inner cursor-pointer"
                      style={{
                        backgroundColor: "transparent",
                        background: "transparent",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid #D6EAF8",
                        appearance: "none",
                        WebkitAppearance: "none"
                      }}
                    >
                      <option value="" disabled className="bg-[#0B0E11] text-white/50">Select a service</option>
                      <option value="ac" className="bg-[#0B0E11] text-white">Air Conditioners</option>
                      <option value="furnace" className="bg-[#0B0E11] text-white">Furnaces</option>
                      <option value="heatpump" className="bg-[#0B0E11] text-white">Heat Pumps</option>
                      <option value="tankless" className="bg-[#0B0E11] text-white">Tankless Water Heaters</option>
                      <option value="waterheater" className="bg-[#0B0E11] text-white">Water Heaters</option>
                      <option value="repairs" className="bg-[#0B0E11] text-white">Repairs</option>
                      <option value="maintenance" className="bg-[#0B0E11] text-white">Maintenance</option>
                      <option value="secondopinion" className="bg-[#0B0E11] text-white">Second Opinions</option>
                      <option value="emergency" className="bg-[#0B0E11] text-white">Emergency Service</option>
                    </select>
                    {/* Custom Minimalist Dual SVG Arrows for Dropdown */}
                    <svg 
                      className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#D6EAF8] group-focus-within/select:scale-115 group-focus-within/select:drop-shadow-[0_0_10px_rgba(214,234,248,0.8)] transition-all duration-300" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      {/* Up Arrow */}
                      <path d="m7 9 5-5 5 5" />
                      {/* Down Arrow */}
                      <path d="m7 15 5 5 5-5" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="field block text-sm font-semibold text-[#D6EAF8] tracking-wide">
                    Tell us more (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Furnace is 18 years old, got a quote for $9,000…"
                    className="control w-full p-4 rounded-xl text-white placeholder:text-white/35 focus:outline-none transition-all duration-250 text-sm resize-none shadow-inner"
                    style={{
                      backgroundColor: "transparent",
                      background: "transparent",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid #D6EAF8",
                      appearance: "none",
                      WebkitAppearance: "none"
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="w-full py-4 rounded-xl bg-[#E8650A] hover:bg-[#FF7A1A] text-white font-extrabold text-base uppercase tracking-wider shadow-[0_12px_35px_rgba(232,101,10,0.35)] hover:shadow-[0_18px_45px_rgba(232,101,10,0.55)] flex items-center justify-center gap-2 mt-4 transition-colors"
                >
                  <span>Request My Free Quote</span>
                </motion.button>

                <p className="text-[11px] text-white/50 text-center flex items-center justify-center gap-1.5 pt-1 font-light">
                  <Lock className="w-3.5 h-3.5 text-[#E8650A] shrink-0" />
                  <span>Your info is never sold. By submitting, you agree to be contacted about your request.</span>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
