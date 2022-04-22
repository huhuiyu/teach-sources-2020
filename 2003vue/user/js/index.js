// 本地记录是否已经刷新的KEY
const COUNTER_KEY = 'huhuiyu.top.counter.key';

let app;

new Vue({
  el: '#app',
  data() {
    return {
      title: '首页',
      // 主计数器
      counter: {
        accessKey: getAccessKey(),
        messageKey: 'index_counter',
      },
      result: 1000,
      // 点赞计数器
      counterZan: {
        accessKey: getAccessKey(),
        messageKey: 'index_counterZan',
      },
      resultZan: 0,
    };
  },
  methods: {
    zan() {
      ajax('/portable/message/counterAdd', app.counterZan, function () {
        app.queryCounterZan();
      });
    },

    queryCounterZan() {
      ajax('/portable/message/counterInfo', app.counterZan, function (data) {
        if (data.success) {
          app.resultZan = data.message;
        }
      });
    },

    addCounter() {
      // 查看本地是否有已经计数过的信息
      let has = sessionStorage.getItem(COUNTER_KEY);
      if (has) {
        return;
      }
      ajax('/portable/message/counterAdd', app.counter, function () {
        // 添加后要标志已经计数器
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
  },
  created() {
    app = this;

    app.queryCounter();
    app.addCounter();
    app.queryCounterZan();
  },
});
