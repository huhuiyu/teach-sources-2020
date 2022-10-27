<template>
  <div>
    {{ title }}
    <hr />
    {{ info.title }}
    <hr />
    <div v-html="info.info"></div>
    {{ info.info }}
    <hr />
    {{ list }}
  </div>
</template>

<script>
import logger from '@/js/logger'
import tools from '@/js/tools'
let app
export default {
  name: 'DetailView',
  data() {
    return {
      title: '帖子详情',
      queryInfo: {
        orderBy: 1,
        umid: -1,
      },
      page: {
        pageSize: 5,
      },
      list: [],
      info: {},
    }
  },
  methods: {
    query() {
      tools.ajax('/message/queryDetail', tools.concatJson(app.queryInfo, app.page), (data) => {
        app.info = data.info
        app.page = data.page
        app.list = data.list
      })
    },
  },
  created() {
    app = this
    logger.debug(app.title)
    // 获取路由参数中umid
    app.queryInfo.umid = this.$route.params.umid

    app.query()
  },
}
</script>
