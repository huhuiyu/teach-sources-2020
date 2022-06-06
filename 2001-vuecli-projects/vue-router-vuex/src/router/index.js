import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  // 路由配置说明
  // path的值就是地址栏访问的路径,比如/abc表示是服务器地址/abc访问
  // name是随意编写，一般来说是vue文件里面的js部分的name属性
  // component是指向对应的vue文件
  // 简单的来说就是通过path可以访问到对应的vue文件效果
  // path全局不可以有两个相同的
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/test01',
    name: 'Test01',
    component: () => import('../views/Test01View.vue'),
  },
  {
    path: '/test/ajax',
    name: 'TestAjax',
    component: () => import('../views/TestAjaxView.vue'),
  },
  {
    path: '/user/login',
    name: 'UserLoginView',
    component: () => import('../views/user/LoginView.vue'),
  },
  {
    path: '/user/main',
    name: 'UserMainView',
    component: () => import('../views/user/MainView.vue'),
  },
  {
    path: '/user/reg',
    name: 'UserRegView',
    component: () => import('../views/user/RegView.vue'),
  },
  {
    path: '/user/note',
    name: 'UserNoteView',
    component: () => import('../views/user/NoteView.vue'),
  },
  {
    path: '/link',
    name: 'LinkView',
    component: () => import('../views/LinkView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
