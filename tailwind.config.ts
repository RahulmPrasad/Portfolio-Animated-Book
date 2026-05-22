import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E6",
        "cream-light": "#FAF7F0",
        "cream-dark": "#EDE7D9",
        ink: "#1C1814",
        "ink-muted": "#7A746E",
        "ink-light": "#A89F97",
        clay: "#C47B50",
        "clay-light": "#D9956D",
        border: "#DDD7CB",
        "border-light": "#E8E3D8",
        card: "#FFFDF8",
      },
      fontFamily: {
        hand: ["var(--font-gochi-hand)", "cursive"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem,8vw,7rem)", { lineHeight: "1.05" }],
        "display-lg": ["clamp(2.5rem,6vw,5rem)", { lineHeight: "1.1" }],
        "display-md": ["clamp(2rem,4vw,3.5rem)", { lineHeight: "1.15" }],
      },
      animation: {
        "draw-line": "drawLine 0.6s ease forwards",
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        drawLine: {
          "0%": { strokeDashoffset: "100%" },
          "100%": { strokeDashoffset: "0%" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
