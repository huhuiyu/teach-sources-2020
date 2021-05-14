// 公用js文件
console.log('进入common.js=====>');
// 获取格式化当前时间的function，格式为yyyy年MM月dd日 hh:mm:ss
function getNowInfo() {
  let now = new Date();
  // 获取基本的时间信息
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  let h = now.getHours();
  let mm = now.getMinutes();
  let s = now.getSeconds();
  // 处理前导0
  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;
  h = h < 10 ? '0' + h : h;
  mm = mm < 10 ? '0' + mm : mm;
  s = s < 10 ? '0' + s : s;
  // 拼接结果
  let result = y + '年' + m + '月' + d + '日' + h + ':' + mm + ':' + s;
  console.log('格式化的当前时间：', result);
  // 返回结果值给调用funciton的人
  // return关键字后面如果有值，表示调用者可以获取到该值
  // 同样的，一旦执行return将无条件中断function的执行
  // 所以要么在代码的最后，要么在判断中
  return result;
}

// 判断值是否为整数的方法
// 需要传入要判断的值，写在function括号里面的就是要传入的数据
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
