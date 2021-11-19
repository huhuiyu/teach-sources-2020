let divUserInfo = document.getElementById('divUserInfo');
// 记住登录用户信息
let user;

// 获取登录用户信息
function getUserInfo() {
  ajaxRequest('/user/getUserLoginInfo', {}, function (data) {
    console.log('获取用户信息的结果：', data);
    if (data.success) {
      // 成功就获取并显示用户信息
      console.log('成功获取');
      user = data.resultData.loginInfo;
      divUserInfo.innerHTML =
        '用户名：' +
        user.username +
        '<br>昵称：' +
        user.nickname +
        '<br>开发者Key：' +
        user.accessKey;
      console.log('用户附加信息：', user.userInfo);
      showUserInfo();
    } else {
      console.log('获取失败');
      // 获取失败就跳转到登录页面
      location = 'login.html';
    }
  });
}

getUserInfo();

// 安全退出功能
let btnLogout = document.getElementById('btnLogout');

btnLogout.addEventListener('click', function () {
  // 调用服务器登出功能，确保安全
  ajaxRequest('/user/logout', {}, function (data) {
    console.log(data);
    location = 'login.html';
  });
});

// 修改附加信息
let btnUserInfo = document.getElementById('btnUserInfo');
let divModify = document.getElementById('divModify');

let selSex = document.getElementById('selSex');
let txtEmail = document.getElementById('txtEmail');
let txtImg = document.getElementById('txtImg');
let txtPhone = document.getElementById('txtPhone');
let txtQQ = document.getElementById('txtQQ');
let txtWechat = document.getElementById('txtWechat');
let taInfo = document.getElementById('taInfo');
let btnSave = document.getElementById('btnSave');
let btnClose = document.getElementById('btnClose');

btnUserInfo.addEventListener('click', function () {
  divModify.style.display = 'flex';
});

btnClose.addEventListener('click', function () {
  divModify.style.display = 'none';
  // 关闭的时候要重新获取更新后的用户信息
  getUserInfo();
});

btnSave.addEventListener('click', function () {
  // 获取更新值
  let tbUserInfo = {
    email: txtEmail.value,
    img: txtImg.value,
    info: taInfo.value,
    phone: txtPhone.value,
    qq: txtQQ.value,
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

let myimg = document.getElementById('myimg');
// 显示用户附加信息
function showUserInfo() {
  txtEmail.value = user.userInfo.email;
  txtImg.value = user.userInfo.img;
  txtPhone.value = user.userInfo.phone;
  taInfo.value = user.userInfo.info;
  txtQQ.value = user.userInfo.qq;
  selSex.value = user.userInfo.sex;
  txtWechat.value = user.userInfo.wechat;
  // 图片存在就显示
  if (txtImg.value.trim() != '') {
    myimg.setAttribute('src', txtImg.value);
    myimg.style.display = 'inline-block';
  }
}
