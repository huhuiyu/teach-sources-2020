console.log('in common.js======>');

// 获取格式化当前时间的function
function getFormatNow() {
  let now = new Date();

  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  let h = now.getHours();
  let mm = now.getMinutes();
  let s = now.getSeconds();
  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;

  h = h < 10 ? '0' + h : h;
  mm = mm < 10 ? '0' + mm : mm;
  s = s < 10 ? '0' + s : s;
  let result = y + '年' + m + '月' + d + '日' + h + ':' + mm + ':' + s;
  console.log('当前时间：', result);
  // return 值;表示调用function的人可以获取到该值！！！
  // 注意return不论有没有值，还是会无条件中断function的执行
  return result;
}

// 判断值是否为整数的function
// 传递给function的值放在()里面
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
