module.exports = {
  entry: './src/app.js',
  //entry: './src/default_file',
  output: {
    path: './dist',
    filename: 'build.js'
  },
  //devtool: 'source-map',
  module: {
    loaders: [
      //{ test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules)/ },
      //{ test: /\.css$/, loaders: ['style', 'css'], exclude: /(node_modules)/ }
    ]
  }
}
