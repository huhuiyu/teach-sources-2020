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
