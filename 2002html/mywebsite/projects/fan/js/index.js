console.log('in index.js======>');
let imgFan = document.getElementById('imgFan');
// 通过css选择器获取一组元素
let controls = document.querySelectorAll('.control > span');
// 音频部分
let myaudio = document.getElementById('myaudio');
// 音频无限循环播放
myaudio.loop = true;
console.log('风扇相关元素：', imgFan, controls, myaudio);

// 风扇是否开启
let isOn = false;

controls[1].addEventListener('click', function () {
  // 切换到开启状态
  isOn = true;
  // 清除所有动画
  imgFan.classList.remove('fan00', 'fan01', 'fan02', 'fan03');
  // 一档动画
  imgFan.classList.add('fan01');
  // 切换激活状态，先要关闭所有元素的激活状态再激活当前按钮
  clearActvie();
  controls[1].classList.add('active');
  // 播放音效
  myaudio.play();
});

controls[2].addEventListener('click', function () {
  // 切换到开启状态
  isOn = true;
  // 清除所有动画
  imgFan.classList.remove('fan00', 'fan01', 'fan02', 'fan03');
  // 二档动画
  imgFan.classList.add('fan02');
  // 切换激活状态，先要关闭所有元素的激活状态再激活当前按钮
  clearActvie();
  controls[2].classList.add('active');
  // 播放音效
  myaudio.play();
});

controls[3].addEventListener('click', function () {
  // 切换到开启状态
  isOn = true;
  // 清除所有动画
  imgFan.classList.remove('fan00', 'fan01', 'fan02', 'fan03');
  // 三档动画
  imgFan.classList.add('fan03');
  // 切换激活状态，先要关闭所有元素的激活状态再激活当前按钮
  clearActvie();
  controls[3].classList.add('active');
  // 播放音效
  myaudio.play();
});

controls[0].addEventListener('click', function () {
  // 关闭状态不用执行动画
  if (isOn == false) {
    return;
  }
  // 切换到关闭状态
  isOn = false;
  // 清除所有动画
  imgFan.classList.remove('fan00', 'fan01', 'fan02', 'fan03');
  // 关闭动画
  imgFan.classList.add('fan00');
  // 切换激活状态，先要关闭所有元素的激活状态再激活当前按钮
  clearActvie();
  controls[0].classList.add('active');
  // 关闭声音需要重置播放进度
  myaudio.currentTime = 0;
  myaudio.pause();
});

function clearActvie() {
  // 清除所有激活状态的function
  controls[0].classList.remove('active');
  controls[1].classList.remove('active');
  controls[2].classList.remove('active');
  controls[3].classList.remove('active');
}
