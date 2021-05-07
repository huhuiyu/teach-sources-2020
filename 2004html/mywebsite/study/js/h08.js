console.log('进入h08.js======>');
let divNow = document.getElementById('divNow');
// 相同的代码对于程序员来说，最好是不要重复编写
// 原因1：复制的次数越多，重复的代码越多，不方便查看
// 原因2：修改代码会变得繁琐且容易出错！！！

let now = new Date();
let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();
divNow.innerHTML = h + ':' + m + ':' + s;

setInterval(function () {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  divNow.innerHTML = h + ':' + m + ':' + s;
}, 1000);
