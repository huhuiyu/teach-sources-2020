// 获取登录用户信息
let user;
let spUser = document.getElementById('spUser');
let btnLogout = document.getElementById('btnLogout');
let btnKey = document.getElementById('btnKey');

function queryUser() {
  ajaxRequest('/user/getUserLoginInfo', {}, function (data) {
    console.log('用户信息', data);
    if (data.success) {
      user = data.resultData.loginInfo;
      console.log('成功的信息', user);
      spUser.innerHTML = user.username + '-' + user.nickname;
    } else {
      console.log('失败的情况');
      location = 'login.html';
    }
  });
}

queryUser();

btnKey.addEventListener('click', function () {
  alert(user.accessKey);
});

btnLogout.addEventListener('click', function () {
  ajaxRequest('/user/logout', {}, function () {
    location = 'login.html';
  });
});
