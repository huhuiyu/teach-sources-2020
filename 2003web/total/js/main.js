let user = {};
let userattr = {};

// 获取用户信息
function getUserInfo() {
  ajaxRequest('/user/getUserLoginInfo', {}, function (data) {
    if (data.success) {
      // 有用户信息的情况
      user = data.resultData.loginInfo;
      // 用户附加信息
      userattr = user.userInfo;
      showUser();
      console.log('用户信息：', user, userattr);
    } else {
      // 没有就转到登录页面
      location = 'login.html';
    }
  });
}

getUserInfo();

// 页面元素 ==============================
let spUser = document.getElementById('spUser');

// 页面元素结束 ==============================

// 显示用户基本信息
function showUser() {
  spUser.innerHTML = user.username + '(' + user.nickname + ')';
}
