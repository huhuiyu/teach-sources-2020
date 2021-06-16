let images = [
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=98&tbOssInfo.obid=3',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=3&tbOssInfo.obid=1',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=631&tbOssInfo.obid=1'
];
let videos = [
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=1110&tbOssInfo.obid=3',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=1109&tbOssInfo.obid=3'
];

let btnImg = document.getElementById('btnImg');
let myimg = document.getElementById('myimg');
let imgindex = 0;

btnImg.addEventListener('click', function () {
  imgindex = (imgindex + 1) % images.length;
  // js修改元素的属性值
  // 对图片修改src就会更换图片
  myimg.setAttribute('src', images[imgindex]);
});

// 切换视频的部分
let btnVideo = document.getElementById('btnVideo');
let myvideo = document.getElementById('myvideo');
let videoindex = 0;

btnVideo.addEventListener('click', function () {
  videoindex = (videoindex + 1) % videos.length;
  myvideo.setAttribute('src', videos[videoindex]);
  myvideo.currentTime = 0;
  myvideo.play();
});

document.getElementById('btnPauseVideo')
  .addEventListener('click', function () {
  myvideo.pause();
});
