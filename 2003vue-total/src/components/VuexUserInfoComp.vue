<template>
  <div>
    <div v-if="loginUser.isLogin">
      {{ loginUser.tbUser }}
      <hr />
      {{ loginUser.tbUserInfo }}
      <hr />
      {{ loginUser.userOtherInfo }}
      <hr />
      <el-button @click="logout">安全退出</el-button>
    </div>
    <div v-else>
      <el-button @click="visible = true">登录</el-button>
    </div>

    <!-- 登录对话框 -->
    <el-dialog title="用户登录" :visible.sync="visible">
      <div>
        <el-form>
          <el-form-item>
            <el-input v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="orgpwd" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="login" type="primary">登录</el-button>
            <el-button @click="visible = false">关闭</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import tools from '@/js/tools'
import logger from '@/js/logger'
let app
export default {
  name: 'VuexUserInfoComp',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      orgpwd: '',
      visible: false,
    }
  },
  computed: {
    loginUser() {
      return this.$store.state.loginUser
    },
  },
  methods: {
    login() {
      app.user.password = tools.md5(app.orgpwd)
      app.orgpwd = ''
      tools.ajax('/user/auth/login', app.user, () => {
        app.visible = false
        app.$store.dispatch('updateUser')
      })
    },
    logout() {
      tools.ajax('/user/auth/logout', {}, () => {
        app.$store
          .dispatch('updateUser')
          .then(() => {
            app.$emit('login', false)
          })
          .catch(() => {
            app.$emit('login', false)
          })
      })
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
