// 全局过滤器（filter）定义
/*
  Vue.filter('过滤器名称',值处理函数(){
    值处理函数第一个参数一定是页面传入的值！！！
    第二到第n个参数是页面过滤器传入的其它参数
    必须要有返回值供页面显示
  })
  页面调用是任意注值的表达式的后面
  格式是 vue值 | 过滤器名称([可选参数列表])
  vue会将vue值作为第一参数传入到过滤器
*/
Vue.filter('formatDate', function (value, format) {
  console.log('formatDate的参数信息：', value, format);
  // 格式的处理
  format = format ? format : 'yyyy-MM-dd hh:mm:ss';
  // 时间戳处理
  let date = new Date();
  date.setTime(value);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let mm = date.getMinutes();
  let s = date.getSeconds();
  // 格式化
  let result = format.replace(/yyyy/g, y);
  result = result.replace(/MM/g, m);
  result = result.replace(/dd/g, d);
  result = result.replace(/hh/g, h);
  result = result.replace(/mm/g, mm);
  result = result.replace(/ss/g, s);

  return result;
});

// 复制jsona对象的数据到jsonb
function copyJsonInfo(jsona, jsonb) {
  // json数据的特殊迭代
  for (let key in jsona) {
    console.log('jsona的信息', key, jsona[key]);
    jsonb[key] = jsona[key];
  }
}

// 性别的数组
const SEX_LIST = [
  { value: 'm', text: '男生' },
  { value: 'f', text: '女生' },
  { value: 'n', text: '保密' },
];

// 性别过滤器
Vue.filter('sex', function (value) {
  for (let i = 0; i < SEX_LIST.length; i++) {
    let data = SEX_LIST[i];
    if (data.value == value) {
      return data.text;
    }
  }
  return '性别值错误';
});
