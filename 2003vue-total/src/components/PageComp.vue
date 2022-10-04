<template>
  <div>
    <div> {{ page }} </div>
    <div>
      <el-pagination @current-change="changePageNumber" @size-change="changePageSize" :page-sizes="sizes" :layout="layout" :page-size="page.pageSize" :current-page="page.pageNumber" :total="page.total"></el-pagination>
    </div>
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  // 组件其实就类似于function封装
  // 只不过封装是视图，所有vue文件都是组件
  // 组件通过props（和data使用一样）来定义自定属性
  // 通过$emit('自定义事件名称',参数列表...)
  // 调用组件的一方通过:属性名称注入属性值
  // 通过@自定义事件名称="处理函数"来接收自定义事件
  name: 'PageCome',
  data() {
    return {}
  },
  // 组建的属性定义
  props: {
    page: {
      // 属性默认值
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
    // 分页大小变化
    changePageSize(ps) {
      this.pageInfo.pageSize = ps
      this.$emit('page-change', this.pageInfo)
    },
    // 页码变化处理
    changePageNumber(pn) {
      this.pageInfo.pageNumber = pn
      // 广播自定义事件
      this.$emit('page-change', this.pageInfo)
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
