const { resolve } = require('path');
const { HotModuleReplacementPlugin, ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolvePath = relativePath => resolve(__dirname, relativePath);

// env
const paths = {
  entry: resolvePath('src/index.jsx'),
  output: resolvePath('build'),
  htmlTemplate: resolvePath('public/template.html'),
  public: '/',
  contentBase: resolve('public'),
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
        exclude: /node_modules/,
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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'resolve-url-loader',
          'sass-loader?sourceMap',
          'postcss-loader'],
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
    new HotModuleReplacementPlugin(),
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
    }),
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      template: paths.htmlTemplate,
    }),
  ],

  devtool: 'eval-source-map',

  devServer: {
    hot: true,
    inline: true,
    port: 7700,
    historyApiFallback: true,
    contentBase: paths.contentBase,
  },

  stats: {
    colors: true,
    reasons: true,
  },

  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};
