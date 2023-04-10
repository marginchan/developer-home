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
      .test(/\.(png|jpe?g|gif|svg|ico)$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 1024,
        fallback: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'img/'
          }
        }
      })
      .end()
  },
})
