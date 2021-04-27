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
