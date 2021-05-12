console.log('执行h08.js====>');
let divNow = document.getElementById('divNow');
console.log('时间显示元素：', divNow);

// 带名称的function可以简单理解成可以反复调用的代码块
// 格式：
// function 名称(){
//   调用function时要执行的js代码
// }
// 调用方式：function的名称();
function showNow() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  divNow.innerHTML = h + ':' + m + ':' + s;
}

showNow();

setInterval(function () {
  showNow();
}, 1000);

let divTime = document.getElementById('divTime');
// 调用common.js中function
// 通过变量获取getNowInfo的返回值！！！！
let result = getNowInfo();
divTime.innerHTML = result;

setInterval(function () {
  result = getNowInfo();
  divTime.innerHTML = result;
}, 1000);

// 调用整数判断的公共方法
console.log(
  '整数判断：',
  isInt('10'),
  isInt('abc'),
  isInt('  '),
  isInt('10.123')
);
