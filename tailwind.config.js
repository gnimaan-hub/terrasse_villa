/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sea: {
          950: '#061B26',
          900: '#0A2D3F',
          800: '#0A3D52',
          700: '#0B4F68',
          600: '#1A6F8E',
          500: '#2290B0',
          400: '#4BB8C7',
          300: '#7DCFDA',
          200: '#B5E5EC',
          100: '#D9F2F6',
          50: '#EDF9FB',
        },
        coral: {
          900: '#8B2A18',
          800: '#B3381F',
          700: '#C84B2F',
          600: '#D85E3C',
          500: '#E06B4A',
          400: '#E88060',
          300: '#F4977A',
          200: '#F8BBA5',
          100: '#FDDDD3',
          50: '#FFF0EB',
        },
        ivory: '#FDF5E6',
        sand: '#EDE5D4',
        dune: '#D4C5B0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        accent: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
