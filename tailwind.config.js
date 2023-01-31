module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Montserrat"],
      montserratExtrabold: ["Montserrat ExtraBold"],
      italic: ["Montserrat Italic"],
    },
    fontSize: {
      "3xs": "0.5rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.825rem",
      tiny: "0.875rem",
      base: "1rem",
      "base-up": "1.125rem",
      "middle-lg": "20px",
      lg: "21px",
      xl: "1.5rem",
      "2xl": "1.675rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "40px",
      "7xl": "42px",
      "8xl": "3rem",
      "9xl": "3.5rem",
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      middlebold: 650,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    extend: {},
  },
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#51C7FF",
      }
    }],
    
  },
  plugins: [require("daisyui")]
}
