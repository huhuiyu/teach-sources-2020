<template>
  <div>
    <div class="top-box">
      <span>{{ title }}</span>
      <div>
        <el-dropdown @command="handelCommand" split-button type="primary">
          <i class="iconfont">&#xe6c3;</i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="iconfont">&#xe6c3;</i>
              {{ tbUser.nickname }}
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="iconfont">&#xe611;</i>
              {{ tbUser.accessKey }}
            </el-dropdown-item>

            <el-dropdown-item command="modify" divided>
              <i class="iconfont">&#xe69e;</i>
              修改用户信息
            </el-dropdown-item>

            <el-dropdown-item command="logout" divided>
              <i class="iconfont">&#xe69e;</i>
              安全退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- 基本信息修改对话框 -->
    <div>
      <el-dialog :visible.sync="modifyVisible">
        <!-- 标题 -->
        <div slot="title">修改用户信息</div>
        <!-- 主体 -->
        <div>修改表单：{{ modifyInfo }}</div>
        <!-- 脚部 -->
        <div slot="footer">
          <el-button type="primary">保存</el-button>
          <el-button @click="modifyVisible = false" type="danger">关闭</el-button>
        </div>
      </el-dialog>
    </div>

    <div>
      {{ tbUser }}
      <hr />
      {{ tbUserInfo }}
      <hr />
      {{ userOtherInfo }}
    </div>
  </div>
</template>
<script>
import tools from '../../js/tools'
let app
export default {
  name: 'UserMainView',
  data() {
    return {
      title: '用户首页',
      tbUser: {},
      tbUserInfo: {},
      userOtherInfo: {},
      // 基本信息修改
      modifyVisible: false,
      modifyInfo: {},
    }
  },
  methods: {
    handelCommand(command) {
      // 处理下拉菜单的菜单项点击
      if ('logout' == command) {
        app.logout()
      } else if ('modify' == command) {
        app.showModify()
      }
    },
    showModify() {
      app.modifyVisible = true
    },
    logout() {
      tools.ajax('/user/auth/logout', {}, () => {
        app.$router.push('/user/login')
      })
    },
    queryUserInfo() {
      tools.ajax('/user/auth/getUserInfo', {}, (data) => {
        console.log('用户信息:', data)
        if (data.success) {
          app.tbUser = data.tbUser
          app.tbUserInfo = data.tbUserInfo
          app.userOtherInfo = data.userOtherInfo
        } else {
          app.$message({
            message: data.message,
            type: 'error',
          })
        }
      })
    },
  },
  created() {
    app = this
    console.log(app.title)
    app.queryUserInfo()
  },
}
</script>
<style scoped>
.top-box {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
}

/* 饿了么所有的组件都是有一个同名class可以修改样式 */
.el-dropdown .iconfont {
  font-size: 0.9em;
}
</style>
