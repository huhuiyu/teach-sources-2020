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
