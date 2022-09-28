import logger from '@/js/logger'
import tools from '@/js/tools'
// 可以在插件里面导入过滤器和指令等资源
import '@/filters/MyFilters'

let MyPlugins = {}

// 插件对象必须通过install方法扩展Vue对象
MyPlugins.install = (Vue) => {
  // 通过原型扩展Vue实例的功能，为了区分vue实例自身数据
  // 一般将扩展的功能命名都是以$开头
  Vue.prototype.$logger = logger

  Vue.prototype.$md5 = tools.md5
}

export default MyPlugins
