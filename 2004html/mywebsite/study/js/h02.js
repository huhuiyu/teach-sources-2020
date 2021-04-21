console.log('进入h02.js=====>');

// 变量声明格式：let 变量名称=变量的值;
// let也可以是var或者省略不写
let v01 = 100;
let v02 = '黑暗骑士';
let v03 = 25.678;
console.log('变量信息：', v01, v02, v03);
// 变量的值是可以修改变化的
v01 = 'js的变量可以随意修改类型和值';
console.log('v01变化：', v01);
// 时间日期变量
let now = new Date();
console.log('当前时间：', now);
// 数值运算
let num1 = 100;
let num2 = 17;
let num3 = 25;
// js的除法，不论是不是全部整数，只要除不尽，就是小数结果
console.log(
  '数值运算:',
  num1 + num2,
  num1 - num2,
  num1 * num2,
  num1 / num2,
  num1 / num3,
  num1 % num2
);
// js的加运算，如果里面有字符串，结果是拼接
// 其它数值运算，如果字符串里面是数，js会尝试计算结果
console.log('js的计算规则', 22 + '33', 22 * '33');
