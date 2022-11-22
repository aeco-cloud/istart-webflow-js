const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = {
  entry: "./src/bodyScript.js",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bodyScript.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  mode: "production",
};
