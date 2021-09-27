// 数组，不是一组数，是一组数据
let arr01 = [100, '黑暗骑士', new Date(), '蜘蛛侠'];
// 数组使用下标（从0开始），length属性是数组长度
console.log(arr01[1], arr01[2], arr01.length);

let txtArr = document.getElementById('txtArr');
let btnArr = document.getElementById('btnArr');
let preArr = document.getElementById('preArr');
let arr02 = [];

btnArr.addEventListener('click', function () {
  let info = txtArr.value;
  // 追加数据到数组
  arr02.push(info);
  preArr.innerHTML = arr02;
  showArray();
});

let selArr = document.getElementById('selArr');

// 数组信息添加到下拉框
function showArray() {
  selArr.innerHTML = '';
  for (let i = 0; i < arr02.length; i++) {
    let data = arr02[i];
    console.log('循环显示的数组数据：', data);
    // 添加到下拉列表
    let op = document.createElement('option');
    // 添加value属性
    op.setAttribute('value', i);
    op.append(data);
    selArr.appendChild(op);
  }
}

// 保存数组到本地存储
function saveArray() {
  // 数组要通过JSON的字符串方法转字符串后保存
  localStorage.setItem('user-array', JSON.stringify(arr02));
  preArr.innerHTML = '保存成功';
}

let btnSave = document.getElementById('btnSave');
btnSave.addEventListener('click', saveArray);

// 读取本地存储的数组
function loadArray() {
  let arrInfo = localStorage.getItem('user-array');
  if (arrInfo) {
    arr02 = JSON.parse(arrInfo);
    showArray();
    preArr.innerHTML = '读取成功！';
  } else {
    preArr.innerHTML = '没有数据！';
  }
}
loadArray();

// 一些其它的简单数组知识点
let arr03 = ['蜘蛛侠', 2000, '美国队长', 1100];
// 数组合并成一个字符串
let strJoin = arr03.join('####');
console.log('数组特定方式转换字符：', strJoin);
// 反向操作
strJoin = '123$$$abc$$$张三';
let arr04 = strJoin.split('$$$');
console.log('转回数组：', arr04);
// 删除数组中的元素splice(要删除的开始索引,要删除的数量)
let arr05 = arr03.splice(1, 2);
console.log('删除元素后的数组：', arr03);
console.log('被删除的元素：', arr05);
