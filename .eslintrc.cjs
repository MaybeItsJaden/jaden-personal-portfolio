/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    // Disable specific rules
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/prefer-const": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/no-unescaped-entities": "off",
    "prefer-const": "off"
  },
};

module.exports = config;