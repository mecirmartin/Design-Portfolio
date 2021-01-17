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
      },
      colors: {
        blue: {
          teal: "#1AA1AD",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
