// Import necessary modules for config.
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/javascript/index.js',
    './src/scss/index.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  node: {
   fs: "empty"
  },
  devServer: {
    port: 8080,
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      '@': path.resolve(__dirname, 'src'),
      styles: path.resolve(__dirname, 'src', 'styles'),
      public: path.resolve(__dirname, 'public')
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'index.bundle.css',
      allChunks: true
  }),
    new VueLoaderPlugin(),
    new Dotenv()
  ]
}
