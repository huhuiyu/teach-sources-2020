let txtInfo = document.getElementById('txtInfo');
let btnSave = document.getElementById('btnSave');
let btnLoad = document.getElementById('btnLoad');
let btnDel = document.getElementById('btnDel');
let spInfo = document.getElementById('spInfo');

// 保存信息到本地存储
btnSave.addEventListener('click', function () {
  let info = txtInfo.value.trim();
  if (info == '') {
    spInfo.innerHTML = '请输入信息';
    return;
  }
  // 保存
  // localStorage.setItem('本地信息的名称', 要保存的字符);
  localStorage.setItem('local-info', info);
  spInfo.innerHTML = '保存成功';
});

// 读取本地存储
btnLoad.addEventListener('click', function () {
  // localStorage.getItem('读取的本地信息的名称');
  let info = localStorage.getItem('local-info');
  if (info) {
    txtInfo.value = info;
    spInfo.innerHTML = '读取成功';
  } else {
    spInfo.innerHTML = '没有本地信息';
  }
});

// 删除本地信息
btnDel.addEventListener('click', function () {
  localStorage.removeItem('local-info');
  spInfo.innerHTML = '删除成功';
});

// json基础
let btnJson = document.getElementById('btnJson');
let preJson = document.getElementById('preJson');
let divJson = document.getElementById('divJson');

// json格式
// { "属性名称1":值1,"属性名称2":值2... }
// 属性必须是字符串，值可以是任意类型，包括json，数组。。。。
let myjson = {
  name: '蔡妮娜',
  sex: '女',
  ts: new Date().getTime(),
  classInfo: {
    cid: 100,
    cname: '计算机2001班'
  }
};

btnJson.addEventListener('click', function () {
  preJson.innerHTML = JSON.stringify(myjson);
  divJson.innerHTML =
    myjson.name + ':' + myjson.sex + '-' + myjson.classInfo.cname;
});

// json样式的字符串转换成json对象
let strJson = '{"name":"蔡妮娜","id":1000}';
console.log('json字符串错误操作', strJson.name);
let jsonInfo = JSON.parse(strJson);
console.log('json对象操作', jsonInfo.name);

// 简单本地存储的应用
let txtName = document.getElementById('txtName');
let txtSex = document.getElementById('txtSex');
let btnSaveUser = document.getElementById('btnSaveUser');
let btnLoadUser = document.getElementById('btnLoadUser');
let preUser = document.getElementById('preUser');

let user = {
  name: '',
  sex: ''
};

btnSaveUser.addEventListener('click', function () {
  // json数据来自于输入
  user.name = txtName.value;
  user.sex = txtSex.value;
  // 需要转换成字符串才能保存到本地存储
  localStorage.setItem('userinfo', JSON.stringify(user));
  preUser.innerHTML = '保存用户信息成功';
});

btnLoadUser.addEventListener('click', function () {
  let userinfo = localStorage.getItem('userinfo');
  if (userinfo) {
    // 转换回json
    userinfo = JSON.parse(userinfo);
    preUser.innerHTML = userinfo.name + 
      ':' + userinfo.sex;
  }else {
    preUser.innerHTML='没有用户信息';
  }
});
