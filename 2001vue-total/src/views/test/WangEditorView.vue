<template>
  <div>
    <div>{{ title }}</div>
    <div>
      <wang-editor-comp @editor-change="editorChange" placeholder="请输入信息..."></wang-editor-comp>
    </div>
    <div v-html="html"></div>
    <div>{{ text }}</div>
  </div>
</template>

<script>
import logger from '@/js/logger'
import WangEditorComp from '@/components/WangEditorComp.vue'
let app
export default {
  name: 'WangEditorView',
  components: { WangEditorComp },
  data() {
    return {
      title: 'WangEditor演示',
      html: '',
      text: '',
    }
  },
  methods: {
    editorChange(html, text) {
      app.html = html
      app.text = text
    },
  },
  created() {
    app = this
    logger.debug(app.title)
  },
}
</script>
