// 知识点学习模块的路由信息
let routers = [
  {
    path: '/study/page',
    name: 'studypage',
    component: () => import('../views/study/PageView.vue'),
  },
  {
    path: '/study/vuex',
    name: 'studyvuex',
    component: () => import('../views/study/VuexView.vue'),
  },
  {
    path: '/study/vuexother',
    name: 'studyvuexother',
    component: () => import('../views/study/VuexOtherView.vue'),
  },
  {
    path: '/study/amap',
    name: 'studyamap',
    component: () => import('../views/study/AMapView.vue'),
  },
  {
    path: '/study/amapui',
    name: 'studyamapui',
    component: () => import('../views/study/AMapUiView.vue'),
  },
  {
    path: '/study/logo',
    name: 'studylogo',
    component: () => import('../views/study/LogoView.vue'),
  },
  {
    path: '/study/tabs',
    name: 'studytabs',
    component: () => import('../views/study/TabsView.vue'),
  },
  {
    path: '/study/tabone',
    name: 'studytabone',
    component: () => import('../views/study/TabOneView.vue'),
  },
  {
    path: '/study/tabtwo',
    name: 'studytabtwo',
    component: () => import('../views/study/TabTwoView.vue'),
  },
  {
    path: '/study/tabthree',
    name: 'studytabthree',
    component: () => import('../views/study/TabThreeView.vue'),
  },
]

export default routers
