console.log('in h09.js=====>');
let txtScore = document.getElementById('txtScore');
let btnScore = document.getElementById('btnScore');
let spScore = document.getElementById('spScore');
console.log('成绩相关元素:', txtScore, btnScore, spScore);

btnScore.addEventListener('click', function () {
  spScore.innerHTML = '';

  let score = txtScore.value;
  // 调用common.js中的公共方法判断整数
  if (!isInt(score)) {
    spScore.innerHTML = '成绩必须是整数';
  } else if (parseInt(score) < 0) {
    spScore.innerHTML = '成绩必须大于等于0';
  } else if (parseInt(score) > 100) {
    spScore.innerHTML = '成绩不能超过100';
  } else if (parseInt(score) >= 90) {
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

// if阶梯的格式和语言
// if(逻辑表达式1){
// 逻辑表达式1为真的时候要执行的代码
// }
// else if(逻辑表达式2){
// 逻辑表达式2为真的时候要执行的代码
// }
// ...else if(逻辑表达式n){
// 逻辑表达式n为真的时候要执行的代码
// }
// else {
// 上面所有的阶梯都是假的情况下才会执行这里代码
// }
// 除了第一个if是必须的，其它任何一级都可以省略
// 不论有多少个阶梯，铁定最多只有一个会被执行
// 阶梯判断是从上到下，任何一级为真就停止后续的执行

// 天数计算部分
let txtYear = document.getElementById('txtYear');
let txtMonth = document.getElementById('txtMonth');
let btnDay = document.getElementById('btnDay');
let spDay = document.getElementById('spDay');
console.log('日期计算元素：', txtYear, txtMonth, btnDay, spDay);

btnDay.addEventListener('click', function () {
  let year = txtYear.value.trim();
  let month = txtMonth.value.trim();
  spDay.innerHTML = '';

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

  // 计算天数
  let run = year % 400 == 0 ||
    (year % 4 == 0 && year % 100 != 0);
  
  if(month==1 || month==3 || month==5 || month==7
      || month==8 || month==10 || month==12){
    spDay.innerHTML='该月有31天';
  }else if(month==4 || month==6 || month==9 || month==11){
    spDay.innerHTML='该月有30天';
  }else if(run){
    spDay.innerHTML='该月有29天';
  }else{
    spDay.innerHTML='该月有28天';
  }

});
