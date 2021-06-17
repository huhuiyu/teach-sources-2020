let myvideo = document.getElementById('myvideo');
let btnvideo = document.getElementById('btnvideo');

let videos = [
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=1109&tbOssInfo.obid=3',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=1110&tbOssInfo.obid=3'
];
let audios = [
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=1111&tbOssInfo.obid=3',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=12&tbOssInfo.obid=1'
];

let images = [
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=3&tbOssInfo.obid=1',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=98&tbOssInfo.obid=3',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=631&tbOssInfo.obid=1'
];

let vindex = 0;
btnvideo.addEventListener('click', function () {
  vindex = (vindex + 1) % videos.length;
  // setAttribute表示修改元素的属性值
  // 而视频的src属性决定了视频的地址
  myvideo.setAttribute('src', videos[vindex]);
  myvideo.currentTime = 0;
  myvideo.play();
});

document.getElementById('btnpause').addEventListener('click', function () {
  myvideo.pause();
});
