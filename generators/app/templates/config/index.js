'use strict'

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',
  },
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
  }
}
