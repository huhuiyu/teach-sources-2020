<template>
  <!-- 
    单文件vue中template就是html页面代码
    注意事项是只能单一根节点!!!!!
  -->
  <div>
    <div class="main">{{ title }}</div>
    <div>
      <button @click="test">测试</button>
    </div>
  </div>
</template>
<script>
// 导入js文件
import tools from '../js/tools'

// 脚本在script小节，默认要导出一个vue的配置对象
// 和原生vue配置对象的区别是没有el项，对应的是name项
// 因为脚本和template的内容关联
export default {
  name: 'TestView',
  data() {
    return {
      title: 'vue测试页面',
    }
  },
  methods: {
    test() {
      alert(this.title)
    },
  },
  created() {
    console.log(tools.info)
    tools.test()
  },
}
</script>
<style scoped>
/* scoped的css样式是局部的，vuecli会对样式做唯一标志修改 */
.main {
  font-size: 3rem;
  text-align: center;
}
</style>
