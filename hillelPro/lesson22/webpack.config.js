const PATH = require("path");
const WEBPACKHTML = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  mode: "production",
  devServer: {
    static: { directory: PATH.join(__dirname, "dist") },
    open: true,
  },
  output: {
    filename: "main.js",
    path: PATH.resolve(__dirname, "dist"),
  },
  plugins: [new WEBPACKHTML({ template: "./src/index.html" })],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
