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