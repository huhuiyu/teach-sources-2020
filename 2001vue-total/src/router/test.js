// 测试页面的路由配置
let routers = [
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test/HomeView.vue'),
  },
]

export default routers
