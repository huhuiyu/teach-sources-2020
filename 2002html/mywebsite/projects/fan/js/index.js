console.log('in index.js======>');
let imgFan = document.getElementById('imgFan');
// 通过css选择器获取一组元素
let controls = document.querySelectorAll('.control > span');
console.log('风扇相关元素：', imgFan, controls);

// 风扇是否开启
let isOn = false;

controls[1].addEventListener('click', function () {
  // 切换到开启状态
  isOn = true;
  // 清除所有动画
  imgFan.classList.remove('fan00', 'fan01', 'fan02', 'fan03');
  // 一档动画
  imgFan.classList.add('fan01');
});

controls[2].addEventListener('click', function () {
  // 切换到开启状态
  isOn = true;
  // 清除所有动画
  imgFan.classList.remove('fan00', 'fan01', 'fan02', 'fan03');
  // 二档动画
  imgFan.classList.add('fan02');
});

controls[3].addEventListener('click', function () {
  // 切换到开启状态
  isOn = true;
  // 清除所有动画
  imgFan.classList.remove('fan00', 'fan01', 'fan02', 'fan03');
  // 三档动画
  imgFan.classList.add('fan03');
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
  // 二档动画
  imgFan.classList.add('fan00');
});
