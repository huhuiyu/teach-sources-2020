<template>
  <div>
    {{ title }}
    <br />
    路由参数：{{ info }}
    <br />
    查询字符串参数：{{ query }}
    <br />
    hash参数：{{ hash }}
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'TestRouterInfoView',
  data() {
    return {
      title: '路由参数显示',
      info: '',
      hash: '',
      query: {},
    }
  },
  created() {
    app = this
    logger.debug(app)
    // /test/routerInfo/:info
    // 路由参数
    app.info = this.$route.params.info
    // 查询字符串参数
    app.query = this.$route.query
    // hash参数
    app.hash = this.$route.hash
  },
}
</script>
