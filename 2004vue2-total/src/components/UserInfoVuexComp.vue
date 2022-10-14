<template>
  <div>
    <div v-if="userinfo.isLogin">
      <!-- {{ userinfo.tbUser }}
      <hr />
      {{ userinfo.tbUserInfo }}
      <hr />
      {{ userinfo.userOtherInfo }} -->
      {{ userinfo.tbUser.nickname }}
      <el-button @click="logout">安全退出</el-button>
    </div>
    <div v-else>
      <el-button @click="loginVisible = true">登录</el-button>
    </div>

    <!-- 登录表单 -->
    <el-dialog :visible="loginVisible" title="登录">
      <div>
        <el-form>
          <el-form-item>
            <el-input v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="orgpwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="login">登录</el-button>
            <el-button @click="loginVisible = false">关闭</el-button>
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
  name: 'UserInfoVuexComp',
  data() {
    return {
      loginVisible: false,
      user: {
        username: '',
        password: '',
      },
      orgpwd: '',
    }
  },
  methods: {
    login() {
      app.user.password = tools.md5(app.orgpwd)
      tools.ajax('/user/auth/login', app.user, () => {
        app.$store
          .dispatch('updateUserInfo')
          .then(() => {
            app.$emit('status-change')
          })
          .catch(app.changeInfo)
      })
    },
    logout() {
      tools.ajax('/user/auth/logout', {}, () => {
        app.$store.dispatch('updateUserInfo').then(app.changeInfo).catch(app.changeInfo)
      })
    },
    changeInfo() {
      app.$emit('status-change')
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
