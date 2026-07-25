"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SOHVACLogo from "@/components/SOHVACLogo";

const serviceLinks = [
  { label: "Air Conditioning", href: "#services" },
  { label: "Furnace", href: "#services" },
  { label: "Heat Pump", href: "#services" },
  { label: "Water Heater", href: "#services" },
  { label: "Tankless Water Heater", href: "#services" },
  { label: "Water Purification", href: "#services" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Our Bundles", href: "#bundles" },
  { label: "Free Assessment", href: "#contact" },
  { label: "Warranty Policy", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative bg-[var(--bg-primary)] border-t border-[var(--border-color)]"
    >
      {/* Top gradient line */}
      <div
        className="h-[3px] w-full"
        style={{
          background: "linear-gradient(90deg, var(--brand-red) 0%, var(--brand-blue) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4" id="footer-logo">
              <SOHVACLogo variant="navbar" width={220} />
            </Link>

            <div
              className="w-24 h-[2px] rounded-full mb-5"
              style={{
                background:
                  "linear-gradient(90deg, var(--brand-red), var(--brand-blue))",
              }}
            />

            <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed max-w-sm mb-6">
              <em className="font-display font-700 not-italic" style={{ color: "var(--text-primary)" }}>
                Second Opinion. First Choice.
              </em>{" "}
              — Premium HVAC and water purification services backed by a 10-year
              warranty and a commitment to your comfort.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+10000000000"
                className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--brand-red)] transition-colors duration-200 font-body text-sm group"
                id="footer-phone"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[rgba(220,38,38,0.1)]"
                  style={{ background: "var(--bg-tertiary)" }}
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                +1 (000) 000-0000
              </a>

              <a
                href="mailto:info@sohvac.ca"
                className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--brand-blue)] transition-colors duration-200 font-body text-sm group"
                id="footer-email"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[rgba(29,78,216,0.1)]"
                  style={{ background: "var(--bg-tertiary)" }}
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                info@sohvac.ca
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4
              className="font-display font-800 text-sm uppercase tracking-[0.15em] mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3" role="list">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-sm text-[var(--text-secondary)] hover:text-[var(--brand-red)] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-200 group-hover:bg-[var(--brand-red)]"
                      style={{ background: "var(--text-muted)" }}
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4
              className="font-display font-800 text-sm uppercase tracking-[0.15em] mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3" role="list">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-sm text-[var(--text-secondary)] hover:text-[var(--brand-blue)] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-200 group-hover:bg-[var(--brand-blue)]"
                      style={{ background: "var(--text-muted)" }}
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA card */}
            <motion.a
              href="#contact"
              id="footer-cta"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="mt-8 flex flex-col gap-1 p-4 rounded-2xl group"
              style={{
                background: "rgba(220,38,38,0.08)",
                border: "1px solid rgba(220,38,38,0.2)",
              }}
            >
              <span
                className="font-display font-800 text-sm"
                style={{ color: "var(--brand-red)" }}
              >
                Book a Free Assessment
              </span>
              <span className="font-body text-xs text-[var(--text-muted)]">
                No cost · No commitment
              </span>
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-sm text-[var(--text-muted)] text-center sm:text-left">
            © {currentYear} SO HVAC & Water Purification. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors duration-200"
            >
              Terms of Service
            </a>
            <span className="font-body text-xs text-[var(--text-muted)]">
              Made with ❤️ in Canada
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
