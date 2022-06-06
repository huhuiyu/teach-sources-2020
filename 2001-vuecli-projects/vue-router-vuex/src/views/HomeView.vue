<template>
  <div>
    <div class="tc pd10">
      <i class="iconfont">&#xe611;</i>
      {{ title }}
    </div>
    <div class="menus">
      <!-- 在脚手架中的v-for必须搭配一个不重复的key属性 -->
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
      title: '黑暗骑士的Vue脚手架项目',
      menus: [
        {
          text: '基础测试页',
          url: '/test01',
        },
        {
          text: 'ajax测试页',
          url: '/test/ajax',
        },
        {
          text: '用户登录',
          url: '/user/login',
        },
        {
          text: '用户首页',
          url: '/user/main',
        },
        {
          text: '用户注册',
          url: '/user/reg',
        },
        {
          text: '用户记事本',
          url: '/user/note',
        },
        {
          text: '数据联动',
          url: '/link',
        },
      ],
    }
  },
  methods: {
    // 通过vue路由api跳转页面
    toPage(url) {
      this.$router.push(url)
    },
  },
}
</script>
<style scoped>
.menus {
  text-align: center;
}
.menus > a {
  display: inline-block;
  margin: 1rem;
}
</style>
