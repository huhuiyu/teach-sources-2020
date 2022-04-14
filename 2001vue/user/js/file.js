let app;
new Vue({
  el: '#app',
  data() {
    return {
      title: '文件管理',
      file: null,
      fileinfo: '',
      loading: false,
    };
  },
  methods: {
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
        }
      });
    },
    openFile() {
      selectFile(function (file) {
        app.file = file;
      });
    },
  },
  created() {
    app = this;
  },
});
