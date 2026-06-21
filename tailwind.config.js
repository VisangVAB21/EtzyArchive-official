/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          50: '#f9f7f4',
          100: '#f0ebe3',
          200: '#e0d5c5',
          300: '#c9b49d',
          400: '#b08f6e',
          500: '#9a7452',
          600: '#7d5d42',
          700: '#654a37',
          800: '#553e31',
          900: '#4a362c',
        }
      }
    },
  },
  plugins: [],
}