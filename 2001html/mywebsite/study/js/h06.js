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
let count = 10;
// 记录是否在倒计时的变量
let countdown = false;
// 计时器变量，用于记录倒计时的计时器对象
let timer;

btnDelay.addEventListener('click', function () {
  // 如果在倒计时中，就不要执行后续的任何代码
  if (countdown) {
    return;
  }
  // 将状态切换成倒计时进行中
  countdown = true;

  spDelay.innerHTML = count + '秒';
  count = count - 1;
  // 开启延时执行并记录延时执行对象
  timer = setInterval(function () {
    console.log('倒计时中：', count);
    if (count < 0) {
      // 中断延时执行的功能
      clearInterval(timer);
      // 恢复计时相关变量
      count = 10;
      countdown = false;
      // return只能中断function的执行
      // 并不能中断延时反复执行的功能
      return;
    }
    spDelay.innerHTML = count + '秒';
    count = count - 1;
  }, 1000);
});

// setInterval方法用于反复的延迟执行，会返回一个计时器对象
// clearInterval方法可以中断计时器对象的执行

// 延时跳转页面相关
let toPage = document.getElementById('toPage');
toPage.addEventListener('click', function () {
  // setTimeout:单次延时执行
  // clearTimeout是对应的中断延时执行的方法
  setTimeout(function () {
    // 通过js跳转页面（类似于超链接效果）
    location = 'https://huhuiyu.top';
    // 跳转的页面可以是本网站的相对路径，也可以是互联网中的地址
    // 和a标记的href值完全等效
  }, 1000 * 5);
});
