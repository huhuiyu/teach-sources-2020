<template>
  <div>
    <!-- 已经登录的情况 -->
    <div v-if="isLogin">
      <el-button>{{ tbUser.nickname }}</el-button>
    </div>
    <!-- 需要登录的情况 -->
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
import tools from '@/js/tools'
let app
export default {
  name: 'UserInfoComp',
  data() {
    return {
      loginVisible: false,
      isLogin: false,
      tbUser: {},
      tbUserInfo: {},
      userOtherInfo: {},
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
      tools.ajax(
        '/user/auth/login',
        app.user,
        (data) => {
          if (data.success) {
            // 成功就获取用户信息
            app.getUserInfo()
          } else {
            app.isLogin = false
            app.$message(data.message)
          }
        },
        true
      )
    },
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
