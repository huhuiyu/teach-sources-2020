// 测试页面的路由配置
let routers = [
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test/HomeView.vue'),
  },
  {
    path: '/test/ws',
    name: 'testws',
    component: () => import('../views/test/WsView.vue'),
  },
  {
    path: '/test/router',
    name: 'testrouter',
    component: () => import('../views/test/RouterParamView.vue'),
  },
  {
    path: '/test/routerInfo/:info',
    name: 'testrouterinfo',
    component: () => import('../views/test/RouterParamInfoView.vue'),
  },
]

export default routers
