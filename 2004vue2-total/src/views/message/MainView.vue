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
  </div>
</template>

<script>
import UserInfoComp from '@/components/UserInfoComp.vue'
import logger from '@/js/logger'
import UserInfoVuexComp from '@/components/UserInfoVuexComp.vue'
let app
export default {
  components: { UserInfoComp, UserInfoVuexComp },
  name: 'MainView',
  data() {
    return {
      title: '留言板首页',
    }
  },
  methods: {
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
  },
}
</script>
