<template>
  <div>
    {{ title }}
    <hr />
    {{ userinfo }}
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'UserView',
  data() {
    return {
      title: '用户信息界面',
    }
  },
  computed: {
    // 使用vuex中的用户信息
    userinfo() {
      return this.$store.state.loginUser
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
