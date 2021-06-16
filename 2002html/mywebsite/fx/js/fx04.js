let x = 100;
let y = '乐高蝙蝠侠大电影非常滴好看哦';
let z = new Date();
// 数组不是一组数的意思，而是一组数据的意思
let arr = [110, '黑暗骑士', '蝙蝠侠'];
console.log('数据类型：', x, y, z, arr);
// 日期可以获取分部信息
console.log('日期数据：', z.getFullYear(), z.getMonth() + 1, z.getDate());
// 数组主要就是下标(0到长度-1)访问和长度
console.log('数组数据：', arr[0], arr[2], arr.length);

// 打字效果
let spType = document.getElementById('spType');
// 字符串相关知识点
console.log(
  '字符串信息：',
  y.length,
  y.charAt(1),
  y.substr(2, 3),
  y.substring(2, 3)
);

let index = 0;
let timer = setInterval(function () {
  spType.append(y.charAt(index));
  index++;
  if (index >= y.length) {
    index = 0;
    clearInterval(timer);
  }
}, 500);
