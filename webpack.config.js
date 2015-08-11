module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'build.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /(node_modules)/},
      {test: /\.css$/, loaders: ['style', 'css'], exclude: /(node_modules)/}
    ]
  }
};