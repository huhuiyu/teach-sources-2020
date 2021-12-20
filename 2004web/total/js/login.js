let divInfo = document.getElementById('divInfo');
let btnLogin = document.getElementById('btnLogin');
let txtPwd = document.getElementById('txtPwd');
let txtName = document.getElementById('txtName');
// bs对话框对象
let bsInfo = bootstrap.Modal.getOrCreateInstance(divInfo);
// 对话框的body的div元素
let bsBody = document.querySelector('#divInfo .modal-body');

btnLogin.addEventListener('click', function () {
  ajaxRequest(
    '/user/login',
    {
      tbAdmin: {
        username: txtName.value,
        password: SparkMD5.hash(txtPwd.value)
      }
    },
    function (data) {
      if (data.success) {
        // 处理页面回转问题
        let url = 'main.html';
        // 获取地址栏中是否有回转页面
        let search = location.search;
        if (search.length <= 0) {
          // 没有就直接跳转页面
          location = url;
          return;
        }
        // 获取backUrl
        let backUrl = search.replace('?', '');
        let backUrlJson = Qs.parse(backUrl);
        console.log('backUrl信息：', search, backUrlJson);
        if (backUrlJson && backUrlJson.backUrl) {
          url = backUrlJson.backUrl;
        }
        location = url;
      } else {
        // 修改显示的内容
        bsBody.innerHTML = data.message;
        bsInfo.show();
        // 自动关闭
        setTimeout(function () {
          bsInfo.hide();
        }, 2000);
      }
    }
  );
});
