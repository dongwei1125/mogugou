const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  devServer: {
    port: 8000,
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://127.0.0.1:3000/',
        ws: false,
        changeOrigin: true,
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('store', resolve('src/store'))
      .set('styles', resolve('src/styles'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
  },
}
