let divUserInfo = document.getElementById('divUserInfo');

// 获取登录用户信息
function getUserInfo() {
  ajaxRequest('/user/getUserLoginInfo', {}, function (data) {
    console.log('获取用户信息的结果：', data);
    if (data.success) {
      // 成功就获取并显示用户信息
      console.log('成功获取');
      let user = data.resultData.loginInfo;
      divUserInfo.innerHTML =
        '用户名：' +
        user.username +
        '<br>昵称：' +
        user.nickname +
        '<br>开发者Key：' +
        user.accessKey;
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
