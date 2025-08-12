/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        // Ensure we only use brand colors across the app
        blue: {
          50: '#259ed9',
          100: '#259ed9',
          200: '#259ed9',
          300: '#259ed9',
          400: '#259ed9',
          500: '#259ed9',
          600: '#259ed9',
          700: '#259ed9',
          800: '#259ed9',
          900: '#259ed9',
          DEFAULT: '#259ed9',
        },
        gray: {
          50: '#636565',
          100: '#636565',
          200: '#636565',
          300: '#636565',
          400: '#636565',
          500: '#636565',
          600: '#636565',
          700: '#636565',
          800: '#636565',
          900: '#636565',
          DEFAULT: '#636565',
        },
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}