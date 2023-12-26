/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        font_black:'#1a1b28',
        btn_color:'#1e2435',
        font_white:'#ffffff',
        clr_blue:'#52c9dc',
        clr_ash:'#c8c9cf',
        background_clr:'#beeaf2'
      },
      fontFamily:{
        text:['Assistant'],
        alt:['Poppins']
      }
    },
  },
  plugins: [],
}