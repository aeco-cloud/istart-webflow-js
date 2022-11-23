const path = require("path");

module.exports = {
  entry: "./uncompiledScripts/bodyScript.js",
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
    path: path.resolve(__dirname, "scriptsReadyForWebflow"),
  },
  devtool: "source-map",
  mode: "production",
};
