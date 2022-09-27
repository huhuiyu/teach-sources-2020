<template>
  <div>
    {{ title }}
    <div v-if="isConnect">
      <input type="text" v-model="echo" />
      <button @click="send">发送</button>
    </div>
    <div v-else>等待服务器连接。。。</div>
    <div>{{ wsinfo }}</div>
    <hr />
    <input type="text" v-model="mapinfo" />
    <button @click="mapdata">统计</button>
  </div>
</template>

<script>
import logger from '@/js/logger'
import AutoWebSocket from '@/js/AutoWebSocket'
import serverInfo from '@/js/server'
let app
let ws
export default {
  name: 'WsView',
  data() {
    return {
      title: 'websocket演示',
      wsinfo: {},
      isConnect: false,
      echo: '',
      mapinfo: '',
    }
  },
  methods: {
    mapdata() {
      let map = new Map()
      for (let i = 0; i < app.mapinfo.length; i++) {
        // 获取单个字符
        let ch = app.mapinfo.charAt(i)
        if (map.has(ch)) {
          // 字符已经存在，就获取次数并加一放回去
          let count = map.get(ch)
          map.set(ch, count + 1)
        } else {
          // 不存在就添加次数一
          map.set(ch, 1)
        }
      }
      logger.debug(map)
    },
    send() {
      // 发送消息给服务器
      ws.send(app.echo)
    },
    onopen(ev) {
      logger.debug('成功连接到服务器', ev)
      app.isConnect = ws.isConnect
    },
    onclose(ev) {
      logger.debug('服务器断开连接', ev)
      app.isConnect = ws.isConnect
    },
    onmessage(data) {
      logger.debug('收到服务器消息', data)
      app.wsinfo = data
    },
    mapDemo() {
      // map数据结构，键值对类型数据结构
      let map = new Map()
      map.set('one', '一，数字一')
      map.set('date', '日期，约会')
      map.set('michael', '人名迈克尔，天使米迦勒')
      // key不可以有重复，也就是说添加两次同样的key会覆盖
      map.set('one', '1')
      // 可以通过key快速的获取到对应的值
      logger.debug('date:', map.get('date'))
      logger.debug('one:', map.get('one'))
      logger.debug(map.keys())
      // 自学Set数据结构
    },
  },
  created() {
    app = this
    logger.debug(app)
    ws = new AutoWebSocket(serverInfo.websocketUrl + 'echo')
    // 添加事件监听
    ws.addListener('open', app.onopen)
    ws.addListener('close', app.onclose)
    ws.addListener('message', app.onmessage)

    // 连接服务器
    ws.connect()

    // 11223334

    app.mapDemo()
  },
}
</script>
