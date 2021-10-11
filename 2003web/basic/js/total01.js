let selType = document.getElementById('selType');
let txtName = document.getElementById('txtName');
let txtPrice = document.getElementById('txtPrice');
let btnAdd = document.getElementById('btnAdd');
let btnReset = document.getElementById('btnReset');
let tbData = document.getElementById('tbData');

// 数据的部分,const声明常量
const GOODS_KEY = 'goods-info-list'; //本地保存的名称
// 商品的分类
let types = ['饮料', '零食', '电器', '虚拟物品'];
// 商品的数组
let goodsList = [];

// 初始化商品分类
function initTypes() {
  selType.innerHTML = '';
  for (let i = 0; i < types.length; i++) {
    let type = types[i];
    let op = document.createElement('option');
    op.setAttribute('value', type);
    op.append(type);
    selType.appendChild(op);
  }
}

initTypes();

// 添加商品
btnAdd.addEventListener('click', function () {
  let goods = {
    type: '',
    name: '',
    price: 0
  };
  // 获取商品信息
  goods.type = selType.value;
  goods.name = txtName.value;
  goods.price = parseFloat(txtPrice.value);
  // 添加到数组中
  goodsList.push(goods);
  console.log('商品列表', goodsList);
  saveData();
  showGoodsList();
});

// 显示商品列表
function showGoodsList() {
  tbData.innerHTML = '';
  for (let i = 0; i < goodsList.length; i++) {
    let goods = goodsList[i];
    let tr = document.createElement('tr');
    // 序号
    let td = document.createElement('td');
    td.append(i + 1);
    tr.appendChild(td);
    // 分类
    td = document.createElement('td');
    td.append(goods.type);
    tr.appendChild(td);
    // 名称
    td = document.createElement('td');
    td.append(goods.name);
    tr.appendChild(td);
    // 售价
    td = document.createElement('td');
    td.append(goods.price);
    tr.appendChild(td);
    //删除操作按钮
    td = document.createElement('td');
    let btnDel = document.createElement('button');
    btnDel.append('删除');
    td.appendChild(btnDel);
    btnDel.addEventListener('click', function () {
      delInfo(i);
    });
    // 修改按钮
    let btnModify = document.createElement('button');
    btnModify.append('修改');
    td.appendChild(btnModify);
    btnModify.addEventListener('click', function () {
      showModify(i);
    });

    tr.appendChild(td);

    tbData.appendChild(tr);
  }
}

// 修改数据
let modifyData; // 记住要修改的对象
// 通过css选择器获取元素
let modifyDialog = document.querySelector('.modify-dialog');
let selMType = document.getElementById('selMType');
let txtMName = document.getElementById('txtMName');
let txtMPrice = document.getElementById('txtMPrice');
let btnSave = document.getElementById('btnSave');
let btnClose = document.getElementById('btnClose');

function showModify(index) {
  modifyData = goodsList[index];
  console.log('修改数据：', modifyData);
  // 显示修改的数据
  selMType.value = modifyData.type;
  txtMName.value = modifyData.name;
  txtMPrice.value = modifyData.price;
  // 显示修改的对话框
  modifyDialog.style.display = 'flex';
}

btnSave.addEventListener('click', function () {
  modifyData.type = selMType.value;
  modifyData.name = txtMName.value;
  modifyData.price = txtMPrice.value;
  saveData();
  showGoodsList();
});

btnClose.addEventListener('click', function () {
  modifyDialog.style.display = 'none';
});

// 删除数据
function delInfo(index) {
  console.log('删除：', index, goodsList[index]);
  // 确认对话框的返回值为是否点击的确定按钮
  let result = confirm('是否删除：' + goodsList[index].name);
  if (result) {
    goodsList.splice(index, 1);
    saveData();
    showGoodsList();
  }
}

// 保存数据
function saveData() {
  let data = JSON.stringify(goodsList);
  localStorage.setItem(GOODS_KEY, data);
}

// 读取数据
function loadData() {
  let data = localStorage.getItem(GOODS_KEY);
  if (data) {
    goodsList = JSON.parse(data);
  }
  showGoodsList();
}

loadData();

// 初始化修改的商品分类
function initMTypes() {
  selMType.innerHTML = '';
  for (let i = 0; i < types.length; i++) {
    let type = types[i];
    let op = document.createElement('option');
    op.setAttribute('value', type);
    op.append(type);
    selMType.appendChild(op);
  }
}

initMTypes();
