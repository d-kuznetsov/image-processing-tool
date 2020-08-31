const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.jsx", "./pages/**/*.jsx"],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
];

module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
