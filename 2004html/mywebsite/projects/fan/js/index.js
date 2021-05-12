console.log('进入index.js=======>');

// 风扇图片
let imgFan = document.getElementById('imgFan');
// 开关的元素（一组）
let switches = document.querySelectorAll('.switch > span');
// 开关状态
let fanStatus = false;
console.log('风扇相关元素：', imgFan, switches);

// 功能一，清除按钮状态的function
function clearActive() {
  switches[0].classList.remove('active');
  switches[1].classList.remove('active');
  switches[2].classList.remove('active');
  switches[3].classList.remove('active');
}

switches[0].addEventListener('click', function () {
  // 关闭需要判断是否在开启的状态
  // 如果是关闭状态，不需要执行任何动作
  // !逻辑表达式，表示将表达式结果取反
  if (!fanStatus) {
    return;
  }
  // 切换为关闭状态
  fanStatus = false;
  clearActive();
  switches[0].classList.add('active');
  // 启动关闭的动画效果
  imgFan.classList.remove('fan01', 'fan02', 'fan03', 'fan-off');
  imgFan.classList.add('fan-off');
});

switches[1].addEventListener('click', function () {
  clearActive();
  switches[1].classList.add('active');
  // 切换到风扇打开的状态
  fanStatus = true;
  // 切换到一档动画
  imgFan.classList.remove('fan01', 'fan02', 'fan03', 'fan-off');
  imgFan.classList.add('fan01');
});

switches[2].addEventListener('click', function () {
  clearActive();
  switches[2].classList.add('active');
  // 切换到风扇打开的状态
  fanStatus = true;
  // 切换到二档动画
  imgFan.classList.remove('fan01', 'fan02', 'fan03', 'fan-off');
  imgFan.classList.add('fan02');
});

switches[3].addEventListener('click', function () {
  clearActive();
  switches[3].classList.add('active');
  // 切换到风扇打开的状态
  fanStatus = true;
  // 切换到三档动画
  imgFan.classList.remove('fan01', 'fan02', 'fan03', 'fan-off');
  imgFan.classList.add('fan03');
});
