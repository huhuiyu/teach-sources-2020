new Vue({
  el: '#app',
  data() {
    return {
      title: 'vue数据联动',
      // 省份的数据
      plist: [],
      // 选中的省份编号
      pid: -1,
      // 城市的数据
      clist: [],
      cid: -1,
    };
  },
  methods: {
    queryProvince() {
      let app = this;
      // 查询省份信息
      ajax('/linkinfo/queryAllProvince', {}, function (data) {
        if (!data.success) {
          alert(data.message);
          return;
        }
        // 处理省份的数据
        app.plist = data.list;
        if (app.plist.length <= 0) {
          alert('没有数据');
          return;
        }
        // 设置默认选中项，只需要对对应的model进行赋值即可
        app.pid = app.plist[0].pid;
        // 省份变化要调用城市查询
        app.queryCity();
      });
    },
    queryCity() {
      let app = this;
      ajax(
        '/linkinfo/queryCityByProvince',
        {
          pid: app.pid,
        },
        function (data) {
          if (!data.success) {
            alert(data.message);
            return;
          }
          app.clist = data.list;
          if (app.clist.length > 0) {
            app.cid = app.clist[0].cid;
          }
        }
      );
    },
  },
  // computed表示计算属性，里面定义的方法都必须要有返回值
  // 效果和data一样，可以直接在页面显示
  computed: {
    city() {
      for (let i = 0; i < this.clist.length; i++) {
        if (this.cid == this.clist[i].cid) {
          return this.clist[i];
        }
      }
      return {};
    },
    province() {
      // plist里面是全部的省份信息
      // 通过pid可以获取选中的省份编号
      let province = {};
      for (let i = 0; i < this.plist.length; i++) {
        // 搜索和pid匹配数据，就是选中完整省份信息
        if (this.pid == this.plist[i].pid) {
          return this.plist[i];
        }
      }
      return province;
    },
  },
  created() {
    // vue创建成功后就调用查询数据的方法
    this.queryProvince();
  },
});

// el:是页面元素id选择器
// data(){} 这个是页面数据
// methods:function定义
// created(){} 生命周期钩子函数，vue创建时自动调用
// computed: 计算属性定义函数