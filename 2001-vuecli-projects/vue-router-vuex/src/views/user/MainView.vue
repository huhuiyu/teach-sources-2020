<template>
  <div>
    <div>{{ title }}</div>
  </div>
</template>
<script>
let app
export default {
  name: 'UserMainView',
  data() {
    return {
      title: '用户首页',
    }
  },
  methods: {},
  created() {
    app = this
    console.log(app.title)
  },
}
</script>
