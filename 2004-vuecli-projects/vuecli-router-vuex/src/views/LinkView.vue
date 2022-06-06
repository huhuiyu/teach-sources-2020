<template>
  <div>
    <div>{{ title }}</div>
    <div v-loading="loading">
      <el-select @change="queryCity" v-model="pid" placeholder="省份">
        <!-- <el-option :value="-1" label="请选择省份"></el-option> -->
        <el-option v-for="d in plist" :key="d.pid" :value="d.pid" :label="d.province"></el-option>
      </el-select>
      <el-select v-model="cid" placeholder="城市">
        <el-option v-for="d in clist" :key="d.cid" :value="d.cid" :label="d.city"></el-option>
      </el-select>

      {{ pid }}-{{ cid }}
      <hr />

      <el-select @change="queryCityV" value-key="pid" v-model="province" placeholder="省份">
        <!-- <el-option :value="-1" label="请选择省份"></el-option> -->
        <el-option v-for="d in plist" :key="d.pid" :value="d" :label="d.province"></el-option>
      </el-select>
      <el-select v-model="city" value-key="cid" placeholder="城市">
        <el-option v-for="d in clist" :key="d.cid" :value="d" :label="d.city"></el-option>
      </el-select>

      {{ province.province }}-{{ city.city }}
      <hr />
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
      plist: [],
      pid: -1,
      province: {},
      loading: false,
      clist: [],
      cid: -1,
      city: {},
    }
  },
  methods: {
    queryCity() {
      app.loading = true
      tools.ajax(
        '/linkinfo/queryCityByProvince',
        {
          pid: app.pid,
        },
        (data) => {
          app.loading = false
          if (data.success) {
            app.clist = data.list
            app.cid = data.list[0].cid
            return
          }
          app.$alert(data.message)
        }
      )
    },
    queryProvince() {
      app.loading = true
      tools.ajax('/linkinfo/queryAllProvince', {}, (data) => {
        app.loading = false
        if (data.success) {
          app.plist = data.list
          app.pid = data.list[0].pid
          app.queryCity()
        } else {
          app.$alert(data.message)
        }
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
            app.city = data.list[0]
            return
          }
          app.$alert(data.message)
        }
      )
    },
    queryProvinceV() {
      app.loading = true
      tools.ajax('/linkinfo/queryAllProvince', {}, (data) => {
        app.loading = false
        if (data.success) {
          app.plist = data.list
          app.province = data.list[0]
          app.queryCityV()
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
    app.queryProvinceV()
  },
}
</script>
