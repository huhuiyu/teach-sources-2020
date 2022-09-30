<template>
  <div>
    <span>属性信息：{{ page }}</span>
    <el-pagination @current-change="pageChange" @size-change="sizeChange" :current-page="page.pageNumber" :page-size="page.pageSize" :total="page.total" :page-sizes="sizes" :layout="layout"></el-pagination>
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
  // 监听page属性变化
  computed: {
    pageInfo() {
      return this.page
    },
  },
  // 定义组件的属性
  props: {
    page: {
      default() {
        return {}
      },
    },
    layout: {
      default() {
        return 'prev,pager,next,total,sizes'
      },
    },
    sizes: {
      default() {
        return [5, 10, 20]
      },
    },
  },
  methods: {
    pageChange(pn) {
      logger.debug('页码变化：', pn)
      this.pageInfo.pageNumber = pn
      // 组件自定义事件并触发
      this.$emit('page-change', this.pageInfo)
    },
    sizeChange(ps) {
      logger.debug('大小变化：', ps)
      this.pageInfo.pageSize = ps
      this.$emit('page-change', this.pageInfo)
    },
  },
  created() {
    app = this
    // 属性使用起来和data并没有区别
    logger.debug('page属性：', app)
  },
}
</script>
