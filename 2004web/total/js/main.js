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

// 页面元素开始 ======================
let divUDialog = document.getElementById('divUDialog');
let selSex = document.getElementById('selSex');
let txtEMail = document.getElementById('txtEMail');
let txtImg = document.getElementById('txtImg');
let txtPhone = document.getElementById('txtPhone');
let txtQQ = document.getElementById('txtQQ');
let txtWechat = document.getElementById('txtWechat');
let txtInfo = document.getElementById('txtInfo');
let btnSave = document.getElementById('btnSave');

// toast的部分
let divToast = document.getElementById('divToast');
let divToastBody = document.querySelector('#divToast .toast-body');
// 元素转bs对象
let bsToast = bootstrap.Toast.getOrCreateInstance(divToast);

// 页面元素结束 ======================

// 弹出修改用户信息时要填写原始值
divUDialog.addEventListener('shown.bs.modal', function () {
  selSex.value = userattr.sex;
  txtEMail.value = userattr.email;
  txtImg.value = userattr.img;
  txtInfo.value = userattr.info;
  txtPhone.value = userattr.phone;
  txtQQ.value = userattr.qq;
  txtWechat.value = userattr.wechat;
});

// 关闭修改用户信息时要重新查询
divUDialog.addEventListener('hidden.bs.modal', function () {
  getUserInfo();
});

// 保存用户信息
btnSave.addEventListener('click', function () {
  ajaxRequest(
    '/user/modifyUserInfo',
    {
      tbUserInfo: {
        email: txtEMail.value,
        img: txtImg.value,
        info: txtInfo.value,
        phone: txtPhone.value,
        qq: txtQQ.value,
        sex: selSex.value,
        wechat: txtWechat.value
      }
    },
    function (data) {
      // alert(data.message);
      divToastBody.innerHTML = data.message;
      bsToast.show();
    }
  );
});
