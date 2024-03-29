const webpack = require('webpack')

module.exports = {
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
    ],
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  }
}