let selGoodsType = document.getElementById('selGoodsType');
let txtGoodsName = document.getElementById('txtGoodsName');
let txtPrice = document.getElementById('txtPrice');
let btnAdd = document.getElementById('btnAdd');
let tbData = document.getElementById('tbData');

// 商品类型数组
let types = ['电器', '生活用品', '饮料'];
// 商品数据
let goodsList = [];
// 初始化商品类型
function initTypes() {
  selGoodsType.innerHTML = '';
  for (let i = 0; i < types.length; i++) {
    let op = document.createElement('option');
    op.setAttribute('value', types[i]);
    op.append(types[i]);
    selGoodsType.appendChild(op);
  }
}
initTypes();

// 本地保存数据的key，const是声明常量
const GOODS_KEY = 'goods-info';

// 添加商品的功能
btnAdd.addEventListener('click', function () {
  let goods = {
    type: '',
    name: '',
    price: 0
  };
  // 收集数据
  goods.type = selGoodsType.value;
  goods.name = txtGoodsName.value;
  goods.price = parseFloat(txtPrice.value);
  // 添加到数组
  goodsList.push(goods);
  console.log('商品信息：', goodsList);
  saveGoodsList();
  showGoodsList();
});

// 显示商品信息
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
    // 价格
    td = document.createElement('td');
    td.append(goods.price);
    tr.appendChild(td);
    // 操作按钮部分
    td = document.createElement('td');
    // 删除按钮
    let btnDelete = document.createElement('button');
    btnDelete.append('删除商品');
    td.appendChild(btnDelete);
    tr.appendChild(td);
    btnDelete.addEventListener('click', function () {
      delGoods(i);
    });
    // 修改按钮
    let btnModify = document.createElement('button');
    btnModify.append('修改商品');
    td.appendChild(btnModify);
    btnModify.addEventListener('click', function () {
      showModify(i);
    });

    tbData.appendChild(tr);
  }
}
// 修改商品
let goodsInfo = {};
// 显示要修改的商品信息
function showModify(index) {
  // 记录要修改的信息
  goodsInfo = goodsList[index];
}

// 删除商品
function delGoods(index) {
  console.log('要删除的商品：', index, goodsList[index]);
  let goods = goodsList[index];
  let result = confirm('是否删除：' + goods.name);
  if (result) {
    goodsList.splice(index, 1);
    saveGoodsList();
    showGoodsList();
  }
}

// 保存商品
function saveGoodsList() {
  let data = JSON.stringify(goodsList);
  localStorage.setItem(GOODS_KEY, data);
}
// 加载商品
function loadGoodsList() {
  let data = localStorage.getItem(GOODS_KEY);
  if (data) {
    goodsList = JSON.parse(data);
  }
  showGoodsList();
}

loadGoodsList();
