<template>
  <div>
    <div class="tc pd10">
      <i class="iconfont">&#xe611;</i>
      <span>{{ title }}</span>
    </div>
    <!-- 菜单列表 -->
    <div class="menus">
      <!-- 脚手架的v-for需要一个不重复的key属性 -->
      <a v-for="d in menus" :key="d.url" @click="toPage(d.url)" href="javascript:void(0)">
        {{ d.text }}
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
        { url: '/test', text: '基本测试页' },
        { url: '/test/ajax', text: 'ajax测试页' },
        { url: '/user/login', text: '用户登录' },
        { url: '/user/main', text: '用户首页' },
        { url: '/user/reg', text: '用户注册' },
        { url: '/user/note', text: '用户记事本' },
        { url: '/link', text: '数据联动' },
      ],
    }
  },
  methods: {
    // vue路由api跳转页面
    toPage(url) {
      this.$router.push(url)
    },
  },
}
</script>

<style scoped>
.menus a {
  display: inline-block;
  margin: 1rem;
}
</style>
