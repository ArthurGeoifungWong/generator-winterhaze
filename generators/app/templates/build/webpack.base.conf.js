'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  // mode: 'development',
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js',
    // app: './index.html'
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: {
    // extensions: ['.js', '.vue', '.json'],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'static': resolve('static'),
    }
  },

  module: {
    rules: [
      // {
      //   loader: 'style-loader!css-loader'
      // }
      {
        test: /\.(htm|html)$/,
        loader: 'raw-loader'
      }
    ]
  },
}
