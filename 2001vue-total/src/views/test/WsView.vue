<template>
  <div>
    {{ title }}
    <div> 是否已经连接成功：{{ isConnect }} </div>

    <div v-if="isConnect">
      <input type="text" v-model="echo" />
      <button @click="send">发送</button>
    </div>
    <div v-else>等待服务器连接...</div>

    <div> 收到ws的信息：{{ wsinfo }} </div>

    <hr />
    <input type="text" v-model="mapInfo" />
    <button @click="mapCounter">统计</button>
    {{ map }}
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
      title: 'websoket演示',
      echo: '',
      isConnect: false,
      wsinfo: {},
      mapInfo: '',
      map: {},
    }
  },
  methods: {
    mapCounter() {
      // 通过map统计字符信息
      app.map = new Map()
      for (let i = 0; i < app.mapInfo.length; i++) {
        // 获取单个字符
        let ch = app.mapInfo.charAt(i)

        if (app.map.has(ch)) {
          // 存在就计数加1放回map
          let count = app.map.get(ch)
          app.map.set(ch, count + 1)
        } else {
          // 如果这个字符没有在map中就添加一个，计数为1
          app.map.set(ch, 1)
        }
        logger.debug('统计结果：', app.map)
      }
    },
    send() {
      if (app.isConnect) {
        // 连接状态才能发消息
        ws.send(app.echo)
      }
    },
    onopen(ev) {
      logger.debug('已经连接到websocket服务器', ev)
      app.isConnect = ws.isConnect
    },
    onmessage(data) {
      logger.debug('收到服务器消息：', data)
      app.wsinfo = data
    },
    onclose(ev) {
      logger.debug('服务断开连接：', ev)
      app.isConnect = ws.isConnect
    },
    initWs() {
      // 创建自动重连的websocket
      ws = new AutoWebSocket(serverInfo.websocketUrl + 'echo')
      // 监听ws连接事件
      ws.addListener('open', app.onopen)
      ws.addListener('message', app.onmessage)
      ws.addListener('close', app.onclose)
      // 开始连接服务器
      ws.connect()
    },
    mapDemo() {
      // es6新增数据结构对象Map
      // map是键值对数据类型
      let map = new Map()
      // 放置数据是key，value一对
      // key具有唯一性，多次添加会被覆盖
      map.set('one', '一，数字一')
      map.set('date', '日期，约会')
      map.set('michael', '人名迈克尔，也是大天使米迦勒')
      map.set('one', '1')
      // 获取数据是通过key快速的访问对应value
      logger.debug('one：', map.get('one'))
      logger.debug('michael', map.get('michael'))
      // 查看key的集合
      logger.debug(map.keys())
    },
  },
  created() {
    app = this
    logger.debug(app.title)
    app.initWs()
    app.mapDemo()
  },
  destroyed() {
    ws = null
  },
}
</script>
