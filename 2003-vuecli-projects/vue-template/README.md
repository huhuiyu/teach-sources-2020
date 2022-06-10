# vue模板项目

## 操作步骤

- 复制本文件夹里面除了`node_modules`以外的全部内到新项目文件夹
- 用vscode打开新项目文件夹
- 打开终端的快捷键`Ctrl + ~`
- 在终端执行`npm install`初始化项目(正常情况只需要执行一次)
- 在终端执行`npm run serve`开启开发服务器进行正常开发

## 项目结构

- `pageage.json`是项目依赖配置核心文件，`npm install`初始化就是根据这个文件配置安装，`package-lock.json`是版本锁定文件，一般是团队开发使用
- `vue.config.js`是vue配置核心文件
- `public`目录里面除了`index.html`的所有其它文件都不会被处理，直接原样输出，等同于原生html的目录
- `src`是源代码目录，里面文件在build时会被打包处理生成原生css，js文件，里面的其它文件也会被处理，例如图片
  - `components`是组件文件目录
  - `router`是路由配置文件目录
  - `store`是vuex配置文件目录
  - `views`是视图文件目录
  - 其实目录并没有严格的规范要求
  - `App.vue`是全局页面文件，也就是启动页
  - `main.js`是全局js文件
