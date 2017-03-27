module.exports = {
    entry: './index.jsx',
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
  }
}
