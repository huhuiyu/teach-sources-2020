import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 路由配置的意义，就是让地址栏输入的路径和某个vue文件匹配
  // path就是浏览器地址栏输入的路径
  // name是随意输入的名称
  // component指向的一个vue文件
  // 例如：path的是/abc,component是AbcView.vue
  // 那么在地址栏输入服务器地址/abc看到的就是AbcView.vue执行的结果页面
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
