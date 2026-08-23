import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#060f1e",
          900: "#0a1628",
          800: "#0f2340",
          700: "#1a3c5e",
          600: "#2d5f8a",
          500: "#3a78ad",
          100: "#dbeafe",
        },
      },
    },
  },
  plugins: [],
};
export default config;
