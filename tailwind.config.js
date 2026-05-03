/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './context/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { display: ['var(--font-geist-sans)', 'Arial', 'sans-serif'] }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        tilesTheme: {
          primary: '#0f766e', secondary: '#f97316', accent: '#14b8a6', neutral: '#111827', 'base-100': '#fffaf3', info: '#0ea5e9', success: '#22c55e', warning: '#f59e0b', error: '#ef4444'
        }
      },
      'light'
    ]
  }
};
