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
