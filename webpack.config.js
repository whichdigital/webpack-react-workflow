module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'build.js'
  },
  devtool: 'source-map',
  module: {
    preloaders: [
      { test: /\.js$/, loader: 'jscs-loader', exclude: /\/(spec|node_modules)/ }
    ],
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules)/ },
      { test: /\.css$/, loaders: ['style', 'css'], exclude: /(node_modules)/ }
    ]
  }
};
