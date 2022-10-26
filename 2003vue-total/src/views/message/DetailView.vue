<template>
  <div>
    {{ title }} - {{ queryInfo }}
    <hr />
    <div v-html="info.info"></div>
    {{ info.info }}
    <!-- WangEditor -->
    <hr />
    <div v-for="d in list" :key="d.umrid">
      {{ d }}
    </div>
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
        orderBy: '1',
        umid: -1,
      },
      page: { pageSize: 10 },
      info: {},
      list: [],
    }
  },
  methods: {
    query() {
      tools.ajax('/message/queryDetail', tools.concatJson(app.queryInfo, app.page), (data) => {
        app.list = data.list
        app.info = data.info
        app.page = data.page
      })
    },
  },
  created() {
    app = this
    logger.debug(app.title)
    // 通过路由获取到帖子的主键信息
    app.queryInfo.umid = app.$route.params.umid

    app.query()
  },
}
</script>
