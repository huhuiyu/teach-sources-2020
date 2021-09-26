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
  // 保存到本地
  localStorage.setItem('local-info', info);
  spInfo.innerHTML = '保存成功';
});

// 读取本地存储的信息
btnLoad.addEventListener('click', function () {
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

// 本地存储的知识点说明
//保存 localStorage.setItem('保存到本地的名称',保存值);
//读取 localStorage.getItem('保存到本地的名称');
//删除 localStorage.removeItem('保存到本地的名称');

// json基础
let btnJson = document.getElementById('btnJson');
let preJson = document.getElementById('preJson');
let divJson = document.getElementById('divJson');

// json格式
// {"属性1":值1,"属性2":值2...}
// 属性只能字符串，值可以是任意类型，包括json
let myjson = {
  name: '苏铭子',
  sex: '女',
  ts: new Date().getTime(),
  classInfo: {
    cid: 10,
    cname: '计算机2003班'
  }
};

btnJson.addEventListener('click', function () {
  // JSON.stringify(json对象)可以转换json对象到字符串
  preJson.innerHTML = JSON.stringify(myjson);
  // json对象.属性名可以读写json对象的属性值
  divJson.innerHTML =
    myjson.name + ':' + myjson.sex + '-' + myjson.classInfo.cname;
});

// json格式的字符串转回json对象
let strJson = '{"name":"刘兴","id":1001}';
console.log('json字符串操作错误', strJson.name);
// JSON.parse(json格式的字符串)转换成json对象
let json = JSON.parse(strJson);
console.log('字符串转的json', json.name, json);

// json和本地存储配合保存复杂的信息
let txtName = document.getElementById('txtName');
let txtSex = document.getElementById('txtSex');
let btnSaveJson = document.getElementById('btnSaveJson');
let btnLoadJson = document.getElementById('btnLoadJson');
let preJsonInfo = document.getElementById('preJsonInfo');

// 保存json信息
let user = {
  name: '',
  sex: ''
};

btnSaveJson.addEventListener('click', function () {
  // 从界面收集json信息
  user.name = txtName.value;
  user.sex = txtSex.value;
  // 保存json到本地需要转换成字符串
  localStorage.setItem('user-info', JSON.stringify(user));
  preJsonInfo.innerHTML = '保存JSON信息成功';
});

btnLoadJson.addEventListener('click', function () {
  let userInfo = localStorage.getItem('user-info');
  if (userInfo) {
    userInfo = JSON.parse(userInfo);
    preJsonInfo.innerHTML = userInfo.name + ':' + userInfo.sex;
  } else {
    preJsonInfo.innerHTML = '没有用户信息';
  }
});
