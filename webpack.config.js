/* eslint-disable @typescript-eslint/no-var-requires,no-undef */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// eslint-disable-next-line no-undef
module.exports = function () {
  return {
    devServer: {
      historyApiFallback: true,
    },
    entry: {
      main: ["./src/index.tsx"],
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
          test: /\.tsx?$/,
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|png|jpg|gif|svg)$/i,
          type: "asset/resource",
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: "all",
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
    },
    output: {
      filename: "[name].[contenthash].js",
      library: "main",
      libraryTarget: "umd",
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
      new ESLintPlugin({
        files: ["./src/**/*.{ts,tsx}"],
      }),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        publicPath: "/",
        favicon: "./src/favicon.ico",
      }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".css"],
    },
  };
};
