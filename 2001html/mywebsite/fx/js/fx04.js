let x = 100;
let y = '黑暗骑士';
let z = new Date();
console.log('js变量信息:', x, y, z);
// 数组不是一组数的意思，是一组数据的意思
let arr = ['黑暗骑士', '百特曼', 'DarkKnight'];
// 下标访问，下标值是0到数组长度减一
console.log('数组信息', arr[0], arr[2], arr.length);
console.log(
  '日期对象信息：',
  z.getFullYear() + '-' + (z.getMonth() + 1) + '-' + z.getDate()
);

// 打字效果
let spTyping = document.getElementById('spTyping');
let info = '乐高蝙蝠侠大电影非常的好看！';

// 新知识点
console.log(
  '字符串信息：',
  info.length,
  info.charAt(1),
  info.substr(2, 3),
  info.substring(2, 3)
);

let index = 0;

let timer = setInterval(function () {
  let char = info.charAt(index);
  spTyping.append(char);
  index++;
  // 循环显示版本
  // if (index > info.length) {
  //   index = 0;
  //   spTyping.innerHTML = '';
  // }
  // 停止版本
  if (index >= info.length) {
    clearInterval(timer);
  }
  console.log('打字中：', index);
}, 500);

let btnEvent01 = document.getElementById('btnEvent01');
let btnEvent02 = document.getElementById('btnEvent02');

function event01() {
  console.log('执行event01');
}
function event02() {
  console.log('执行event02');
}
function event03() {
  console.log('执行event03');
  btnEvent02.removeEventListener('click', event03);
}
function event04() {
  console.log('执行event04');
}

btnEvent01.onclick = event03;
btnEvent01.onclick = event04;

btnEvent02.addEventListener('click', event03);
btnEvent02.addEventListener('click', event04);
