<template>
  <div>
    <div>{{ title }}</div>
    <div>
      {{ vcount }}
      <button @click="addCount">计数加一</button>
      <button @click="addCountAction">异步计数加一</button>
      |
      <a href="javasrcipt:void(0)" @click="toVuexOther">另一个vuex演示界面</a>
    </div>
    <hr />
    <vuex-comp-one></vuex-comp-one>
    <vuex-comp-two></vuex-comp-two>
  </div>
</template>

<script>
import logger from '@/js/logger'
import VuexCompOne from '@/components/VuexCompOne.vue'
import VuexCompTwo from '@/components/VuexCompTwo.vue'
let app
export default {
  components: { VuexCompOne, VuexCompTwo },
  name: 'VuexView',
  data() {
    return {
      title: 'vuex知识点',
    }
  },
  computed: {
    vcount() {
      return this.$store.state.count
    },
  },
  methods: {
    toVuexOther() {
      this.$router.push('/study/vuexother')
    },
    addCount() {
      this.$store.commit('addCount')
    },
    addCountAction() {
      this.$store
        .dispatch('changeCount')
        .then(() => {
          logger.debug('异步调用完成')
        })
        .catch(() => {})
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
