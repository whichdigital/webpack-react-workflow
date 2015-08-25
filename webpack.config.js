const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AutoPrefixer = require('autoprefixer');

const config = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'build.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
        exclude: /(node_modules)/
      }
    ]
  },
  postcss: [AutoPrefixer],
  plugins: [
    new ExtractTextPlugin('build.css')
  ]
}

module.exports = config
