
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


// env
const buildDirectory = './client/';

module.exports = {
  entry: "./client/index.js",

  output: {
    path: __dirname + "/client/dist",
    filename: "bundle.js",
    publicPath: './dist/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
         presets: ['es2015', 'stage-0'],
        },
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader!resolve-url-loader',
      //   // options: { url: false },
      // },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          // use style-loader in development
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
          }, {
            loader: "resolve-url-loader"
          }, {
            loader: "sass-loader?sourceMap"
          }],
          publicPath: './',
        })
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
        test: /\.png$/,
          loader: 'file-loader',
          query: {
            name: './[name].[ext]',
            publicPath: './'
          },
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: "custom.styles.css",
      disable: process.env.NODE_ENV === "development"
    })
  ]
};
