/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        textUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

        /* LEFT → RIGHT */
        slideLeftToRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-140px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      },

      animation: {
        'text-up': 'textUp 1s ease forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        'slide-left':
          'slideLeftToRight 1.1s cubic-bezier(0.22,1,0.36,1) forwards',
      },
    },
  },
  plugins: [],
}
