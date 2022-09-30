<template>
  <div>
    <div>
      {{ title }}
      {{ now | formatDate('hh:mm:ss') }}
    </div>
    <hr />
    {{ clist }}
    <br />
    <!-- 
      调用组件 props定义属性会出现在组件中 
      @自定义事件名称="处理函数"
      可以接收组件.$emit(自定义事件名称,参数列表)
      参数列表就是传递给处理函数的信息值
    -->
    <page-comp :page="cpage" @page-change="pageCompMethod"></page-comp>

    <hr />
    {{ slist }}
    <page-comp :sizes="[2, 5, 10]" :layout="'prev,sizes,next,total'" :page="spage" @page-change="queryStudent"></page-comp>
  </div>
</template>

<script>
import tools from '@/js/tools'
// 导入组件
import PageComp from '@/components/PageComp.vue'
import logger from '@/js/logger'
let timer
let app
export default {
  // 引用组件
  components: { PageComp },
  name: 'PageView',
  data() {
    return {
      title: '分页组件演示',
      now: new Date(),
      cpage: { pageSize: 5 },
      clist: [],
      spage: { pageSize: 5 },
      slist: [],
    }
  },
  methods: {
    queryStudent() {
      tools.ajax('/manage/student/queryAll', tools.concatJson(app.spage), (data) => {
        app.spage = data.page
        app.slist = data.list
      })
    },
    // 处理分页组件的事件
    pageCompMethod(info) {
      logger.debug('分页组件自定义事件处理', info)
      this.queryClass()
    },
    queryClass() {
      tools.ajax('/manage/class/queryAll', tools.concatJson(app.cpage), (data) => {
        app.cpage = data.page
        app.clist = data.list
      })
    },
  },
  created() {
    //#region 折叠代码功能
    app = this
    app.$logger.debug(this.title, this.$md5('abc'))
    timer = setInterval(() => {
      app.now = new Date()
    }, 1000)
    app.queryClass()
    app.queryStudent()
    //#endregion
  },
  destroyed() {
    if (timer) {
      clearInterval(timer)
    }
  },
}
</script>
