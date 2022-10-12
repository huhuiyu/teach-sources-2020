<template>
  <div> {{ title }} </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'MainView',
  data() {
    return {
      title: '论坛首页',
    }
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
