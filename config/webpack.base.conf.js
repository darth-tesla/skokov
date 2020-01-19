const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/"
};

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    main: `${PATHS.src}/entry.js`
  },
  output: {
    filename: `${PATHS.assets}/js/[name].js`,
    path: PATHS.dist,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        loader: "pug-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: `${PATHS.src}/postcss.config.js` }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: `${PATHS.src}/postcss.config.js` }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|git|svg)/,
        loader: "file-loader",
        options: {
          filename: "[name].[ext]"
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/css/[name].css`
    }),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/theme/img/`,
        to: `${PATHS.assets}/img`
      },
      {
        from: `${PATHS.src}/theme/fonts/`,
        to: `${PATHS.assets}/fonts`
      },
      {
        from: `${PATHS.src}/theme/libs/`,
        to: `${PATHS.assets}/libs`
      }
    ]),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/index/index.pug`,
      filename: "./index.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/news/news.pug`,
      filename: "./news.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/post/post.pug`,
      filename: "./post.html",
      inject: true
    })
  ]
};
