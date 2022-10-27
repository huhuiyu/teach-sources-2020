<template>
  <div>
    {{ title }}
    <hr />
    <input type="text" v-model="info" placeholder="路由参数" />
    <input type="text" v-model="qs" placeholder="查询字符串" />
    <input type="text" v-model="hash" placeholder="hash" />
    <button @click="toInfo">提交</button>
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'RouterView',
  data() {
    return {
      title: '路由参数提交页面',
      info: '',
      qs: '',
      hash: '',
    }
  },
  methods: {
    toInfo() {
      // 路由配置： /test/router/:info
      this.$router.push({
        path: '/test/router/' + app.info,
        query: {
          info: app.qs,
          // query不可以二级json
          // page: { pageNumber: 1 },
          'page.pageNumber': 1,
        },
        hash: app.hash,
      })
    },
  },
  created() {
    app = this
    logger.debug(app.title)
  },
}
</script>
