import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 声明vuex全局变量的地方
  state: {
    count: 0,
  },
  getters: {},
  // 定义修改vuex变量的方法的地方
  mutations: {
    // 方法的第一个参数必然是vuex全局变量对象
    // 后面的参数是调用方法的附加参数
    addCount(state) {
      state.count++
    },
  },
  actions: {},
  modules: {},
})
