<template>
  <div>
    首页
    <a href="javascript:void(0)" @click="toAbout">关于</a>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    toAbout() {
      // 路由跳转api
      this.$router.push('/about')
    },
  },
}
</script>
