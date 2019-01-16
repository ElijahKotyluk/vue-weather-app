// Import necessary modules for config.
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: [
    './src/javascript/index.js',
    './src/scss/index.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.scss|css$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
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
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      '@': path.resolve(__dirname, 'src'),
      styles: path.resolve(__dirname, 'src', 'styles')
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'index.bundle.css',
      allChunks: true
  }),
    new VueLoaderPlugin()
  ]
}
