console.log('in h12.js===========>');
let sel01 = document.getElementById('sel01');
let sel02 = document.getElementById('sel02');
let sel03 = document.getElementById('sel03');

// 初始化年份的选项
function initYear() {
  for (let i = 1990; i <= new Date().getFullYear(); i++) {
    let op = document.createElement('option');
    op.setAttribute('value', i);
    op.append(i + '年');
    sel01.append(op);
  }
  // 下拉框特有属性
  // selectedIndex：选中项的索引值
  // options：下拉框中所有的下拉项的数组
  sel01.selectedIndex = sel01.options.length / 2;
}

initYear();

// 初始化月份的选项
function initMonth() {
  for (let i = 1; i < 13; i++) {
    let op = document.createElement('option');
    op.setAttribute('value', i);
    op.append(i + '月');
    sel02.append(op);
  }
  sel02.value = 6;
}

initMonth();

// 初始化日期是由年月变化触发的
// 因为年月变化会影响日期的数据
function initDay() {
  // 获取年月的选中值！！！！！
  // select元素的value（值）其实是被选中option的value属性值
  // select元素的值可以和显示的文字不一致！！！
  let year = parseInt(sel01.value);
  let month = parseInt(sel02.value);
  console.log('选中的年月：', year, month);
  // 计算年月对应的日期数
  let day = 31; //默认值31天，后续就可以省略31的月份判断
  let run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);

  if (month == 4 || month == 6 || month == 9 || month == 11) {
    day = 30;
  } else if (run && month == 2) {
    day = 29;
  } else if (month == 2) {
    day = 28;
  }
  // 清空并重置日期的选项
  sel03.innerHTML = '';
  for (let i = 1; i <= day; i++) {
    let op = document.createElement('option');
    op.setAttribute('value', i);
    op.append(i + '日');
    sel03.append(op);
  }
  // 对select设置value值会将对应value的option变成选中
  sel03.value = 15;
}

// select的特别事件change，当选中项发生变化才会触发
sel01.addEventListener('change', function () {
  initDay();
});
sel02.addEventListener('change', function () {
  initDay();
});

initDay();

// 获取生日信息的部分
let btnSel = document.getElementById('btnSel');
let spSel = document.getElementById('spSel');

btnSel.addEventListener('click', function () {
  spSel.innerHTML = sel01.value + '-' + sel02.value + '-' + sel03.value;
});

// 焦点相关事件，用原始的事件绑定方式
function getFocus(ele) {
  console.log('元素获取到焦点：', ele);
}
function lostFocus(ele) {
  console.log('元素丢失焦点', ele);
}

// 按键相关事件
let txtKey = document.getElementById('txtKey');

txtKey.addEventListener('keydown', function (event) {
  // event参数可以获取到按键事件的相关信息
  console.log('按键压下：', event.key, event.code);
});

txtKey.addEventListener('keyup', function (event) {
  console.log('按键释放：', event.key);
});

// 鼠标相关事件
let divMouse = document.getElementById('divMouse');

divMouse.addEventListener('mouseover', function () {
  divMouse.innerHTML = '鼠标进入';
  console.log('鼠标进入');
});

divMouse.addEventListener('mouseout', function () {
  divMouse.innerHTML = '鼠标离开';
});

divMouse.addEventListener('mousemove', function (event) {
  divMouse.innerHTML = '鼠标移动:' + event.clientX + ',' + event.clientY;
});

divMouse.addEventListener('mousedown', function (event) {
  divMouse.innerHTML = '鼠标按下：' + event.clientX + ',' + event.clientY;
});

divMouse.addEventListener('mouseup', function (event) {
  divMouse.innerHTML = '鼠标释放：' + event.clientX + ',' + event.clientY;
});

// 手机的事件不一样，需要开启浏览器手机模式才能测试
// 或者是真机测试，手机的事件多半都是触摸相关的
