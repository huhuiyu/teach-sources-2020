// 用户基本信息和附加信息
let user;
let userattr;

// 获取用户信息 =============================
function getUserInfo() {
  ajax('/user/getUserLoginInfo', {}, function (data) {
    if (data.success) {
      user = data.resultData.loginInfo;
      userattr = user.userInfo;
      console.log('用户信息：', user, userattr);
      showUser();
    } else {
      alert('获取用户信息失败！');
      location = 'login.html';
    }
  });
}

getUserInfo();
// 获取用户信息结束 =============================

// 页面元素 ===================================
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

// toast轻提示
let divToast = document.getElementById('divToast');
let divToastBody = document.querySelector('#divToast .toast-body');
// 转bs5对象
let toast = bootstrap.Toast.getOrCreateInstance(divToast);

// 页面元素结束 ===================================

// 显示用户基本信息
function showUser() {
  spUser.innerHTML = user.username + '(' + user.nickname + ')';
}

// 基本信息对话框显示的时候需要填写默认数据
divUDialog.addEventListener('shown.bs.modal', function () {
  selSex.value = userattr.sex;
  txtEmail.value = userattr.email;
  txtImg.value = userattr.img;
  txtInfo.value = userattr.info;
  txtPhone.value = userattr.phone;
  txtQq.value = userattr.qq;
  txtWechat.value = userattr.wechat;
});

// 关闭时要重新查询用户信息
divUDialog.addEventListener('hidden.bs.modal', function () {
  getUserInfo();
});

// 保存用户附加信息
btnSave.addEventListener('click', function () {
  ajax(
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
