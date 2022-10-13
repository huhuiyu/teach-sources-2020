<template>
  <div> {{ title }} === {{ compCount }} </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'VuexOneComp',
  data() {
    return {
      title: 'vuex的组件演示一',
    }
  },
  computed: {
    compCount() {
      return this.$store.state.count
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
