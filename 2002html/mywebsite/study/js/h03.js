console.log('进入h03.js======>');

// 获取和时间相关的页面元素
let btnNow = document.getElementById('btnNow');
let spNow = document.getElementById('spNow');
let spTime = document.getElementById('spTime');
console.log('时间相关元素：', btnNow, spNow, spTime);

// 记录点击次数的变量
let count = 0;
// 点击事件的格式：
// 页面元素.addEventListener('click', function () {
// 页面元素点击之后要执行的js代码
// });
btnNow.addEventListener('click', function () {
  // 计算器加1
  count = count + 1;
  // 获取系统当前时间
  let now = new Date();
  console.log('点击了获取当前时间的按钮，次数：', count, now);
  // 将时间显示在页面上的spNow中
  // 页面元素.innerHTML是获取或者设置元素里面的内容
  spNow.innerHTML = now;
  // 定制时间显示格式，目标格式为：2021年4月22日 17:5:35
  // 获取时间分部的信息值
  let year = now.getFullYear();
  // 月份返回的是0-11月，所以要加1才正确
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  // now.getMilliseconds
  console.log('当前时间分部信息：', year, month, day, hour, minute, second);
  spTime.innerHTML =
    year +
    '年' +
    month +
    '月' +
    day +
    '日 ' +
    hour +
    ':' +
    minute +
    ':' +
    second;
});

console.log('计算相关部分============================');
let txtNum1 = document.getElementById('txtNum1');
let txtNum2 = document.getElementById('txtNum2');
let spResult = document.getElementById('spResult');
let btnCompute = document.getElementById('btnCompute');
console.log(txtNum1, txtNum2, spResult, btnCompute);

btnCompute.addEventListener('click', function () {
  // 获取到表单元素输入的值（表单元素特有的属性）
  let num1 = txtNum1.value; //value属性就是表单元素的输入值
  let num2 = txtNum2.value;
  console.log('表单元素的值：', num1, num2);
  // 表单元素输入值都是字符串类型，所以加法会是拼接的结果
  // 通过parseFloat方法可以将字符串转换数字
  // 但是要求字符串的内容必须是数值
  spResult.innerHTML = parseFloat(num1) + parseFloat(num2);
});
// 练习题，仿造加法的功能，完成减法，乘法，除法的功能
