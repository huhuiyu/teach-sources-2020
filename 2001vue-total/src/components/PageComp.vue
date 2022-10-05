<template>
  <div>
    <el-pagination @current-change="changePageNumber" @size-change="changePageSize" :page-sizes="sizes" :current-page="page.pageNumber" :page-size="page.pageSize" :total="page.total" :layout="layout"></el-pagination>
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'PageComp',
  data() {
    return {}
  },
  // 定义组件的属性，在组件里面使用和data一样
  props: {
    page: {
      default() {
        return { pageSize: 5 }
      },
    },
    sizes: {
      default() {
        return [5, 10, 20]
      },
    },
    layout: {
      default() {
        return 'prev,pager,next,total'
      },
    },
  },
  computed: {
    pageInfo() {
      return this.page
    },
  },
  methods: {
    changePageNumber(pn) {
      logger.debug(pn)
      // 更新分页信息并广播自定义事件
      this.pageInfo.pageNumber = pn
      this.$emit('page-change', this.page)
    },
    changePageSize(ps) {
      logger.debug(ps)
      // 更新分页信息并广播自定义事件
      this.pageInfo.pageSize = ps
      this.$emit('page-change', this.page)
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
