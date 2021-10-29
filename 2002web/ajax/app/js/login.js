// 作业2,把上课的界面美化
let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', function () {
  // 收集数据
  let tbAdmin = {
    username: txtName.value,
    password: SparkMD5.hash(txtPwd.value)
  };
  // 登录
  ajaxRequest(
    '/user/login',
    {
      tbAdmin: tbAdmin
    },
    function (data) {
      // 判断登录成功就跳转到用户首页
      if (data.success) {
        // js跳转页面的方法
        location = 'main.html';
      } else {
        // 失败就显示原因
        alert(data.message);
      }
    }
  );
});


document.getElementById('spReg').addEventListener('click'
,function(){
  location='reg.html';
})
