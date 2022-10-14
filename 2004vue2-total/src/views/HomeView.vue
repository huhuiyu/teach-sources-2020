<template>
  <div>
    首页

    <a v-for="p in pages" :key="p.path" @click="toPage(p)" href="javascript:void(0)">
      {{ p.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      pages: [
        { title: '关于', path: '/about' },
        { title: '留言板首页', path: '/message/main' },
        { title: 'websocket测试', path: '/test/ws' },
      ],
    }
  },
  methods: {
    toPage(page) {
      this.$router.push(page.path)
    },
    toAbout() {
      // 编程式路由跳转
      this.$router.push('/about')
    },
  },
}
</script>

<style scoped>
a {
  display: inline-block;
}
a:not(:last-child)::after {
  content: '|';
  display: inline-block;
  margin: 1rem;
}
</style>
