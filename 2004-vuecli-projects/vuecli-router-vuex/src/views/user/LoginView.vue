<template>
  <div class="main">
    <el-card>
      <div slot="header">{{ title }}</div>
      <div>
        <el-form :model="user" v-loading="loading">
          <el-form-item>
            <el-input v-model="user.username" placeholder="登录名">
              <i slot="prefix" class="el-input__icon iconfont">&#xe66b;</i>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-input type="password" show-password v-model="user.password" placeholder="密码">
              <i slot="prefix" class="el-input__icon iconfont">&#xe8b2;</i>
            </el-input>
          </el-form-item>

          <el-form-item class="tc">
            <el-button @click="login" type="primary">登录</el-button>
            <el-button @click="reset" type="danger">重填</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
import tools from '../../js/tools'
let app
export default {
  name: 'UserLoginView',
  data() {
    return {
      title: '用户登录',
      user: {
        username: '',
        password: '',
      },
      loading: false,
    }
  },
  methods: {
    login() {
      app.user.password = tools.md5(app.user.password)
      app.loading = true
      tools.ajax('/user/auth/login', app.user, (data) => {
        app.loading = false
        app.user.password = ''
        if (data.success) {
          app.$router.push('/user/main')
          return
        }
        // app.$alert(data.message, '黑暗骑士')
        app.$message({
          message: data.message,
          type: 'error',
        })
      })
    },
    reset() {
      app.user = {
        username: '',
        password: '',
      }
    },
  },
  created() {
    app = this
    console.log(app.title)
  },
}
</script>
<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
