/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navRowText: "#6F767E",
        navRowDivSelect:"#EEEEEE",
        navRowTextSelect: "#0A0A0A",
        searchBarPlaceText: "#808281",
        studentTableHeaderText:"#3F526E",
        userName:"#05162E"
      },
      fontFamily: {
        notoSans: ['NotoSans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

