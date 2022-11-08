<template>
  <!-- 如果放置在饿了么ui的弹出层中，需要给弹出层添加append-to-body属性，容器总高度不要低于400px -->
  <div class="editor">
    <Toolbar ref="toolbar" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor v-model="editorData" :defaultConfig="editorConfig" :mode="mode" @onCreated="onCreated" @onChange="onChange" />
  </div>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

import logger from '@/js/logger'
export default {
  name: 'WangEditor',
  components: { Editor, Toolbar },
  data() {
    return {
      editor: null,
      editorData: '',
      toolbarConfig: { excludeKeys: ['group-image', 'group-video'] },
      editorConfig: { placeholder: '请输入...' },
      mode: 'default',
      htmlInfo: '',
    }
  },
  props: {
    placeholder: {
      default() {
        return '请输入...'
      },
    },
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor)
      logger.debug(editor.getAllMenuKeys())
      this.editor.setHtml(this.htmlInfo)
      this.$emit('editor-created', this.editor)
    },
    onChange(editor) {
      this.$emit('editor-change', editor.getHtml(), editor.getText().trim())
    },
    setInfo(htmlInfo) {
      if (this.editor) {
        this.editor.setHtml(htmlInfo)
      } else {
        this.htmlInfo = htmlInfo
      }
    },
  },
  created() {
    this.editorConfig = { placeholder: this.placeholder }
  },
  mounted() {
    logger.debug('in WangEditorComp mounted', this.editor)
  },
  beforeDestroy() {
    logger.debug('in beforeDestroy WangEditorComp')
    // 调用销毁 API 对当前编辑器实例进行销毁
    if (this.editor) {
      this.editor.destroy()
      this.editor = null
    }
  },
}
</script>
<style lang="less">
@import '@wangeditor/editor/dist/css/style.css';
.editor {
  display: flex;
  flex-direction: column;
  > :last-child {
    flex: 1;
  }
}
.w-e-scroll {
  div[contenteditable] {
    height: 300px !important;
  }
}
</style>
