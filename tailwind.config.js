// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Update this path based on your app
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fade 0.7s ease-in-out',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}