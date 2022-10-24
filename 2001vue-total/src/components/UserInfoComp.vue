<template>
  <div>
    <div v-if="loginUser.isLogin">
      {{ loginUser.tbUser.nickname }}
      <el-button @click="logout">安全退出</el-button>
    </div>
    <div v-else>
      <el-button @click="visible = true">登录</el-button>
    </div>
    <el-dialog title="用户登录" :visible.sync="visible">
      <div>
        <el-form>
          <el-form-item>
            <el-input v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import logger from '@/js/logger'
import tools from '@/js/tools'
let app
export default {
  name: 'UserInfoComp',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      pwd: '',
      visible: false,
    }
  },
  methods: {
    logout() {
      tools.ajax('/user/auth/logout', {}, () => {
        // 退出成功需要更新vuex中的用户信息
        app.$store.dispatch('updateUserInfo').then(app.loginChange).catch(app.loginChange)
      })
    },
    login() {
      app.user.password = tools.md5(app.pwd)
      tools.ajax('/user/auth/login', app.user, () => {
        // 登录成功需要更新vuex中的用户信息
        app.$store.dispatch('updateUserInfo').then(app.loginChange).catch(app.loginChange)
      })
    },
    loginChange() {
      this.$emit('login-change')
      app.visible = false
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
  },
}
</script>
