// 测试模块的路由信息
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
]

export default routers