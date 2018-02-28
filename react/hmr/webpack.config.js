const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/client/index.js',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000',
  ],
  output: {
    filename: '[name].bundle.js',
    path: __dirname,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
