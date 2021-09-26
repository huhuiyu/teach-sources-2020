// 数组不是一组数，是一组数据
let arr01 = [100, '黑暗骑士', new Date(), '蜘蛛侠'];
// 数组元素通过下标（从0开始）访问，length属性可以获取数组长度
console.log(arr01[1], arr01[2], arr01.length);

let txtInfo = document.getElementById('txtInfo');
let btnArr = document.getElementById('btnArr');
let spArr = document.getElementById('spArr');

let arr02 = [];
btnArr.addEventListener('click', function () {
  // 追加数据到数组
  arr02.push(txtInfo.value);
  spArr.innerHTML = arr02;
  showArray();
});

// 将数组显示到下拉列表里面
let selArr = document.getElementById('selArr');

function showArray() {
  // 清理掉原有的选项
  selArr.innerHTML = '';
  // 数组循环
  for (let i = 0; i < arr02.length; i++) {
    let data = arr02[i]; //逐项读取数组数据
    console.log('数组数据', data);
    let op = document.createElement('option');
    // 设置value属性
    op.setAttribute('value', i);
    op.append(data);
    selArr.appendChild(op);
  }

  console.log('数组转字符串', JSON.stringify(arr02));
  console.log('字符串转回数组', JSON.parse(JSON.stringify(arr02)));
}

// 保存数组到本地
let btnSave = document.getElementById('btnSave');
let array_key = 'local-array';

function saveArray() {
  localStorage.setItem(array_key, JSON.stringify(arr02));
  spArr.innerHTML = '保存成功';
}

btnSave.addEventListener('click', saveArray);

// 加载本地保存的数组
function loadArray() {
  let arrInfo = localStorage.getItem(array_key);
  if (arrInfo) {
    arr02 = JSON.parse(arrInfo);
    spArr.innerHTML = '读取成功';
    showArray();
  }
}

loadArray();

// 一些数组小知识
let arr03 = [100, 200, '黑暗骑士', '蜘蛛侠'];
// 数组特定的转字符串方法
console.log('join成字符串', arr03.join('$$$'));
// 特定字符分割字符串到数组
let strArr = '100###丁铭###女';
console.log('特殊字符串转数组', strArr.split('###'));
// 删除数组中元素(要删除的开始索引,要删除的数量)
let delinfo = arr03.splice(1, 2);
console.log('删除后数组信息：', arr03, delinfo);
