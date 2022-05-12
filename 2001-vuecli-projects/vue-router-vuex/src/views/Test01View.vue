<template>
  <!-- 
    单文件vue中html页面的部分放置在template小节
    该小节中顶级元素有且只能有一个
  -->
  <div>
    <div class="main">{{ title }}</div>
    <button @click="test">测试</button>
    <input type="text" v-model="info" placeholder="需要md5加密的字符" />
    md5加密结果：{{ md5info }}
  </div>
</template>

<script>
// 导入js文件
import tools from '../js/tools'

// 脚本的部分放置在script小节，内容必须包含导出vue配置对象的代码
// 该配置对象不需要el属性，用name属性替代，且名称是任意自定义
// 原因是该对象一定是和template的内容绑定
export default {
  name: 'Test01View',
  data() {
    return {
      title: '测试页面一',
      info: '',
    }
  },
  methods: {
    test() {
      alert(this.title)
    },
  },
  computed: {
    md5info() {
      return tools.md5(this.info)
    },
  },
  created() {
    console.log('导入js：', tools.info)
    tools.test()
  },
}
</script>

<style scoped>
/* scoped可以避免多vue页面class同名问题，会在生成的class中附加标识 */
.main {
  font-size: 2rem;
  text-align: center;
}
</style>
