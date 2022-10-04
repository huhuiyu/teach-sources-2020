<template>
  <div>
    <div>{{ title }} {{ now | formatDate('yyyy年MM月dd日 hh:mm:ss') }} </div>
    <hr />
    {{ elist }}
    <hr />
    <!-- {{ epage }} -->
    <!-- <el-pagination @current-change="queryEmp" @size-change="queryEmp" :page-sizes="[5, 10, 20]" :current-page.sync="epage.pageNumber" :page-size.sync="epage.pageSize" :total="epage.total" layout="prev,pager,next,total,sizes"></el-pagination> -->
    <!-- 3：使用组件 可以通过自定义属性传值-->
    <page-comp @page-change="changePage" :page.sync="epage"></page-comp>
    <hr />
    {{ slist }}
    <page-comp :sizes="[2, 5, 10]" :layout="'prev,pager,next,total,sizes'" @page-change="queryStudent" :page.sync="spage"></page-comp>
  </div>
</template>

<script>
import tools from '@/js/tools'
// 1：导入组件
import PageComp from '@/components/PageComp.vue'
import logger from '@/js/logger'
let timer
let app
export default {
  // 2：引用组件
  components: { PageComp },
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
      // 学生信息
      slist: [],
      spage: {
        pageSize: 5,
      },
    }
  },
  methods: {
    queryStudent() {
      tools.ajax('/manage/student/queryAll', tools.concatJson(app.spage), (data) => {
        app.slist = data.list
        app.spage = data.page
      })
    },
    changePage(pageInfo) {
      logger.debug(pageInfo, this.epage)
      app.queryEmp()
    },
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

    app.queryEmp()
    app.queryStudent()
  },
  destroyed() {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  },
}
</script>
