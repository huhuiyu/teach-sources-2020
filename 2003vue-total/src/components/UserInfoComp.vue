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
let app
export default {
  name: 'UserInfoComp',
  data() {
    return {
      isLogin: false,
      tbUser: {},
      tbUserInfo: {},
      userOtherInfo: {},
      user: {
        username: '',
        password: '',
      },
      orgpwd: '',
      visible: false,
    }
  },
  methods: {
    login() {
      app.user.password = tools.md5(app.orgpwd)
      app.orgpwd = ''
      tools.ajax('/user/auth/login', app.user, () => {
        app.visible = false
        app.getUserInfo()
      })
    },

    logout() {
      tools.ajax('/user/auth/logout', {}, () => {})
      app.isLogin = false
      this.$emit('login', false)
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
          this.$emit('login', data.success)
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
