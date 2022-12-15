<template>
  <div>
    <div> {{ title }} </div>
    <hr />
    <tabs-comp></tabs-comp>
  </div>
</template>

<script>
import logger from '@/js/logger'
import TabsComp from '@/components/TabsComp.vue'
let app
export default {
  components: { TabsComp },
  name: 'TabThreeView',
  data() {
    return {
      title: '招聘信息',
    }
  },
  created() {
    app = this
    logger.debug(app.title)
  },
}
</script>
