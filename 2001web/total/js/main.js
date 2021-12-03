// 用户基本信息和附加信息
let user;
let userattr;

// 获取用户信息 =============================
function getUserInfo() {
  ajax('/user/getUserLoginInfo', {}, function (data) {
    if (data.success) {
      user = data.resultData.loginInfo;
      userattr = user.userInfo;
      console.log('用户信息：', user);
    } else {
      alert('获取用户信息失败！');
      location = 'login.html';
    }
  });
}

getUserInfo();
// 获取用户信息结束 =============================
