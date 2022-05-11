<template>
  <!-- 
    页面的内容要放置在template小节里面
    该小节里面的顶级元素有且只能是一个
  -->
  <div>
    <div>{{ title }}</div>
    <div>
      <button @click="test">事件测试</button>
    </div>
  </div>
</template>
<script>
// js部分和原生vue基本相似，el不再需要，name即可
export default {
  name: 'TestView',
  data() {
    return {
      title: 'vue测试页面',
    }
  },
  methods: {
    test() {
      alert('vue事件绑定')
    },
  },
}
</script>
