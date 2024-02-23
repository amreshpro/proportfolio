export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xsm: { max: "339px" },
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      keyframes: {
        blob: {
          "0%,100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "25%": {
            borderRadius: "38% 68% 78% 48% / 58% 68% 38% 68%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
          "65%": {
            borderRadius: "33% 67% 75% 48% / 55% 68% 37% 69%",
          },
          "70%": {
            bordeRradius: "55% 45% 80% 65% / 50% 40% 55% 40%",
          },
        },
      },
    },
  },
  plugins: [],
};
