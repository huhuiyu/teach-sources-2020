<template>
  <div>
    <div>{{ title }} {{ now | formatDate('yyyy年MM月dd日 hh:mm:ss') }}</div>
    <hr />
    {{ clist }}
    <hr />
    {{ cpage }}
    <!-- 3:使用组件 props就是组件的属性，@自定义事件就是组件this.$emit触发的-->
    <page-comp :page="cpage" @page-change="changeClassPage"></page-comp>
    <!-- <el-pagination @current-change="queryClass" @size-change="queryClass" :page-sizes="[5, 10, 20]" :current-page.sync="cpage.pageNumber" :page-size.sync="cpage.pageSize" :total="cpage.total" layout="prev,pager,next,total,sizes"></el-pagination> -->
    <hr />
    {{ slist }}
    <hr />
    {{ spage }}
    <page-comp :sizes="[2, 5, 10]" layout="prev,pager,next,total,sizes" :page="spage" @page-change="queryStudent"></page-comp>
  </div>
</template>

<script>
import tools from '@/js/tools'
// 1:导入组件
import PageComp from '@/components/PageComp.vue'
import logger from '@/js/logger'
let app
let timer
export default {
  // 2:添加组件应用小节
  components: { PageComp },
  name: 'PageView',
  data() {
    return {
      title: '分页插件演示',
      now: new Date(),
      clist: [],
      cpage: {
        pageSize: 5,
      },
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
    changeClassPage(info) {
      logger.debug('组件事件处理：', info)
      app.queryClass()
    },
    queryClass() {
      tools.ajax('/manage/class/queryAll', tools.concatJson(app.cpage), (data) => {
        app.clist = data.list
        app.cpage = data.page
      })
    },
  },
  created() {
    app = this
    this.$logger.debug(app.title, this.$md5('abc'))
    timer = setInterval(() => {
      app.now = new Date()
    }, 1000)
    app.queryClass()
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
