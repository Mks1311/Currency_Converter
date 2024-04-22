/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "my1":"#111013",
      "my2":"#F5EFDF",
      "my3":"#3D4045",
      "white":"#fff"
    },
    fontFamily:{
      "Barlow":["Barlow Condensed"],
    },
    extend: {},

  },
  plugins: [],
}

