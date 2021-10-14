let selType = document.getElementById('selType');
let txtName = document.getElementById('txtName');
let txtPrice = document.getElementById('txtPrice');
let btnAdd = document.getElementById('btnAdd');
let btnReset = document.getElementById('btnReset');
let tbData = document.getElementById('tbData');

// 数据的部分 const是常量声明
const GOODS_KEY = 'goods_info_2001';
let types = ['饮料', '虚拟物品', '数码', '食品']; //类型
let goodsList = []; //商品

// 初始化商品类型
// 定义function
// function 名称(){
// 一系列的js代码
//};
// 通过 名称();就可以执行function名称对应的一系列js代码
function initType() {
  selType.innerHTML = '';
  for (let i = 0; i < types.length; i++) {
    let op = document.createElement('option');
    op.setAttribute('value', types[i]);
    op.append(types[i]);
    selType.appendChild(op);
  }
}

initType();

// 添加的部分
btnAdd.addEventListener('click', function () {
  let goods = {
    type: '',
    name: '',
    price: 0
  };
  // 获取输入的商品信息
  goods.type = selType.value;
  goods.name = txtName.value;
  goods.price = parseFloat(txtPrice.value);
  // 添加到数组中
  goodsList.push(goods);
  // 保存数据
  saveGoods();
  // goodsList[goodsList.length]=goods;
  // 更新显示
  showGoodsList();
});

// 显示商品信息
function showGoodsList() {
  tbData.innerHTML = '';
  for (let i = 0; i < goodsList.length; i++) {
    let tr = document.createElement('tr');
    // 序号
    let td = document.createElement('td');
    td.append(i + 1);
    tr.appendChild(td);
    let goods = goodsList[i];
    // 类型
    td = document.createElement('td');
    td.append(goods.type);
    tr.appendChild(td);
    // 名称
    td = document.createElement('td');
    td.append(goods.name);
    tr.appendChild(td);
    // 价格
    td = document.createElement('td');
    td.append(goods.price);
    tr.appendChild(td);
    // 操作按钮的部分
    // 删除按钮
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
// 修改的相关变量
let selMType = document.getElementById('selMType');
let txtMName = document.getElementById('txtMName');
let txtMPrice = document.getElementById('txtMPrice');
let btnSave = document.getElementById('btnSave');
let btnClose = document.getElementById('btnClose');

let modifyInfo; //记录要修改的信息
// 修改的弹出对话框
let modifyDialog = document.getElementById('modifyDialog');

// 修改的部分
function showModify(index) {
  modifyInfo = goodsList[index];
  console.log('要修改的商品信息：', modifyInfo);
  // 显示要修改的信息
  selMType.value = modifyInfo.type;
  txtMName.value = modifyInfo.name;
  txtMPrice.value = modifyInfo.price;
  // 显示修改的对话框
  modifyDialog.style.display = 'flex';
}

btnSave.addEventListener('click', function () {
  modifyInfo.type = selMType.value;
  modifyInfo.name = txtMName.value;
  modifyInfo.price = parseInt(txtMPrice.value);
  saveGoods();
  showGoodsList();
});

btnClose.addEventListener('click', function () {
  modifyDialog.style.display = 'none';
});

// 初始化修改的列表
function initMType() {
  selMType.innerHTML = '';
  for (let i = 0; i < types.length; i++) {
    let op = document.createElement('option');
    op.setAttribute('value', types[i]);
    op.append(types[i]);
    selMType.appendChild(op);
  }
}

initMType();

// 删除的部分
function delInfo(index) {
  console.log('删除：', index, goodsList[index]);
  // 确认对话框，返回值为是否点击的确定
  let result = confirm('是否删除:' + goodsList[index].name);
  if (result) {
    // splice删除数组的数据，参数一，删除开始索引
    // 参数二，删除的数量
    // 返回值是被删除的元素
    goodsList.splice(index, 1);
    saveGoods();
    showGoodsList();
  }
}

// 保存和加载本地信息
function saveGoods() {
  let data = JSON.stringify(goodsList);
  localStorage.setItem(GOODS_KEY, data);
}

function loadGoods() {
  let data = localStorage.getItem(GOODS_KEY);
  if (data) {
    goodsList = JSON.parse(data);
    showGoodsList();
  }
}

loadGoods();

// 作业1：仿造上课的商品管理功能完成学生管理功能
// 学生信息至少包括：所在班级，姓名，性别，电话
