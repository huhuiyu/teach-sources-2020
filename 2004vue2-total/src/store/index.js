import logger from '@/js/logger'
import tools from '@/js/tools'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LOCAL_USER_KEY = 'vue-total-2004-userinfo'
// 本地用户信息存储服务
const USER_SERVICE = {
  saveUser(userinfo) {
    localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(userinfo))
  },
  loadUser() {
    let userinfo = localStorage.getItem(LOCAL_USER_KEY)
    if (userinfo) {
      return JSON.parse(userinfo)
    }
    return {
      isLogin: false,
      tbUser: {},
      tbUserInfo: {},
      userOtherInfo: {},
    }
  },
  removeUser() {
    localStorage.removeItem(LOCAL_USER_KEY)
  },
}

export default new Vuex.Store({
  state: {
    count: 0,
    loginUser: USER_SERVICE.loadUser(),
  },
  getters: {},
  mutations: {
    addCount(state) {
      state.count++
    },
    setUserInfo(state, user) {
      // 本地保存用户信息
      USER_SERVICE.saveUser(user)
      // 更新vuex的用户信息
      state.loginUser = USER_SERVICE.loadUser()
      // state.loginUser = JSON.parse(JSON.stringify(user))
    },
    removeUserInfo(state) {
      // 清除本地用户信息
      USER_SERVICE.removeUser()
      // 更新vuex的用户信息
      state.loginUser = USER_SERVICE.loadUser()
    },
  },
  actions: {
    updateUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
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
              resolve()
            } else {
              commit('removeUserInfo')
              reject()
            }
          },
          true
        )
      })
    },
    updateCount({ commit }) {
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

/*
  用户登录的vuex逻辑
  1：用户登录相关的信息会用vuex存储
  2：所有需要用户登录相关信息的地方
    都要使用computer调用vuex中存储的用户信息
  3：为了避免用户强制刷新或者开新标签页
    导致vuex的用户信息丢失，需要将vuex的信息保存到本地存储
  4：当用户信息改变的时候，需要调用action去更新vuex中的信息
      比如登录成功，安全退出，修改用户信息这类功能
*/
