<template>
  <div>
    <div>{{ title }} {{ now | formatDate('yyyy年MM月dd日 hh:mm:ss') }} </div>
  </div>
</template>

<script>
import tools from '@/js/tools'
let timer
let app
export default {
  name: 'PageView',
  data() {
    return {
      title: '分页组件',
      now: new Date(),
      // 员工信息
      elist: [],
      epage: {
        pageSize: 5,
      },
    }
  },
  methods: {
    queryEmp() {
      tools.ajax('/manage/employee/queryAll', tools.concatJson(app.epage), (data) => {
        app.elist = data.list
        app.epage = data.page
      })
    },
  },
  created() {
    app = this
    // 插件的原型扩展可以通过vue实例直接调用
    // 好处就是不用导入js，坏处就是没有提示
    this.$logger.debug(this.$md5('abc'), app.title)
    timer = setInterval(() => {
      app.now = new Date()
    }, 1000)
  },
  destroyed() {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  },
}
</script>
