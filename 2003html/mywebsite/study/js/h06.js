console.log('进入h06.js=====>');

// 重复的延时执行
// 格式：setInterval(要延时执行的function,延时间隔的毫秒数)
setInterval(function () {
  console.log('反复延时执行的代码。。。');
}, 5 * 1000);

let divNow = document.getElementById('divNow');
let now = new Date();
divNow.innerHTML =
  now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

setInterval(function () {
  now = new Date();
  divNow.innerHTML =
    now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
}, 1000);

// 倒计时的部分===========================
let btnCountdown = document.getElementById('btnCountdown');
let spCountdown = document.getElementById('spCountdown');
console.log('倒计时相关元素：', btnCountdown, spCountdown);

// 倒计时计数变量
let count = 10;
// 记录倒计时是否已经开启
let countdown = false;
// 记录计时器对象
let timer;

btnCountdown.addEventListener('click', function () {
  // 如果倒计时已经开启，就不要继续执行
  if (countdown) {
    return;
  }
  // 开启倒计时状态
  countdown = true;

  spCountdown.innerHTML = count + '秒';
  count = count - 1;
  // 记录延时执行的计数器对象
  timer = setInterval(function () {
    // 倒计时的终止
    if (count < 0) {
      // clearInterval(要终止执行的计时器对象)
      clearInterval(timer);
      // 重置状态
      countdown = false;
      count = 10;
      spCountdown.innerHTML = '';
      return;
    }

    spCountdown.innerHTML = count + '秒';
    count = count - 1;
  }, 1000);
});

let btnDelay = document.getElementById('btnDelay');
btnDelay.addEventListener('click', function () {
  // setTimeout是单次延时执行
  setTimeout(function () {
    // js跳转页面，location='要跳转的页面地址';
    // 等同于a href="要跳转的页面地址"的效果
    location = 'https://huhuiyu.top';
  }, 5 * 1000);
});

// 延时执行
// setInterval(function,毫秒)，会返回一个计时器对象
// clearInterval(计时器对象)用于终止延时执行
// setTimeout和clearTimeout是一套单次的延时
