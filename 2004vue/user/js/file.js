let app;
new Vue({
  el: '#app',
  data() {
    return {
      title: '文件管理',
      selectedFile: null,
      fileinfo: '',
      loading: false,
    };
  },
  methods: {
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
        }
      );
    },
    browseFile() {
      openFile(function (file) {
        app.selectedFile = file;
      });
    },
  },
  created() {
    app = this;
  },
});
