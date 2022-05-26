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
import tools from '../../js/tools'
let app
export default {
  name: 'UserNoteView',
  data() {
    return {
      title: '用户记事本',
      list: [],
      page: { pageSize: 5 },
      queryInfo: {
        info: '',
        title: '',
      },
    }
  },
  methods: {
    query() {
      console.log(tools.concatJson(app.queryInfo, app.page))
      tools.ajax('/user/note/queryAll', tools.concatJson(app.queryInfo, app.page), (data) => {
        if (data.success) {
          app.list = data.list
          app.page = data.page
        } else {
          app.$alert(data.message)
        }
        // 作业，同步完成联系人功能
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
