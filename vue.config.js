const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: { 
      // 向 CSS 相关的 loader 传递选项 
      less: {
        lessOptions: {
          javascriptEnabled: true
        } 
      } 
    } 
  },
  chainWebpack: config => {
    config.module
      .rule('image')
      .test(/\.ico$/)
      .use('url-loader')
      .loader('url-loader')
  },
})
