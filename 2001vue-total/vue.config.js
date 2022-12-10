const { defineConfig } = require('@vue/cli-service')
const version = 'vue' //new Date().getTime()
module.exports = defineConfig({
  transpileDependencies: true,
  // webpack配置
  // chainWebpack: (config) => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 给js和css配置版本号
  //     config.output.filename(`js/[name]${version}.js`).end()
  //     config.output.chunkFilename(`js/[name]${version}.js`).end()
  //     config.plugin('extract-css').tap((args) => [
  //       {
  //         filename: `css/[name]${version}.css`,
  //         chunkFilename: `css/[name]${version}.css`,
  //       },
  //     ])
  //   }
  // },
})
