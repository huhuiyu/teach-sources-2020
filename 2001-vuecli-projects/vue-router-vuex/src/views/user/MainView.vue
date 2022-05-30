<template>
  <div>
    <div class="top-box">
      <div>{{ title }}</div>
      <div>
        <el-dropdown @command="handleCommand" split-button type="primary">
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

            <el-dropdown-item command="modify" divided>
              <i class="iconfont">&#xe651;</i>
              修改用户信息
            </el-dropdown-item>

            <el-dropdown-item command="logout" divided>
              <i class="iconfont">&#xe651;</i>
              安全退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <!-- 修改信息对话框 -->
    <div>
      <el-dialog :visible.sync="modifyVisible" @closed="queryUser" :close-on-click-modal="false">
        <div slot="title">用户基本信息修改</div>

        <div>
          <!-- {{ modifyInfo }} -->
          <el-form>
            <el-form-item>
              <el-input v-model="modifyInfo.nickname" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="modifyInfo.img" placeholder="头像url"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="modifyInfo.qq" placeholder="qq"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="modifyInfo.wechat" placeholder="微信"></el-input>
            </el-form-item>
            <el-form-item>
              <el-radio-group v-model="modifyInfo.sex">
                <el-radio label="m">男</el-radio>
                <el-radio label="f">女</el-radio>
                <el-radio label="n">保密</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-input type="textarea" v-model="modifyInfo.info" placeholder="简介"></el-input>
            </el-form-item>
          </el-form>
        </div>

        <div slot="footer">
          <el-button @click="save" type="primary">保存</el-button>
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
      modifyVisible: false,
      modifyInfo: {},
    }
  },
  methods: {
    // 作业：添加修改邮箱，修改电话，修改密码的菜单
    // 并完成对应的功能
    save() {
      tools.ajax('/user/auth/updateUserInfo', app.modifyInfo, (data) => {
        app.$alert(data.message)
      })
    },
    handleCommand(command) {
      console.log('菜单命令：', command)
      if ('logout' == command) {
        app.logout()
      } else if ('modify' == command) {
        // 修改用户信息功能
        app.modify()
      }
    },
    modify() {
      let info = JSON.parse(JSON.stringify(app.tbUserInfo))
      // 不需要邮箱和电话
      delete info.email
      delete info.phone
      // 添加用户名字段
      info.nickname = app.tbUser.nickname + ''
      // vue对象赋值之后不能增加或者删除字段，所以需要最后做赋值动作
      app.modifyInfo = info

      app.modifyVisible = true
    },
    logout() {
      // 用户安全退出
      tools.ajax('/user/auth/logout', {}, () => {
        app.$router.push('/user/login')
      })
    },
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
