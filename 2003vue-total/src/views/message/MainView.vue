<template>
  <div>
    <div> {{ title }} </div>
    <div>
      <user-info-comp></user-info-comp>
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
    }
  },
  created() {
    app = this
    logger.debug(app.title)
  },
}
</script>
