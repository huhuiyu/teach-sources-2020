import logger from '@/js/logger'
import tools from '@/js/tools'
// 可以用插件管理filter这类自定义api的导入
// 这样可以减少对main.js的修改
import '@/filters/MyFilters'

let MyPlugins = {}

// 插件必须的初始化方法
MyPlugins.install = (Vue) => {
  // 这里面可以对vue对象进行原型扩展
  // 一般都会一$开头，避免和实例对象的方法冲突
  Vue.prototype.$logger = logger

  Vue.prototype.$md5 = tools.md5
}

export default MyPlugins
