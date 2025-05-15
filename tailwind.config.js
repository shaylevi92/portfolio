/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./projects/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#333333',
        accent: '#0071e3',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Helvetica Neue', 'sans-serif'],
        display: ['SF Pro Display', 'Helvetica Neue', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      fontSize: {
        'display-xl': ['4rem', { lineHeight: '1.1' }],
        'display-lg': ['3rem', { lineHeight: '1.2' }],
        'display': ['2.5rem', { lineHeight: '1.2' }],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      }
    },
  },
  plugins: []
}
