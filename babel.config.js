// Babel config used only for local tooling (Jest). The published package ships
// the hand-written ESM `lib/index.js` untranspiled; consumers transpile it with
// their own Metro/bundler config, so this file does not affect the npm output.
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
};
