<template>
  <div class="container">
    <div> {{ title }} </div>
    <!-- 地图区域 -->
    <div id="map-container"></div>
  </div>
</template>

<script>
import logger from '@/js/logger'
import AMapLoader from '@amap/amap-jsapi-loader'
import tools from '@/js/tools'
let app
let map
export default {
  name: 'AMapView',
  data() {
    return {
      title: '高德地图演示',
    }
  },
  created() {
    app = this
    logger.debug(app.title)
  },
  mounted() {
    // 地图的加载必须是页面挂载完成之后
    // 这个时候才能操作dom元素
    AMapLoader.load({
      key: '91b7beeea397d66f5cc8b54b4366a04c', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.Geocoder', 'AMap.Marker', 'AMap.Geolocation', 'AMap.ToolBar', 'AMap.Scale'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        map = new AMap.Map('map-container', {
          zoom: 18,
          // center: [111.671411, 29.045132],
        })
        // 点标记
        let marker = new AMap.Marker({
          position: new AMap.LngLat(111.671411, 29.045132),
          title: '第二办公楼',
        })
        map.add(marker)
        // 定位
        let geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量
          offset: [10, 20],
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          position: 'RB',
        })

        map.addControl(geolocation)
        map.addControl(
          new AMap.ToolBar({
            position: 'LT',
          })
        )
        map.addControl(
          new AMap.Scale({
            position: 'RT',
          })
        )

        // 启动定位功能
        geolocation.getCurrentPosition((status, result) => {
          console.log('定位结果：', status, result)
          if ('complete' == status) {
            // 成功定位的情况
            console.log('位置信息', result.position)
            map.setCenter(result.position)
            map.add(
              new AMap.Marker({
                position: result.position,
                title: '当前位置',
              })
            )
            // 通过逆地理编码获取坐标所在城市信息
            let geocoder = new AMap.Geocoder({})
            geocoder.getAddress([result.position.lng, result.position.lat], function (geostatus, georesult) {
              if (geostatus === 'complete' && georesult.info === 'OK') {
                logger.debug('逆地理编码结果', georesult)
                let adcode = georesult.regeocode.addressComponent.adcode
                tools.ajax(
                  '/api/amap/weatherInfo',
                  {
                    city: adcode,
                  },
                  (data) => {
                    logger.debug('天气信息：', data)
                  }
                )
              }
            })
          } else {
            alert(status + '定位失败：' + JSON.stringify(result))
          }
        })
      })
      .catch((e) => {
        console.log(e)
      })
  },
  destroyed() {
    // 如果地图存在要做销毁的动作
    if (map) {
      map.destroy()
      map = null
    }
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
</style>
