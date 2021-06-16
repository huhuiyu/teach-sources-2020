console.log('in fx04.js=====>');
let x = 100;
let y = '字符串信息';
let now = new Date();
console.log('变量信息:', x, y, now);
console.log(
  now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
);

// 获取页面元素一，id
let sp01 = document.getElementById('sp01');
console.log('id获取的元素：', sp01);
// 直接修改内容
sp01.innerHTML = 'js修改内容的最简单方法' + new Date();

// 通过css选择器获取元素(一组)
let myspan = document.querySelectorAll('.mydiv > span');
console.log('css选择器对应的一组元素：', myspan);

// 数组,不是一组数的意思,而是一组数据的意义上
let arr = ['哈哈哈', '嘻嘻嘻', '呵呵呵'];
// 下标访问，下标范围是0到数组长度-1
console.log(arr[0], arr[2], arr.length);
console.log('元素的数量：', myspan.length);
