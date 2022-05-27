<template>
  <div>
    <div>{{ title }}</div>
    <div>
      {{ page }}
      <br />
      {{ list }}
    </div>
  </div>
</template>
<script>
// @表示从src目录开始计算
import tools from '@/js/tools'

let app
export default {
  name: 'UserNoteView',
  data() {
    return {
      title: '用户记事本',
      page: { pageSize: 5 },
      queryInfo: {
        info: '',
        title: '',
      },
      list: [],
    }
  },
  computed: {},
  methods: {
    query() {
      let q = tools.concatJson(app.queryInfo, app.page)
      console.log('合并后的请求参数', q)
      tools.ajax('/user/note/queryAll', q, (data) => {
        if (data.success) {
          app.list = data.list
          app.page = data.page
        } else {
          app.$alert(data.message, '错误')
        }
      })
    },
  },
  created() {
    app = this
    console.log(app.title)
    app.query()
  },
}
</script>
