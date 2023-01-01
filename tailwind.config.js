module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.js",
    "./pages/**/*.tsx",
    "./components/**/*.js",
    "./utility/**/*.js",
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
