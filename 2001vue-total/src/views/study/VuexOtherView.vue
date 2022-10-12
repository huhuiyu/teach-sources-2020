<template>
  <div>
    {{ title }} ===> {{ countOther }}
    <vuex-one-comp></vuex-one-comp>
  </div>
</template>

<script>
import logger from '@/js/logger'
import VuexOneComp from '@/components/VuexOneComp.vue'
let app
export default {
  components: { VuexOneComp },
  name: 'VuexOtherView',
  data() {
    return {
      title: '另一个vuex演示页面',
    }
  },
  computed: {
    countOther() {
      return this.$store.state.count
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
