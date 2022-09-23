<template>
  <div>
    {{ title }}
    <div>get请求：{{ getData }}</div>
    <div>post请求：{{ postData }}</div>
    <div>错误请求：{{ errorData }}</div>
    <div>信息：{{ info }}</div>
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
      title: '测试页',
      getData: {},
      postData: {},
      errorData: {},
      info: tools.getBrowserInfo(),
    }
  },
  methods: {
    testGet() {
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
      // ajax方法的参数
      // 1：请求的path
      // 2：请求的参数
      // 3：应答的回调处理函数
      // 4：当应答结果的success值为false的时候是否自己处理错误
      //    默认为false，系统会自动弹出错误信息框
      // 5：请求的模式，默认为post
      // 6：是否返回ajax请求的promise对象，
      //    如果为true,则需要自己处理应答和错误，34参数无效
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
    testError1() {
      tools.ajax('/user/auth/login', {}, (data) => {
        logger.debug(data)
      })
    },
    testError2() {
      tools.ajax(
        '/user/auth/login',
        {},
        (data) => {
          app.errorData = data
        },
        true
      )
    },
  },
  created() {
    app = this
    // logger.debug和console.log一样的
    logger.debug('测试logger输出', app, tools.isMobile())
    app.testGet()
    app.testPost()
    app.testError1()
    app.testError2()
  },
}
</script>
