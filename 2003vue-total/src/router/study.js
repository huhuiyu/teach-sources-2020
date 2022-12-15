// 知识点学习的路由配置
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
    path: '/study/tab',
    name: 'studytab',
    component: () => import('../views/study/TabView.vue'),
  },
  {
    path: '/study/userimg',
    name: 'studyuserimg',
    component: () => import('../views/study/UserImgView.vue'),
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
