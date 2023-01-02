/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/*.tsx", "./components/*.js"],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
  ],
};
