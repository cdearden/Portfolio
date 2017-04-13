const { resolve } = require('path');
const { ProvidePlugin, DefinePlugin, optimize } = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolvePath = relativePath => resolve(__dirname, relativePath);

// env
const paths = {
  entry: resolvePath('src/index.jsx'),
  output: resolvePath('build'),
  htmlTemplate: resolvePath('public/template.html'),
  public: '',
};

module.exports = {
  entry: paths.entry,

  output: {
    path: paths.output,
    filename: 'bundle.js',
    publicPath: paths.public,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: '/node_modules/',
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)(\?.*)?$/,
          /\.css$/,
          /\.scss$/,
          /\.json$/,
          /\.svg$/,
        ],
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0'],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          // use style-loader in development
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              url: false,
            },
          }, {
            loader: 'resolve-url-loader',
          }, {
            loader: 'sass-loader?sourceMap',
          }, {
            loader: 'postcss-loader',
          }],
          publicPath: './',
        }),
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },

  plugins: [
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
    }),
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
    }),
    new ExtractTextPlugin({
      filename: 'custom.styles.css',
      disable: process.env.NODE_ENV === 'development',
    }),
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      template: paths.htmlTemplate,
    }),
  ],
};

