var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './preMain.js',
  output: { path: __dirname, filename: 'main.js'},

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
