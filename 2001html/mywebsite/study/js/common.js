// 公用js文件
console.log('进入common.js=====>');
// 格式化显示时间的function
function getNowInfo() {
  let now = new Date();
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  let h = now.getHours();
  let mm = now.getMinutes();
  let s = now.getSeconds();
  // ?:三元表达式
  // 如果?前面的表达式为true，就执行：前面的代码
  // 否则执行：后面的代码
  // 下面的表达式意思:如果m的值小于10，就前面补一个0
  // 否则不做修改等于原值
  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;
  h = h < 10 ? '0' + h : h;
  mm = mm < 10 ? '0' + mm : mm;
  s = s < 10 ? '0' + s : s;
  let result = y + '年' + m + '月' + d + '日' + h + ':' + mm + ':' + s;
  console.log('当前时间：', result);
  // return 后面如果有值,表示调用function的人可以得到该值！
  return result;
}

// 判断值是否为整数的方法
// 需要传入要判断的值！！！
// 传入值是写在()中，专有名称叫形参
function isInt(value) {
  if (value == null) {
    return false;
  }
  if (value.trim() == '') {
    return false;
  }
  if (isNaN(value)) {
    return false;
  }
  let intv = parseInt(value);
  let floatv = parseFloat(value);
  return intv == floatv;
}
