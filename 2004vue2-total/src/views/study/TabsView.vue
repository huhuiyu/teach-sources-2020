<template>
  <div>
    <div> {{ title }} </div>
    <hr />
    <div v-if="tab == 1">哈哈哈哈哈哈</div>
    <div v-if="tab == 2">嘻嘻嘻嘻嘻嘻</div>
    <div v-if="tab == 3">黑暗骑士</div>
    <hr />
    <div>
      <span class="menu" v-for="d in tabs" :key="d.id" :class="{ active: d.id == tab }" @click="changeTab(d.id)">
        <span>{{ d.title }}</span>
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
      tab: 1,
    }
  },
  methods: {
    changeTab(tab) {
      this.tab = tab
    },
  },
  created() {
    app = this
    logger.debug(app.title)
  },
}
</script>
<style scoped>
.menu {
  display: inline-block;
  margin: 1rem;
  border-bottom: 2px solid transparent;
  padding: 0.5rem;
  cursor: pointer;
}
.active,
.menu:hover {
  border-color: #ff0000;
}
</style>
