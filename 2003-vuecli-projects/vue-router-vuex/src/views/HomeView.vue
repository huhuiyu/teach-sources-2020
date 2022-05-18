<template>
  <div>
    <div>{{ title }}</div>
    <div class="menus">
      <!-- 脚手架项目强制要求for必须绑定一个没有重复数据的key属性 -->
      <a v-for="d in menus" :key="d.path" @click="toPage(d.path)" href="javascript:void(0)">
        {{ d.info }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      title: '黑暗骑士的vue脚手架项目',
      menus: [
        { path: '/test', info: '基本测试页' },
        { path: '/test/ajax', info: 'ajax测试页' },
        { path: '/user/login', info: '用户登录' },
      ],
    }
  },
  methods: {
    toPage(path) {
      // 使用vue路由api跳转页面
      this.$router.push(path)
    },
  },
}
</script>

<style scoped>
.menus {
  padding: 1rem;
}
.menus > a {
  display: inline-block;
  margin: 0.5rem;
}
</style>
