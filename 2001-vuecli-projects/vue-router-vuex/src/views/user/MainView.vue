<template>
  <div>
    <div class="top-box">
      <div>{{ title }}</div>
      <div>
        <el-dropdown split-button type="primary">
          <i class="iconfont">&#xe64a;</i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="iconfont">&#xe64a;</i>
              {{ tbUser.username }}
              ({{ tbUser.nickname }})
            </el-dropdown-item>

            <el-dropdown-item>
              <i class="iconfont">&#xe660;</i>
              {{ tbUser.accessKey }}
            </el-dropdown-item>

            <el-dropdown-item divided>
              <i class="iconfont">&#xe651;</i>
              安全退出
            </el-dropdown-item>
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
  methods: {
    queryUser() {
      // 获取登录用户信息
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
  padding: 0.5rem;
  align-items: center;
}
/* 每一个饿了么组件都有一个对应名称class供用户调整样式 */
.el-dropdown .iconfont {
  font-size: 0.9em;
}
</style>
