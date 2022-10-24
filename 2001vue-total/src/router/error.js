// 错误页面的路由配置
let routers = [
  {
    path: '/error/404',
    name: 'error404',
    component: () => import('../views/error/Error404View.vue'),
  },
]

export default routers
