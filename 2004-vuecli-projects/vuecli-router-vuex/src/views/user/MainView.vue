<template>
  <div>
    <div class="top-box">
      <span>{{ title }}</span>
      <div>
        <el-dropdown split-button type="primary">
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
            <el-dropdown-item divided>
              <i class="iconfont">&#xe69e;</i>
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
</style>
