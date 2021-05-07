console.log('进入h08.js=======>');
let divNow = document.getElementById('divNow');
// 相同的代码写多次对于程序猿来说是不合适的
// 会造成修改的时候变复杂
let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
divNow.innerHTML = hour + ':' + minute + ':' + second;

setInterval(function () {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  divNow.innerHTML = hour + ':' + minute + ':' + second;
}, 1000);
