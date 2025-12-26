/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./translations.ts",
    "./constants.ts"
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#fdfcfa', 100: '#f7f5f0', 200: '#e8e2d2', 300: '#d5cbb0', 
          400: '#bead8a', 500: '#a8926a', 600: '#957d59', 700: '#735f44', 
          800: '#5e4e3b', 900: '#4e4133', 950: '#1a1612'
        },
        nature: {
          50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 500: '#22c55e', 
          800: '#166534', 900: '#14532d'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}