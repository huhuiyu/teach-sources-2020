let divInfo = document.querySelector('.container>div:last-of-type')
divInfo.innerHTML = '地图加载，请稍候。。。'
let map
AMapLoader.load({
  key: 'c8aa7aa9ff90ddd1d80bf147825dda20', // 申请好的Web端开发者Key，首次调用 load 时必填
  version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  plugins: ['AMap.Geolocation', 'AMap.Scale', 'AMap.ToolBar', 'AMap.Marker'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
})
  .then((AMap) => {
    map = new AMap.Map('map-container', {
      zoom: 15, //级别
    })
    divInfo.innerHTML = '地图加载完毕'

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
    // 添加控件到地图
    map.addControl(geolocation)

    geolocation.getCurrentPosition((state, result) => {
      console.log(state, result)
      // 定位正确
      if ('complete' == state) {
        // 移动地图中心点到定位获取的坐标点
        // 29.045134,111.671367
        map.setCenter(result.position)
        // map.setCenter(new AMap.LngLat(111.671646, 29.044939))
        map.addControl(
          new AMap.Marker({
            position: result.position,
            title: '当前位置',
          })
        )
      }
    })

    map.addControl(new AMap.Scale({ position: 'LT' }))
    map.addControl(new AMap.ToolBar({ position: 'LB' }))
    map.addControl(
      new AMap.Marker({
        position: new AMap.LngLat(111.671646, 29.044939),
        title: '第二办公楼',
      })
    )
  })
  .catch((e) => {
    console.log(e)
  })
