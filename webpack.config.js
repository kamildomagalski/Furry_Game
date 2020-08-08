const path = require("path");
const autoprefixer = require('autoprefixer');
const Html = require('html-webpack-plugin');

const entryPath = ".";

const entryFile = "app.js";
// const entryFile = "index.js";


module.exports = {
  entry: `./${entryPath}/js/${entryFile}`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `${entryPath}`),
    publicPath: "/build/",
    compress: true,
    port: 3001
  },
  mode: "development",
  devtool: "source-map",
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/images/",
          outputPath: "/images/"
        }
      }
    ],
  },
  plugins: [
    new Html({
      filename: "index.html",
      template: `${entryPath}/index.html`
    })
  ]
};
