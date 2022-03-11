new Vue({
  el: '#app',
  data() {
    return {
      title: 'vue数据联动',
      // 省份的列表
      plist: [],
      // 选中的省份编号
      pid: -1,
      // 城市信息
      clist: [],
      cid: -1
    };
  },
  methods: {
    queryCity() {
      let app = this;
      ajax(
        '/linkinfo/queryCityByProvince',
        {
          pid: app.pid
        },
        function (data) {
          // 失败就显示原因
          if (!data.success) {
            alert(data.message);
            return;
          }
          app.clist = data.list;
          app.cid = app.clist[0].cid;
        }
      );
    },
    queryProvince() {
      // 通过变量记住当前vue实例
      let app = this;
      ajax('/linkinfo/queryAllProvince', {}, function (data) {
        // 失败就显示原因
        if (!data.success) {
          alert(data.message);
          return;
        }
        // ajax的数据直接放置到data中即可用于vue
        app.plist = data.list;
        // 跟定默认选中值，其实就是对pid给定合法的数据
        app.pid = app.plist[17].pid;
        // 省份变化要调用城市的查询
        app.queryCity();
      });
    }
  },
  created() {
    // vue创建完就直接调用ajax查询数据
    this.queryProvince();
  }
});
