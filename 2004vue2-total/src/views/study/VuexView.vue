<template>
  <div>
    <div> {{ title }} | <a @click="changePage" href="javascript:void(0)">切换页面</a> </div>
    <div>
      {{ count }}
      <el-button @click="addCountInfo">更改vuex变量</el-button>
      <el-button @click="updateCountInfo">异步更改vuex变量</el-button>
    </div>
    <hr />
    <vuex-one-comp></vuex-one-comp>
    <hr />
    <vue-two-comp></vue-two-comp>
  </div>
</template>

<script>
import logger from '@/js/logger'
import VuexOneComp from '@/components/VuexOneComp.vue'
import VueTwoComp from '@/components/VueTwoComp.vue'
let app
export default {
  components: { VuexOneComp, VueTwoComp },
  name: 'VuexView',
  data() {
    return {
      title: 'vuex演示',
    }
  },
  methods: {
    changePage() {
      this.$router.push('/study/vuexother')
    },
    updateCountInfo() {
      this.$store
        .dispatch('updateCount')
        .then(() => {
          logger.debug('异步操作完成。。。')
        })
        .catch(() => {})
    },
    addCountInfo() {
      this.$store.commit('addCount')
    },
  },
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
