// 创建vue的实例
new Vue({
  // el是vue实例绑定的页面模板，值是选择器表达式
  el: '#app',
  // data属性可以是json，也可以是返回json的function
  // 尽量的用function格式（可以兼容组件）
  // data中的数据，可以直接在页面上显示！！！
  data() {
    return {
      title: '黑暗骑士的vue页面',
      // data中可以定义任意数据，例如json
      // data中的数据可以和页面元素（一般表单元素）进行双向绑定
      // 也就是说页面输入值变化会同步给data中变量
      // 同理，data中的变量变化也会直接同步给页面
      userinfo: {
        username: '黑暗骑士',
        password: ''
      },
      menus: [
        { text: '黑暗骑士的网站', link: 'https://huhuiyu.top' },
        { text: '湖南墨池的官方网站', link: 'https://hnmochi.com' }
      ],
      // 记录当前标签的变量
      nav: 1
    };
  },
  // methods是事件处理function定义的部分
  methods: {
    showInfo() {
      // 在methods中的function可以通过this直接操作data中数据
      let info = JSON.stringify(this.userinfo);
      alert(info);
    }
  }
});

// vue是渐进式mvvm框架！！！！
// m是model（数据模型）,v是视图，简单的理解就是html页面
// vm是视图模型，它负责双向绑定视图和模型的状态！！！
