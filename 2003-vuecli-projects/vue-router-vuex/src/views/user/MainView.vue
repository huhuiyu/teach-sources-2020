<template>
  <div>
    <div class="top-box">
      <div>{{ title }}</div>
      <div>
        <el-dropdown @command="handlerCommand" split-button type="primary">
          <i class="iconfont">&#xe602;</i>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              {{ tbUser.username }}
              ({{ tbUser.nickname }})
            </el-dropdown-item>
            <el-dropdown-item>{{ tbUser.accessKey }}</el-dropdown-item>

            <el-dropdown-item command="modify" divided>修改基本信息</el-dropdown-item>

            <el-dropdown-item command="logout" divided>安全退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
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
    }
  },
  computed: {},
  methods: {
    // 下拉菜单的处理事件
    handlerCommand(command) {
      // 对command判定
      if ('logout' == command) {
        // 执行安全退出动作
        tools.ajax('/user/auth/logout', {}, () => {
          app.$router.push('/user/login')
        })
      } else if ('modify' == command) {
        app.showModify()
      }
    },
    // 显示修改基本信息
    showModify() {},
    queryUser() {
      tools.ajax('/user/auth/getUserInfo', {}, (data) => {
        if (data.success) {
          app.tbUser = data.tbUser
          app.tbUserInfo = data.tbUserInfo
          app.userOtherInfo = data.userOtherInfo
        } else {
          app.$alert(data.message, '错误')
        }
      })
    },
  },
  created() {
    app = this
    console.log(app.title)
    app.queryUser()
  },
}
</script>

<style scoped>
.top-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
/* 所有的饿了么组件都有一个同名的class，方便修改样式 */
.el-dropdown .iconfont {
  font-size: 0.9em;
}
</style>
