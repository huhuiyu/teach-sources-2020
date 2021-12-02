// 登录用户信息和附加信息
let userinfo = {};
let userattr = {};

// 获取登录用户的信息
function getUserInfo() {
  ajaxRequest('/user/getUserLoginInfo', {}, function (data) {
    if (data.success) {
      // 获取成功就显示用户信息
      userinfo = data.resultData.loginInfo;
      userattr = userinfo.userInfo;
      console.log('用户信息：', userinfo, userattr);
      showUserInfo();
    } else {
      alert('请登录！！！');
      // 失败就跳转到登录页面
      location = 'login.html';
    }
  });
}

getUserInfo();

let spUser = document.getElementById('spUser');
// 显示用户信息
function showUserInfo() {
  spUser.innerHTML = userinfo.username + '(' + userinfo.nickname + ')';
}
