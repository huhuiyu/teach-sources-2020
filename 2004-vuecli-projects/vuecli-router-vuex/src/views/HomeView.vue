<template>
  <div>
    <div class="tc pd10">
      <i class="iconfont">&#xe611;</i>
      <span>{{ title }}</span>
    </div>
    <!-- 菜单列表 -->
    <div>
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
