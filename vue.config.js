const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  lintOnSave: false,
  productionSourceMap: isProd,

  chainWebpack: (config) => {
    config.module.rule('images').set('type', 'asset/inline')
    config.module.rule('images').set('generator', {
      dataUrl: (content) => {
        return 'data:image/png;base64,' + content.toString('base64')
      }
    })
    config.module.rule('svg').set('type', 'asset/inline')
    config.module.rule('svg').set('generator', {
      dataUrl: (content) => {
        return 'data:image/svg+xml;base64,' + content.toString('base64')
      }
    })
    return config
  },

  css: {
    extract: false
  }
}
