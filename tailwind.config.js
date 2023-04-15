/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk,md}"],
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
        black: '#1E1E1E'
      },
      boxShadow: {
        bold: '6px 4px 0px #1E1E1E',
        yellow: '0 1px 3px 0 #FFE66D, 0 1px 2px -1px #FFE66D',
      },
      dropShadow: {
        bold: '2px 2px 0px #1E1E1E',
        light: '4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      margin: {
        'screen-h': '100vh',
        'screen-w': '100vw',
      },
    },
  },
  plugins: [],
}
