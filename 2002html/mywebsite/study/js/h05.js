console.log('进入h05.js=======>');
let txtNumb = document.getElementById('txtNumb');
let btnNumb = document.getElementById('btnNumb');
let spNumb = document.getElementById('spNumb');
console.log('数值校验相关：', txtNumb, btnNumb, spNumb);

btnNumb.addEventListener('click', function () {
  // 不论什么情况，进入的时候清除掉信息
  spNumb.innerHTML = '';
  // 表单输入的值都是字符串！！！！
  // trim()是字符串特有的功能，表示去掉字符串头尾的空白字符
  let numb = txtNumb.value.trim();

  // if流程判断格式
  // if(逻辑表达式) {
  //    如果逻辑表达式为真(true)会执行这里面的代码
  // }
  // 逻辑表达式只有真假两个结果，true/false
  // == 相等测试运算符 判断符号前后的值是否相等
  if ('' == numb) {
    spNumb.innerHTML = '请输入信息！';
    // return关键字表示无条件中断当前方法的执行，立即返回
    // 所以return必然和流程判断一起使用
    return;
  }
  console.log('必须输入的校验通过！');
  // 判断是否是数 isNaN is not a number
  // isNaN用于判断值是否不是一个数，不是数返回真，是返回假
  if (isNaN(numb)) {
    spNumb.innerHTML = '必须输入数值！';
    return;
  }
  console.log('输入的数是：', numb);
});

// 颜色更换效果部分 ==================================
let txtRed = document.getElementById('txtRed');
let txtGreen = document.getElementById('txtGreen');
let txtBlue = document.getElementById('txtBlue');
let btnColor = document.getElementById('btnColor');
let spColor = document.getElementById('spColor');
let divColor = document.getElementById('divColor');
console.log(
  '变更颜色相关元素',
  txtRed,
  txtGreen,
  txtBlue,
  btnColor,
  spColor,
  divColor
);

btnColor.addEventListener('click', function () {
  spColor.innerHTML = '';
  // 红色值的判断部分
  let red = txtRed.value.trim();
  console.log('输入的红色值是：', red);
  if ('' == red) {
    spColor.innerHTML = '红色的值必须填写';
    return;
  }
  if (isNaN(red)) {
    spColor.innerHTML = '红色的值必须是数值';
    return;
  }
  // 整数判断
  let intv = parseInt(red); //转换字符串到整数
  let floatv = parseFloat(red); //转换字符串到数值
  console.log('转换整数和数值的结果：', intv, floatv);
  // != 不相等测试，运算符前后的值不相等就返回真
  if (intv != floatv) {
    spColor.innerHTML = '红色的值必须是整数';
    return;
  }
  // 红色值必须是0-255之间
  if (red < 0) {
    spColor.innerHTML = '红色的值不能小于0';
    return;
  }
  if (red > 255) {
    spColor.innerHTML = '红色的值不能大于255';
    return;
  }
  // 绿色的判断部分
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
  // || 短路或运算 运算符前后的表达式任意一个为真，结果就为真
  // 短路运算表示 第一个表达式为真，后面的表达式不再运算
  if (intv < 0 || intv > 255) {
    spColor.innerHTML = '绿色值必须是0-255';
    return;
  }

  // 练习就是加上蓝色的部分
  // 切换背景颜色
  // background-color: rgb(255,0,0);
  divColor.style.backgroundColor = 'rgb(' + red + ',' + green + ',0)';
});
