const path = require('path');

module.exports = {
  entry: [
    './src/client/index.js',
  ],
  output: {
    path: path.join(__dirname, 'src/client'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
