<template>
  <div>
    <div>
      <div v-if="isLogin">
        {{ tbUser }}
        <br />
        {{ tbUserInfo }}
        <br />
        {{ userOtherInfo }}
        <br />
        <el-button @click="logout">安全退出</el-button>
      </div>
      <div v-else>请登录</div>
    </div>
    <div>{{ title }} </div>
  </div>
</template>

<script>
import logger from '@/js/logger'
import tools from '@/js/tools'
let app
export default {
  name: 'HomeView',
  data() {
    return {
      title: '留言板首页',
      isLogin: false,
      tbUser: {},
      tbUserInfo: {},
      userOtherInfo: {},
    }
  },
  methods: {
    logout() {
      tools.ajax('/user/auth/logout', {}, () => {})
      app.isLogin = false
    },
    getUserInfo() {
      tools.ajax(
        '/user/auth/getUserInfo',
        {},
        (data) => {
          if (data.success) {
            app.tbUser = data.tbUser
            app.tbUserInfo = data.tbUserInfo
            app.userOtherInfo = data.userOtherInfo
          }
          app.isLogin = data.success
        },
        true
      )
    },
  },
  created() {
    app = this
    logger.debug(app)
    app.getUserInfo()
  },
}
</script>
