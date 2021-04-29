console.log('进入h05.js=====>');
let txtNum = document.getElementById('txtNum');
let btnNum = document.getElementById('btnNum');
let spNum = document.getElementById('spNum');
console.log('数值校验相关:', txtNum, btnNum, spNum);

btnNum.addEventListener('click', function () {
  spNum.innerHTML = '';
  // 表单输入的值都是字符串类型
  // trim方法是字符串特有的功能，表示去掉头尾的空白字符
  let num = txtNum.value.trim();
  console.log('输入的数值：', num);
  // if流程判断格式
  // if(逻辑表达式){
  //    逻辑表达式为真时要执行的js代码
  // }
  // 逻辑表达式 只有真（true）假（false）两种结果
  // == 是相等测试，表示前后的值是否相等
  if ('' == num) {
    spNum.innerHTML = '没有输入内容！';
    // return关键字表示无条件中断当前方法的执行，立即返回
    // return肯定是和流程判断搭配使用！！！！
    return;
  }
  console.log('是否输入内容的测试通过');
  // 是否输入是数的判断
  // isNaN:is not a number
  // 判断值是否不是一个数，不是返回true，否则返回false
  if (isNaN(num)) {
    spNum.innerHTML = '输入的不是数！';
    return;
  }
  console.log('输入的数是：', num);
});

// 颜色输入和样式更换部分=====================
let txtRed = document.getElementById('txtRed');
let txtGreen = document.getElementById('txtGreen');
let txtBlue = document.getElementById('txtBlue');
let btnColor = document.getElementById('btnColor');
let spColor = document.getElementById('spColor');
let divColor = document.getElementById('divColor');
console.log('颜色相关', txtRed, txtGreen, txtBlue, btnColor, spColor, divColor);

btnColor.addEventListener('click', function () {
  spColor.innerHTML = '';
  // 红色输入校验部分
  let red = txtRed.value.trim();
  if ('' == red) {
    spColor.innerHTML = '没有输入红色的值';
    return;
  }
  if (isNaN(red)) {
    spColor.innerHTML = '红色值必须是数';
    return;
  }
  // 是否为整数的判断
  let intv = parseInt(red); //转换字符串为整数
  let floatv = parseFloat(red); //转换字符串为数值
  console.log('转换整数和数值的结果：', intv, floatv);
  // 转换整数和数值的结果不相同就一定是小数！！！
  if (intv != floatv) {
    spColor.innerHTML = '红色值必须是整数';
    return;
  }
  
});
