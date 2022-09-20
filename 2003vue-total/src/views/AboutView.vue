<template>
  <div>
    关于黑暗骑士
    <a href="javascript:void(0)" @click="toHome">首页</a>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    toHome() {
      this.$router.push('/')
    },
  },
}
</script>
