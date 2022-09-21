<template>
  <div>
    {{ title }}
    <div> get数据：{{ getData }} </div>
    <div> post数据：{{ postData }} </div>
    <div> 错误数据：{{ errorData }} </div>
    <div> 数据：{{ info }} </div>
  </div>
</template>

<script>
import logger from '@/js/logger'
import tools from '@/js/tools'
let app
export default {
  name: 'TestView',
  data() {
    return {
      title: '测试首页',
      getData: {},
      postData: {},
      errorData: {},
      info: {},
    }
  },
  methods: {
    testGet() {
      // ajax参数
      // 1：请求的url地址
      // 2：请求参数
      // 3：应答回调处理函数
      // 4：如果应答结果中的success为false，是否由回调函数处理
      // 5：请求方式，默认为post
      // 6：是否返回promise对象，如果为true，34两个参数就无效化了
      tools.ajax(
        '/',
        {
          echo: '黑暗骑士',
        },
        (data) => {
          app.getData = data
        },
        false,
        'get'
      )
    },
    testPost() {
      tools.ajax(
        '/api/amap/weatherInfo',
        {
          city: '430702',
        },
        (data) => {
          app.postData = data
        }
      )
    },
    testError01() {
      //测试错误请求自动处理
      tools.ajax(
        '/user/auth/login',
        {
          username: 'user',
        },
        (data) => {
          logger.debug(data)
        }
      )
    },
    testError02() {
      //测试错误请求自己处理
      tools.ajax(
        '/user/auth/login',
        {
          username: 'user',
        },
        (data) => {
          app.errorData = data
        },
        true
      )
    },
  },
  created() {
    app = this
    // 替换控制台输出的方法，正式发布时会自动关闭
    logger.debug('使用logger输出控制台信息')
    app.testGet()
    app.testPost()
    app.testError01()
    app.testError02()
  },
}
</script>
