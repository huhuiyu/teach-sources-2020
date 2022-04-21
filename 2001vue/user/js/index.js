// 记录本页面是否已经刷新过的key
const COUNTER_KEY = 'huhuiyu.top.counter';

let app;
new Vue({
  el: '#app',
  data() {
    return {
      title: '首页',
      // 网站访问计数器
      counter: {
        accessKey: getAccessKey(),
        messageKey: 'index_counter',
      },
      result: 10000,
      // 网站点赞计数器
      counterZan: {
        accessKey: getAccessKey(),
        messageKey: 'index_counter_zan',
      },
      resultZan: 0,
    };
  },
  methods: {
    addCounter() {
      // 查询本地是否存在计数过的信息
      let has = sessionStorage.getItem(COUNTER_KEY);
      if (has) {
        return;
      }
      ajax('/portable/message/counterAdd', app.counter, function () {
        // 已经计数就保存本地信息标志
        sessionStorage.setItem(COUNTER_KEY, COUNTER_KEY);
        app.queryCounter();
      });
    },
    queryCounter() {
      ajax('/portable/message/counterInfo', app.counter, function (data) {
        if (data.success) {
          app.result = data.message;
        }
      });
    },
    queryCounterZan() {
      ajax('/portable/message/counterInfo', app.counterZan, function (data) {
        if (data.success) {
          app.resultZan = data.message;
        }
      });
    },
  },
  created() {
    app = this;

    app.queryCounter();
    app.addCounter();
    app.queryCounterZan();
  },
});
