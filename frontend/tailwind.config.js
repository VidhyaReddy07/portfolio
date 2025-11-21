/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e6f2ff',
          300: '#93c5fd',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          400: '#2dd4bf',
          600: '#14b8a6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'Inter', 'system-ui']
      },
      boxShadow: {
        'lg-3d': '0 10px 30px rgba(2,6,23,0.12), 0 6px 12px rgba(2,6,23,0.06)'
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(.2, .9, .2, 1)'
      }
    },
  },
  plugins: [],
}