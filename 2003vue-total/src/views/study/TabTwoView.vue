<template>
  <div>
    <div> {{ title }} </div>
    <hr />
    <div>
      <tabs-comp></tabs-comp>
    </div>
  </div>
</template>

<script>
import logger from '@/js/logger'
import TabsComp from '@/components/TabsComp.vue'
let app
export default {
  components: { TabsComp },
  name: 'TabTwoView',
  data() {
    return {
      title: 'tab页二',
    }
  },
  created() {
    app = this
    logger.debug(app.title)
  },
}
</script>
