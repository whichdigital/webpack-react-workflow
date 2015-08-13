var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js',
    publicPath: 'http://localhost:5000/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        exclude: /(node_modules)/
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'http://localhost:5001'
  }
};
