<template>
  <div>
    <div>{{ title }}</div>
    <div>
      {{ vcount }}
      <button @click="addCount">计数加一</button>
      |
      <a href="javasrcipt:void(0)" @click="toVuex">vuex演示界面</a>
    </div>
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
    vcount() {
      return this.$store.state.count
    },
  },
  methods: {
    toVuex() {
      this.$router.push('/study/vuex')
    },
    addCount() {
      this.$store.commit('addCount')
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
