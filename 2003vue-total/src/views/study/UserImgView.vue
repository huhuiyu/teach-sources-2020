<template>
  <div>
    <vuex-user-info-comp></vuex-user-info-comp>
    <div> {{ title }} </div>
    <div>
      <div v-if="loginUser.tbUserInfo && loginUser.tbUserInfo.img">
        <img :src="loginUser.tbUserInfo.img" alt="" />
      </div>
      <div v-else>这里用默认头像</div>
      <button @click="selectFile">更换头像</button>
      <div v-if="fileinfo">
        {{ fileinfo.file.name }}
      </div>
      <div v-else>请选择文件</div>
    </div>
  </div>
</template>

<script>
import logger from '@/js/logger'
import VuexUserInfoComp from '@/components/VuexUserInfoComp.vue'
import tools from '@/js/tools'
let app
export default {
  components: { VuexUserInfoComp },
  name: 'UserImgView',
  data() {
    return {
      title: '更换用户头像',
      fileinfo: null,
    }
  },
  methods: {
    // 浏览并选择文件
    selectFile() {
      app.fileinfo = null
      tools.openFile((file) => {
        app.fileinfo = file
        app.uploadFile()
      })
    },
    // 上传文件
    uploadFile() {
      tools.upload(
        '/user/file/upload',
        {
          fileinfo: '用户头像',
        },
        app.fileinfo.file,
        (data) => {
          // 上传成功之后的结果是带有完整的文件信息
          // 包括文件的id，通过id就可以拿到完整地址信息
          if (data.success) {
            app.updateUserImg(data.data)
          } else {
            alert(data.message)
          }
        }
      )
    },
    // 更新用户头像信息
    updateUserImg(data) {
      logger.debug('上传文件的文件完整信息：', data)
      let tbUserInfo = tools.concatJson(app.loginUser.tbUserInfo)
      delete tbUserInfo.email
      delete tbUserInfo.phone
      tbUserInfo.img = tools.getDownloadUrl(data.fid)
      tools.ajax('/user/auth/updateUserInfo', tbUserInfo, (info) => {
        logger.debug(info)
        app.updateUser()
      })
    },
    // 更新vuex中的信息
    updateUser() {
      // 获取原有头像的fid信息
      let fid = tools.isDowdloadUrl(this.loginUser.tbUserInfo.img)
      app.$store
        .dispatch('updateUser')
        .then(() => {
          if (fid != -1) {
            // 如果存在fid信息，需要删除
            tools.ajax('/user/file/delete', { fid: fid }, () => {})
          }
        })
        .catch(() => {})
    },
  },
  computed: {
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

<style scoped>
img {
  width: 10rem;
}
</style>
