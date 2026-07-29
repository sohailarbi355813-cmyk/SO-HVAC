"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EmergencyService() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-6 sm:px-12 border-b border-[#0F0F0F]/10">
      <div className="max-w-[85vw] mx-auto bg-white rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-[#0F0F0F]/5 overflow-hidden flex flex-col md:flex-row items-stretch">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[#0F0F0F] mb-6 tracking-tight leading-tight"
          >
            Emergency Service
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#1A1A1A]/80 mb-10 leading-relaxed font-sans"
          >
            When your HVAC fails, you can't wait days for a fix. Our SO Certified™ technicians are on standby 24/7 to restore comfort to your home immediately. No premium pricing, just honest and rapid response.
          </motion.p>
          <motion.a 
            href="https://wa.me/19055550142" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-[#D92626] text-white px-10 py-4 rounded-xl font-extrabold text-lg md:text-xl hover:bg-[#B31E1E] transition-colors shadow-lg shadow-[#D92626]/20 self-start"
          >
            Call us Now
          </motion.a>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 min-h-[400px] md:min-h-full relative overflow-hidden">
          <img 
            src="/expert-hvac-vertical.png" 
            alt="Emergency HVAC technicians" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}
