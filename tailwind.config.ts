import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#08070a",
          950: "#040305",
          900: "#08070a",
          800: "#111014",
          700: "#1a181e",
          600: "#252229",
        },
        bone: {
          DEFAULT: "#f6f3ec",
          50: "#fafaf7",
          100: "#f6f3ec",
          200: "#ebe6da",
        },
        fg: {
          DEFAULT: "#f4f1e8",
          muted: "#a39e92",
          subtle: "#605c54",
          faint: "#2a272d",
        },
        gold: {
          DEFAULT: "#c9a96a",
          50: "#fbf6ea",
          100: "#f4e7c4",
          200: "#e8cf8e",
          300: "#dcb866",
          400: "#c9a96a",
          500: "#b8954d",
          600: "#9c7a3c",
          700: "#7b5f30",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        display: "-0.045em",
        tightest: "-0.055em",
        ultratight: "-0.07em",
      },
      fontSize: {
        "9xl": ["clamp(4rem, 14vw, 11rem)", { lineHeight: "0.88", letterSpacing: "-0.055em" }],
        "10xl": ["clamp(5rem, 18vw, 14rem)", { lineHeight: "0.86", letterSpacing: "-0.06em" }],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1.2s ease forwards",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
