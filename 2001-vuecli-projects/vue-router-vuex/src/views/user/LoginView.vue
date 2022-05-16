<template>
  <div>
    <div>{{ title }}</div>
  </div>
</template>
<script>
let app
export default {
  name: 'UserLoginView',
  data() {
    return {
      title: '用户登录',
    }
  },
  methods: {},
  created() {
    app = this
    console.log(app.title)
  },
}
</script>
