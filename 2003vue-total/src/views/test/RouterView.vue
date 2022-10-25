<template>
  <div>
    {{ title }}
    <hr />
    <input type="text" v-model="query" placeholder="query" />
    <input type="text" v-model="hash" placeholder="hash" />
    <input type="text" v-model="info" placeholder="info" />
    <button @click="commit">提交</button>
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'TestRouterView',
  data() {
    return {
      title: '路由参数测试',
      query: '',
      hash: '',
      info: '',
    }
  },
  methods: {
    commit() {
      // 路由参数传递
      let path = '/test/routerinfo/' + this.info
      this.$router.push({
        path: path,
        // 通过查询字符串递交信息
        // 查询字符串json对象不可以有二级
        query: {
          info: app.query,
          'user.name': '测试',
          // user: {
          //   name: '测试',
          // },
        },
        // 递交锚点信息
        hash: app.hash,
      })
      // 自己测试路由参数多个的情况
      // 完善404页面
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
