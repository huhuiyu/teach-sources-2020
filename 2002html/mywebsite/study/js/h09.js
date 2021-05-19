console.log('in h09.js=======>');
// 成绩转换的部分
let txtScore = document.getElementById('txtScore');
let btnConvert = document.getElementById('btnConvert');
let spScore = document.getElementById('spScore');
console.log('成绩转换相关元素：', txtScore, btnConvert, spScore);

btnConvert.addEventListener('click', function () {
  spScore.innerHTML = '';
  let score = txtScore.value;
  console.log('输入成绩是：', score);
  if (!isInt(score)) {
    spScore.innerHTML = '成绩必须输入且是整数';
  } else if (parseInt(score) < 0) {
    spScore.innerHTML = '成绩不能小于0';
  } else if (parseInt(score) > 100) {
    spScore.innerHTML = '成绩不能大于100';
  } else if (parseInt(score) > 90) {
    spScore.innerHTML = '成绩为A';
  } else if (parseInt(score) > 80) {
    spScore.innerHTML = '成绩为B';
  } else if (parseInt(score) > 70) {
    spScore.innerHTML = '成绩为C';
  } else if (parseInt(score) >= 60) {
    spScore.innerHTML = '成绩为D';
  } else {
    spScore.innerHTML = '成绩为E';
  }
});

// 日期计算的部分
let txtYear = document.getElementById('txtYear');
let txtMonth = document.getElementById('txtMonth');
let btnDay = document.getElementById('btnDay');
let spDay = document.getElementById('spDay');
console.log('日期相关元素：', txtYear, txtMonth, btnDay, spDay);
// 熵增定律

btnDay.addEventListener('click', function () {
  spDay.innerHTML = '';
  let year = txtYear.value.trim();
  let month = txtMonth.value.trim();
  console.log('输入的年月是：', year, month);
  if (!isInt(year)) {
    spDay.innerHTML = '年份必须是整数';
    return;
  }
  year = parseInt(year);
  if (year < 1900 || year > 2021) {
    spDay.innerHTML = '年份超出范围';
    return;
  }
  if (!isInt(month)) {
    spDay.innerHTML = '月份必须是整数';
    return;
  }
  month = parseInt(month);
  if (month < 1 || month > 12) {
    spDay.innerHTML = '月份超出范围';
    return;
  }
  //计算日期的部分===========================
  // &&短路与运算，两个表达式都为真结果才是真
  let run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);

  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    spDay.innerHTML = '该月份有31天';
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    spDay.innerHTML = '该月份有30天';
  } else if (run) {
    spDay.innerHTML = '该月份有29天';
  } else {
    spDay.innerHTML = '该月份有28天';
  }
});

// 阶梯if判断的格式说明
// if(逻辑表达式1) {
// 逻辑表达式1为真执行的代码
// }
// else if(逻辑表达式2) {
// 逻辑表达式2为真执行的代码
// }
// ...else if(逻辑表达式n) {
// 逻辑表达式n为真执行的代码
// }
// else {
// 所有的逻辑表达式阶梯都为假才会执行这里代码
// }
// 阶梯判断是从上到下
// 任何一级为真就会停止其它阶梯
// 也就是说所有阶梯中最多只有一个会被执行
