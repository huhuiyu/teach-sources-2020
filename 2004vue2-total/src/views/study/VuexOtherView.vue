<template>
  <div>
    {{ title }} ==== {{ count }}
    <a @click="changePage" href="javascript:void(0)">切换页面</a>
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'VuexOtherView',
  data() {
    return {
      title: '另一个vuex演示页面',
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  methods: {
    changePage() {
      this.$router.push('/study/vuex')
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
