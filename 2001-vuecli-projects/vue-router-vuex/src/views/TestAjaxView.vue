<template>
  <div>
    <div>{{ title }}</div>
    <div>
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="echo" placeholder="echo"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="sendEcho" type="primary">发送</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div> 请求结果：{{ result }} </div>
  </div>
</template>
<script>
import tools from '../js/tools'
let app
export default {
  name: 'TestAjaxView',
  data() {
    return {
      title: 'ajax请求测试页面',
      echo: '',
      result: {},
    }
  },
  methods: {
    sendEcho() {
      tools.ajax(
        '/',
        { echo: app.echo },
        (data) => {
          app.result = data
        },
        'get'
      )
    },
  },
  created() {
    app = this
    console.log(app.title)
  },
}
</script>
