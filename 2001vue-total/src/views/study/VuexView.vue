<template>
  <div>
    <div>{{ title }} </div>
    <div>
      {{ count }}
      <el-button @click="addCount">vuex变量控制</el-button>
      <el-button @click="toOther">另一个页面</el-button>
      <el-button @click="countAction">异步调用 </el-button>
    </div>
    <hr />
    <vuex-one-comp></vuex-one-comp>
    <hr />
    <vuex-two-comp></vuex-two-comp>
  </div>
</template>

<script>
import logger from '@/js/logger'
import VuexOneComp from '@/components/VuexOneComp.vue'
import VuexTwoComp from '@/components/VuexTwoComp.vue'
let app
export default {
  components: { VuexOneComp, VuexTwoComp },
  name: 'VuexView',
  data() {
    return {
      title: 'vuex学习界面',
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  methods: {
    countAction() {
      this.$store
        .dispatch('changeCount')
        .then(() => {
          logger.debug('异步调用成功')
        })
        .catch(() => {})
    },
    toOther() {
      this.$router.push('/study/vuexother')
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
