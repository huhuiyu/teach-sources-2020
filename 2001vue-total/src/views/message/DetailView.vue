<template>
  <div>
    {{ title }}
    <br />
    {{ detail.title }}
    <br />
    <div v-html="detail.info"></div>
    <br />
    <div>{{ detail.info }}</div>
    <!-- WangEditor -->
    <hr />
    评论列表：
    <div v-for="d in list" :key="d.umrid">
      <span>{{ d.info }}-{{ d.user.nickname }}</span>
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
      title: '帖子详情页',
      detail: {},
      list: [],
      page: {
        pageSize: 5,
      },
      queryInfo: {
        orderBy: 1,
        umid: -1,
      },
    }
  },
  methods: {
    query() {
      tools.ajax('/message/queryDetail', tools.concatJson(app.queryInfo, app.page), (data) => {
        app.detail = data.info
        app.page = data.page
        app.list = data.list
      })
    },
  },
  created() {
    app = this
    logger.debug(app)
    // 获取umid
    app.queryInfo.umid = app.$route.params.umid
    app.query()
  },
}
</script>
