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

let btnSave = document.getElementById('btnSave');
let txtWechat = document.getElementById('txtWechat');
let txtQq = document.getElementById('txtQq');
let txtPhone = document.getElementById('txtPhone');
let txtInfo = document.getElementById('txtInfo');
let txtImg = document.getElementById('txtImg');
let txtEmail = document.getElementById('txtEmail');
let selSex = document.getElementById('selSex');
let divUDialog = document.getElementById('divUDialog');

// toast对话框
let divToast = document.getElementById('divToast');
let divToastBody = document.querySelector('#divToast .toast-body');
// 转成bs5的对象
let toast = bootstrap.Toast.getOrCreateInstance(divToast);

// 页面元素结束 ==============================

// 显示用户基本信息
function showUser() {
  spUser.innerHTML = user.username + '(' + user.nickname + ')';
}

// 显示用户附加信息（对话框弹出时）
divUDialog.addEventListener('shown.bs.modal', function () {
  txtEmail.value = userattr.email;
  txtImg.value = userattr.img;
  txtInfo.value = userattr.info;
  txtPhone.value = userattr.phone;
  txtQq.value = userattr.qq;
  selSex.value = userattr.sex;
  txtWechat.value = userattr.wechat;
});

// 关闭对话框要更新用户信息
divUDialog.addEventListener('hidden.bs.modal', function () {
  getUserInfo();
});

// 保存用户附加信息
btnSave.addEventListener('click', function () {
  ajaxRequest(
    '/user/modifyUserInfo',
    {
      tbUserInfo: {
        email: txtEmail.value,
        img: txtImg.value,
        info: txtInfo.value,
        phone: txtPhone.value,
        qq: txtQq.value,
        sex: selSex.value,
        wechat: txtWechat.value
      }
    },
    function (data) {
      // alert(data.message);
      divToastBody.innerHTML = data.message;
      toast.show();
    }
  );
});
