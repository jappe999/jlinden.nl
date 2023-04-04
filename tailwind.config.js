/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono'],
        sans: ['IBM Plex Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        yellow: '#FFE66D',
        teal: '#4ECDC4',
        red: '#EC5A65',
        gray: '#1E1E1E'
      },
      boxShadow: {
        bold: '6px 4px 0px #1E1E1E'
      },
      dropShadow: {
        bold: '3px 3px 0px #1E1E1E'
      }
    },
  },
  plugins: [],
}
