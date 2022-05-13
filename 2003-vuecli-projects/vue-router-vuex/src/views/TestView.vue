<template>
  <!-- 
    页面的内容要放置在template小节里面
    该小节里面的顶级元素有且只能是一个
  -->
  <div>
    <div class="main">{{ title }}</div>
    <div>
      <i class="iconfont">&#xe662;</i>

      <el-button @click="test" type="primary"> 饿了么按钮 </el-button>

      <button @click="test">事件测试</button>
    </div>
    <div>
      <input type="text" v-model="info" placeholder="md5" />
      {{ info }}的加密结果：{{ md5info }}
    </div>
  </div>
</template>
<script>
// 导入js
import tools from '../js/tools'

// js部分和原生vue基本相似，el不再需要，name即可
export default {
  name: 'TestView',
  data() {
    return {
      title: 'vue测试页面',
      info: '',
    }
  },
  computed: {
    md5info() {
      return tools.md5(this.info)
    },
  },
  methods: {
    test() {
      alert('vue事件绑定')
    },
  },
  created() {
    console.log('工具js导入：', tools.info)
  },
}
</script>
<style scoped>
.main {
  font-size: 2rem;
  text-align: center;
}
</style>
