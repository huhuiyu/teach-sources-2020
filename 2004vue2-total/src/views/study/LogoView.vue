<template>
  <div>
    <div> {{ title }} </div>
    <div> {{ userinfo.tbUserInfo.img }} </div>
    <div v-if="userinfo.isLogin">
      <!-- 对用户头像的判定 -->
      <div v-if="userinfo.tbUserInfo && userinfo.tbUserInfo.img">
        <img style="width: 10rem" :src="userinfo.tbUserInfo.img" alt="" />
      </div>
      <div v-else> 默认头像 </div>
      <button @click="openfile">浏览文件</button>
      <span v-if="fileinfo">
        {{ fileinfo.file.name }}
      </span>
      <span v-else>请选择文件</span>
      <button v-if="fileinfo" @click="upload">上传头像</button>
    </div>
    <div v-else> 必须登录 </div>
  </div>
</template>

<script>
import logger from '@/js/logger'
import tools from '@/js/tools'
let app
export default {
  name: 'TestView',
  data() {
    return {
      title: 'vue2模板',
      fileinfo: null,
    }
  },
  methods: {
    // 保存上传的图片为用户头像
    saveUserImg(info) {
      // 记住原来的fid
      let fid = tools.isDownloadUrl(app.userinfo.tbUserInfo.img)
      logger.debug('修改前的fid：', fid)
      // 用户附加信息副本
      let tbUserInfo = tools.concatJson(app.userinfo.tbUserInfo)
      delete tbUserInfo.email
      delete tbUserInfo.phone
      tbUserInfo.img = tools.getDownloadUrl(info.data.fid)
      logger.debug('新头像地址：', tbUserInfo.img)
      tools.ajax('/user/auth/updateUserInfo', tbUserInfo, (data) => {
        if (data.success) {
          //更新vuex中的用户状态
          app.$store
            .dispatch('updateUserInfo')
            .then(() => {
              app.$emit('status-change')
              // 需要删除原有的头像图片
              if (fid != -1) {
                tools.ajax('/user/file/delete', { fid: fid }, () => {})
              }
            })
            .catch(() => {})

          // 打开的文件列表必须是图片
        } else {
          alert(data.message)
        }
      })
    },
    // 上传图片
    upload() {
      tools.upload(
        '/user/file/upload',
        {
          fileinfo: '用户头像',
        },
        app.fileinfo.file,
        (info) => {
          if (info.success) {
            logger.debug('上传的结果', info)
            app.saveUserImg(info)
          } else {
            alert(info.message)
          }
        }
      )
    },
    openfile() {
      tools.openFile((fileinfo) => {
        app.fileinfo = fileinfo
      })
    },
  },
  computed: {
    // 使用vuex中的用户信息
    userinfo() {
      return this.$store.state.loginUser
    },
  },
  created() {
    app = this
    logger.debug(app.title)
    logger.debug(this.userinfo)
    logger.debug(tools.isDownloadUrl(this.userinfo.tbUserInfo.img))
    logger.debug(tools.isDownloadUrl('https://huhuiyu.top'))
  },
}
</script>
