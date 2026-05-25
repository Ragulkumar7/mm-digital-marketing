import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark + red accent palette (Bixos-inspired)
        background: "#0B0D12",   // near-black charcoal
        surface: "#15181F",      // card surface
        card: "#15181F",         // legacy alias
        muted: "#1C2029",        // soft block
        primary: {
          DEFAULT: "#E63946",    // vivid red
          light: "#F25762",
          dark: "#C22833",
        },
        accent: {
          DEFAULT: "#E63946",    // same red used as accent
          light: "#F25762",
          dark: "#C22833",
        },
        gold: "#E8A87C",
        ink: "#FFFFFF",          // primary text on dark
        body: "#C9CED6",         // body text
        secondary: "#8A92A1",    // muted secondary text
        line: "#262A35",         // hairline / border
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #E63946 0%, #C22833 100%)",
        "gradient-warm":
          "linear-gradient(135deg, #F25762 0%, #C22833 100%)",
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(0, 0, 0, 0.45)",
        card: "0 12px 40px -16px rgba(0, 0, 0, 0.6)",
        lift: "0 20px 50px -20px rgba(0, 0, 0, 0.7)",
        ring: "0 0 0 8px rgba(230, 57, 70, 0.15)",
        glow: "0 0 40px rgba(230, 57, 70, 0.35)",
      },
      keyframes: {
        "blob-float": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "blob-float": "blob-float 18s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "spin-slow": "spin-slow 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
