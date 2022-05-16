<template>
  <div>
    <div>{{ title }}</div>
    <div class="pd10">
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="echo" placeholder="echo"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sendEcho">发送</el-button>
        </el-form-item>
      </el-form>
      <hr />
      <div>{{ result }}</div>
    </div>
  </div>
</template>
<script>
import tools from '../js/tools'
let app
export default {
  name: 'TestAjaxView',
  data() {
    return {
      title: 'ajax测试页面',
      echo: '',
      result: {},
    }
  },
  methods: {
    sendEcho() {
      // ajax的echo测试
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
