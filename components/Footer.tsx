"use client";

import React from "react";
import Link from "next/link";
import SOHVACLogo from "@/components/SOHVACLogo";

export default function Footer() {
  return (
    <footer suppressHydrationWarning className="bg-[#F1F5F9] text-[#1A1A1A] pt-16 pb-28 sm:pb-20 px-6 sm:px-12 border-t border-[#0F0F0F]/10 relative z-20 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#0F0F0F]/10">
          
          {/* Brand & Blurb */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="inline-block text-[#0F0F0F]">
              <SOHVACLogo variant="navbar" width={200} />
            </Link>

            <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed mt-1 font-light">
              <strong className="text-[#0F0F0F] font-bold">Second Opinion HVAC Services Inc.</strong><br />
              Helping GTA homeowners make informed HVAC decisions since 2025. Transparent quotes, premium installs, honest advice.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#0F0F0F]/10 text-[#0F0F0F] text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                TSSA
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#0F0F0F]/10 text-[#0F0F0F] text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                HRAI
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#0F0F0F]/10 text-[#0F0F0F] text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                WSIB
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-mono font-bold text-xs uppercase tracking-[0.1em] text-[#0033FF] mb-2">
              Services
            </h4>
            <a href="#services" className="hover:text-[#0033FF] transition-colors text-xs sm:text-sm font-medium">Air Conditioners</a>
            <a href="#services" className="hover:text-[#0033FF] transition-colors text-xs sm:text-sm font-medium">Furnaces</a>
            <a href="#services" className="hover:text-[#0033FF] transition-colors text-xs sm:text-sm font-medium">Heat Pumps</a>
            <a href="#services" className="hover:text-[#0033FF] transition-colors text-xs sm:text-sm font-medium">Tankless Water Heaters</a>
            <a href="#services" className="hover:text-[#0033FF] transition-colors text-xs sm:text-sm font-medium">Water Heaters</a>
            <a href="#services" className="hover:text-[#0033FF] transition-colors text-xs sm:text-sm font-medium">Repairs &amp; Maintenance</a>
            <a href="#services" className="hover:text-[#0033FF] transition-colors text-xs sm:text-sm font-medium">Emergency Service</a>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-mono font-bold text-xs uppercase tracking-[0.1em] text-[#0033FF] mb-2">
              Company
            </h4>
            <a href="#" className="hover:text-[#0033FF] transition-colors text-xs sm:text-sm font-medium">About Us</a>
            <a href="#second-opinion" className="hover:text-[#0033FF] transition-colors text-xs sm:text-sm font-medium">Second Opinions</a>
            <a href="#financing" className="hover:text-[#0033FF] transition-colors text-xs sm:text-sm font-medium">Financing</a>
            <a href="#areas" className="hover:text-[#0033FF] transition-colors text-xs sm:text-sm font-medium">Service Areas</a>
            <a href="#reviews" className="hover:text-[#0033FF] transition-colors text-xs sm:text-sm font-medium">Reviews</a>
            <a href="https://wa.me/19055550142" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors text-xs sm:text-sm font-medium">Contact</a>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-mono font-bold text-xs uppercase tracking-[0.1em] text-[#0033FF] mb-2">
              Contact
            </h4>
            <div className="text-xs sm:text-sm font-bold text-[#0F0F0F]">
              (905) 555-0142
            </div>
            <div className="text-xs sm:text-sm text-[#1A1A1A]/90 font-medium">
              hello@sohvac.ca
            </div>
            <div className="text-xs sm:text-sm text-[#1A1A1A]/80 font-medium">
              Mississauga, ON
            </div>
            <div className="text-xs font-semibold text-[#0033FF] bg-[#0033FF]/5 p-2.5 rounded-xl border border-[#0033FF]/10 mt-1">
              Mon–Sat 8am–8pm &middot; 24/7 Emergency
            </div>
          </div>

        </div>

        {/* Legal Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#1A1A1A]/60 font-medium gap-4">
          <span>
            &copy; 2026 Second Opinion HVAC Services Inc. All rights reserved. &middot; <strong className="text-[#0F0F0F]">sohvac.ca</strong>
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0F0F0F] hover:underline transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0F0F0F] hover:underline transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#0F0F0F] hover:underline transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
