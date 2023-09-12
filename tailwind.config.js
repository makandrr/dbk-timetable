/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'study-brown': {
          DEFAULT: '#583c3c',
          '50': '#f8f5f4',
          '100': '#efe8e5',
          '200': '#dfcfc9',
          '300': '#cab0a7',
          '400': '#b48d83',
          '500': '#a4736b',
          '600': '#97645f',
          '700': '#7e5150',
          '800': '#674546',
          '900': '#583c3c',
          '950': '#2d1d1d',
        },
      }
    },
  },
  plugins: [],
}

