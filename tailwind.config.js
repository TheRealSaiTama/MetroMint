/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        text: '#ffffff',
        'text-dim': 'rgba(255, 255, 255, 0.6)',
        border: 'rgba(255, 255, 255, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      spacing: {
        'header': '80px',
        'footer': '400px',
      },
    },
  },
  plugins: [],
}
