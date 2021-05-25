console.log('in h09.js====>');
let txtScore = document.getElementById('txtScore');
let btnScore = document.getElementById('btnScore');
let spScore = document.getElementById('spScore');

btnScore.addEventListener('click', function () {
  spScore.innerHTML = '';
  let score = txtScore.value;
  if (!isInt(score)) {
    spScore.innerHTML = '成绩必须是整数！';
  } else if (parseInt(score) < 0) {
    spScore.innerHTML = '成绩必须大于等于0！';
  } else if (parseInt(score) > 100) {
    spScore.innerHTML = '成绩不能大于100！';
  } else if (parseInt(score) >= 90) {
    spScore.innerHTML = '成绩为A';
  } else if (parseInt(score) >= 80) {
    spScore.innerHTML = '成绩为B';
  } else if (parseInt(score) >= 70) {
    spScore.innerHTML = '成绩为C';
  } else if (parseInt(score) >= 60) {
    spScore.innerHTML = '成绩为D';
  } else {
    spScore.innerHTML = '成绩为E';
  }
});
// if阶梯判断格式和语义
// if(逻辑表达式1) {
//   逻辑表达式1为真要执行的代码
// }
// else if(逻辑表达式2) {
//   逻辑表达式2为真要执行的代码
// }
// ...else if(逻辑表达式n) {
//   逻辑表达式n为真要执行的代码
// }
// else {
//   上面所有的逻辑表达式都为假的时候执行！！！
// }
// 阶梯判断的注意点!
// 阶梯的判断是从上到下依次执行
// 任何一级阶梯为真，后续的阶梯不论表达式为啥结果都不会执行
// 简单的说就是最多只有一级阶梯会被执行
// 除了第一个if是必须的，后面的阶梯可以随意搭配

// 计算日期的部分
let txtYear = document.getElementById('txtYear');
let txtMonth = document.getElementById('txtMonth');
let btnDay = document.getElementById('btnDay');
let spDay = document.getElementById('spDay');

btnDay.addEventListener('click', function () {
  spDay.innerHTML = '';
  let year = txtYear.value;
  let month = txtMonth.value;
  // 输入值的有效性判断
  if (!isInt(year)) {
    spDay.innerHTML = '年份必须是整数！';
    return;
  }
  year = parseInt(year);
  if (year < 1900 || year > 2021) {
    spDay.innerHTML = '年份超出范围！';
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
  // 计算日期的部分，阶梯判断
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
    spDay.innerHTML = '该月有31天';
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    spDay.innerHTML = '该月有30天';
  } else if (run) {
    spDay.innerHTML = '该月有29天';
  } else {
    spDay.innerHTML = '该月有28天';
  }
});
