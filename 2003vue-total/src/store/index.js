import logger from '@/js/logger'
import tools from '@/js/tools'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 登录用户信息的部分
const LOCAL_USER_KEY = 'vue_total_2003_user'
// 保存用户信息到本地存储
function saveUserInfo(user) {
  localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user))
}

// 读取本地存储的用户信息
function loadUserInfo() {
  let user = localStorage.getItem(LOCAL_USER_KEY)
  if (user) {
    return JSON.parse(user)
  }
  return {
    isLogin: false,
    tbUser: {},
    tbUserInfo: {},
    userOtherInfo: {},
  }
}

// 清除本地存储的用户信息
function removeUser() {
  localStorage.removeItem(LOCAL_USER_KEY)
}

export default new Vuex.Store({
  // 声明vuex全局变量的地方
  state: {
    count: 0,
    // 默认用户信息
    loginUser: loadUserInfo(),
  },
  getters: {},
  // 定义修改vuex变量的方法的地方
  mutations: {
    // 方法的第一个参数必然是vuex全局变量对象
    // 后面的参数是调用方法的附加参数
    addCount(state) {
      state.count++
    },
    // 修改登录用户信息
    setLoginUser(state, user) {
      // 保存到本地
      saveUserInfo(user)
      // 更新vuex
      // state.loginUser=loadUserInfo()
      state.loginUser = JSON.parse(JSON.stringify(user))
    },
    // 清除登录用户信息
    removeLoginUser(state) {
      // 本地清除
      removeUser()
      // 更新vuex
      state.loginUser = loadUserInfo()
    },
  },
  actions: {
    // 异步更新登录用户状态
    updateUser({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          tools.ajax(
            '/user/auth/getUserInfo',
            {},
            (data) => {
              let user = { isLogin: data.success }
              if (data.success) {
                user.tbUser = data.tbUser
                user.tbUserInfo = data.tbUserInfo
                user.userOtherInfo = data.userOtherInfo
                commit('setLoginUser', user)
              } else {
                commit('removeLoginUser')
              }
              resolve()
              // app.isLogin = data.success
              // this.$emit('login', data.success)
            },
            true
          )
        } catch (ex) {
          reject(ex)
        }
      })
    },
    changeCount({ commit }) {
      let promise = new Promise((resolve, reject) => {
        logger.debug(resolve, reject)
        // 模拟延时操作
        setTimeout(() => {
          commit('addCount')
          resolve()
        }, 2000)
      })
      return promise
    },
  },
  modules: {},
})
