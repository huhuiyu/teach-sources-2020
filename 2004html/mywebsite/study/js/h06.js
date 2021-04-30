console.log('进入h06.js==========>');

// 延迟执行的格式
// setInterval(要延迟执行的function,延迟的间隔毫秒时间);
// 延迟执行的效果
// 每隔延迟的间隔时间之后就会执行对应function里面的代码
setInterval(function () {
  console.log('反复延迟执行的代码');
}, 1000 * 5);

console.log('延迟执行后面的代码');

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

// 模拟倒计时
let btnCountdown = document.getElementById('btnCountdown');
let spCountdown = document.getElementById('spCountdown');
console.log('倒计时元素', btnCountdown, spCountdown);

// 记录倒计时的变量
let count = 60;
// 控制不能连续的点击
// 是否在进行倒计时，默认为假
let incount = false;
btnCountdown.addEventListener('click', function () {
  // 检查是否在进行中
  if (incount) {
    // 进行中就强制打断代码执行
    return;
  }
  // 切换成成在进行中
  incount = true;
  setInterval(function () {
    spCountdown.innerHTML = count + '秒';
    count = count - 1;
  }, 1000);
});
