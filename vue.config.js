const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'docs',
  publicPath: '/profile/',
  devServer: {
    open: true,
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('common', resolve('src/common'))

    config.module
      .rule('raw')
      .test(/\.(txt)$/)
      .use('raw')
      .loader('raw-loader')
  }
}
