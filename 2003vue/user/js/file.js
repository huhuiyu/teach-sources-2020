let app;
new Vue({
  el: '#app',
  data() {
    return {
      title: '用户文件管理',
      file: null,
      fileinfo: '',
      loading: false
    };
  },
  methods: {
    uploadFile() {
      if (!app.file) {
        alert('请选择文件');
        return;
      }
      app.loading = true;
      upload(
        app.file,
        {
          fileinfo: app.fileinfo
        },
        function (data) {
          app.loading = false;
          app.file = null;
          alert(data.message);
        }
      );
    },
    openFile() {
      chooseFile(function (file) {
        app.file = file;
      });
      // , 'images/*'
    }
  },
  created() {
    app = this;
  }
});
