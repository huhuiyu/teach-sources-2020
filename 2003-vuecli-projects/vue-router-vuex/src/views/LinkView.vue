<template>
  <div>
    <div>{{ title }}</div>

    <div>
      <el-select @change="queryCity" v-model="pid" placeholder="省份">
        <el-option v-for="d in plist" :key="d.pid" :value="d.pid" :label="d.province"></el-option>
      </el-select>

      <el-select v-model="cid" placeholder="城市">
        <el-option v-for="d in clist" :key="d.cid" :value="d.cid" :label="d.city"></el-option>
      </el-select>

      {{ pid }} -- {{ cid }}
    </div>

    <div>
      <el-select value-key="pid" @change="queryCityv" v-model="p" placeholder="省份">
        <el-option v-for="d in plistv" :key="d.pid" :value="d" :label="d.province"></el-option>
      </el-select>

      <el-select value-key="cid" v-model="c" placeholder="城市">
        <el-option v-for="d in clistv" :key="d.cid" :value="d" :label="d.city"></el-option>
      </el-select>
    </div>
    <div> {{ p.province }} ==== {{ c.city }} </div>
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
      pid: -1,
      plist: [],
      cid: -1,
      clist: [],
      // 值选中功能
      p: {},
      plistv: [],
      c: {},
      clistv: [],
    }
  },
  computed: {},
  methods: {
    queryCity() {
      tools.ajax(
        '/linkinfo/queryCityByProvince',
        {
          pid: app.pid,
        },
        (data) => {
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
      tools.ajax('/linkinfo/queryAllProvince', {}, (data) => {
        if (data.success) {
          app.plist = data.list
          app.pid = data.list[0].pid
          app.queryCity()
          return
        }
        app.$alert(data.message)
      })
    },
    queryCityv() {
      tools.ajax(
        '/linkinfo/queryCityByProvince',
        {
          pid: app.p.pid,
        },
        (data) => {
          if (data.success) {
            app.clistv = data.list
            app.c = data.list[0]
            return
          }
          app.$alert(data.message)
        }
      )
    },
    queryProvincev() {
      tools.ajax('/linkinfo/queryAllProvince', {}, (data) => {
        if (data.success) {
          app.plistv = data.list
          app.p = data.list[0]
          app.queryCityv()
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
    app.queryProvincev()
  },
}
</script>
