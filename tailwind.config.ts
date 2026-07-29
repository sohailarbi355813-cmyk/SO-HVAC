import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space)", "sans-serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "fluid-sm": "clamp(0.875rem, 0.8vw + 0.6rem, 1rem)",
        "fluid-base": "clamp(1rem, 1vw + 0.75rem, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 1.5vw + 1rem, 1.5rem)",
        "fluid-xl": "clamp(1.5rem, 2vw + 1.2rem, 2rem)",
        "fluid-2xl": "clamp(2rem, 3vw + 1.5rem, 3rem)",
        "fluid-3xl": "clamp(2.5rem, 4vw + 2rem, 4.5rem)",
        "fluid-4xl": "clamp(3rem, 5vw + 2.5rem, 6rem)",
        "fluid-hero": "clamp(3.5rem, 6vw + 3rem, 8rem)",
      },
      colors: {
        /* ── $10k+ Award-Winning Luxury Studio Custom Colors ── */
        "obsidian-slate": "#FAFAFA", // Repurposing as Swiss White background
        "pale-jewel": "#0033FF", // Repurposing as Cobalt Blue accent
        obsidian: {
          DEFAULT: "#FAFAFA",
          canvas: "#FAFAFA",
          card: "#FFFFFF",
          surface: "rgba(255, 255, 255, 0.85)",
        },
        jewel: {
          DEFAULT: "#0033FF",
          pale: "#4D70FF",
          ice: "#E5EBFF",
          glow: "rgba(0, 51, 255, 0.15)",
        },
        /* ── Figma Brand Tokens (01 Primitives & 02 Semantic) ── */
        navy: {
          900: "#0B1E33",
          800: "#102844",
          700: "#16324F",
          600: "#1A3B5C",
          500: "#1E4468",
        },
        orange: {
          600: "#C95508",
          500: "#E8650A",
          400: "#F17E2B",
          100: "#FDEBDC",
        },
        ice: {
          200: "#D6EAF8",
          100: "#EAF4FB",
          50:  "#F4F9FD",
        },
        neutral: {
          50:  "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        blue: {
          500: "#2D7DD2",
          600: "#1D64B2",
        },
        success: "#1B8A5A",
        error: "#D64545",
        warning: "#F5A623",
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(11,30,51,.06), 0 8px 24px rgba(11,30,51,.08)",
        elevated: "0 4px 12px rgba(11,30,51,.10), 0 16px 40px rgba(11,30,51,.16)",
        sticky: "0 -4px 16px rgba(11,30,51,.12)",
        glow: "0 0 32px rgba(232,101,10,.35)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #0B1E33 0%, #16324F 60%, #0F2A4A 100%)",
        "gradient-orange": "linear-gradient(135deg, #E8650A 0%, #C95508 100%)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulseFast: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      transitionTimingFunction: {
        "spring-bouncy": "linear(0, 0.009, 0.035 2.1%, 0.141, 0.281 6.7%, 0.723 12.9%, 0.938 16.7%, 1.017, 1.077, 1.121, 1.149 24.3%, 1.159, 1.163, 1.161, 1.154 29.9%, 1.129 32.8%, 1.051 39.6%, 1.017 43.1%, 0.991, 0.977 51%, 0.974 53.8%, 0.975 57.1%, 0.997 69.8%, 1.003 76.9%, 1)",
        "spring-smooth": "linear(0, 0.007, 0.029 2.2%, 0.118 4.7%, 0.625 14.4%, 0.826 19%, 0.902, 0.946, 0.972 27.8%, 0.986 30.1%, 0.995 33.3%, 1.001 37.5%, 1.002 43.1%, 1 54.3%, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
