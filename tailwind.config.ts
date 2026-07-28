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
      colors: {
        /* ── $10k+ Award-Winning Luxury Studio Custom Colors ── */
        "obsidian-slate": "#0B0E11",
        "pale-jewel": "#D6EAF8",
        obsidian: {
          DEFAULT: "#0B0E11",
          canvas: "#0B0E11",
          card: "#151B24",
          surface: "rgba(21, 27, 36, 0.85)",
        },
        jewel: {
          DEFAULT: "#D6EAF8",
          pale: "#D6EAF8",
          ice: "#EAF4FB",
          glow: "rgba(214, 234, 248, 0.45)",
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
    },
  },
  plugins: [],
};

export default config;
