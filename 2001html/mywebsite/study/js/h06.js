console.log('进入h06.js======>');

// 延迟执行格式
// setInterval(要延迟执行的function,延迟执行的间隔毫秒时间);
// 延迟执行的意思
// 在指定的时间间隔下重复的执行指定的function中代码
setInterval(function () {
  console.log('反复延迟执行的代码');
}, 1000 * 5);

console.log('延迟执行后面的代码');

// 显示当前的时间的部分 ==========================
let divNow = document.getElementById('divNow');
console.log('显示时间的div', divNow);

let now = new Date();
divNow.innerHTML =
  now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

setInterval(function () {
  now = new Date();
  divNow.innerHTML =
    now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
}, 1000);

// 倒计时演示效果
let btnDelay = document.getElementById('btnDelay');
let spDelay = document.getElementById('spDelay');
console.log('倒计时相关元素', btnDelay, spDelay);

// 记住倒计时时间的变量
let count = 60;
// 记录是否在倒计时的变量
let countdown = false;

btnDelay.addEventListener('click', function () {
  // 如果在倒计时中，就不要执行后续的任何代码
  if (countdown) {
    return;
  }
  // 将状态切换成倒计时进行中
  countdown = true;

  spDelay.innerHTML = count + '秒';
  count = count - 1;

  setInterval(function () {
    spDelay.innerHTML = count + '秒';
    count = count - 1;
  }, 1000);
});
