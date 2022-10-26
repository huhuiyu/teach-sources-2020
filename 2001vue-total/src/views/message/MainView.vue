<template>
  <div>
    <div>
      <user-info-comp @login-change="loginChange"></user-info-comp>
    </div>
    <div> {{ title }} </div>
    <div>
      {{ loginUser }}
    </div>

    <h1>论坛信息列表</h1>

    <div v-for="d in list" :key="d.umid">
      <span @click="toDetail(d.umid)"> {{ d.title }} -- {{ d.user.nickname }} </span>
    </div>
  </div>
</template>

<script>
import logger from '@/js/logger'
import UserInfoComp from '@/components/UserInfoComp.vue'
import tools from '@/js/tools'
let app
export default {
  name: 'MainView',
  components: { UserInfoComp },
  data() {
    return {
      title: '论坛首页',
      list: [],
      page: {
        pageSize: 10,
      },
      queryInfo: {},
    }
  },
  methods: {
    toDetail(umid) {
      this.$router.push('/message/detail/' + umid)
    },
    query() {
      tools.ajax('/message/queryAll', tools.concatJson(app.queryInfo, app.page), (data) => {
        app.list = data.list
        app.page = data.page
      })
    },
    loginChange() {
      logger.debug('用户组件通知登录状态变化')
    },
  },
  computed: {
    // 用户信息统一来源于vuex
    loginUser() {
      return this.$store.state.loginUser
    },
  },
  created() {
    app = this
    logger.debug(app)
    app.query()
  },
}
</script>
