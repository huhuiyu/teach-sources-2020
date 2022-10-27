<template>
  <div>
    {{ title }}
    <hr />
    路由参数：{{ info }}
    <hr />
    查询字符串：{{ qs }}
    <hr />
    hash：{{ hash }}
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'TestView',
  data() {
    return {
      title: '路由参数显示页面',
      info: '',
      qs: {},
      hash: '',
    }
  },
  created() {
    app = this
    logger.debug(app.title)
    // 获取路由参数 /test/router/:info
    app.info = this.$route.params.info
    app.qs = this.$route.query
    app.hash = this.$route.hash
    // 没有vue也可以获取到信息
    logger.debug(location.href)
    logger.debug(location.pathname, location.protocol)
    logger.debug(location.search)
    // js的地址栏解码
    let info = '黑暗骑士 DarkKnight ?:'
    logger.debug(encodeURIComponent(info))
    logger.debug(decodeURIComponent(encodeURIComponent(info)))
  },
}
</script>
