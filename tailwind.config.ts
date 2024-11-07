import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xsm: { max: "339px" },
      },
      
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary:"var(--secondary)",
        ternary:"var(--ternary)",

      },
    },
  },
  plugins: [],
};
export default config;
