// vue全局过滤器定义
/*
  过滤器定义的格式
  Vue.filter('过滤器的名称',数据处理的function(){
    第一个参数固定为页面传入值，也就是页面过滤器表达式|前面的值
    2-n参数才是过滤器传入的其它参数值
  })
  页面调用是在注值表达式里面 用 | 过滤器名称([可选参数列表])
  例如 {{vue的值名称 | 过滤器名称}}
  表示将页面上对应vue的值传入给过滤器处理
  作业：同步上课的部门和员工管理完成班级和学生的管理
  在上课完成员工管理之后的一个星期一交作业
*/
Vue.filter('formatDate', function (value, format) {
  console.log('filter formatDate的参数：', value, format);
  // 处理默认格式
  format = format ? format : 'yyyy-MM-dd hh:mm:ss';
  // 获取时间戳对应的日期信息
  let date = new Date();
  date.setTime(value);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let mm = date.getMinutes();
  let s = date.getSeconds();
  // 替换格式字符串(自己完成前导0)
  let result = format.replace(/yyyy/g, y);
  result = result.replace(/MM/g, m);
  result = result.replace(/dd/g, d);
  result = result.replace(/hh/g, h);
  result = result.replace(/mm/g, mm);
  result = result.replace(/ss/g, s);

  return result;
});

// 将jsona的数据复制给jsonb
function copyJsonInfo(jsona, jsonb) {
  // json特有的循环方式
  for (let key in jsona) {
    console.log('jsona的信息：', key, jsona[key]);
    jsonb[key] = jsona[key];
  }
}

// 性别的列表
const SEX_LIST = [
  { value: 'm', text: '男' },
  { value: 'f', text: '女' },
  { value: 'n', text: '保密' },
];

// 性别显示的过滤器
Vue.filter('sex', function (value) {
  for (let i = 0; i < SEX_LIST.length; i++) {
    let data = SEX_LIST[i];
    if (data.value == value) {
      return data.text;
    }
  }
  return '性别数据错误';
});

// 选择文件功能
function chooseFile(cb, accept) {
  // 创建文件选择的表单元素
  let efile = document.createElement('input');
  efile.setAttribute('type', 'file');
  if (accept) {
    efile.setAttribute('accept', accept);
  }
  // 监听文件选择变化
  efile.addEventListener('change', function () {
    console.log('选中的文件列表', efile.files);
    cb(efile.files[0]);
  });

  // 触发文件选择
  efile.click();
}

// 复制文本到剪贴板
function copyText(info) {
  // 第一步伪造文本框并设置传入的文本为输入值
  let input = document.createElement('input');
  input.value = info;
  // 添加到页面上并设置焦点并选中输入的内容
  document.body.appendChild(input);
  input.focus();
  input.select();
  input.setSelectionRange(0, input.value.length); // 苹果系统兼容
  // 调用浏览器复制功能（这个方法已经过时）
  document.execCommand('Copy');
  // 移除文本框
  document.body.removeChild(input);
}

// 读取图片,第一个参数是文件，第二个参数的是回调
function readImage(file, cb) {
  if (!file) {
    cb('');
    return;
  }
  // 必须是图片
  if (file.type.substr(0, 6) != 'image/') {
    cb('');
    return;
  }
  // 读取图片
  let fr = new FileReader();
  // 监听读取完成事件
  fr.addEventListener('load', function () {
    // result属性就是读取的结果
    cb(fr.result);
  });
  // 启动读取
  fr.readAsDataURL(file);
}
