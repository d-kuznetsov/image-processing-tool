module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      inset: {
        4: "1rem",
        8: "2rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
      },
      borderRadius: {
        "1/2": "50%",
      },
    },
  },
  variants: {
    display: ["responsive", "group-hover"],
  },
  plugins: [],
};
