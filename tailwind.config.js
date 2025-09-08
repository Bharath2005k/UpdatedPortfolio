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
        primary: '#2D3748',
        secondary: '#4A5568',
        accent: '#E2E8F0',
        beige: '#F7FAFC',
        'light-gray': '#EDF2F7',
        'dark-gray': '#1A202C',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
        'skill-bar': 'skillBar 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        skillBar: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--skill-width)' },
        },
      },
    },
  },
  plugins: [],
};