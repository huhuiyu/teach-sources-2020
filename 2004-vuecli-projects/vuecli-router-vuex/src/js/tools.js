// npm install的插件和js直接不需要路径就能导入
import qs from 'qs'
import axios from 'axios'
import spark from 'spark-md5'
// 这里面的js按照es6的module规范编写即可
let tools = {
  info: '通用工具类',
  test() {
    console.log('js导入测试', qs, axios, spark)
  },
  // md5加密方法
  md5(info) {
    if (info && info.trim() != '') {
      return spark.hash(info)
    }
    return ''
  },
}

export default tools
