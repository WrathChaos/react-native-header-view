// Flat ESLint config (ESLint 9). Replaces the legacy .eslintrc.js, which
// referenced the deprecated `babel-eslint` parser and `airbnb` config and was
// never installed or runnable.
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const reactPlugin = require("eslint-plugin-react");
const globals = require("globals");

module.exports = tseslint.config(
  {
    ignores: ["node_modules/**", "example/**", "coverage/**", "lib/**/*.d.ts"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { react: reactPlugin },
    languageOptions: {
      globals: { ...globals.jest, ...globals.node },
    },
    settings: { react: { version: "detect" } },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: ["lib/**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: { ...globals.es2021 },
    },
  },
  {
    files: [
      "eslint.config.js",
      "*.config.js",
      "babel.config.js",
      "jest.config.js",
    ],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off",
    },
  },
);
