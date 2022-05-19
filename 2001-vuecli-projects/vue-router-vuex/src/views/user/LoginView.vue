<template>
  <div class="main">
    <div>
      <el-card>
        <div slot="header">
          <i class="iconfont">&#xe64a;</i>
          {{ title }}
        </div>

        <div>
          <el-form :model="user" v-loading="loading">
            <el-form-item>
              <el-input v-model="user.username" placeholder="登录名">
                <i slot="prefix" class="el-input__icon iconfont">&#xe64a;</i>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-input type="password" show-password v-model="user.password" placeholder="密码">
                <i slot="prefix" class="el-input__icon iconfont">&#xe620;</i>
              </el-input>
            </el-form-item>

            <el-form-item class="tc">
              <el-button @click="login" type="primary"><i class="iconfont">&#xe600;</i> 登录 </el-button>
              <el-button @click="reset" type="danger"><i class="iconfont">&#xe648;</i> 重填</el-button>
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
  methods: {
    login() {
      app.loading = true
      app.user.password = tools.md5(app.user.password)
      tools.ajax('/user/auth/login', app.user, (data) => {
        app.loading = false
        app.user.password = ''
        if (data.success) {
          // 成功就跳转到用户首页
          app.$router.push('/user/main')
          return
        }
        // 弹出错误提示
        app.$message({
          message: data.message,
          type: 'error',
        })
        // app.$alert(data.message, '错误')
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
