<template>
  <div> {{ title }} </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'TestRouterView',
  data() {
    return {
      title: '路由参数',
    }
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
