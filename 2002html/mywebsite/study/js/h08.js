console.log('进入h08.js=======>');
let divNow = document.getElementById('divNow');
// 相同的代码写多次对于程序猿来说是不合适的
// 会造成修改的时候变复杂

// 带名称的function
// 可以简单的理解成将大段代码包装成一个名称
// 调用名称就会执行对应的代码
// 格式：function 方法名称(){
//   调用方法时要执行的js代码
// }
// 通过方法名称();即可调用对应的js代码
function showNow() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  // 显示格式为前导补0,也就是小于10的都要补0
  //  ?:三元表达式，意思是：
  // ?前面的逻辑表达式如果为真，执行?后面的代码
  // 否则执行:后面的代码
  // 下面的代码表示：如果hour的值小于10就前面补0，否则就是原值
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  divNow.innerHTML = hour + ':' + minute + ':' + second;
}

showNow();

setInterval(function () {
  showNow();
}, 1000);

let divTime = document.getElementById('divTime');
// 调用common.js中的function
// 通过对变量赋值的方式拿到function的返回值！！！！
let time = getNowInfo();
divTime.innerHTML = time;

setInterval(function () {
  time = getNowInfo();
  divTime.innerHTML = time;
}, 1000);

// 校验整数的部分
let numb1 = document.getElementById('numb1');
let numb2 = document.getElementById('numb2');
let btnNum = document.getElementById('btnNum');
let spNum = document.getElementById('spNum');
console.log('整数判断部分元素：', numb1, numb2, btnNum, spNum);

btnNum.addEventListener('click', function () {
  let n1 = numb1.value.trim();
  let n2 = numb2.value.trim();
  console.log('输入的数据是', n1, n2);
});
