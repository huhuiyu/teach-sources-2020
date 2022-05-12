// 导入npm安装的js
import qs from 'qs'
import axios from 'axios'
import spark from 'spark-md5'

// 公用工具类js
let tools = {
  info: '公用工具js',
  test() {
    console.log('公用工具js的测试', qs, axios, spark)
  },
  // md5加密方法
  md5(info) {
    if (info && info.trim() != '') {
      return spark.hash(info)
    }
    return ''
  },
}

// 必须导出一个js对象
export default tools
