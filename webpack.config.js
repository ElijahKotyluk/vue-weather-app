// Import necessary modules for config.
const webpack = require('webpack')
const path = require('path')

module.exports {
  entry: {
    './src/javascript/index.js',
    './src/scss/index.scss'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'sass-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }
    ]
  }
}
