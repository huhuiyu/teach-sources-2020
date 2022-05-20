<template>
  <div>
    <div class="main">
      <el-card>
        <div slot="header">{{ title }}</div>
        <div>
          <el-form :model="user" v-loading="loading">
            <el-form-item>
              <el-input v-model="user.username" placeholder="登录名称">
                <i slot="prefix" class="el-input__icon iconfont">&#xe7ab;</i>
                <i slot="suffix" class="el-input__icon iconfont">&#xe7ab;</i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="user.password" type="password" show-password placeholder="密码">
                <i slot="prefix" class="el-input__icon iconfont">&#xe65e;</i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="login" type="primary">
                <i class="iconfont">&#xe600;</i>
                登录
              </el-button>
              <el-button @click="reset" type="danger">
                <i class="iconfont">&#xe60a;</i>
                重置
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
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
  computed: {},
  methods: {
    login() {
      app.loading = true
      app.user.password = tools.md5(app.user.password)
      tools.ajax('/user/auth/login', app.user, (data) => {
        app.loading = false
        app.user.password = ''
        if (data.success) {
          app.$router.push('/user/main')
          return
        }
        app.$message({
          message: data.message,
          type: 'error',
        })
      })
    },
    reset() {
      this.user = {
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
