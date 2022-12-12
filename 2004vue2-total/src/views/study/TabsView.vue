<template>
  <div>
    <div> {{ title }} </div>
    <div>
      <span v-for="d in tabs" :key="d.id">
        {{ d.title }}
      </span>
    </div>
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'TabsView',
  data() {
    return {
      title: 'tab效果一',
      tabs: [
        { id: 1, title: '首页' },
        { id: 2, title: '关于我们' },
        { id: 3, title: '人才招聘' },
      ],
    }
  },
  created() {
    app = this
    logger.debug(app.title)
  },
}
</script>
