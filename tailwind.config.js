/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
        Yantramanav: ["Yantramanav", "sans-serif"],
      },
      colors: {
        gray: "#565969",
        graySmoke: "#8f9199",
        whiteSmoke: "#fefeff",
        orange: "#ff5e14",
        normalBlack: "#0a1027",
      },
    },
  },
  plugins: [],
};
