console.log('in index.js======>');

let imgFan = document.getElementById('imgFan');
// 获取css选择器对应的一组元素
// 下面表示获取class为controls中的span
let controls = document.querySelectorAll('.controls > span');
let myaudio = document.getElementById('myaudio');
myaudio.loop = true;
console.log('风扇相关元素：', imgFan, controls, myaudio);
// 记录风扇是否开启
let status = false;
// 第一个元素是关闭
controls[0].addEventListener('click', function () {
  // 需要判断是否是关闭状态
  // !是逻辑表达式取反 status==false 和 !status等同
  if (!status) {
    // 关闭状态无须执行任何代码
    return;
  }
  // 移除所有相关元素激活状态
  controls[0].classList.remove('active');
  controls[1].classList.remove('active');
  controls[2].classList.remove('active');
  controls[3].classList.remove('active');
  // 当前按钮添加激活状态
  controls[0].classList.add('active');
  // 切换为关闭状态
  status = false;
  // 清除风扇动画状态
  imgFan.classList.remove('fan01', 'fan02', 'fan03', 'fan-off');
  //关闭动画
  imgFan.classList.add('fan-off');
  // 停止音频播放并重置播放的进度
  myaudio.currentTime = 0;
  myaudio.pause();
});

// 一档按钮
controls[1].addEventListener('click', function () {
  // 切换为开启状态
  status = true;
  // 移除所有相关元素激活状态
  controls[0].classList.remove('active');
  controls[1].classList.remove('active');
  controls[2].classList.remove('active');
  controls[3].classList.remove('active');
  // 当前按钮添加激活状态
  controls[1].classList.add('active');
  // 清除风扇动画状态
  imgFan.classList.remove('fan01', 'fan02', 'fan03', 'fan-off');
  //一档动画
  imgFan.classList.add('fan01');
  // 播放声音
  myaudio.play();
});

// 二档按钮
controls[2].addEventListener('click', function () {
  // 切换为开启状态
  status = true;
  // 移除所有相关元素激活状态
  controls[0].classList.remove('active');
  controls[1].classList.remove('active');
  controls[2].classList.remove('active');
  controls[3].classList.remove('active');
  // 当前按钮添加激活状态
  controls[2].classList.add('active');
  // 清除风扇动画状态
  imgFan.classList.remove('fan01', 'fan02', 'fan03', 'fan-off');
  //二档动画
  imgFan.classList.add('fan02');
  // 播放声音
  myaudio.play();
});

// 三档按钮
controls[3].addEventListener('click', function () {
  // 切换为开启状态
  status = true;
  // 移除所有相关元素激活状态
  controls[0].classList.remove('active');
  controls[1].classList.remove('active');
  controls[2].classList.remove('active');
  controls[3].classList.remove('active');
  // 当前按钮添加激活状态
  controls[3].classList.add('active');
  // 清除风扇动画状态
  imgFan.classList.remove('fan01', 'fan02', 'fan03', 'fan-off');
  //三档动画
  imgFan.classList.add('fan03');
  // 播放声音
  myaudio.play();
});
