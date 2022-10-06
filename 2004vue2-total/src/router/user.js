// 用户信息模块的路由信息
let routers = [
  {
    path: '/user/login',
    name: 'userlogin',
    component: () => import('../views/user/LoginView.vue'),
  },
]

export default routers
