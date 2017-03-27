const webpack = require("webpack");

module.exports = {
  entry: './main.js',
  output: {
      path: __dirname,
      filename: './static/bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.jsx$/,
      exclude: /node_modules/
    }]
  }
  // ,
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false,
  //     },
  //     output: {
  //       comments: false,
  //     },
  //   }),
  // ],
}
