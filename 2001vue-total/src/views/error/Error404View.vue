<template>
  <!-- 自己补一个转到首页的链接功能 -->
  <div> {{ title }} </div>
</template>

<script>
export default {
  name: 'Error404View',
  data() {
    return {
      title: '网页不存在',
    }
  },
  created() {},
}
</script>
