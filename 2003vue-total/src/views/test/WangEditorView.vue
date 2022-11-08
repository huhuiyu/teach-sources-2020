<template>
  <div>
    <div> {{ title }}</div>
    <div>
      <wang-editor-comp ref="editor" @editor-change="infoChange" @editor-created="editorCreated" placeholder="请输入富文本信息..."></wang-editor-comp>
    </div>
    <div v-html="info"></div>
  </div>
</template>

<script>
import logger from '@/js/logger'
import WangEditorComp from '@/components/WangEditorComp.vue'
let app
export default {
  components: { WangEditorComp },
  name: 'WangEditorView',
  data() {
    return {
      title: 'WangEditor演示',
      info: '',
      editor: null,
    }
  },
  methods: {
    // 文本框内容变化
    infoChange(html, text) {
      logger.debug(html, text)
      app.info = html
    },
    // 富文本框创建完毕
    editorCreated(editor) {
      logger.debug('富文本对象：', editor)
      app.editor = editor
      // editor.setHtml('<b>测试初始化值</b>')
      logger.debug('组件：', app.$refs)
      app.$refs.editor.setInfo('<b>测试初始化值</b>')
    },
  },
  created() {
    app = this
    logger.debug(app.title)
  },
}
</script>
