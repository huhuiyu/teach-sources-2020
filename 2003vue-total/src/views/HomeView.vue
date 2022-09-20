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
      this.$router.push('/about')
    },
  },
}
</script>
