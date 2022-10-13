<template>
  <div> {{ title }} === {{ compCount }} </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'VuexTwoComp',
  data() {
    return {
      title: '另一个vuex的组件',
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
