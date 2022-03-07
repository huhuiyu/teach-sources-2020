new Vue({
  el: '#app',
  data() {
    return {
      title: 'vue生命周期和ajax',
      // 请求参数
      echo: '',
      // 应答结果
      result: {}
    };
  },
  methods: {
    sendEcho() {
      // 记录vue实例对象
      let app = this;
      // ajax请求
      ajax(
        '/',
        { echo: this.echo },
        function (data) {
          console.log('请求的结果', data);
          // 数据要被vue使用，必须赋值给data中定义的变量
          app.result = data;
        },
        'get'
      );
    },
    showInit() {
      console.log('执行showInit方法...');
    }
  },
  // vue生命周期钩子函数
  created() {
    // 当vue实例对象创建时会调用
    // 这里就可以直接访问data中数据了
    console.log('vue实例创建完毕', this, this.title);
    // 这里也可以调用methods中定义的方法
    this.showInit();
  },
  mounted() {
    // 当vue实例对应模板页面已经渲染完成时调用
    console.log('vue已经渲染页面完毕');
  }
});

// ajax请求和vue的配合，有2个关键点！！！！！
// 1：请求的数据需要data中定义，然后通过v-model从页面收集
// 2：ajax应答的数据通过赋值给data中定义的变量来供页面显示
// 一个小细节，ajax请求的方法可以是事件触发，也可以生命周期方法中自动调用
// 预习，尝试调用工具类中的api