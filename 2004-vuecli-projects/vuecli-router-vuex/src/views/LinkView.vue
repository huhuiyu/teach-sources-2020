<template>
  <div>
    <div>{{ title }}</div>
    <div v-loading="loading">
      <el-select v-model="pid" placeholder="省份">
        <!-- <el-option :value="-1" label="请选择省份"></el-option> -->
        <el-option v-for="d in plist" :key="d.pid" :value="d.pid" :label="d.province"></el-option>
      </el-select>
      {{ pid }}
      <br />
      {{ province }}
      {{ plist }}
    </div>
  </div>
</template>
<script>
import tools from '@/js/tools'
let app
export default {
  name: 'LinkView',
  data() {
    return {
      title: '数据联动',
      plist: [{ pid: -1, province: '请选择省份' }],
      pid: -1,
      province: {},
      loading: false,
    }
  },
  methods: {
    queryProvince() {
      app.loading = true
      tools.ajax('/linkinfo/queryAllProvince', {}, (data) => {
        app.loading = false
        if (data.success) {
          app.plist = data.list
          app.province = data.list[0]
        } else {
          app.$alert(data.message)
        }
      })
    },
  },
  created() {
    app = this
    console.log(app.title)
    app.queryProvince()
  },
}
</script>
