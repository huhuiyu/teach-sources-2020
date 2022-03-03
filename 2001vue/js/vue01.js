// vue实例创建
new Vue({
  // el就是将vue实例和某个页面元素绑定
  // 值是选择器表达式,#app就是id为app的页面元素
  el: '#app',
  // data表示数据模型，值就是一个json
  // 而data的值和页面可以直接绑定！！！！！
  data() {
    return {
      title: '黑暗骑士的vue网站',
      // 变量是任意类型
      userinfo: {
        username: '黑暗骑士',
        password: ''
      },
      // 模拟菜单的数据
      menus: [
        { link: 'https://huhuiyu.top', text: '黑暗骑士的网站' },
        { link: 'https://hnmochi.com', text: '墨池科技的官方网站' }
      ],
      // 用于记录当前tab的变量
      tab: 1
    };
  },
  methods: {
    showInfo() {
      let info = JSON.stringify(this.userinfo);
      alert(info);
    }
  }
});

// vue是一个渐进式mvvm框架
// mvvm  m==>model(数据模型) v==>view(试图==页面)
// 而mvvm框架通过视图模型将视图和数据模型进行绑定简化开发
// 初始化vue实例中el就是视图（对应到某一个页面元素）
// data就是数据模型，一个json对象
// 绑定值的表达式，例如{{模型字段名称}}是单向
// 只会将模型的中数据呈现在页面指定位置
// 可以输入的元素（多半都是表单元素）
// 可以通过v-model="模型字段"来进行双向绑定
// 也就是页面输入变化时会同步给模型
// 模型的值变化也会同步给页面显示
