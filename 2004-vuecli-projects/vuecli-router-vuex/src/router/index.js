import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 路由配置说明
  // path参数是地址栏访问路径
  // name参数随意
  // component参数是vue文件路径
  // 例如path是/abc，文件是AbcView.vue
  // 表示地址栏输入服务器地址/abc看到的是AbcView.vue编译后的页面
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestView.vue'),
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
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
