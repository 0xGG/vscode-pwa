//@ts-check

"use strict";

const fs = require("fs-extra");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

fs.rmdirSync(path.resolve(__dirname, "dist"), { recursive: true });

/**@type {import('webpack').Configuration}*/
const config = {
  target: "webworker", // vscode extensions run in a Node.js-context 📖 -> https://webpack.js.org/configuration/node/
  mode: "none", // this leaves the source code as close as possible to the original (when packaging we set this to 'production')

  entry: {
    index: "./src/index.ts",
  }, // the entry point of this extension, 📖 -> https://webpack.js.org/configuration/entry-context/
  output: {
    // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
    library: {
      type: "window",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: path.resolve(__dirname, "./dist/index.html"),
    }),
    /*
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
    */
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./node_modules/vscode-textmate"),
          to: path.resolve(__dirname, "./dist/vscode-textmate"),
        },
        {
          from: path.resolve(__dirname, "./node_modules/vscode-oniguruma"),
          to: path.resolve(__dirname, "./dist/vscode-oniguruma"),
        },
        {
          from: path.resolve(__dirname, "./node_modules/semver-umd"),
          to: path.resolve(__dirname, "./dist/semver-umd"),
        },
        {
          from: path.resolve(__dirname, "./node_modules/vscode-web"),
          to: path.resolve(__dirname, "./dist/vscode-web"),
        },
      ],
    }),
  ],
  devtool: "nosources-source-map",
  /*
  externals: {
    vscode: "commonjs vscode", // the vscode-module is created on-the-fly and must be excluded. Add other modules that cannot be webpack'ed, 📖 -> https://webpack.js.org/configuration/externals/
  },
  */
  resolve: {
    // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
module.exports = config;
