/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#252422",
        surface: "#403d39",
        accent: "#748cab",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fill-bar": "fill-bar 1s ease-out forwards",
      },
      keyframes: {
        "fill-bar": {
          "0%": { width: "0%" },
          "100%": { width: "var(--fill)" },
        },
      },
    },
  },
  plugins: [],
};
