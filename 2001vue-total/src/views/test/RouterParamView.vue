<template>
  <div>
    {{ title }}
    <hr />
    <input type="text" v-model="info" placeholder="路由传参" />
    <input type="text" v-model="queryString" placeholder="get请求传参" />
    <input type="text" v-model="hash" placeholder="hash传参" />
    <button @click="toInfoView">确定</button>
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'TestRouterView',
  data() {
    return {
      title: '路由参数',
      info: '',
      queryString: '',
      hash: '',
    }
  },
  methods: {
    toInfoView() {
      // /test/routerInfo/:info
      app.$router.push({
        // 路由参数拼接成完整的path信息
        path: '/test/routerInfo/' + app.info,
        query: {
          info: app.queryString,
        },
        hash: app.hash,
      })
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
