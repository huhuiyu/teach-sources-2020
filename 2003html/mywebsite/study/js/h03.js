console.log('进入h03.js====>');
// 第一步获取按钮元素
let btn01 = document.getElementById('btn01');
console.log('获取时间的按钮：', btn01);
let count = 0;
let spNow = document.getElementById('spNow');
console.log('用于显示时间的span:', spNow);
// 第二步监听点击的事件
// 页面元素.addEventListener('click',function(){
// 点击后要执行的js代码
// });
btn01.addEventListener('click', function () {
  // 计数加1
  count = count + 1;
  console.log('点击了获取时间的按钮，次数为：', count);
  // 元素.innerHTML用于获取或者设置元素里面的内容
  // 下面的代码会将spNow里面的内容替换成当前的时间
  spNow.innerHTML = new Date();

  // 自定义时间显示格式（2021年4月25日 8:6:29）
  let spTime = document.getElementById('spTime');
  // 获取分部的时间信息
  let now = new Date();
  let year = now.getFullYear(); //年
  // 获取月份返回的是0-11，需要做加一的处理
  let month = now.getMonth() + 1; //月
  let day = now.getDate(); //日
  let hour = now.getHours(); //时
  let minute = now.getMinutes(); //分
  let second = now.getSeconds(); //秒

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

// 表单元素获取值的演示部分===============================
let txtNum1 = document.getElementById('txtNum1');
let txtNum2 = document.getElementById('txtNum2');
let spJia = document.getElementById('spJia');
let btnCompute = document.getElementById('btnCompute');
console.log('表单值相关元素', txtNum1, txtNum2, spJia, btnCompute);

btnCompute.addEventListener('click', function () {
  // 获取表单元素的输入值（表单元素特有的属性）
  let num1 = txtNum1.value;
  let num2 = txtNum2.value; // value就是输入值
  console.log('表单元素的输入值：', num1, num2);
  // 计算并显示相加的结果
  // 表单元素获取到的值都是字符串！！！！！
  // 如果需要数学运算，要转换成数值才行
  // parseFloat方法可以将字符串转换成数（必须是数值格式的字符串）
  spJia.innerHTML = parseFloat(num1) + parseFloat(num2);
});
// 练习题：
// 仿造加法的这一套，完成减法，乘法，除法的相关功能
