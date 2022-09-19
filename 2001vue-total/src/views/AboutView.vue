<template>
  <div>
    关于
    <a href="javascript:void(0)" @click="toHome">首页</a>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    toHome() {
      // 路由跳转api
      this.$router.push('/')
    },
  },
}
</script>
