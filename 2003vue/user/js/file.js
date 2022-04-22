let app;
new Vue({
  el: '#app',
  data() {
    return {
      title: '用户文件管理',
      file: null,
      fileinfo: '',
      loading: false,
      // 查询的部分
      page: {},
      queryInfo: {
        contentType: '',
        fileinfo: '',
        filename: '',
      },
      list: [],
      // 打开的图片预览
      imagedata: '',
      // 类型列表
      types: TYPE_LIST,
      // 上传的文件预览
      preimg: '',
    };
  },
  methods: {
    showImg(info) {
      app.preimg = getDownloadUrl(info.fid);
    },
    isImg(info) {
      return info.contentType.substr(0, 6) == 'image/';
    },
    del(info) {
      if (confirm('是否删除文件：' + info.filename)) {
        ajax('/user/file/delete', { fid: info.fid }, function (data) {
          alert(data.message);
          app.query();
        });
      }
    },
    copyLink(info) {
      copyText(getDownloadUrl(info.fid));
      alert('已经复制链接地址');
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
      upload(
        app.file,
        {
          fileinfo: app.fileinfo,
        },
        function (data) {
          app.loading = false;
          app.file = null;
          alert(data.message);
          app.query();
        }
      );
    },
    openFile() {
      chooseFile(function (file) {
        app.file = file;
        // 图片预览
        if (file.type.substr(0, 6) == 'image/') {
          readImage(file, function (info) {
            app.imagedata = info;
          });
        } else {
          app.imagedata = '';
        }
      });
      // , 'images/*'
    },
  },

  created() {
    app = this;

    app.query();
  },
});
