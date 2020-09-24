module.exports = {
  parser: "babel-eslint",
  rules: {
    "no-unused-vars": "warn",
  },
  extends: ["eslint:recommended"],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
};
