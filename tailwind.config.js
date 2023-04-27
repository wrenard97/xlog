/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        xlogbg: "url('./assets/images/xlog_BG.png')",
      },

      padding: {
        4.375: "4.375rem",
        5.938: "5.938rem",
        4.688: "4.688rem",
      },

      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
