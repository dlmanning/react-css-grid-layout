var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    bundle: [
      'webpack-hot-middleware/client',
      path.join(__dirname, 'test', 'test.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'test')
        ],
        loaders: ['babel-loader']
      }
    ]
  }
}
