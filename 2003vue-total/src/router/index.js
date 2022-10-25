import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import test from './test'
import study from './study'
import message from './message'
import userrouter from './user'
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
  .concat(userrouter)
  .concat(error_router)
  .concat([
    {
      // 路由的配置支持通配符，*表示任意字符
      // 所以带通配符的路由一定是靠后
      path: '*',
      name: 'all',
      // redirect表示重定向其它路由路径页面
      redirect: '/error/code404',
    },
  ])

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
