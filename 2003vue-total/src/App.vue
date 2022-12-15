<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import logger from './js/logger'
export default {
  // 项目启动时执行的就是
  created() {
    logger.debug('应用初始加载')
  },
  mounted() {
    logger.debug('页面初始加载')
  },
}
</script>
<style scoped>
/* 全局通用css导入 */
@import './css/common.css';
</style>
