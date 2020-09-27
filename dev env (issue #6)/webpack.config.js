const path = require("path");

const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin: CleanPlugin } = require("clean-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

const getOptimizationCfg = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };
  if (!isDev) {
    config.minimize = true;
    config.minimizer = [new OptimizeCssAssetsPlugin(), new TerserPlugin()];
  }
  return config;
};

module.exports = {
  mode: isDev ? "development" : "production",
  context: path.resolve(process.cwd(), "src"),
  entry: {
    main: ["@babel/polyfill", "./index.js"],
    additional: "./additional.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(process.cwd(), "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
          "eslint-loader",
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  devtool: isDev ? "source-map" : "",
  devServer: {
    port: 8080,
    hot: isDev,
  },
  optimization: getOptimizationCfg(),
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
    new CleanPlugin(),
    // new CopyWebpackPlugin(),
  ],
};
