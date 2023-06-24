const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
const CracoLessPlugin = require('craco-less')

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin
      // options: {
      //   cssLoaderOptions: {
      //     modules: { localIdentName: "[local]_[hash:base64:5]" },
      //   }
      // }
    }
  ],
  // plugins: [{
  //   plugin: CracoLessPlugin,
  //   // 适配css Modules
  //   options: {
  //     cssLoaderOptions: {
  //       module: {
  //         localIdentName: "[local]_[hash:base64:5]"
  //       }
  //     }
  //   }
  // }],
  // webpack
  webpack: {
    alias: {
      // 配置路径别名
      '@': resolve('src'),
      components: resolve('src/components'),
      assets: resolve('src/assets')
    }
  }
}
