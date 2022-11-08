<template>
  <div class="container">
    <div> {{ title }}-{{ info }} </div>
    <!-- 地图区域 -->
    <div id="map-container">
      <iframe :src="locatorUrl" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'AMapUiView',
  data() {
    return {
      info: {},
      title: '高德地图拖拽定位演示',
      locatorUrl: '',
    }
  },
  methods: {
    locatorInfo(event) {
      logger.debug('拖拽定位信息', event)
    },
  },
  created() {
    app = this
    logger.debug(app.title)
    app.locatorUrl = 'https://m.amap.com/picker/?zoom=16&center=111.671411,29.045132&key=91b7beeea397d66f5cc8b54b4366a04c'
  },
  mounted() {
    window.addEventListener('message', app.locatorInfo)
  },
  destroyed() {
    window.removeEventListener('message', app.locatorInfo)
  },
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
#map-container {
  flex: 1;
}
#map-container iframe {
  width: 100%;
  height: 100%;
}
</style>
