import Vue from 'vue'

// 全局过滤器定义
// 格式化时间的过滤器
// filter的格式
/*
Vue.filter('filter的名称',处理filte数据的function(){
  function的第一个参数是过滤器前面数据
  第二个参数开始才是传递给过滤器的其它参数
  过滤器要有返回值供页面显示
});
调用方式（页面），任意注入值表达式里面使用
例如 {{vue的值表达式  | filter名称([参数列表...]) }}
表示将vue的值传入对应filter进行处理
属性注入也可以使用filter 例如 :title="vue的值表达式  | filter名称"
*/
Vue.filter('formatDate', function (value, format) {
  console.log('formatDate的数据：', value, format)
  if (!value) {
    return ''
  }
  // 处理时间格式
  format = format ? format : 'yyyy-MM-dd hh:mm:ss'
  let date = new Date()
  date.setTime(value)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  // 自己做前导补零
  let result = format.replace(/yyyy/g, year)
  result = result.replace(/MM/g, month)
  result = result.replace(/dd/g, day)
  result = result.replace(/hh/g, hour)
  result = result.replace(/mm/g, minute)
  result = result.replace(/ss/g, second)
  return result
})
