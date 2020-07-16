const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  target: "electron-renderer", // https://webpack.js.org/configuration/target/#string
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 4173,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
