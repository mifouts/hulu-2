/** @type {import('tailwindcss').Config} */

const { createGlobPatternsForDependencies } = require("@nrwl/next/tailwind");
const { join } = require("path");

module.exports = {
  mode: "jit",
  content: [
    join(
      __dirname,
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
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
