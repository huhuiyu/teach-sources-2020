import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 导入自定义插件
import MyPlugins from '@/plugins/MyPlugins'
Vue.use(MyPlugins)

// 导入过滤器
// import '@/filters/MyFilters'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
