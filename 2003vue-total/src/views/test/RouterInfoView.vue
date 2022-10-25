<template>
  <div>
    {{ title }}
    <br />
    路由参数：{{ info }}
    <br />
    查询字符串：{{ query }}
    <br />
    hash值：{{ hash }}
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'TestRouterInfoView',
  data() {
    return {
      title: '路由参数结果测试',
      query: {},
      hash: '',
      info: '',
    }
  },
  created() {
    // /test/routerinfo/456?info=123#top
    // 456就是路由里面配置的:info参数
    // ?info=123是query（查询字符串）值
    // #top是hash值（锚点）
    app = this
    logger.debug(app)
    // 获取路由参数
    logger.debug(this.$route.params)
    app.info = this.$route.params.info
    // 获取查询字符串信息
    app.query = this.$route.query
    // 获取hash值
    app.hash = this.$route.hash
    logger.debug(location.hash, location.search, location.href)
    logger.debug(encodeURIComponent('黑暗骑士'))
    logger.debug(decodeURIComponent(encodeURIComponent('黑暗骑士')))
  },
}
</script>
