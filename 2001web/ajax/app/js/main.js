// 获取用户信息
let user;
let spUser = document.getElementById('spUser');
let btnLogout = document.getElementById('btnLogout');
let btnKey = document.getElementById('btnKey');

function getUserInfo() {
  ajax('/user/getUserLoginInfo', {}, function (data) {
    console.log('应答信息：', data);
    if (data.success) {
      user = data.resultData.loginInfo;
      spUser.innerHTML = user.username + '(' + user.nickname + ')';
    } else {
      location = 'login.html';
    }
  });
}

getUserInfo();

// 显示开发者key
btnKey.addEventListener('click', function () {
  alert(user.accessKey);
});

// 安全退出
btnLogout.addEventListener('click', function () {
  ajax('/user/logout', {}, function () {
    location = 'login.html';
  });
});
