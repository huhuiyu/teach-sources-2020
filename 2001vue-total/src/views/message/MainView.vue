<template>
  <div>
    <div>
      <user-info-comp @login-change="loginChange"></user-info-comp>
    </div>
    <div> {{ title }} </div>
    <div>
      {{ loginUser }}
    </div>
  </div>
</template>

<script>
import logger from '@/js/logger'
import UserInfoComp from '@/components/UserInfoComp.vue'
let app
export default {
  name: 'MainView',
  components: { UserInfoComp },
  data() {
    return {
      title: '论坛首页',
    }
  },
  methods: {
    loginChange() {
      logger.debug('用户组件通知登录状态变化')
    },
  },
  computed: {
    // 用户信息统一来源于vuex
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
