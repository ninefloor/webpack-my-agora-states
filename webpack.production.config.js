const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require("path");

module.exports = {
  mode: 'production',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].js',
    clean: true,
  },
  devServer:{
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      }
    ]
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    runtimeChunk: 'single',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ]
}