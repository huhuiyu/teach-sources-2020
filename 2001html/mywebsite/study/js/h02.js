// 为了验证js的导入是否正确，js的第一行代码始终是Console显示信息
console.log('进入h02.js=====>');
// js可以不输入;会自行判断代码是否为完整的央行，但是最好不要这样
// js声明变量不需要指定类型
// 直接let 变量名称=值;即可或者var 变量名称=值;（最好是let）
let v01 = 10; //数值
let v02 = '黑暗骑士'; //字符串
let v03 = 23.5; //小数
console.log('变量的值:', v01, v02, v03);
// 变量是可以变化的
v01 = 'js可以随便更换变量的值和类型';
// 任意的类型都可以加起来
v02 = v02 + v03;
v03 = v03 + 100;
console.log('变量的值:', v01, v02, v03, 33 + '22');
// 数值变量的运算
let num1 = 100;
let num2 = 17;
let num3 = 25;
// js的除法运算，不论运算数是不是全整数，只要除不尽都会是小数结果
// 和Java不一样！！！！
console.log(
  '数学运算',
  num1 + num2,
  num1 - num2,
  num1 * num2,
  num1 / num2,
  num1 / num3,
  num1 % num2
);
// 如果-*/计算值中有字符串，且能转换成数，js也会尝试计算
console.log('33' * 22);
