<template>
  <div>
    <div>{{ title }}</div>
    <!-- 上方查询表单 -->
    <div>
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="queryInfo.title" placeholder="标题"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="queryInfo.info" placeholder="内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="query" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="showAdd" type="success">添加</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 添加的对话框 -->
    <div>
      <el-dialog title="添加信息" :visible.sync="addVisible" :close-on-click-modal="false" @closed="query">
        <div v-loading="loading">
          <el-form>
            <el-form-item>
              <el-input v-model="addInfo.title" placeholder="标题"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="addInfo.info" placeholder="内容"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div slot="footer" v-loading="loading">
          <el-button type="primary" @click="add">保存</el-button>
          <el-button type="danger" @click="addVisible = false">关闭</el-button>
        </div>
      </el-dialog>
    </div>

    <!-- 数据显示的部分 -->
    <div v-loading="loading">
      <!-- 表格的data属性就是数据的数组 -->
      <el-table :data="list">
        <!-- label是表头,prop是数组中的数据的属性名称 -->
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="内容" prop="info"></el-table-column>
        <!-- 自定义模板列 -->
        <el-table-column label="信息修改时间">
          <template slot-scope="s">
            {{ s.row.lastupdate | formatDate }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button size="small" type="primary">修改</el-button>
            <el-button size="small" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 total是总记录数,current-page是当前页码, 
      page-size是分页大小,
      current-change事件是页码变化时要调用的方法-->
      <el-pagination background :total="page.total" :current-page.sync="page.pageNumber" :page-size.sync="page.pageSize" @current-change="query" layout="prev,pager,next,total,jumper,sizes" :page-sizes="[5, 10, 20]" @size-change="query"></el-pagination>
    </div>
  </div>
</template>
<script>
// @表示从src目录开始计算
import tools from '@/js/tools'

let app
export default {
  // 作业就是同步完成用户地址簿全部功能
  name: 'UserNoteView',
  data() {
    return {
      loading: false,
      title: '用户记事本',
      page: { pageSize: 5 },
      queryInfo: {
        info: '',
        title: '',
      },
      list: [],
      // 添加的部分
      addInfo: {
        info: '',
        title: '',
      },
      addVisible: false,
      // 修改的部分
      modifyInfo: {},
      modifyVisible: false,
    }
  },
  computed: {},
  methods: {
    add() {
      app.loading = true
      tools.ajax('/user/note/add', app.addInfo, (data) => {
        app.loading = false
        app.$alert(data.message)
      })
    },
    showAdd() {
      app.addInfo = {
        info: '',
        title: '',
      }
      app.addVisible = true
    },
    query() {
      app.loading = true
      let q = tools.concatJson(app.queryInfo, app.page)
      console.log('合并后的请求参数', q)
      tools.ajax('/user/note/queryAll', q, (data) => {
        app.loading = false
        if (data.success) {
          app.list = data.list
          app.page = data.page
        } else {
          app.$alert(data.message, '错误')
        }
      })
    },
  },
  created() {
    app = this
    console.log(app.title)
    app.query()
  },
}
</script>
