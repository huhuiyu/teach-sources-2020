let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', function () {
  let tbAdmin = {
    username: txtName.value,
    password: md5(txtPwd.value)
  };
  ajaxRequest(
    '/user/login',
    {
      tbAdmin: tbAdmin
    },
    function (data) {
      if (data.success) {
        // 登录成功就跳转到用户首页（js方式的跳转）
        location = 'main.html';
      } else {
        // 失败就显示原因
        alert(data.message);
      }
    }
  );
});

document.getElementById('spReg').addEventListener(
  'click',function(){
    location='reg.html';
  }
);