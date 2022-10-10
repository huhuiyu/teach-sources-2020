<template>
  <div>
    <div>
      {{ title }}
    </div>
    <div>
      <el-form :inline="true">
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
  </div>
</template>

<script>
import logger from '@/js/logger'
import tools from '@/js/tools'
let app
export default {
  name: 'LoginView',
  data() {
    return {
      title: '登录',
      user: {
        username: '',
        password: '',
      },
      pwd: '',
    }
  },
  methods: {
    login() {
      app.user.password = tools.md5(app.pwd)
      tools.ajax('/user/auth/login', app.user, (data) => {
        logger.debug(data)
        app.$router.push('/message')
      })
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
