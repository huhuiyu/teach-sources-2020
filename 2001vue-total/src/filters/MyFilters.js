import logger from '@/js/logger'
import tools from '@/js/tools'
import Vue from 'vue'

let MyFilters = {}

Vue.filter('formatDate', (value, format) => {
  logger.debug('filter formatDate:', value, format)
  return tools.formatDate(value, format)
})

export default MyFilters
