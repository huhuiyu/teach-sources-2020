console.log('进入h06.js============>');
// 延迟执行效果
// setTimeout格式
// setTimeout(要延迟执行的function,延迟的毫秒值);
// 效果是等待延迟的毫秒值之后执行function中的js代码
setTimeout(function () {
  console.log('延迟执行的代码');
}, 1000);

console.log('这一句是在延迟执行之后的代码');
// 让元素延迟出现
let divDelay = document.getElementById('divDelay');

setTimeout(function () {
  divDelay.style.display = 'block';
}, 5000);

// 反复延迟执行和延迟执行格式一样，只是会反复间隔时间执行
setInterval(function () {
  console.log('这里面的会反复延迟执行');
}, 1000 * 10);

// 显示当前时间
let divNow = document.getElementById('divNow');
let now = new Date();
divNow.innerHTML =
  now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

// 通过反复延迟执行的功能完成时间的更新
setInterval(function () {
  now = new Date();
  divNow.innerHTML =
    now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
}, 1000);

// 模拟倒计时功能
let btnCountdown = document.getElementById('btnCountdown');
let spCountdown = document.getElementById('spCountdown');
console.log('倒计时相关元素：', btnCountdown, spCountdown);
