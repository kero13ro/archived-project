module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      colors: {
        primary: '#4d63f5',
        primaryDark: '#233F89',
        secondary: '#47E9B2',
        accent: '#233F89',
      },
      // spacing: {
      //   1: 'calc(var(--u) * 1)'
      // },
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
    },
  },
  plugins: [],
};