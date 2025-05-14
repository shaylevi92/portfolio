/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1A1F36',
        secondary: '#4A5568',
        accent: '#3B82F6',
        light: '#F7FAFC',
        dark: '#1A202C'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.2' }],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
=======
  content: [
    "./*.html",
    "./projects/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#333333',
        accent: '#0071e3'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Helvetica Neue', 'sans-serif'],
        display: ['SF Pro Display', 'Helvetica Neue', 'sans-serif']
>>>>>>> 8e842ab (Implement Tailwind CSS with Apple-inspired design system)
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
<<<<<<< HEAD
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
=======
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1' }],
        'display-lg': ['2.5rem', { lineHeight: '1.2' }],
        'display': ['2rem', { lineHeight: '1.2' }],
      }
>>>>>>> 8e842ab (Implement Tailwind CSS with Apple-inspired design system)
    },
  },
  plugins: [],
}
