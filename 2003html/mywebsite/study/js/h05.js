console.log('进入h05.js=====>');
let txtNumb = document.getElementById('txtNumb');
let btnNumb = document.getElementById('btnNumb');
let spNumb = document.getElementById('spNumb');
console.log('判断输入的元素', txtNumb, btnNumb, spNumb);

btnNumb.addEventListener('click', function () {
  // 进入的时候清理掉信息
  spNumb.innerHTML = '';
  // 第一步获取输入的值(trim是字符串特有方法，是去掉头尾空白字符)
  let num = txtNumb.value.trim();
  console.log('输入的是：', num);
  // 第二步，判断是否有输入内容，注意，输入的值都是字符串
  // if流程判断的格式和语义
  // if(逻辑判断表达式) {
  //   逻辑判断表达式为true（真）的时候要执行的js代码
  // }
  // 逻辑判断表达式1：==表示符号前后的值是否相等
  // 下面的if表示如果num（输入的值）是否和''(空字符串)相等
  if ('' == num) {
    // num是空字串，也就是没有输入东西的情况
    spNumb.innerHTML = '必须输入信息！';
    // return关键字是无条件中断当前方法的执行
    return;
  }
  console.log('必须输入的判断完成');
  // 第三步，判断输入的是不是数！！
  // isNaN方法可以判断是不是数 is not a number
  // ()中是要判断的数据，如果数据不是数，结果是true
  // 如果数据是数，结果为false
  if (isNaN(num)) {
    spNumb.innerHTML = '输入的必须是数值！';
    return;
  }
  console.log('数值的判断完成');
});

// 颜色处理的部分===============================
// 红色值的输入框
let txtRed = document.getElementById('txtRed');
// 绿色值的输入框
let txtGreen = document.getElementById('txtGreen');
// 蓝色值的输入框
let txtBlue = document.getElementById('txtBlue');
// 颜色确定按钮
let btnColor = document.getElementById('btnColor');
// 显示错误提示信息的span
let spColor = document.getElementById('spColor');
console.log('颜色相关：', txtRed, txtGreen, txtBlue, btnColor, spColor);

btnColor.addEventListener('click', function () {
  spColor.innerHTML = '';
  // 红色的值处理
  let red = txtRed.value.trim();
  // 必须要输入信息
  if (red == '') {
    spColor.innerHTML = '必须输入红色的值！';
    return;
  }
  // 必须输入的是数
  if (isNaN(red)) {
    spColor.innerHTML = '红色必须输入的是数值！';
    return;
  }
  // 必须是整数
  let intv = parseInt(red); //将字符串转换成整数
  let floatv = parseFloat(red); // 将字符串转换成数
  console.log('转换两种数值的结果', intv, floatv);
  // !=表示符号前后的值不相等
  // 一个数转换成整数和小数的结果不一样，就一定是小数
  if (intv != floatv) {
    spColor.innerHTML = '红色必须是整数！';
    return;
  }
  // 必须是0-255
  if (intv < 0) {
    spColor.innerHTML = '红色值不能小于0';
    return;
  }
  if (intv > 255) {
    spColor.innerHTML = '红色值不能大于255';
    return;
  }
  console.log('红色的值：', red);
  // 红色的部分结束
  // 绿色的部分开始
  let green = txtGreen.value.trim();
  if ('' == green) {
    spColor.innerHTML = '请输入绿色值！';
    return;
  }
  if (isNaN(green)) {
    spColor.innerHTML = '绿色值必须是数!';
    return;
  }
  intv = parseInt(green);
  floatv = parseFloat(green);
  if (intv != floatv) {
    spColor.innerHTML = '绿色值必须是整数！';
    return;
  }
  // || 表示符号前后的逻辑值只要一个为true，结果就是true
  // 叫做短路或运算，短路的意思是如果第一个为真，第二个就不用计算
  if (intv < 0 || intv > 255) {
    spColor.innerHTML = '绿色值必须是0-255';
    return;
  }
  // 绿色部分的结束

  // 将divColor的背景颜色替换成输入的值！
  let divColor = document.getElementById('divColor');
  divColor.style.backgroundColor = 'rgb(' + red + ',' + green + ',0)';
  //如果red是200，拼接的结果就是: rgb(200,0,0)
});
