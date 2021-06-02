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
  },
  {
    imgurl: '../../images/img2.jpg',
    username: '丁铭',
    intro: '一个学习委员'
  },
  {
    imgurl: '../../images/img12.jpg',
    username: '罗霜宇',
    intro: '一个学生'
  },
  {
    imgurl: '../../images/xunlei-bg.jpg',
    username: '黄佳',
    intro: '另一个学生'
  }
];
// 和基本的数组一样，都是下标访问
let info = names[0];
// 区别就是取回来的值是携带复合的数据
console.log('第一个值:', info.imgurl, info.username);

// 页面元素
let imgRand = document.getElementById('imgRand');
let divName = document.getElementById('divName');
let divIntro = document.getElementById('divIntro');
let spStart = document.getElementById('spStart');
// 流程控制相关
// 是否已经在抽取中
let inaction = false;
// 计时器
let timer;
// 计数
let count = 0;
// 记录被抽取的索引值
let index = 0;
spStart.addEventListener('click', function () {
  // 如果抽取完毕，就不要继续了
  if (names.length <= 0) {
    alert('已经全部抽取完成');
    return;
  }
  // 如果已经开始抽取，就不允许再次点击
  if (inaction) {
    return;
  }
  // 切换到进行中
  inaction = true;
  spStart.classList.add('disible');
  // 开启随机抽取
  timer = setInterval(function () {
    count++;
    if (count > 40) {
      clearInterval(timer);
      count = 0;
      inaction = false;
      spStart.classList.remove('disible');
      // 从数组中移除元素，
      // 第一个参数是要移除的元素的开始索引
      // 第二个参数是要移除的元素的数量
      names.splice(index, 1);
      console.log(names);
      return;
    }
    // 随机抽取信息显示
    index = parseInt(Math.random() * names.length);
    let info = names[index];
    imgRand.setAttribute('src', info.imgurl);
    divName.innerHTML = info.username;
    divIntro.innerHTML = info.intro;
  }, 0.05 * 1000);
});
