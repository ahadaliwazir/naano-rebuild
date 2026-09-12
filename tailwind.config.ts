import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FCFCFB",
        charcoal: {
          DEFAULT: "#17181C",
          hover: "#26282E",
        },
        muted: {
          foreground: "#55575E",
          subtle: "#888A92",
        },
        border: {
          DEFAULT: "#E8E6E2",
          light: "#F2F0EC",
        },
        accent: {
          linkedin: "#0A66C2",
          surface: "#F0F6FC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(23, 24, 28, 0.04), 0 1px 2px rgba(23, 24, 28, 0.02)",
        card: "0 2px 8px rgba(23, 24, 28, 0.04), 0 1px 2px rgba(23, 24, 28, 0.02)",
        modal: "0 20px 40px -15px rgba(23, 24, 28, 0.12)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
