import logger from '@/js/logger'
import tools from '@/js/tools'
import Vue from 'vue'

let MyFilters = {}

// 定义过滤器，第一个参数是名称，第二个处理函数
Vue.filter('formatDate', (value, format) => {
  logger.debug('filter formatDate:', value, format)
  return tools.formatDate(value, format)
})

export default MyFilters
