/** @type {import('tailwindcss').Config} */

enabled: process.env.NODE_ENV === "production",
  (module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
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
  });
