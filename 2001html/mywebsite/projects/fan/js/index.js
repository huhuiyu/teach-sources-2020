console.log('in index.js======>');

let imgFan = document.getElementById('imgFan');
// 找到页面上对应css选择器的一组元素
let controls = document.querySelectorAll('.control > span');
// 音频元素
let myaudio = document.getElementById('myaudio');
// 开启音频循环播放模式
myaudio.loop = true;
console.log('风扇元素：', imgFan, controls, myaudio);

// 记录是否开启
let isOn = false;

controls[0].addEventListener('click', function () {
  // !逻辑取反 isOn == false和 !isOne等效
  if (!isOn) {
    return;
  }
  isOn = false;
  // 清除掉所有的动画
  imgFan.classList.remove('fan0', 'fan1', 'fan2', 'fan3');
  // 关闭动画
  imgFan.classList.add('fan0');
  clearActive();
  // 激活自己
  controls[0].classList.add('active');
  // 关闭音频播放
  myaudio.pause();
  // 重置播放进度到初始位置
  myaudio.currentTime = 0;
});

controls[1].addEventListener('click', function () {
  clearActive();
  // 激活自己
  controls[1].classList.add('active');
  // 开启状态
  isOn = true;
  // 清除掉所有的动画
  imgFan.classList.remove('fan0', 'fan1', 'fan2', 'fan3');
  // 一档动画
  imgFan.classList.add('fan1');
  // 开启音频播放
  myaudio.play();
});

controls[2].addEventListener('click', function () {
  clearActive();
  // 激活自己
  controls[2].classList.add('active');
  // 开启状态
  isOn = true;
  // 清除掉所有的动画
  imgFan.classList.remove('fan0', 'fan1', 'fan2', 'fan3');
  // 二档动画
  imgFan.classList.add('fan2');
  // 开启音频播放
  myaudio.play();
});

controls[3].addEventListener('click', function () {
  clearActive();
  // 激活自己
  controls[3].classList.add('active');
  // 开启状态
  isOn = true;
  // 清除掉所有的动画
  imgFan.classList.remove('fan0', 'fan1', 'fan2', 'fan3');
  // 三档动画
  imgFan.classList.add('fan3');
  // 开启音频播放
  myaudio.play();
});

function clearActive() {
  // 清除所有激活状态
  controls[0].classList.remove('active');
  controls[1].classList.remove('active');
  controls[2].classList.remove('active');
  controls[3].classList.remove('active');
}
