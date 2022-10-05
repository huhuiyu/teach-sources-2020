<template>
  <div>
    <div> {{ title }} </div>
    <div>
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="orgpwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary">登录</el-button>
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
      title: '用户登录',
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
      app.orgpwd = ''
      tools.ajax('/user/auth/login', app.user, (data) => {
        logger.debug(data)
        app.$router.push('/message/main')
      })
    },
  },
  created() {
    app = this
    logger.debug(app.title)
  },
}
</script>
