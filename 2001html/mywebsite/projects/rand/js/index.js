console.log('in index.js=====>');
// 页面元素的部分
let btnStart = document.getElementById('btnStart');
let divName = document.getElementById('divName');
let divIntro = document.getElementById('divIntro');
let myimg = document.getElementById('myimg');
// js控制效果的变量
let inaction = false; //是否在执行中
let timer; // 计时器对象
let count = 0; // 随机计数
// 随机的数据部分
let datas = [
  {
    img: '../../images/batman01.jpg',
    rname: '蔡妮娜',
    intro: '一个学习委员'
  },
  {
    img: '../../images/img1.jpg',
    rname: '熊泰',
    intro: '一个平民百姓'
  },
  {
    img: '../../images/img2.jpg',
    rname: '帅兰珺',
    intro: '另一个平民百姓'
  },
  {
    img: '../../images/xunlei-bg.jpg',
    rname: '程瀚',
    intro: '还是平民百姓'
  },
  {
    img: '../../images/img12.jpg',
    rname: '周俊佑',
    intro: '都是平民百姓'
  }
];
console.log('数组的长度：', datas.length);
// json数组里面的数据是json复杂结构
let info = datas[0];
console.log('数组中的第一个数据：', info.img, info.rname, info.intro);

btnStart.addEventListener('click', function () {
  // 不允许多次启动
  if (inaction) {
    return;
  }
  // 切换为启动状态
  inaction = true;
  // 修改按钮状态
  btnStart.classList.add('disible');
  // 启动随机
  timer = setInterval(function () {
    count++;
    if (count > 50) {
      // 计数到达就终止执行
      clearInterval(timer);
      count = 0;
      inaction = false;
      btnStart.classList.remove('disible');
      return;
    }
    // 随机获取数据
    let index = parseInt(Math.random() * datas.length);
    info = datas[index];
    // 修改页面数据
    myimg.setAttribute('src', info.img);
    divName.innerHTML = info.rname;
    divIntro.innerHTML = info.intro;
  }, 0.1 * 1000);
});
