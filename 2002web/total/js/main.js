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

// 页面元素开始 =================================================
let divUserDialog = document.getElementById('divUserDialog');
let selSex = document.getElementById('selSex');
let txtEmail = document.getElementById('txtEmail');
let txtImgUrl = document.getElementById('txtImgUrl');
let txtPhone = document.getElementById('txtPhone');
let txtWechat = document.getElementById('txtWechat');
let txtQQ = document.getElementById('txtQQ');
let txtInfo = document.getElementById('txtInfo');
let btnSave = document.getElementById('btnSave');

let divToast = document.getElementById('divToast');
let divToastBody = document.querySelector('#divToast .toast-body');
let toast = bootstrap.Toast.getOrCreateInstance(divToast);

// 页面元素结束 =================================================

// 在对话框显示的时候初始化用户附加信息
divUserDialog.addEventListener('shown.bs.modal', function () {
  selSex.value = userattr.sex;
  txtEmail.value = userattr.email;
  txtImgUrl.value = userattr.img;
  txtInfo.value = userattr.info;
  txtPhone.value = userattr.phone;
  txtQQ.value = userattr.qq;
  txtWechat.value = userattr.wechat;
});

// 关闭对话框的时候要重新查询用户信息
divUserDialog.addEventListener('hidden.bs.modal', function () {
  getUserInfo();
});

// 保存用户附加信息
btnSave.addEventListener('click', function () {
  ajaxRequest(
    '/user/modifyUserInfo',
    {
      tbUserInfo: {
        email: txtEmail.value,
        img: txtImgUrl.value,
        info: txtInfo.value,
        phone: txtPhone.value,
        qq: txtQQ.value,
        sex: selSex.value,
        wechat: txtWechat.value
      }
    },
    function (data) {
      alert(data.message);
    }
  );
});
