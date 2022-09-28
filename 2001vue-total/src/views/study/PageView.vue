<template>
  <div>
    <div>{{ title }} {{ now | formatDate('yyyy年MM月dd日 hh:mm:ss') }}</div>
  </div>
</template>

<script>
let app
let timer
export default {
  name: 'PageView',
  data() {
    return {
      title: '分页插件演示',
      now: new Date(),
    }
  },
  methods: {},
  created() {
    app = this
    this.$logger.debug(app.title, this.$md5('abc'))
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
