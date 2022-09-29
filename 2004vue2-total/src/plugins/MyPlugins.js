import logger from '@/js/logger'
import tools from '@/js/tools'

// 插件里面导入过滤器
import '@/filters/MyFilters'

let MyPlugins = {}

// install方法是规范约定
MyPlugins.install = (Vue) => {
  // 插件核心功能还是对vue对象进行扩展
  Vue.prototype.$logger = logger

  Vue.prototype.$md5 = tools.md5
}

export default MyPlugins
