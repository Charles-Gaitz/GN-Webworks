/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0A192F',
        secondary: '#1E293B',
        accent: '#FF5A00',
        orange: {
          500: '#FF5A00',
          600: '#E64A00',
        },
        slate: {
          800: '#1E293B',
          900: '#0A192F',
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      screens: {
        'xs': '475px',
      },
      width: {
        'mobile-logo': '150px',
        'desktop-logo': '200px',
      },
      height: {
        'auto': 'auto',
      },
      zIndex: {
        '60': '60',
      },
    },
  },
  plugins: [],
};