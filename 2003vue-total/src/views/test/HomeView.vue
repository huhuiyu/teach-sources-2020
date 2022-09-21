<template>
  <div>
    {{ title }}
    <div>get请求数据：{{ getData }}</div>
    <div>post请求数据：{{ postData }}</div>
    <div>错误请求数据：{{ errorData }}</div>
    <div>bom信息：{{ info }}</div>
  </div>
</template>

<script>
import logger from '@/js/logger'
import tools from '@/js/tools'
export default {
  name: 'TestView',
  data() {
    return {
      title: '基础api测试',
      getData: {},
      postData: {},
      errorData: {},
      info: tools.getBrowserInfo(),
    }
  },
  methods: {
    testError2() {
      let app = this
      tools.ajax(
        '/user/auth/login',
        {},
        (data) => {
          app.errorData = data
        },
        true
      )
    },
    testError1() {
      tools.ajax('/user/auth/login', {}, (data) => {
        logger.debug(data)
      })
    },
    testPost() {
      let app = this
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
    testGet() {
      let app = this
      // ajax的全部参数含义
      // 1：请求地址
      // 2：请求参数
      // 3：应答处理函数
      // 4：应答结果success为false的时候是否自己处理错误信息
      // 5：请求的方式get/post...
      // 6：是否返回promise对象，为true则34两个参数都无效

      // get请求测试
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
  },
  created() {
    // logger的使用，作用替换console.log
    // 项目部署的时候会自动关闭掉控制台输出
    logger.debug('使用日志输出控制台信息', tools.isMobile(), tools.formatDate(new Date()), tools.concatJson({ name: '黑暗骑士' }, { id: 100 }))
    this.testGet()
    this.testPost()
    this.testError1()
    this.testError2()
  },
}
</script>
