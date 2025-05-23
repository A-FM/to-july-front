const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port: 8000,
    proxy:{
      '/server':{
        target: 'http://localhost:8080/',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/server': ''
        }
      }
    }
  }
})
