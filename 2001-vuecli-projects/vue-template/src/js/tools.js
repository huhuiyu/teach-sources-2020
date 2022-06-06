// 导入npm安装的第三方js
import spark from 'spark-md5'
import axios from 'axios'
import qs from 'qs'

// 服务器根地址
const BASE_URL = 'https://huhuiyu.top/teach_project_service'
// 本地保存token的名称
const TOKEN_KEY = 'huhuiyu.teach.token'

function saveToken(data) {
  // 保存服务器的token信息
  if (data && data.token) {
    localStorage.setItem(TOKEN_KEY, data.token)
  }
}

function loadToken() {
  // 获取本地存储的token信息
  let token = localStorage.getItem(TOKEN_KEY)
  return token ? token : ''
}

// 公用工具类js（必须使用es6模块方式）
let tools = {
  info: '公用工具类js',
  // md5加密
  md5(info) {
    if (info && info.trim() != '') {
      return spark.hash(info)
    }
    return ''
  },
  // ajax请求封装
  ajax(url, params, cb, method) {
    // url要带上根地址
    url = BASE_URL + url
    // 参数的处理(Qs进行转换)
    let data = qs.stringify(params, { allowDots: true })
    // method的判断
    method = method ? method : 'post'
    // get请求的处理(必须是url?查询字符串传递参数)
    if ('get' == method) {
      url = url + '?' + data
      data = ''
    }
    // 通过axiso发起请求
    let promise = axios({
      url: url,
      data: data,
      method: method,
      // token要通过请求头传递
      headers: {
        token: loadToken(),
      },
    })
    // 应答的回调处理
    promise
      .then(function (resp) {
        // 成功调用的情况
        console.log('ajax应答结果', resp)
        // 保存token，data字段是服务器应答的数据
        saveToken(resp.data)
        // 回调处理
        cb(resp.data)
      })
      .catch((err) => {
        console.error('请求失败', err)
        // 伪造错误应答回调
        cb({ code: 500, success: false, message: '请求错误' })
      })
  },
  // 文件上传封装
  upload(file, params, cb) {
    // 文件上传需要FormData处理
    let data = new FormData()
    data.append('file', file)
    for (let key in params) {
      data.append(key, params[key])
    }
    // 文件上传请求
    let promise = axios({
      url: BASE_URL + '/user/file/upload',
      data: data,
      method: 'post',
      headers: {
        token: loadToken(),
        'Content-Type': 'multipart/form-data',
      },
    })
    // 应答的回调处理
    promise
      .then(function (resp) {
        // 成功调用的情况
        console.log('ajax应答结果', resp)
        // 保存token，data字段是服务器应答的数据
        saveToken(resp.data)
        // 回调处理
        cb(resp.data)
      })
      .catch((err) => {
        console.error('请求失败', err)
        // 伪造错误应答回调
        cb({ code: 500, success: false, message: '请求错误' })
      })
  },
  // 获取下载的链接地址
  getDownloadUrl(fid) {
    return BASE_URL + '/user/file/download?fid=' + fid
  },
  // 获取开发者密钥
  getAccessKey() {
    return '76cb360d-256b-4660-8e13-ab4e3ae9f874'
  },
  // 合并任意数量的json对象
  concatJson() {
    // 不固定数量的参数可以通过arguments内置对象获取到
    // 该对象为数组，数量就是参数的个数
    let args = arguments
    console.log('方法参数数组：', args)
    let result = {}
    // 循环获取参数
    for (let i = 0; i < args.length; i++) {
      let json = args[i]
      console.log('参数' + i, json)
      // 复制信息
      for (let key in json) {
        // json的a.b可以写成a['b']
        result[key] = json[key]
      }
    }
    return result
  },
}

// 导出对象供其它js文件引用
export default tools
