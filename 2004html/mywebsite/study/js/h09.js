console.log('in h09.js======>');
// 成绩阶梯判断部分
let txtScore = document.getElementById('txtScore');
let btnScore = document.getElementById('btnScore');
let spScore = document.getElementById('spScore');
console.log('成绩元素：', txtScore, btnScore, spScore);

btnScore.addEventListener('click', function () {
  let score = txtScore.value;
  console.log('输入的成绩是：', score);
  spScore.innerHTML = '';
  if (!isInt(score)) {
    spScore.innerHTML = '必须输入整数';
  } else if (parseInt(score) < 0) {
    spScore.innerHTML = '成绩不能小于0';
  } else if (parseInt(score) > 100) {
    spScore.innerHTML = '成绩不能大于100';
  } else if (parseInt(score) > 90) {
    spScore.innerHTML = '你的成绩是A';
  } else if (parseInt(score) > 80) {
    spScore.innerHTML = '你的成绩是B';
  } else if (parseInt(score) > 70) {
    spScore.innerHTML = '你的成绩是C';
  } else if (parseInt(score) >= 60) {
    spScore.innerHTML = '你的成绩是D';
  } else {
    spScore.innerHTML = '你的成绩不及格';
  }

  // 阶梯判断的语言和格式
  // if(第一个判断逻辑表达式){
  //   第一个为真要执行的代码
  // }
  // else if(第二个判断逻辑表达式){
  //   第二个为真要执行的代码
  // }
  // ...n个阶梯
  // else {
  //   上面所有的表达式都是假才会执行这里面的代码
  // }
  // 阶梯的注意事项！！！！！！！！！！！
  // 任何一级判断为真，其它的部分都不会执行！！！！
});
