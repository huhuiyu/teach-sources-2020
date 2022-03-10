new Vue({
  el: '#app',
  data() {
    return {
      title: 'vue数据联动',
      // 查询的省份列表
      plist: [],
      // 获取选中的省份编号
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
      // 记录app为vue当前实例
      let app = this;
      // 查询省份的方法==============
      ajax('/linkinfo/queryAllProvince', {}, function (data) {
        if (!data.success) {
          alert(data.message);
          return;
        }
        // 让data中plist来源于后端查询结果的list（省份列表）
        app.plist = data.list;
        // 默认选中项
        app.pid = app.plist[17].pid;
        // 省份发生变化要立即查询城市信息
        app.queryCity();
      });
    }
  },
  created() {
    this.queryProvince();
  }
});
