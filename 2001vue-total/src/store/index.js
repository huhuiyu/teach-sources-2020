import logger from '@/js/logger'
import tools from '@/js/tools'
import Vue from 'vue'
import Vuex from 'vuex'

//#region 用户信息相关方法

const LOCAL_USER_KEY = 'vue-totol-2001-user'

// 保存用户信息到本地
function saveUser(user) {
  localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user))
}

// 读取本地存储的用户信息
function loadUser() {
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

//#endregion

Vue.use(Vuex)

export default new Vuex.Store({
  // vuex变量定义，页面通过computed来访问
  state: {
    count: 0,
    loginUser: loadUser(),
  },
  getters: {},
  // vuex变量变化操作方法定义
  // 页面通过vue实例.$store.commit()调用
  mutations: {
    addCount(state) {
      state.count++
    },
    setUserInfo(state, user) {
      saveUser(user)
      // state.loginUser = loadUser()
      state.loginUser = JSON.parse(JSON.stringify(user))
    },
    removeUserInfo(state) {
      removeUser()
      state.loginUser = loadUser()
    },
  },
  // vuex异步调用方法定义
  // 异步方法会传入commit函数来调用mutations里面的方法
  // 来修改vuex的变量
  actions: {
    updateUserInfo({ commit }) {
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
                commit('setUserInfo', user)
              } else {
                commit('removeUserInfo')
              }
              resolve()
            },
            true
          )
        } catch (ex) {
          reject(ex)
        }
      })
    },
    changeCount({ commit }) {
      let pro = new Promise((resolve, reject) => {
        logger.debug(resolve, reject)
        setTimeout(() => {
          commit('addCount')
          resolve()
        }, 2000)
      })
      return pro
    },
  },
  modules: {},
})
