<template>
  <div>
    <user-info-comp></user-info-comp>
    <div> {{ title }} </div>
    <div>
      <div v-if="loginUser.tbUserInfo && loginUser.tbUserInfo.img">
        <img width="200px" :src="loginUser.tbUserInfo.img" alt="" />
      </div>
      <div v-else> 放一张默认图片 </div>
      <hr />
      <div>
        <button @click="selectFile">修改头像</button>
        <span v-if="fileinfo">{{ fileinfo.file.name }}</span>
        <span v-else>请点击修改头像选择文件</span>
      </div>
    </div>
    <hr />
    <div>
      {{ loginUser }}
    </div>
  </div>
</template>

<script>
import logger from '@/js/logger'
import UserInfoComp from '@/components/UserInfoComp.vue'
import tools from '@/js/tools'
let app
export default {
  components: { UserInfoComp },
  name: 'UserImgView',
  data() {
    return {
      title: '用户头像更换',
      fileinfo: null,
    }
  },
  methods: {
    // 选择文件
    selectFile() {
      app.fileinfo = null
      tools.openFile((fileinfo) => {
        app.fileinfo = fileinfo
        // 调用上传
        app.upload()
      })
    },
    // 上传文件
    upload() {
      tools.upload(
        '/user/file/upload',
        {
          fileinfo: '用户头像',
        },
        app.fileinfo.file,
        (data) => {
          if (data.success) {
            // 修改头像
            app.updateUserImg(data.data)
          } else {
            alert(data.message)
          }
        }
      )
    },
    // 更改用户头像
    updateUserImg(info) {
      // 图片地址（其实就是下载地址）
      let url = tools.getDownloadUrl(info.fid)
      // 副本修改
      let tbUserInfo = tools.concatJson(app.loginUser.tbUserInfo)
      tbUserInfo.img = url
      tools.ajax('/user/auth/updateUserInfo', tbUserInfo, () => {
        // 需要删除原有图片
        app.delUserImg()
        // 还要调用vuex更新用户信息
        app.$store
          .dispatch('updateUserInfo')
          .then(() => {})
          .catch(() => {})
      })
    },
    delUserImg() {
      let fid = tools.isDownloadUrl(app.loginUser.tbUserInfo.img)
      if (fid != -1) {
        tools.ajax(
          '/user/file/delete',
          {
            fid: fid,
          },
          () => {}
        )
      }
    },
  },
  computed: {
    // 用户信息统一来源于vuex
    loginUser() {
      return this.$store.state.loginUser
    },
  },
  created() {
    app = this
    logger.debug(app.title)
  },
}
</script>
