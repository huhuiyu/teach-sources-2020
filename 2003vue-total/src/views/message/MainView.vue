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
  </div>
</template>

<script>
import UserInfoComp from '@/components/UserInfoComp.vue'
import logger from '@/js/logger'
import VuexUserInfoComp from '@/components/VuexUserInfoComp.vue'
let app
export default {
  components: { UserInfoComp, VuexUserInfoComp },
  name: 'MainView',
  data() {
    return {
      title: '简易留言板首页',
      isLogin: false,
    }
  },
  computed: {
    loginUser() {
      return this.$store.state.loginUser
    },
  },
  methods: {
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
  },
}
</script>
