// 本地存储是否已经计数过本页面
const COUNTER_KEY = 'huhuiyu.top.counter';
// 思考题，如果让页面一天之内之刷新一次

let app;
new Vue({
  el: '#app',
  data() {
    return {
      title: '首页',
      // 访问页面的计数器
      counter: {
        accessKey: getAccessKey(),
        messageKey: 'index_counter',
      },
      result: {
        message: 10000,
      },
      // 计数器的数量没有任何限制
      zanCounter: {
        accessKey: getAccessKey(),
        messageKey: 'zan_counter',
      },
      zanReulst: {
        message: 0,
      },
    };
  },
  methods: {
    zanQuery() {
      ajax('/portable/message/counterInfo', app.zanCounter, function (data) {
        if (data.success) {
          app.zanReulst = data;
        }
      });
    },
    zan() {
      ajax('/portable/message/counterAdd', app.zanCounter, function () {
        app.zanQuery();
      });
    },
    addCount() {
      // 限制浏览器没有重新打开页面时不要重复刷数字
      let hasCount = sessionStorage.getItem(COUNTER_KEY);
      if (hasCount) {
        return;
      }
      ajax('/portable/message/counterAdd', app.counter, function () {
        sessionStorage.setItem(COUNTER_KEY, COUNTER_KEY);
        app.queryCounter();
      });
    },
    queryCounter() {
      ajax('/portable/message/counterInfo', app.counter, function (data) {
        if (data.success) {
          app.result = data;
        }
      });
    },
  },
  created() {
    app = this;

    app.queryCounter();
    app.zanQuery();
  },
  mounted() {
    // 页面加载就计数器加一
    app.addCount();
  },
});
