<template>
  <div>
    <div v-if="isLogin">
      {{ tbUser }}
      <hr />
      {{ tbUserInfo }}
      <hr />
      {{ userOtherInfo }}
      <hr />
      <el-button @click="logout">安全退出</el-button>
    </div>
    <div v-else>需要登陆</div>
  </div>
</template>

<script>
import tools from '@/js/tools'
let app
export default {
  name: 'UserInfoComp',
  data() {
    return {
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
          app.isLogin = data.success
          if (data.success) {
            app.tbUser = data.tbUser
            app.tbUserInfo = data.tbUserInfo
            app.userOtherInfo = data.userOtherInfo
          }
        },
        true
      )
    },
  },
  created() {
    app = this
    app.getUserInfo()
  },
}
</script>
