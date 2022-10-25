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
    component: () => import('../views/test/RouterView.vue'),
  },
  {
    //:info表示该区域是任意字符，可以通过路由参数info获取
    // 例如地址栏是/test/routerinfo/abc
    // 路由参数info的值就是abc
    // 路由参数可以有多个例如/a/:b/:c
    path: '/test/routerinfo/:info',
    name: 'testrouterinfo',
    component: () => import('../views/test/RouterInfoView.vue'),
  },
]

export default routers
