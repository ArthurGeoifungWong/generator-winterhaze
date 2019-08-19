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

  devServer: {
    // clientLogLevel: 'warning',
    historyApiFallback: true,
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /.*/, to: path.posix.join('/', 'index.html') },
    //   ],
    // },
    // inline: true,
    hot: true,
    // contentBase: false,
    contentBase: path.resolve(__dirname, './'),
    compress: true,
    host: 'localhost',
    port: 9000,
    quiet: true, // necessary for FriendlyErrorsPlugin
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    publicPath: '/',
    // open: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      favicon: 'static/whlogo.ico',
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://localhost:9000\n`],
      },
      // onErrors: config.dev.notifyOnErrors
      // ? utils.createNotifierCallback()
      // : undefined
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ]),
  ]
}
