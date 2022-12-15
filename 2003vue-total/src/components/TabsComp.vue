<template>
  <div class="tabs">
    <span v-for="tab in tabs" :key="tab.path">
      <span :class="{ active: path == tab.path }" @click="changeTab(tab)">{{ tab.title }}</span>
    </span>
  </div>
</template>

<script>
import logger from '@/js/logger'
export default {
  name: 'TabsComp',
  data() {
    return {
      tabs: [
        { title: '首页', path: '/study/tabone' },
        { title: '关于我们', path: '/study/tabtwo' },
        { title: '招聘信息', path: '/study/tabthree' },
      ],
      path: '',
    }
  },
  methods: {
    changeTab(tab) {
      this.$router.push(tab.path)
    },
  },
  created() {
    logger.debug('页面路由地址信息：', this.$route.path)
    this.path = this.$route.path
  },
}
</script>
<style scoped>
.tabs > span {
  display: inline-block;
  margin: 1rem;
  cursor: pointer;
}
.tabs > span:hover {
  color: #ff0000;
}
.tabs span.active {
  color: #0000ff;
}
</style>
