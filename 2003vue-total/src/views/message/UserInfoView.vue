<template>
  <div>
    {{ title }}
    <hr />
    {{ loginUser }}
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'UserInfoView',
  data() {
    return {
      title: '留言板用户信息',
    }
  },
  computed: {
    // 必须使用computed获取vuex的变量
    loginUser() {
      return this.$store.state.loginUser
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
