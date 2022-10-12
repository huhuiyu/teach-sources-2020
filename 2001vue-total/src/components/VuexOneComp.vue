<template>
  <div> {{ title }} ===> {{ countone }} </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'VuexOneComp',
  data() {
    return {
      title: 'vuex演示组件一',
    }
  },
  computed: {
    countone() {
      return this.$store.state.count
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
