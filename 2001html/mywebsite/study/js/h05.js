console.log('进入h05.js====>');
let txtNumb = document.getElementById('txtNumb');
let btnNumb = document.getElementById('btnNumb');
let spNumb = document.getElementById('spNumb');
console.log('数值输入验证相关元素', txtNumb, btnNumb, spNumb);

btnNumb.addEventListener('click', function () {
  // 进入判断前清理信息
  spNumb.innerHTML = '';
  // 第一步：获取输入的信息
  // trim是字符串特有的方法，表示去掉头尾的空白字符
  let numb = txtNumb.value.trim();
  console.log('输入的值是：', numb);
  // 第二步，判断是否有输入信息
  // 表单的输入值类型都是字符串
  // if流程判断的格式
  // if(逻辑判断表达式){
  //    逻辑判断表达式为true（真）时要执行的js代码
  // }
  // 逻辑判断表达式只能是true,false两个结果
  // ==是用于判断符号前后的两个值是否相等
  // 下面的表达式意思是，numb是否为空字符串
  if ('' == numb) {
    spNumb.innerHTML = '请输入信息！！！！';
    return;
  }
  console.log('必须输入的检查通过。。。。');
  // 第三步，判断是否为数值
  // isNaN(值) 用于判断值是否不是数
  // 不是的返回true，是的返回假
  // isNaN是 is not a number的缩写
  if (isNaN(numb)) {
    spNumb.innerHTML = '输入的必须是数！';
    return;
  }
  // return关键字表示无条件中断当前方法的执行！！！
  console.log('校验通过。。。');
});

// js根据输入改变背景颜色的部分======================
// 演示输入框
let txtRed = document.getElementById('txtRed');
let txtGreen = document.getElementById('txtGreen');
let txtBlue = document.getElementById('txtBlue');
// 确定按钮
let btnColor = document.getElementById('btnColor');
// 错误提示和演示div
let spColor = document.getElementById('spColor');
let divColor = document.getElementById('divColor');
console.log(
  '颜色演示相关元素：',
  txtRed,
  txtGreen,
  txtBlue,
  btnColor,
  spColor,
  divColor
);

btnColor.addEventListener('click', function () {
  // 先清除掉错误提示
  spColor.innerHTML = '';
  // 红色的输入值校验
  let red = txtRed.value.trim();
  if (red == '') {
    spColor.innerHTML = '必须输入红色值！';
    return;
  }
  if (isNaN(red)) {
    spColor.innerHTML = '红色值必须是数';
    return;
  }
  // 怎么判断输入的是否为整数
  let intv = parseInt(red); //转换字符串为整数
  let floatv = parseFloat(red); //转换字符串为数值
  console.log('转换整数和数值的结果：', intv, floatv);
  // 转换数值和整数的结果不相等那就是小数，否则一定是整数
  // != 表示符号前后的数值是否不相等
  if (intv != floatv) {
    spColor.innerHTML = '红色值必须是整数';
    return;
  }
  // 值不能小于0
  if (intv < 0) {
    spColor.innerHTML = '红色值不能小于0';
    return;
  }
  // 值不能大于255
  if (intv > 255) {
    spColor.innerHTML = '红色值不能大于255';
    return;
  }
  // 红色的部分完成
  // 绿色的数值判断
  let green = txtGreen.value.trim();
  if ('' == green) {
    spColor.innerHTML = '绿色值必须输入';
    return;
  }
  if (isNaN(green)) {
    spColor.innerHTML = '绿色值必须是数';
    return;
  }
  intv = parseInt(green);
  floatv = parseFloat(green);
  if (intv != floatv) {
    spColor.innerHTML = '绿色值必须是整数';
    return;
  }
  // || 短路或运算
  // 该运算符前后都是逻辑表达式，任何一个为真，结果就为真
  // 短路的意思是前面的表达式为真，后面的表达式就不会计算
  if (intv < 0 || intv > 255) {
    spColor.innerHTML = '绿色值必须是0-255';
    return;
  }

  // 根据输入切换背景演示
  // style="background-color: rgb(200,0,0);"
  divColor.style.backgroundColor = 'rgb(' + red + ',' + green + ',0)';
  // 练习部分，将蓝色值的功能完成
});
