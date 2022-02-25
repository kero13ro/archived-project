module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // 過濾未使用的 CSS
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: {
          light: "#1b6180",
          DEFAULT: "#2d3748",
          dark: "#172641",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
