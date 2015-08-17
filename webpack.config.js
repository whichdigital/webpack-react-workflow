const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const sassLoaders = [
  'css-loader',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './src'),
];

const config = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'build.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules)/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')), exclude: /(node_modules)/ }
    ]
  },
  plugins: [
    new ExtractTextPlugin('build.css')
  ]
}

module.exports = config