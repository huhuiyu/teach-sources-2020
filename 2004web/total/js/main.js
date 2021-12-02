// 用户和用户附加信息
let user = {};
let userattr = {};

// 获取用户信息
function getUserInfo() {
  ajaxRequest('/user/getUserLoginInfo', {}, function (data) {
    if (data.success) {
      user = data.resultData.loginInfo;
      userattr = user.userInfo;
      showUserInfo();
    } else if (data.code == 1000) {
      // code为1000就是没有登录
      location = 'login.html';
    } else {
      alert('代码错了！');
    }
  });
}

getUserInfo();

// 页面元素==============================================
let spUser = document.getElementById('spUser');
let spUserInfo = document.getElementById('spUserInfo');

// =====================================================

// 显示用户信息
function showUserInfo() {
  spUser.innerHTML = user.username + '(' + user.nickname + ')';
}

// email url 简介 手机 微信 qq 性别
// 保存 修改 重置 关闭