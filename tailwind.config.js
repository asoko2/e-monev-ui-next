/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        nunito: 'Nunito, sans-serif',
        poppins: 'Poppins, sans-serif'
      },
      colors: {
        primary: {
          DEFAULT: '#26445e',
          lighter: '#3d6b96',
          darker: '#172839',
        },
        secondary: {
          DEFAULT: '#e07142',
        },
        primgray: {
          DEFAULT: "#7fbeb6",
        }
      }
    },
  },
  plugins: [],
}
