"use client";

import React from "react";
import Link from "next/link";
import SOHVACLogo from "@/components/SOHVACLogo";

export default function Footer() {
  return (
    <footer suppressHydrationWarning className="bg-[#050E1A] text-[#D6EAF8]/80 pt-16 pb-28 sm:pb-20 px-6 sm:px-12 border-t border-white/10 relative z-20 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Blurb */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <SOHVACLogo variant="navbar" width={200} />
            </Link>

            <p className="text-xs sm:text-sm text-[#D6EAF8]/90 leading-relaxed mt-1 font-light">
              <strong className="text-white font-semibold">Second Opinion HVAC Services Inc.</strong><br />
              Helping GTA homeowners make informed HVAC decisions since 2025. Transparent quotes, premium installs, honest advice.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-[#D6EAF8]/30 text-white text-[11px] font-extrabold uppercase tracking-wider">
                TSSA
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-[#D6EAF8]/30 text-white text-[11px] font-extrabold uppercase tracking-wider">
                HRAI
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-[#D6EAF8]/30 text-white text-[11px] font-extrabold uppercase tracking-wider">
                WSIB
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-mono font-bold text-xs uppercase tracking-[0.1em] text-[#E8650A] mb-2">
              Services
            </h4>
            <a href="#services" className="hover:text-white transition-colors text-xs sm:text-sm">Air Conditioners</a>
            <a href="#services" className="hover:text-white transition-colors text-xs sm:text-sm">Furnaces</a>
            <a href="#services" className="hover:text-white transition-colors text-xs sm:text-sm">Heat Pumps</a>
            <a href="#services" className="hover:text-white transition-colors text-xs sm:text-sm">Tankless Water Heaters</a>
            <a href="#services" className="hover:text-white transition-colors text-xs sm:text-sm">Water Heaters</a>
            <a href="#services" className="hover:text-white transition-colors text-xs sm:text-sm">Repairs &amp; Maintenance</a>
            <a href="#services" className="hover:text-white transition-colors text-xs sm:text-sm">Emergency Service</a>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-mono font-bold text-xs uppercase tracking-[0.1em] text-[#E8650A] mb-2">
              Company
            </h4>
            <a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">About Us</a>
            <a href="#second-opinion" className="hover:text-white transition-colors text-xs sm:text-sm">Second Opinions</a>
            <a href="#financing" className="hover:text-white transition-colors text-xs sm:text-sm">Financing</a>
            <a href="#areas" className="hover:text-white transition-colors text-xs sm:text-sm">Service Areas</a>
            <a href="#reviews" className="hover:text-white transition-colors text-xs sm:text-sm">Reviews</a>
            <a href="#quote" className="hover:text-white transition-colors text-xs sm:text-sm">Contact</a>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-mono font-bold text-xs uppercase tracking-[0.1em] text-[#E8650A] mb-2">
              Contact
            </h4>
            <div className="text-xs sm:text-sm font-medium text-white">
              (905) 555-0142
            </div>
            <div className="text-xs sm:text-sm text-white/90">
              hello@sohvac.ca
            </div>
            <div className="text-xs sm:text-sm text-white/80">
              Mississauga, ON
            </div>
            <div className="text-xs font-semibold text-[#E8650A] bg-white/[0.05] p-2.5 rounded-xl border border-white/10 mt-1">
              Mon–Sat 8am–8pm &middot; 24/7 Emergency
            </div>
          </div>

        </div>

        {/* Legal Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-4">
          <span>
            &copy; 2026 Second Opinion HVAC Services Inc. All rights reserved. &middot; <strong className="text-white">sohvac.ca</strong>
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
