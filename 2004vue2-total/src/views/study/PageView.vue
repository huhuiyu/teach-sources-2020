<template>
  <div>
    <div>
      {{ title }}
      {{ now | formatDate('hh:mm:ss') }}
    </div>
  </div>
</template>

<script>
let timer
let app
export default {
  name: 'PageView',
  data() {
    return {
      title: '分页组件演示',
      now: new Date(),
    }
  },
  created() {
    app = this
    app.$logger.debug(this.title, this.$md5('abc'))
    timer = setInterval(() => {
      app.now = new Date()
    }, 1000)
  },
  destroyed() {
    if (timer) {
      clearInterval(timer)
    }
  },
}
</script>
