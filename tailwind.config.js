/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0d0c1d",
        white: "#fff",
        paleYellow: "#f3f9d2",
        paleYellowOpacity: "#f3f9d2aa",
        timberWolf: "#d3d0d0",
        paleRed: "#ebd8da",
        silver: "#aaa7a7",
        slateGray: "#6c757d",
        softYellow: "#edfb69",
        aquamarine: "#A4F9C8",
        softGreen: "#b9f98e",
        green: "#95e262",
        softBlue: "#75b4f7",
        dodgerBlue: "#228dff",
        lightCoral: "#fc7e8b",
        brightPink: "#fc5d6d",
      },
      screens: {
        ssm: "400px",
        sm: "600px",
        md: "800px",
        lg: "1000px",
        xl: "1200px",
      },
    },
  },

  plugins: [],
};
