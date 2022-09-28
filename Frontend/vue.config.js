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
    ]
  }, 
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    }
  }
}