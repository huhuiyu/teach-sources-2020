<template>
  <div>
    <div>{{ title }}</div>

    <div>
      <el-select @change="queryCity" v-loading="loading" v-model="pid" placeholder="省份">
        <el-option v-for="d in plist" :key="d.pid" :value="d.pid" :label="d.province"></el-option>
      </el-select>

      <el-select v-loading="loading" v-model="cid" placeholder="城市">
        <el-option v-for="d in clist" :key="d.cid" :value="d.cid" :label="d.city"></el-option>
      </el-select>

      {{ pid }}===={{ cid }}

      <hr />
      <el-select @change="queryCityV" v-model="province" value-key="pid" placeholder="省份值">
        <el-option v-for="d in plist" :key="d.pid" :value="d" :label="d.province"></el-option>
      </el-select>
      <el-select v-model="city" value-key="cid" placeholder="城市值">
        <el-option v-for="d in clist" :key="d.cid" :value="d" :label="d.city"></el-option>
      </el-select>

      {{ province.province }}{{ city.city }}

      <!-- {{ clist }} -->
      <!-- {{ plist }} -->

      <hr />

      <el-select @change="queryCity" v-loading="loading" v-model="pid" placeholder="省份">
        <el-option :value="-1" label="请选择"></el-option>

        <el-option v-for="d in plist" :key="d.pid" :value="d.pid" :label="d.province"></el-option>
      </el-select>
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
      loading: false,
      pid: -1,
      plist: [],
      cid: -1,
      clist: [],
      // 选中值的下拉列表
      province: [],
      city: [],
    }
  },
  methods: {
    queryCity() {
      app.loading = true
      tools.ajax('/linkinfo/queryCityByProvince', { pid: app.pid }, (data) => {
        app.loading = false
        if (data.success) {
          app.clist = data.list
          app.cid = app.clist[0].cid

          return
        }
        app.$alert(data.message)
      })
    },
    queryProvince() {
      // 省份查询
      app.loading = true
      tools.ajax('/linkinfo/queryAllProvince', {}, (data) => {
        app.loading = false
        if (data.success) {
          app.plist = data.list
          // 默认选中第一项
          app.pid = app.plist[0].pid

          // 联动查询
          app.queryCity()
          return
        }
        app.$alert(data.message)
      })
    },
    queryCityV() {
      app.loading = true
      tools.ajax(
        '/linkinfo/queryCityByProvince',
        {
          pid: app.province.pid,
        },
        (data) => {
          app.loading = false
          if (data.success) {
            app.clist = data.list

            app.city = app.clist[0]
            return
          }
          app.$alert(data.message)
        }
      )
    },
    queryProvinceV() {
      // 省份查询
      app.loading = true
      tools.ajax('/linkinfo/queryAllProvince', {}, (data) => {
        app.loading = false
        if (data.success) {
          app.plist = data.list
          // 默认选中第一项

          app.province = app.plist[0]
          // 联动查询
          app.queryCityV()
          return
        }
        app.$alert(data.message)
      })
    },
  },
  created() {
    app = this
    console.log(app.title)

    app.queryProvince()
    app.queryProvinceV()
  },
}
</script>
