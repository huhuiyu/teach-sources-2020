let map

AMapLoader.load({
  key: 'a6955e331633689a959d3ebae961bc3d', // 申请好的Web端开发者Key，首次调用 load 时必填
  version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  plugins: ['AMap.Geolocation', 'AMap.Marker', 'AMap.Scale', 'AMap.ToolBar'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
})
  .then((AMap) => {
    map = new AMap.Map('map-container', {
      zoom: 15,
    })
    // 使用定位功能
    let geolocation = new AMap.Geolocation({
      // 是否使用高精度定位，默认：true
      enableHighAccuracy: true,
      // 设置定位超时时间，默认：无穷大
      timeout: 10000,
      // 定位按钮的停靠位置的偏移量
      offset: [10, 20],
      //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      // zoomToAccuracy: true,
      //  定位按钮的排放位置,  RB表示右下
      position: 'RB',
    })
    // 执行定位功能
    geolocation.getCurrentPosition((status, result) => {
      console.log(status, result)
      if ('complete' == status) {
        // 设置地图中心点到定位的位置
        console.log(result.position)
        // map.setCenter(result.position)
        // 强制使用第二办公楼作为中心
        map.setCenter([111.671355, 29.045143])
      }
    })
    // 将定位组件添加到地图显示
    // map.addControl(geolocation)

    // 强制使用第二办公楼作为中心
    map.setCenter([111.671355, 29.045143])

    map.addControl(
      new AMap.Marker({
        position: new AMap.LngLat(111.671355, 29.045143),
        title: '第二办公楼',
      })
    )

    map.addControl(
      new AMap.Marker({
        position: new AMap.LngLat(111.657672, 29.04264),
        title: '五强溪基地',
      })
    )

    map.addControl(
      new AMap.ToolBar({
        position: 'LB',
      })
    )

    map.addControl(
      new AMap.Scale({
        position: 'LT',
      })
    )
  })
  .catch((e) => {
    console.log(e)
  })
