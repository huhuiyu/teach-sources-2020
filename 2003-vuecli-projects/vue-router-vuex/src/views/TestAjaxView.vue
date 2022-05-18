<template>
  <div>
    <div class="tc pd10 fs15">{{ title }}</div>
    <div class="tc" v-loading="loading">
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="echo" placeholder="echo信息"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="sendEcho" type="primary">发送</el-button>
        </el-form-item>
      </el-form>
      {{ result }}
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
      title: 'ajax测试页',
      echo: '',
      result: {},
      loading: false,
    }
  },
  computed: {},
  methods: {
    sendEcho() {
      app.loading = true
      tools.ajax(
        '/',
        { echo: app.echo },
        (data) => {
          app.loading = false
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
