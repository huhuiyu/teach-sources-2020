// 获取图片校验码的方法
function changeImg() {
  ajaxRequest(
    '/test/imageCode',
    {},
    function (data) {
      console.log(data);
    },
    'get'
  );
}

changeImg();
