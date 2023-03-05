const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "AoE Tech Overlay",
      favicon: "./src/favicon.ico",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "",
    assetModuleFilename: (pathData) => {
      const filepath = path.dirname(pathData.filename).split("/").slice(1).join("/");
      return `${filepath}/[name].[hash][ext][query]`;
    },
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
