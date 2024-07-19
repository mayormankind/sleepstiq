import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropFilter: ['responsive'],
      colors:{
        grayText: '#12305B',
        blueShade: '#12305B',
        yellowShade: '#FBF9F2',
        pinkShade: '#FC5959',
      },
      boxShadow: {
        'custom': '50px 50px 100px 0px #00000025',
        'custom2': '0px 100px 100px 0px #00000025',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
