// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  devServer: {
    port: 8090,
    historyApiFallback: true,
    allowedHosts: "all",
    proxy: {
      '/api': {
        target: 'https://your-api.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}