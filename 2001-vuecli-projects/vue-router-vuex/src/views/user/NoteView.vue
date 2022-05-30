<template>
  <div>
    <div>{{ title }}</div>
    <div v-loading="loading">
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="queryInfo.title" placeholder="标题模糊查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="queryInfo.info" placeholder="内容模糊查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="query" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="showAdd" type="success">添加</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 数据呈现部分 -->
    <div>
      <el-table :data="list" stripe>
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="内容" prop="info"></el-table-column>
        <el-table-column label="最后修改事件">
          <!-- 自定义显示模板 -->
          <template slot-scope="scope">
            {{ scope.row.lastupdate | formatDate }}
          </template>
        </el-table-column>
      </el-table>

      <!-- {{ list }} -->
    </div>

    <!-- 添加对话框 -->
    <div>
      <el-dialog title="添加记事本" :visible.sync="addVisible" :close-on-click-modal="false" @closed="query">
        <div v-loading="loading">
          <el-form>
            <el-form-item>
              <el-input v-model="addInfo.title" placeholder="标题"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="textarea" v-model="addInfo.info" placeholder="内容"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div slot="footer">
          <el-button @click="add" type="primary">添加</el-button>
          <el-button @click="addVisible = false" type="danger">关闭</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
// @表示src目录
import tools from '@/js/tools'

let app
export default {
  name: 'UserNoteView',
  data() {
    return {
      title: '用户记事本',
      page: { pageSize: 5 },
      queryInfo: {
        info: '',
        title: '',
      },
      list: [],
      loading: false,
      // 添加的部分
      addInfo: {
        info: '',
        title: '',
      },
      addVisible: false,
    }
  },
  methods: {
    add() {
      app.loading = true
      tools.ajax('/user/note/add', app.addInfo, (data) => {
        app.loading = false
        app.$message(data.message)
      })
    },
    showAdd() {
      // 显示添加对话框
      app.addInfo = {
        info: '',
        title: '',
      }
      app.addVisible = true
    },
    query() {
      app.loading = true
      let info = tools.concatJson(app.queryInfo, app.page)
      console.log('合并的结果：', info)
      tools.ajax('/user/note/queryAll', info, (data) => {
        app.loading = false
        if (data.success) {
          app.page = data.page
          app.list = data.list
        } else {
          app.$alert(data.message, '错误', {
            type: 'error',
          })
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
