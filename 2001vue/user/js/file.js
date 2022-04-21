let app;
new Vue({
  el: '#app',
  data() {
    return {
      title: '文件管理',
      file: null,
      fileinfo: '',
      loading: false,
      // 打开图片的预览
      imgdata: '',
      // 查询的部分
      page: { pageSize: 5 },
      queryInfo: {
        contentType: '',
        fileinfo: '',
        filename: '',
      },
      list: [],
      types: TYPE_LIST,
      // 上传文件的预览功能
      preimg: '',
    };
  },
  methods: {
    // 判断是否为图片
    isImg(info) {
      return info.contentType.substr(0, 6) == 'image/';
    },
    // 预览上传的图片
    showImg(info) {
      app.preimg = getDownloadUrl(info.fid);
    },
    copyUrl(info) {
      let url = getDownloadUrl(info.fid);
      copyText(url);
      alert('下载地址已经复制');
    },
    del(info) {
      if (confirm('是否删除文件：' + info.filename)) {
        ajax(
          '/user/file/delete',
          {
            fid: info.fid,
          },
          function (data) {
            alert(data.message);
            app.query();
          }
        );
      }
    },
    download(info) {
      window.open(getDownloadUrl(info.fid));
    },
    query() {
      copyJsonInfo(app.page, app.queryInfo);
      ajax('/user/file/queryAll', app.queryInfo, function (data) {
        if (data.success) {
          app.page = data.page;
          app.list = data.list;
          return;
        }
        alert(data.message);
      });
    },
    uploadFile() {
      if (!app.file) {
        alert('请选择文件');
        return;
      }
      app.loading = true;
      upload(app.file, { fileinfo: app.fileinfo }, function (data) {
        app.loading = false;
        alert(data.message);
        if (data.success) {
          app.file = null;
          app.query();
        }
      });
    },
    openFile() {
      selectFile(function (file) {
        app.file = file;
        if (file.type.substr(0, 6) == 'image/') {
          readImageFile(file, function (data) {
            app.imgdata = data;
          });
        } else {
          app.imgdata = '';
        }
      });
    },
  },
  created() {
    app = this;

    app.query();
  },
});
