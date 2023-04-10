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
  }
})
