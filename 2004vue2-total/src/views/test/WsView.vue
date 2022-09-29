<template>
  <div>
    {{ title }}
    <hr />
    <div v-if="isConnect">
      <input type="text" v-model="echo" />
      <el-button @click="send">发送</el-button>
      <hr />
      服务消息：{{ info }}
    </div>
    <div v-else> 正在连接服务器，请稍候... </div>
  </div>
</template>

<script>
import AutoWebSocket from '@/js/AutoWebSocket'
import serverInfo from '@/js/server'
import logger from '@/js/logger'
let app
let ws
export default {
  name: 'WsView',
  data() {
    return {
      title: 'websocket测试',
      info: '',
      echo: '',
      isConnect: false,
    }
  },
  methods: {
    mapDemo() {
      let map = new Map()
      // map是键值对数据结构
      map.set('one', '数字一')
      map.set('date', '日期，约会')
      map.set('michael', '人名迈克尔，天使米迦勒')
      // 可以通过key快速获取到值
      logger.debug('one', map.get('one'))
      logger.debug('michael', map.get('michael'))
    },
    send() {
      ws.send(app.echo)
    },
    onclose(ev) {
      logger.debug('服务器端口连接：', ev)
      app.isConnect = ws.isConnect
    },
    onmessage(data) {
      app.info = data
    },
    onopen(ev) {
      logger.debug('连接到websocket服务', ev)
      app.isConnect = ws.isConnect
    },
    initWs() {
      // 初始化websocket
      ws = new AutoWebSocket(serverInfo.websocketUrl + 'echo')
      // 监听连接打开事件
      ws.addListener('open', app.onopen)
      // 监听消息接收事件
      ws.addListener('message', app.onmessage)
      // 监听断开连接事件
      ws.addListener('close', app.onclose)

      // 启动服务器连接
      ws.connect()
    },
  },
  created() {
    app = this
    app.initWs()
    app.mapDemo()
  },
  destroyed() {
    // 销毁websocket对象
    ws = null
    // bacd1451
  },
}
</script>
