// 数组其实不是一组数，是一组数据
let arr01 = [100, '黑暗骑士', new Date()];
// 数组是通过下标(从0开始)来访问一组数据中的一个
console.log(arr01[1], arr01.length);

// 数组的基础操作
let txtName = document.getElementById('txtName');
let btnArray = document.getElementById('btnArray');
let spArray = document.getElementById('spArray');
let arr02 = [];

btnArray.addEventListener('click', function () {
  // 追加数据到数组
  arr02.push(txtName.value);
  spArray.innerHTML = arr02;
  showArray();
});

let selArray = document.getElementById('selArray');
// 将数组显示到select中
function showArray() {
  // 循环处理数组元素
  selArray.innerHTML = '';
  for (let i = 0; i < arr02.length; i++) {
    let data = arr02[i]; // 逐项获取数组中的数据
    console.log('数组数据：', data);
    // 创建下拉选项
    let op = document.createElement('option');
    // 设置value属性
    op.setAttribute('value', i);
    op.append(data);
    selArray.appendChild(op);
  }

  console.log('数组转字符串', JSON.stringify(arr02));
  console.log('转回到数组', JSON.parse(JSON.stringify(arr02)));
}
// 保存数组到本地存储
function saveArr() {
  localStorage.setItem('array-info', JSON.stringify(arr02));
  spArray.innerHTML = '保存数组成功';
}

let btnSaveArr = document.getElementById('btnSaveArr');
btnSaveArr.addEventListener('click', saveArr);

// 加载
function loadArr() {
  let arrInfo = localStorage.getItem('array-info');
  if (arrInfo) {
    arr02 = JSON.parse(arrInfo);
    spArray.innerHTML = '读取成功';
    showArray();
  }
}

loadArr();

// 数组的一些特有方法
console.log('join成字符串', arr01, arr01.join('###'));
// 特定字符分割字符串到数组
let strArr = '100%%200%%黑暗骑士';
console.log('转到数组结果：', strArr.split('%%'));
let arr03 = [100, 200, 300, 400];
// 删除数组中的元素
// 数组.splice(要删除的开始索引,要删除的数量)
let arrDel = arr03.splice(1, 2);
console.log('删除数组的结果', arr03, arrDel);
