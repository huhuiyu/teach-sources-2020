<template>
  <div> {{ title }} </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'TestRouterInfoView',
  data() {
    return {
      title: '路由参数显示',
    }
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
