import Vue from 'vue'

// vue全局过滤器定义
/*
  过滤器定义的格式
  Vue.filter('过滤器的名称',数据处理的function(){
    第一个参数固定为页面传入值，也就是页面过滤器表达式|前面的值
    2-n参数才是过滤器传入的其它参数值
  })
  页面调用是在注值表达式里面 用 | 过滤器名称([可选参数列表])
  例如 {{vue的值名称 | 过滤器名称}}
  表示将页面上对应vue的值传入给过滤器处理
  作业：同步上课的部门和员工管理完成班级和学生的管理
  在上课完成员工管理之后的一个星期一交作业
*/
Vue.filter('formatDate', function (value, format) {
  console.log('filter formatDate的参数：', value, format)
  // 处理默认格式
  format = format ? format : 'yyyy-MM-dd hh:mm:ss'
  // 获取时间戳对应的日期信息
  let date = new Date()
  date.setTime(value)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  let h = date.getHours()
  let mm = date.getMinutes()
  let s = date.getSeconds()
  // 替换格式字符串(自己完成前导0)
  let result = format.replace(/yyyy/g, y)
  result = result.replace(/MM/g, m)
  result = result.replace(/dd/g, d)
  result = result.replace(/hh/g, h)
  result = result.replace(/mm/g, mm)
  result = result.replace(/ss/g, s)

  return result
})
