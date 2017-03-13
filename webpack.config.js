
const path = require('path');
const webpack = require('webpack');



module.exports = {
  entry: './client/index.js',

  output: {
    path: __dirname + "/client/dist",
    filename: 'bundle.js',
    publicPath: 'http://localhost:7700/dist',
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        options: {
          url: false
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
         presets: ['react', 'es2015', 'stage-0'],
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        options: {
          url: false
        }
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),
  ],

  devtool: 'source-map',
  devServer: {
    hot: true,
    inline: true,
    port: 7700,
    historyApiFallback: true,
    contentBase: '/'
  },

  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};
