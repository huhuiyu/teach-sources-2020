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
          <el-input v-model="user.nickname" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="reg" type="primary">注册</el-button>
          <el-button @click="reset" type="danger">重置</el-button>
        </el-form-item>
      </el-form>

      {{ user }}
    </div>
  </div>
</template>
<script>
let app
export default {
  name: 'UserRegView',
  data() {
    // 自定义校验方法
    function checkPwd(rule, value, callback) {
      console.log(rule, value, callback)
      if (app.user.password == app.user.password2) {
        // 校验成功就直接无参调用回调函数
        callback()
      } else {
        // 校验失败参入失败原因的Error对象
        callback(new Error('密码必须一致'))
      }
    }
    return {
      title: '用户注册',
      user: {
        username: '',
        password: '',
        nickname: '',
        // 校验用字段
        password2: '',
      },
      // 校验规则
      rules: {
        // 字段名称对应校验规则
        username: [
          { required: true, message: '登录名称必须填写' },
          { min: 4, max: 16, message: '登录名称长度为4-16位' },
        ],
        password: [
          { required: true, message: '登录密码必须填写' },
          { min: 6, max: 18, message: '登录密码长度为6-18位' },
        ],
        nickname: [{ required: true, message: '用户名必须填写' }],
        password2: {
          validator: checkPwd,
        },
      },
    }
  },
  methods: {
    reset() {
      // 重置表单的方法 app.$refs.表单元素的ref值
      app.$refs.myform.resetFields()
    },
    reg() {
      // 如何知道表单校验是否通过
      app.$refs.myform.validate((valid) => {
        if (valid) {
          // 校验通过valid为真
          // 作业一，完成注册的功能
          // 作业二，给登录界面添加校验功能
          // 任何弹出信息都要使用饿了么ui的消息弹框
        }
      })
    },
  },
  created() {
    app = this
    console.log(app.title)
  },
}
</script>
