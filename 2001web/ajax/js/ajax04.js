// 获取图片校验码
let imgCode = document.getElementById('imgCode');

function loadImageCode() {
  ajax(
    '/test/imageCode',
    {},
    function (data) {
      console.log('图片校验码信息：', data);
      if (data.success) {
        imgCode.setAttribute('src', data.message);
      }
    },
    'get'
  );
}

loadImageCode();
