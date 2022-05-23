<template>
  <div>
    <div>{{ title }}</div>
    <div style="display: flex">
      <el-form :model="user" :rules="rules" ref="myform">
        <el-form-item prop="username">
          <el-input v-model="user.username" placeholder="登录名"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="user.password" placeholder="密码"></el-input>
        </el-form-item>

        <el-form-item prop="password2">
          <el-input v-model="user.password2" placeholder="确认密码"></el-input>
        </el-form-item>

        <el-form-item prop="nickname">
          <el-input v-model="user.nickname" placeholder="姓名"></el-input>
        </el-form-item>

        <el-form-item>
          <!-- 作业1,登录加上表单验证 -->
          <el-button @click="reg" type="primary">注册</el-button>
          <el-button @click="reset" type="danger">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
let app
export default {
  name: 'UserRegView',
  data() {
    // 自定义校验方法
    function checkPwd2(rule, value, callback) {
      console.log(rule, value, callback)
      if (value != app.user.password) {
        callback(new Error('密码不一致'))
      } else {
        callback()
      }
    }
    return {
      title: '用户注册',
      user: {
        username: '',
        password: '',
        nickname: '',
        // 用于二次确认密码
        password2: '',
      },
      // 表单校验规则
      rules: {
        username: [
          { required: true, message: '登录名必须填写' },
          { min: 4, max: 16, message: '登录名长度为4-16' },
        ],
        password: [
          { required: true, message: '登录名必须填写' },
          { min: 6, max: 16, message: '密码长度为6-16' },
        ],
        nickname: [{ required: true, message: '姓名必须填写' }],
        password2: [
          {
            // 启用自定义校验
            validator: checkPwd2,
          },
        ],
      },
    }
  },
  methods: {
    reg() {
      app.$refs.myform.validate((valid) => {
        if (valid) {
          console.log('校验通过')
          // 作业2:完成注册功能
        }
      })
    },
    reset() {
      app.$refs.myform.resetFields()
    },
  },
  created() {
    app = this
    console.log(app.title)
  },
}
</script>
