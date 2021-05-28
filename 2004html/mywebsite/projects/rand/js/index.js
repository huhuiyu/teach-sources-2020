console.log('in index.js====>');
// 复杂数据类型(json)的数组
let names = [
  {
    imgurl: '../../images/batman01.jpg',
    username: '黑暗骑士',
    intro: 'dc最帅超级英雄'
  },
  {
    imgurl: '../../images/img1.jpg',
    username: '罗夏',
    intro: '和黑暗骑士一样帅'
  }
];
// 和基本的数组一样，都是下标访问
let info = names[0];
// 区别就是取回来的值是携带复合的数据
console.log('第一个值:', info.imgurl, info.username);

let imgRand = document.getElementById('imgRand');
let divName = document.getElementById('divName');
let divIntro = document.getElementById('divIntro');
let spStart = document.getElementById('spStart');
