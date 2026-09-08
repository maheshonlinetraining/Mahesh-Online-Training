/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407'
        },
        primary: {
          red: '#dc2626',
          orange: '#ea580c',
          dark: '#0f172a',
          body: '#334155',
          light: '#f8fafc'
        }
      },
      boxShadow: {
        'brand-soft': '0 4px 20px -2px rgba(234, 88, 12, 0.12)',
        'card-clean': '0 2px 12px -1px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}
