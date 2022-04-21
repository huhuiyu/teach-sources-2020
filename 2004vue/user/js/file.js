let app;
new Vue({
  el: '#app',
  data() {
    return {
      title: '文件管理',
      selectedFile: null,
      fileinfo: '',
      loading: false,
      // 查询的部分
      page: { pageSize: 5 },
      queryInfo: {
        contentType: '',
        fileinfo: '',
        filename: '',
      },
      types: FILE_TYPES,
      list: [],
      // 预览图片数据
      imgdata: '',
      // 上传的图片预览
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
    copyLink(info) {
      copyText(getDownloadUrl(info.fid));
      alert('地址已经复制成功');
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
      if (!app.selectedFile || !app.fileinfo.trim()) {
        return;
      }
      app.loading = true;
      upload(
        app.selectedFile,
        {
          fileinfo: app.fileinfo,
        },
        function (data) {
          app.loading = false;
          console.log('应答结果：', data);
          alert(data.message);
          app.selectedFile = null;
          app.imgdata = '';
          app.query();
        }
      );
    },
    browseFile() {
      openFile(function (file) {
        app.selectedFile = file;
        // 如果是图片就调用预览
        if (file.type.substr(0, 6) == 'image/') {
          loadImageData(file, function (data) {
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
