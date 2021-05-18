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
  }
});
