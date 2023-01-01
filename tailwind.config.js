module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.js",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
