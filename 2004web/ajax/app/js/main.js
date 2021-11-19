// 获取登录用户信息
let userinfo = {};
function queryUserinfo() {
  ajaxRequest('/user/getUserLoginInfo', {}, function (data) {
    console.log('登录用户信息', data);
    // 通过success判断是否有登录过
    // 登录的信息是：resultData.loginInfo
    if (data.success) {
      userinfo = data.resultData.loginInfo;
      showUserInfo();
      showUserAttr();
    } else {
      alert(data.message);
      location = 'login.html';
    }
  });
}

let spUser = document.getElementById('spUser');

function showUserInfo() {
  spUser.innerHTML = userinfo.username + '-' + userinfo.nickname;
}

queryUserinfo();

let btnShowKey = document.getElementById('btnShowKey');
let btnExit = document.getElementById('btnExit');

btnShowKey.addEventListener('click', function () {
  alert(userinfo.accessKey);
});

btnExit.addEventListener('click', function () {
  ajaxRequest('/user/logout', {}, function (data) {
    console.log('登出的结果', data);
    location = 'login.html';
  });
});

// 用户附加信息的部分
let divModifyDialog = document.getElementById('divModifyDialog');
let btnModifyInfo = document.getElementById('btnModifyInfo');
let selSex = document.getElementById('selSex');
let txtEmail = document.getElementById('txtEmail');
let txtImg = document.getElementById('txtImg');
let txtPhone = document.getElementById('txtPhone');
let txtQq = document.getElementById('txtQq');
let txtWechat = document.getElementById('txtWechat');
let taInfo = document.getElementById('taInfo');
let btnSave = document.getElementById('btnSave');
let btnClose = document.getElementById('btnClose');

btnModifyInfo.addEventListener('click', function () {
  divModifyDialog.style.display = 'flex';
});

btnClose.addEventListener('click', function () {
  divModifyDialog.style.display = 'none';
  // 关闭时要查询修改后的信息
  queryUserinfo();
});

btnSave.addEventListener('click', function () {
  // 获取修改的信息
  let tbUserInfo = {
    email: txtEmail.value,
    img: txtImg.value,
    info: taInfo.value,
    phone: txtPhone.value,
    qq: txtQq.value,
    sex: selSex.value,
    wechat: txtWechat.value
  };
  // 保存
  ajaxRequest(
    '/user/modifyUserInfo',
    {
      tbUserInfo: tbUserInfo
    },
    function (data) {
      alert(data.message);
    }
  );
});

// 显示用户附加信息
let myimg = document.getElementById('myimg');
function showUserAttr() {
  // 附加信息是在userInfo字段里面
  selSex.value = userinfo.userInfo.sex;
  txtEmail.value = userinfo.userInfo.email;
  txtImg.value = userinfo.userInfo.img;
  taInfo.value = userinfo.userInfo.info;
  txtPhone.value = userinfo.userInfo.phone;
  txtQq.value = userinfo.userInfo.qq;
  txtWechat.value = userinfo.userInfo.wechat;
  // 如果有值就显示头像图片
  if (txtImg.value.trim() != '') {
    myimg.setAttribute('src', txtImg.value);
    myimg.style.display = 'inline-block';
  }
}

// 作业。完成用户昵称，用户密码修改功能
// 完成找回密码功能（需要用户正确填写邮箱信息）
// 自我美化用户附加信息的展示
