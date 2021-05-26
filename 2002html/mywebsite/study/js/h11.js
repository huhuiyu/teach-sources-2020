console.log('in h11.js======>');
let btnRand1 = document.getElementById('btnRand1');
let divRand = document.getElementById('divRand');

btnRand1.addEventListener('click', function () {
  divRand.append(Math.random() + ' ');
});

// 模拟骰子效果
let txtCount = document.getElementById('txtCount');
let btnRand2 = document.getElementById('btnRand2');

btnRand2.addEventListener('click', function () {
  // 骰子的数量就是下限
  let count = parseInt(txtCount.value);
  let max = count * 6;
  // 范围随机数公式
  // 随机数*(上限-下限+1) + 下限
  divRand.append(parseInt(Math.random() * (max - count + 1) + count) + ' ');
});

// 随机播放图片
let myimg = document.getElementById('myimg');

let images = [
  '../images/img1.jpg',
  '../images/img2.jpg',
  '../images/img3.jpg',
  '../images/img4.jpg',
  '../images/batman01.jpg'
];
// 人名的数组数量要和图片一致！！！！！！
let names = ['江鑫', '张雅', '曹波', '张亮', '周蕾'];
let spName = document.getElementById('spName');

let btnChoose = document.getElementById('btnChoose');
let timer;
//随机计数器
let randcount = 0;

btnChoose.addEventListener('click', function () {
  btnChoose.style.display = 'none';
  timer = setInterval(function () {
    randcount++;
    if (randcount > 20) {
      clearInterval(timer);
      randcount = 0;
      btnChoose.style.display = 'inline';
      return;
    }
    // 随机生成一个下标（0到长度-1）
    // 下标的随机公式的结果恰好就是什么都不写
    let index = parseInt(Math.random() * images.length);
    myimg.setAttribute('src', images[index]);
    spName.innerHTML = names[index];
  }, 0.2 * 1000);
});
