module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'build.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules)/ }
    ]
  }
}
