console.log('进入h02.js=====>');

// 变量声明格式 let 名称=初始值;(let也可以是var，也可以不写)
let v01 = 100;
let v02 = '黑暗骑士';
let v03 = 3.14;
console.log('js变量信息：', v01, v02, v03);
// 变量可以修改变化，js中=号是赋值操作，不是相等判断
v01 = 'js的变量可以任意修改类型和值';
v02 = v02 + 123;
console.log('修改变量信息：', v01, v02);

// 一个特别的变量类型
let now = new Date();
console.log('系统当前时间：', now);

// 数学运算
let num1 = 100;
let num2 = 19;
let num3 = 25;
// +-*/%：加，减，乘，除，取模（余商）
// js的除法不论是否全是整数，只要除不尽就一定是小数的结果
console.log(
  '数学运算',
  num1 + num2,
  num1 - num2,
  num2 * num3,
  num1 / num2,
  num1 / num3,
  num1 % num2
);
// js的奇怪操作
// js的加法只要遇到非数的值就会转成字符串拼接
// 其它的运算如果内容是数值，会尝试计算
console.log('js？', 22 + '33', 22 * '33');
// 变量来自于页面元素
let divDemo = document.getElementById('divDemo');
console.log('页面上id=divDemo的元素', divDemo);
let txtDemo = document.getElementById('txtDemo');
console.log('另一个页面元素', txtDemo);
// 如果指定的元素不存在（一般都是写错了）
// 会得到一个不可以操作的null值！！！！
let nothing = document.getElementById('divAbc');
console.log('不存在的页面元素：', nothing);
// 对不存在的null对象做操作会引发异常，之后的代码都无法执行！！！
nothing.innerHTML = 'dddd';
console.log('最后的哈哈哈哈，嘻嘻嘻嘻');
