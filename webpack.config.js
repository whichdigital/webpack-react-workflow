module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'build.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules)/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'], exclude: /(node_modules)/ }
    ]
  }
}
