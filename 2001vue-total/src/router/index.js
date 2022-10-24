import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// 引入路由集合配置文件
import test from './test'
import study from './study'
import message from './message'
import user from './user'
import error_router from './error'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
]
  .concat(test)
  .concat(study)
  .concat(message)
  .concat(user)
  .concat(error_router)
  // 通配符路由一定要在路由列表的最后
  .concat([
    // 只要不匹配上面路由列表中path，都会进到本配置
    // redirect表示转到指定路由路径
    {
      path: '*',
      name: 'error404',
      redirect: '/error/404',
    },
  ])

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
