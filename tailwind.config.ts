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
        display: ["Aquatico", "var(--font-barlow)", "system-ui", "sans-serif"],
        body:    ["var(--font-inter)",  "system-ui", "sans-serif"],
      },
      colors: {
        /* ── Exact logo colors ── */
        brand: {
          red:          "#dc2626",   // flame red
          "red-light":  "#ef4444",
          "red-dark":   "#b91c1c",
          orange:       "#f97316",   // flame tip highlight
          navy:         "#1a2e5a",   // primary (house, HVAC text, S-swirl)
          "navy-light": "#243f7a",
          "navy-dark":  "#0f1e3d",   // darkest navy
          blue:         "#1d5fa8",   // water wave blue
          "blue-light": "#3b82f6",
          "blue-dark":  "#1448a0",
        },
        /* ── Dark mode navy surface tokens ── */
        surface: {
          900: "#080f1e",   // near-black navy (dark bg-primary)
          800: "#0d1a2e",   // deep navy     (dark bg-secondary)
          700: "#111f38",   // mid dark navy  (dark bg-tertiary)
          600: "#1a2e5a",   // brand navy
          500: "#1e2f4a",   // border dark
        },
      },
      backgroundImage: {
        /* Brand gradients */
        "gradient-red":   "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
        "gradient-navy":  "linear-gradient(135deg, #1a2e5a 0%, #0f1e3d 100%)",
        "gradient-water": "linear-gradient(135deg, #1d5fa8 0%, #1a2e5a 100%)",
        "gradient-brand": "linear-gradient(135deg, #dc2626 0%, #b91c1c 40%, #1a2e5a 100%)",
        /* Hero mesh */
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        marquee:        "marquee 30s linear infinite",
        "pulse-ring":   "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
        float:          "float 6s ease-in-out infinite",
        "spin-slow":    "spin 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%":   { transform: "scale(0.8)", opacity: "0.8" },
          "70%":  { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        /* Navy-tinted shadows */
        "card-sm":    "0 4px 16px -2px rgba(26,46,90,0.10), 0 2px 8px -2px rgba(26,46,90,0.06)",
        "card-md":    "0 12px 40px -8px rgba(26,46,90,0.18), 0 4px 16px -4px rgba(26,46,90,0.10)",
        "card-hover": "0 24px 64px -12px rgba(26,46,90,0.28), 0 8px 24px -4px rgba(26,46,90,0.15)",
        /* Colored glow shadows */
        "glow-red":   "0 0 40px rgba(220,38,38,0.35)",
        "glow-navy":  "0 0 40px rgba(26,46,90,0.50)",
        "glow-blue":  "0 0 40px rgba(29,95,168,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
