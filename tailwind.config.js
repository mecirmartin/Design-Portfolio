const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: {
    enable: true,
    content: ["./pages/*.tsx"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "2/3": "66.666667%",
        112: "28rem",
      },
      colors: {
        blue: {
          teal: "#1AA1AD",
        },
      },
      fontFamily: {
        sans: ["Spartan", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
