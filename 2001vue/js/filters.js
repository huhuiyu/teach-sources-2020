// 全局过滤器（filter）定义
/*
  Vue.filter('过滤器名称',值处理函数(){
    值处理函数第一个参数一定是页面传入的值！！！
    第二到第n个参数是页面过滤器传入的其它参数
    必须要有返回值供页面显示
  })
  页面调用是任意注值的表达式的后面
  格式是 vue值 | 过滤器名称([可选参数列表])
  vue会将vue值作为第一参数传入到过滤器
*/
Vue.filter('formatDate', function (value, format) {
  console.log('formatDate的参数信息：', value, format);
  // 格式的处理
  format = format ? format : 'yyyy-MM-dd hh:mm:ss';
  // 时间戳处理
  let date = new Date();
  date.setTime(value);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let mm = date.getMinutes();
  let s = date.getSeconds();
  // 格式化
  let result = format.replace(/yyyy/g, y);
  result = result.replace(/MM/g, m);
  result = result.replace(/dd/g, d);
  result = result.replace(/hh/g, h);
  result = result.replace(/mm/g, mm);
  result = result.replace(/ss/g, s);

  return result;
});

// 复制jsona对象的数据到jsonb
function copyJsonInfo(jsona, jsonb) {
  // json数据的特殊迭代
  for (let key in jsona) {
    console.log('jsona的信息', key, jsona[key]);
    jsonb[key] = jsona[key];
  }
}

// 性别的数组
const SEX_LIST = [
  { value: 'm', text: '男生' },
  { value: 'f', text: '女生' },
  { value: 'n', text: '保密' },
];

// 性别过滤器
Vue.filter('sex', function (value) {
  for (let i = 0; i < SEX_LIST.length; i++) {
    let data = SEX_LIST[i];
    if (data.value == value) {
      return data.text;
    }
  }
  return '性别值错误';
});

// 打开文件的方法
// 第一个参数是文件选中后的回调处理function
// 第二个参数是可选，文件类型过滤表达式
function selectFile(cb, accept) {
  // 创建文件表单元素
  let file = document.createElement('input');
  file.setAttribute('type', 'file');
  if (accept) {
    file.setAttribute('accept', accept);
  }
  // 监听文件选中值变化
  file.addEventListener('change', function () {
    cb(file.files[0]);
  });

  file.click();
}

// 复制文本到剪贴板
function copyText(text) {
  // 创建文本框，并设置值为传入的text
  let input = document.createElement('input');
  input.readOnly = 'readonly';
  input.value = text;
  // 追加到页面并选择文本
  document.body.appendChild(input);
  input.focus();
  input.select();
  input.setSelectionRange(0, input.value.length); // 苹果兼容代码
  // 调用浏览器复制指令
  document.execCommand('Copy');
  // 移除元素
  document.body.removeChild(input);
}

// 图片文件预览，参数一是文件对象，参数二，读取完成的回调function
function readImageFile(file, cb) {
  if (!file) {
    cb('');
    return;
  }
  if (file.type.substr(0, 6) != 'image/') {
    cb('');
    return;
  }
  let reader = new FileReader();
  // 监听文件是否读取完毕
  reader.addEventListener('load', function () {
    cb(reader.result);
  });
  // 读取文件为图片的dataurl
  reader.readAsDataURL(file);
}
