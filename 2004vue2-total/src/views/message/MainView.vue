<template>
  <div>
    <div>
      <user-info-comp></user-info-comp>
    </div>
    <div>{{ title }} </div>
    <div>
      <user-info-vuex-comp @status-change="loginChange"></user-info-vuex-comp>
    </div>
    <hr />
    <div>
      {{ userinfo }}
      <el-button @click="toUserInfo">我的信息</el-button>
    </div>
    <h1>留言板信息部分</h1>
    {{ page }}
    <hr />
    <div v-for="d in list" :key="d.umid">
      <span @click="toDetail(d.umid)">{{ d.title }} - {{ d.user.nickname }} </span>
    </div>
  </div>
</template>

<script>
import UserInfoComp from '@/components/UserInfoComp.vue'
import logger from '@/js/logger'
import UserInfoVuexComp from '@/components/UserInfoVuexComp.vue'
import tools from '@/js/tools'
let app
export default {
  components: { UserInfoComp, UserInfoVuexComp },
  name: 'MainView',
  data() {
    return {
      title: '留言板首页',
      list: [],
      page: { pageSize: 10 },
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
      logger.debug('收到登录状态改变的事件')
    },
    toUserInfo() {
      this.$router.push('/message/user')
    },
  },
  computed: {
    // 使用vuex中的用户信息
    userinfo() {
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
