<template>
  <div>
    <div class="main">
      <el-card>
        <div slot="header">{{ title }}</div>
        <div>
          <el-form :model="user">
            <el-form-item>
              <el-input v-model="user.username" placeholder="登录名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="user.password" type="password" show-password placeholder="密码"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
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
    }
  },
  computed: {},
  methods: {},
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
