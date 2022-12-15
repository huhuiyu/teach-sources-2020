<template>
  <div class="menu">
    <span v-for="d in tabs" :key="d.path" @click="changeTab(d)" :class="{ active: d.path == path }">
      {{ d.title }}
    </span>
  </div>
</template>

<script>
// 还有一个解决方法，可以避免多个页面要使用统一布局
// 布局和菜单切换写成模板页
// 通过路由参数传递要切换tab
// 内容通过tab值来加载不同组件显示
// /stydy/abc/:tab
// /stydy/abc/index
export default {
  name: 'TabsComp',
  data() {
    return {
      tabs: [
        { path: '/study/tabone', title: '首页' },
        { path: '/study/tabtwo', title: '关于' },
        { path: '/study/tabthree', title: '人才' },
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
    this.path = this.$route.path
  },
}
</script>

<style scoped>
.menu {
  padding: 1rem;
}
.menu span.active {
  color: #ff0000;
}
.menu span:not(:last-of-type)::after {
  content: '|';
  display: inline-block;
  margin: 0px 1rem;
  color: #dcdcdc;
}
</style>
