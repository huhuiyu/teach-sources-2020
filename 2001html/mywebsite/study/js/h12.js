console.log('in h12.js=============>');
let selYear = document.getElementById('selYear');
let selMonth = document.getElementById('selMonth');
let selDay = document.getElementById('selDay');
let btnOk = document.getElementById('btnOk');
let spResult = document.getElementById('spResult');

// 初始化年份
function initYear() {
  for (let i = 1980; i <= new Date().getFullYear(); i++) {
    let op = document.createElement('option');
    op.setAttribute('value', i);
    op.append(i + '年');
    selYear.append(op);
  }
  // 年份的值不固定，没法直接通过值设定中间项
  // 下拉框的特有属性
  //   selectedIndex：选中项的索引值
  //   options：下拉框中的所有option的数组
  selYear.selectedIndex = parseInt(selYear.options.length / 2);
}
initYear();

// 初始化月份
function initMonth() {
  for (let i = 1; i <= 12; i++) {
    let op = document.createElement('option');
    op.setAttribute('value', i);
    op.append(i + '月');
    selMonth.append(op);
  }
  selMonth.value = 6;
}
initMonth();

// change事件只有在下拉选中值发生变化时才会触发
selYear.addEventListener('change', function () {
  initDay();
});

selMonth.addEventListener('change', function () {
  initDay();
});

// 初始化日期
function initDay() {
  selDay.innerHTML = '';
  let year = parseInt(selYear.value);
  // 下拉框的value（值）是选中的option的value属性值
  // option的值可以和显示内容不一致
  let month = parseInt(selMonth.value);
  console.log('选中的年月：', year, month);
  // 通过年月计算日期
  let day = 31; //默认就是31
  let run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    day = 30;
  } else if (run && month == 2) {
    day = 29;
  } else if (month == 2) {
    day = 28;
  }
  // 循环生成日期选项
  for (let i = 1; i <= day; i++) {
    let op = document.createElement('option');
    op.setAttribute('value', i);
    op.append(i + '日');
    selDay.append(op);
  }
  // 对select元素的值设置，会自动选中对应值的option
  selDay.value = 15;
}

initDay();

btnOk.addEventListener('click', function () {
  spResult.innerHTML =
    selYear.value + '-' + selMonth.value + '-' + selDay.value;
});

// 事件相关演示======
function changeFocus(ele) {
  console.log('获取到焦点：', ele);
}

function lostFocus(ele) {
  console.log('丢失焦点：', ele);
}

// 按键相关事件
let txtKey = document.getElementById('txtKey');

txtKey.addEventListener('keydown', function (event) {
  // 按键一直不释放会反复触发本事件
  console.log('按键按下：', event);
});
txtKey.addEventListener('keyup', function (event) {
  console.log('按键释放：', event);
});

// 鼠标相关事件
let divMouse = document.getElementById('divMouse');

divMouse.addEventListener('mouseover', function () {
  divMouse.innerHTML = '鼠标悬停';
  console.log('鼠标悬停');
});

divMouse.addEventListener('mouseenter', function () {
  console.log('鼠标进入');
});

divMouse.addEventListener('mouseout', function () {
  divMouse.innerHTML = '鼠标离开';
});

divMouse.addEventListener('mousemove', function (event) {
  // 移动事件带有鼠标位置的坐标信息
  divMouse.innerHTML = '鼠标移动' + event.clientX + ',' + event.clientY;
});

divMouse.addEventListener('mousedown', function (event) {
  divMouse.innerHTML = '鼠标按下：' + event.clientX + ',' + event.clientY;
  console.log('鼠标按下', event);
});

// 手机相关事件，需要将浏览器切换到手机模式或者真机测试
divMouse.addEventListener('touchstart', function (event) {
  // 触摸事件比较特殊，手机一般支持多点触摸
  // 所以触摸点是返回一个数组，且至少有一个值
  let ts = event.touches[0];
  divMouse.innerHTML = '开始触摸：' + ts.clientX + ',' + ts.clientY;
});

divMouse.addEventListener('touchend', function (event) {
  divMouse.innerHTML = '触摸结束';
  console.log('触摸结束', event);
});

divMouse.addEventListener('touchmove', function (event) {
  let ts = event.touches[0];
  divMouse.innerHTML = '触摸移动：' + ts.clientX + ',' + ts.clientY;
});

// 视频播放部分
let myvideo = document.getElementById('myvideo');
let spPlay = document.getElementById('spPlay');

let inplay = false;
// 将初始的进度调整到有画面的一帧
myvideo.currentTime = 2;

spPlay.addEventListener('click', function () {
  if (inplay) {
    // 播放中情况
    myvideo.pause();
    spPlay.innerHTML = '播放';
    inplay = false;
  } else {
    // 暂停中情况
    myvideo.play();
    spPlay.innerHTML = '暂停';
    inplay = true;
  }
});
