import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default () => {
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
    },
    output: {
      filename: "[name].[contenthash].js",
      clean: true,
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
