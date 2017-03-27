const webpack = require("webpack");

module.exports = {
  entry: './index.js',
  output: {
      path: __dirname,
      filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
}
