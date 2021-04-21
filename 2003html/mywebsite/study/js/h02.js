console.log('进入h02.js====>');
// 切记！！！！js也是大小写敏感！！！
// 变量声明格式： let 名称=值;(let也可以是var)
let v01 = 100; // 整数
let v02 = '黑暗骑士'; // 字符串
let v03 = 3.14; // 小数
console.log('变量信息：', v01, v02, v03);
// 变量赋值
v01 = 'js的变量可以随意修改类型和值';
v02 = v02 + '很帅';
console.log('修改后的变量:', v01, v02);

// 时间日期类型变量
let now = new Date();
console.log('当前时间：', now);

// 常用运算符
let num1 = 100;
let num2 = 17;
let num3 = 25;
// +-*/%：加,减,乘,除,取模(余商)
// js里面的除法，不论计算的数值是不是整数，只要除不尽结果就是小数
console.log(
  '运算结果：',
  num1 + num2,
  num1 - num2,
  num2 * num3,
  num1 / num2,
  num1 / num3,
  num1 % num2
);

// js的加法运算，只要遇到字符串或者非数的值，就会变成
// 字符串拼接效果！！！，其它运算如果是数字结果的字符串
// js会尝试进行数学运算
console.log('js的特色运算', 22 + '33', 22 * '33');

console.log('===================================');
// 变量来源于页面内容！！！！
// document.getElementById('id值');
// 表示获取html页面上id属性值是对应id值的元素
let div01 = document.getElementById('div01');
console.log('id是div01的页面元素:', div01);
// 如果页面没有匹配id值的元素，会得到一个不存在的对象
// 对这个对象做任何的操作都会引发异常，代码无法继续执行
let nothing = document.getElementById('abcdefg');
console.log('一个不存在的对象：', nothing);
// 下面的代码会引发异常，所以需要注释掉
// nothing.innerHTML = 'dfsf';
// console.log('dfdff');
// 可以获取任意的页面元素
let txt01 = document.getElementById('txt01');
console.log('id为txt01的页面元素：', txt01);
