<template>
  <div>
    <div> {{ title }} - {{ isLogin }} </div>
    <div>
      <user-info-comp @login="loginChange"></user-info-comp>
    </div>
    <hr />
    <div>
      <vuex-user-info-comp></vuex-user-info-comp>
    </div>
    <hr />
    <div>
      vuex中的登录用户
      {{ loginUser }}
      <el-button v-if="loginUser.isLogin" @click="toUserInfo">用户信息</el-button>
    </div>
    <h1>留言板首页信息</h1>
    {{ page }}
    <hr />
    <div v-for="d in list" :key="d.umid">
      <span @click="toDetail(d.umid)">{{ d.title }}-{{ d.user.nickname }}</span>
    </div>
  </div>
</template>

<script>
import UserInfoComp from '@/components/UserInfoComp.vue'
import logger from '@/js/logger'
import VuexUserInfoComp from '@/components/VuexUserInfoComp.vue'
import tools from '@/js/tools'
let app
export default {
  components: { UserInfoComp, VuexUserInfoComp },
  name: 'MainView',
  data() {
    return {
      title: '简易留言板首页',
      isLogin: false,
      list: [],
      page: { pageSize: 10 },
      queryInfo: {},
    }
  },
  computed: {
    loginUser() {
      return this.$store.state.loginUser
    },
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
    toUserInfo() {
      this.$router.push('/message/userinfo')
    },
    loginChange(info) {
      app.isLogin = info
    },
  },
  created() {
    app = this
    logger.debug(app.title)
    app.query()
  },
}
</script>
