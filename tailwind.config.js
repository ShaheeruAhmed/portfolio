/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#100c09',
        surface: '#2d201a',
        accent: '#a47864',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fill-bar': 'fill-bar 1s ease-out forwards',
      },
      keyframes: {
        'fill-bar': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--fill)' },
        },
      },
    },
  },
  plugins: [],
}
