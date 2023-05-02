/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        xlogbg: "url('./assets/images/xlog_BG.png')",
        bgxlog: "url('./assets/images/xlogbg-2.png')",
      },

      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
