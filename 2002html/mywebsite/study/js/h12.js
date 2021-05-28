console.log('in h12.js=====>');
let sel01 = document.getElementById('sel01');
let sel02 = document.getElementById('sel02');
let sel03 = document.getElementById('sel03');

// 初始化年份
function initYear() {
  for (let i = 1990; i <= new Date().getFullYear(); i++) {
    let op = document.createElement('option');
    op.setAttribute('value', i);
    op.append(i + '年');
    sel01.append(op);
  }
  // 年份的值不是固定，需要通过计算获取中间值
  // 下拉框的特有属性
  // selectedIndex：选中项的索引值
  // options：下拉框的选项数组！！！
  sel01.selectedIndex = sel01.options.length / 2;
}

initYear();

// 初始化月份
function initMonth() {
  for (let i = 1; i <= 12; i++) {
    let op = document.createElement('option');
    op.setAttribute('value', i);
    op.append(i + '月');
    sel02.append(op);
  }
  // 修改下拉框的值，会自动选中value属性为对应值的option
  sel02.value = 6;
}

initMonth();

// 年月变化要重置日期的选项！！！！
// change事件是在下拉框的选中项变化时触发
sel01.addEventListener('change', function () {
  initDay();
});
sel02.addEventListener('change', function () {
  initDay();
});
// 日期的计算和选项初始化，年月变化时执行
function initDay() {
  // 下拉框的value（值）是被选中的option的value属性值！
  // 下拉框可以值和显示信息不一致
  let year = parseInt(sel01.value);
  let month = parseInt(sel02.value);
  console.log('年月的值：', year, month);
  let run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
  let day = 31;

  if (month == 4 || month == 6 || month == 9 || month == 11) {
    day = 30;
  } else if (run && month == 2) {
    day = 29;
  } else if (month == 2) {
    day = 28;
  }
  // 清除原有选项
  sel03.innerHTML = '';
  // 通过计算的日期循环生成日期选项
  for (let i = 1; i <= day; i++) {
    let op = document.createElement('option');
    op.setAttribute('value', i);
    op.append(i + '日');
    sel03.append(op);
  }
  sel03.value = 14;
}

initDay();

// 获取出生日期的方法
let btnOk = document.getElementById('btnOk');
let spDay = document.getElementById('spDay');
btnOk.addEventListener('click', function () {
  spDay.innerHTML = sel01.value + '-' + sel02.value + '-' + sel03.value;
});

// 焦点相关事件
function haveFocus(ele) {
  console.log('元素获取到焦点：', ele);
}
function lostFocus(ele) {
  console.log('元素丢失焦点：', ele);
}

// 按键相关事件
let txtKey = document.getElementById('txtKey');
txtKey.addEventListener('keydown', function (event) {
  console.log('按键按下：', event);
});

txtKey.addEventListener('keypress', function (event) {
  console.log('按键按压', event);
});

txtKey.addEventListener('keyup', function (event) {
  console.log('按键松开', event);
});

// 鼠标相关事件
let divMouse = document.getElementById('divMouse');

divMouse.addEventListener('mouseover', function () {
  divMouse.innerHTML = '鼠标悬停';
  console.log('鼠标悬停');
});

divMouse.addEventListener('mouseout', function () {
  divMouse.innerHTML = '鼠标离开';
});

divMouse.addEventListener('mouseenter', function () {
  console.log('鼠标进入');
});

divMouse.addEventListener('mousedown', function (event) {
  console.log('鼠标按下：', event);
});
divMouse.addEventListener('mouseup', function (event) {
  console.log('鼠标松开：', event);
});

divMouse.addEventListener('mousemove', function (event) {
  divMouse.innerHTML = '鼠标移动：' + event.clientX + ',' + event.clientY;
});

// 手机版本特有事件，要开启手机模式测试或者真机测试
divMouse.addEventListener('touchstart', function (event) {
  divMouse.innerHTML = '开始触摸';
  console.log('开始触摸');
});

divMouse.addEventListener('touchend', function (event) {
  divMouse.innerHTML = '触摸结束';
  console.log('触摸结束');
});

divMouse.addEventListener('touchmove', function (event) {
  // 触摸事件可以是多个触摸点，所有触摸的事件
  // 的触摸点信息是一个数组，至少有一个值
  let t = event.touches[0];
  divMouse.innerHTML = '触摸拖动' + t.clientX + ',' + t.clientY;
});
