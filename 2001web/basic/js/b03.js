// 数组不是一组数，而是一组数据
let arr01 = ['黑暗骑士', 100, '美国队长', new Date()];
// 数组通过下标（从0开始）访问数据
console.log('数组信息', arr01[0], arr01[3], arr01.length);

// 动态添加数组数据
let txtInfo = document.getElementById('txtInfo');
let btnAdd = document.getElementById('btnAdd');
let spInfo = document.getElementById('spInfo');
let selInfo = document.getElementById('selInfo');

let arr02 = [];
btnAdd.addEventListener('click', function () {
  let info = txtInfo.value;
  // 添加数据到数组
  arr02.push(info);
  console.log('数组信息：', arr02);
  spInfo.innerHTML = arr02;
  // 显示数组的数据到下拉列表
  selInfo.innerHTML = '';
  for (let i = 0; i < arr02.length; i++) {
    let op = document.createElement('option');
    // 元素 <option></option>
    op.setAttribute('value', arr02[i]);
    // 属性 <option value="abc"></option>
    op.append(arr02[i]);
    selInfo.appendChild(op);
  }
});

// 数组的一些简单知识点
let arr03 = [1000, '蔡妮娜', '冷云龙', 2001];
// 数组特殊的字符串转换方法
let strArr = arr03.join('###');
console.log('join字符串：', strArr);
// join格式的字符串还原成数组
strArr = '101$$黑暗骑士$$男';
let arr04 = strArr.split('$$');
console.log('split数组', arr04);
// console.log(strArr.split(''));
