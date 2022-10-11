<template>
  <div>
    <div> {{ title }} - {{ isLogin }} </div>
    <div>
      <user-info-comp @login="loginChange"></user-info-comp>
    </div>
  </div>
</template>

<script>
import UserInfoComp from '@/components/UserInfoComp.vue'
import logger from '@/js/logger'
let app
export default {
  components: { UserInfoComp },
  name: 'MainView',
  data() {
    return {
      title: '简易留言板首页',
      isLogin: false,
    }
  },
  methods: {
    loginChange(info) {
      app.isLogin = info
    },
  },
  created() {
    app = this
    logger.debug(app.title)
  },
}
</script>
