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
        'bold-bottom': '0px 4px 0px #1E1E1E',
        pressed: '0px 0px 0px #1E1E1E, inset 0 2px 4px 0 rgb(0 0 0 / 0.2)',
      },
      dropShadow: {
        bold: '2px 2px 0px #1E1E1E',
        light: '4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      margin: {
        'screen-h': '100vh',
        'screen-w': '100vw',
        'content-offset': '33vh',
      },
    },
  },
  plugins: [],
}
