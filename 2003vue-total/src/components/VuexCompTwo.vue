<template>
  <div> {{ title }} - {{ vcount }} </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'VuexCompTwo',
  data() {
    return {
      title: 'vuex演示组件二',
    }
  },
  computed: {
    vcount() {
      return this.$store.state.count
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
