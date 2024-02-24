/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blueHeader:"#00CBBF",
        mclarenOrange:"#FCA311",
        mclarenBlueTxt:"#14213D",
        greyClaren:"#E5E5E5"
      }
    },
  },
  plugins: [],
}

