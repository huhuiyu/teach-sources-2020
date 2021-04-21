// 学习用js的第一行最好是显示进入本js
console.log('进入h01.js====>');

let txt01 = document.getElementById('txt01');
let div01 = document.getElementById('div01');
txt01.addEventListener('change', function () {
  // js可以获取和修改页面输入的信息
  div01.innerHTML = txt01.value;
});
