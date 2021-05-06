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

// 记录倒计时的时间
let count = 10;
// 记录是否已经进入倒计时状态
let countdown = false;
// 记录倒计时的计时器对象，用于停止倒计时功能
let timer;

btnCountdown.addEventListener('click', function () {
  // 如果已经开启了倒计时就不要执行后续的代码
  if (countdown) {
    return;
  }
  // 进入倒计时，要切换状态
  countdown = true;
  count = count - 1;
  spCountdown.innerHTML = count + '秒';

  // 重复延时执行并记录计时器对象
  timer = setInterval(function () {
    console.log('倒计时中', count);
    // 倒计时到0之后要停止延时执行
    if (count <= 0) {
      // 清除计时器对象指定的延时任务
      clearInterval(timer);
      // 恢复倒计时相关变量值
      countdown = false;
      count = 10;
      // return只能中断方法执行，不能终止延时执行
      return;
    }

    count = count - 1;
    spCountdown.innerHTML = count + '秒';
  }, 1000);
});

// setInterval是开启重复执行的延时任务，并返回计时器对象
// clearInterval用于终止重复执行的延时任务，参数是计时器对象
