let selType = document.getElementById('selType');
let txtName = document.getElementById('txtName');
let txtPrice = document.getElementById('txtPrice');
let btnAdd = document.getElementById('btnAdd');
let btnReset = document.getElementById('btnReset');
let tbData = document.getElementById('tbData');

// 商品分类的数组
let types = ['饮料', '电器', '生活用品', '虚拟物品'];
// 商品的数组
let goodsList = [];
// 本地存储商品的名称，const是声明常量，值不可修改
const GOODS_KEY = 'goods-info';

// 初始化商品分类的下拉选项
function initTypes() {
  selType.innerHTML = '';
  for (let i = 0; i < types.length; i++) {
    let op = document.createElement('option');
    op.setAttribute('value', types[i]);
    op.append(types[i]);
    selType.appendChild(op);
  }
}

initTypes();

// 刷新商品列表
function showGoodsList() {
  tbData.innerHTML = '';
  for (let i = 0; i < goodsList.length; i++) {
    let goods = goodsList[i];
    let tr = document.createElement('tr');
    // 序号
    let td = document.createElement('td');
    td.append(i + 1);
    tr.appendChild(td);
    // 商品类型
    td = document.createElement('td');
    td.append(goods.type);
    tr.appendChild(td);
    // 商品名称
    td = document.createElement('td');
    td.append(goods.name);
    tr.appendChild(td);
    // 商品价格
    td = document.createElement('td');
    td.append(goods.price);
    tr.appendChild(td);
    // 操作按钮的部分
    // 删除按钮
    td = document.createElement('td');
    let btnDelete = document.createElement('button');
    btnDelete.append('删除');
    td.appendChild(btnDelete);
    tr.appendChild(td);
    btnDelete.addEventListener('click', function () {
      // 把序号传入到删除的方法，以确定要删除的记录
      delGoods(i);
    });
    // 修改按钮
    let btnModify = document.createElement('button');
    btnModify.append('修改');
    td.appendChild(btnModify);
    btnModify.addEventListener('click', function () {
      showModify(i);
    });

    tbData.appendChild(tr);
  }
}

// 显示修改的界面
let modifyInfo; // 记录要修改的商品
let divModify = document.getElementById('divModify');
let btnClose = document.getElementById('btnClose');
let selMtype = document.getElementById('selMtype');
let txtMname = document.getElementById('txtMname');
let txtMprice = document.getElementById('txtMprice');
let btnToModify = document.getElementById('btnToModify');

function showModify(index) {
  modifyInfo = goodsList[index];
  console.log('要修改的商品信息：', modifyInfo);
  divModify.style.display = 'flex';
  // 填写修改的信息值
  selMtype.value = modifyInfo.type; //类型
  txtMname.value = modifyInfo.name; //名称
  txtMprice.value = modifyInfo.price; //售价
}

btnClose.addEventListener('click', function () {
  divModify.style.display = 'none';
});

btnToModify.addEventListener('click', function () {
  // 修改信息
  modifyInfo.type = selMtype.value;
  modifyInfo.name = txtMname.value;
  modifyInfo.price = txtMprice.value;
  // 保存修改的信息
  saveGoodsList();
  showGoodsList();
  alert('保存成功！');
});

// 初始化修改商品分类的下拉选项
function initMTypes() {
  selMtype.innerHTML = '';
  for (let i = 0; i < types.length; i++) {
    let op = document.createElement('option');
    op.setAttribute('value', types[i]);
    op.append(types[i]);
    selMtype.appendChild(op);
  }
}

initMTypes();

// 删除商品
function delGoods(index) {
  console.log('要删除的记录：', index, goodsList[index]);
  let goods = goodsList[index];
  let result = confirm('是否删除：' + goods.name);
  if (result) {
    goodsList.splice(index, 1);
    saveGoodsList();
    showGoodsList();
  }
}

// 作业1：仿造上课的效果完成学生信息管理
// 学生信息包括：学号，班级，姓名，出生日期，性别

// 添加商品
btnAdd.addEventListener('click', function () {
  // 商品为json格式数据
  let goods = {
    type: '',
    name: '',
    price: 0
  };
  // 获取数据
  goods.type = selType.value;
  goods.name = txtName.value;
  goods.price = parseFloat(txtPrice.value);
  console.log('添加的商品信息：', goods);
  // 添加到数组中
  goodsList.push(goods);
  console.log('商品的数组：', goodsList);
  // 保存数据
  saveGoodsList();
  // 更新商品列表
  showGoodsList();
  layer.msg('商品信息添加成功');
});

// 保存商品信息
function saveGoodsList() {
  let data = JSON.stringify(goodsList);
  localStorage.setItem(GOODS_KEY, data);
}
// 读取商品信息
function loadGoodsList() {
  let data = localStorage.getItem(GOODS_KEY);
  if (data) {
    goodsList = JSON.parse(data);
  }
  // 立即呈现在页面上
  showGoodsList();
}

loadGoodsList();
