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
  }
});
