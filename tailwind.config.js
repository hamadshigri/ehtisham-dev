/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "Inter-Tight": ["Inter Tight", "sans-serif"],
      },
      backgroundColor: {
        "primary-color": "#030712",
      },
      screens: {
        "3xl": "2592px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
