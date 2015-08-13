module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'build.js',
    publicPath: 'http://localhost:5000/assets/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules)/ },
      { test: /\.css$/, loaders: ['style', 'css'], exclude: /(node_modules)/ }
    ]
  },
  devServer: {
    contentBase: 'http://localhost:5001'
  }
};
