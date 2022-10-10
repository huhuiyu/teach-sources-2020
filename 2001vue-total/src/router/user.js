// 用户信息相关的路由配置
let routers = [
  {
    path: '/user/login',
    name: 'userlogin',
    component: () => import('../views/user/LoginView.vue'),
  },
]

export default routers
