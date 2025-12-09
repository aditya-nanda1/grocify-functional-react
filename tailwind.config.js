/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        secondary: '#EA580C',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15,23,42,0.12)',
      },
      backgroundImage: {
        'btn-gradient': 'linear-gradient(135deg,#f97316,#ea580c)',
      },
    },
  },
  plugins: [],
}
