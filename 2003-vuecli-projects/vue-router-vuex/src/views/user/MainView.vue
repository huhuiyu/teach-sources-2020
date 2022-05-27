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

    <!-- 
    修改基本信息的对话框 
    visible属性控制对话框是否出现
    close-on-click-modal属性控制对话框点击背后的遮罩层是否关闭对话框
    @closed事件表示当对话框关闭完成之后
    -->
    <el-dialog :visible.sync="visible" :close-on-click-modal="false" @closed="queryUser">
      <div slot="title">修改基本信息</div>

      <div>
        <el-form>
          <el-form-item>
            <el-input v-model="modifyInfo.nickname" placeholder="用户名"></el-input>
          </el-form-item>

          <el-form-item>
            <el-radio-group v-model="modifyInfo.sex">
              <el-radio label="m">男</el-radio>
              <el-radio label="f">女</el-radio>
              <el-radio label="n">保密</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item>
            <el-input v-model="modifyInfo.img" placeholder="用户头像"></el-input>
          </el-form-item>

          <el-form-item>
            <el-input v-model="modifyInfo.qq" placeholder="QQ"></el-input>
          </el-form-item>

          <el-form-item>
            <el-input v-model="modifyInfo.wechat" placeholder="微信"></el-input>
          </el-form-item>

          <el-form-item>
            <el-input type="textarea" v-model="modifyInfo.info" placeholder="简介"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <el-button type="primary" @click="save">保存</el-button>
        <el-button type="danger" @click="visible = false">关闭</el-button>
      </div>
    </el-dialog>
    <!-- 
      作业：下拉菜单里面添加修改电话，修改邮箱，修改密码三项
      全都用对话框完成对应的功能
    -->
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
      // 修改信息
      visible: false,
      modifyInfo: {},
    }
  },
  computed: {},
  methods: {
    // 保存基本信息
    save() {
      tools.ajax('/user/auth/updateUserInfo', app.modifyInfo, (data) => {
        app.$alert(data.message)
      })
    },
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
    showModify() {
      // 修改的信息是组合删除的结果
      let info = JSON.parse(JSON.stringify(app.tbUserInfo))
      info.nickname = app.tbUser.nickname
      delete info.email
      delete info.phone
      app.modifyInfo = info
      app.visible = true
    },
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
