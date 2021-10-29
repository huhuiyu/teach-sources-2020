// 测试md5加密
console.log('md5加密测试：', SparkMD5.hash('abc'));
// 作业（下周周末前上交）
// 完成班级信息的管理（仿造部门信息管理）

// 注册相关功能
let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let txtNickname = document.getElementById('txtNickname');
let btnReg = document.getElementById('btnReg');

btnReg.addEventListener('click', function () {
  // 收集页面数据到服务器的格式
  let tbAdmin = {
    username: txtName.value,
    password: SparkMD5.hash(txtPwd.value),
    nickname: txtNickname.value
  };
  // ajax请求
  ajaxRequest(
    '/user/reg',
    {
      tbAdmin: tbAdmin
    },
    function (data) {
      alert(data.message);
    }
  );
});

// 跳转到登录
document.getElementById('btnLogin')
  .addEventListener('click', function () {
    location='login.html';
  });
