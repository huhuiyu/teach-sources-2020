let imgCode = document.getElementById('imgCode');
let aimg = document.getElementById('aimg');
let txtCode = document.getElementById('txtCode');
let btnCheck = document.getElementById('btnCheck');
let spCheck = document.getElementById('spCheck');

// 获取图片校验码的方法
function changeImg() {
  ajaxRequest(
    '/test/imageCode',
    {},
    function (data) {
      console.log(data);
      if (data.success) {
        imgCode.setAttribute('src', data.message);
      } else {
        spCheck.innerHTML = data.message;
      }
    },
    'get'
  );
}

changeImg();

aimg.addEventListener('click', changeImg);
imgCode.addEventListener('click', changeImg);

// 校验图片验证码
btnCheck.addEventListener('click', function () {
  let code = txtCode.value;
  ajaxRequest(
    '/test/checkImageCode',
    {
      imageCode: code
    },
    function (data) {
      spCheck.innerHTML = data.message;
    }
  );
});
