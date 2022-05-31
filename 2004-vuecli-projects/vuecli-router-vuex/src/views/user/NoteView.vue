<template>
  <div>
    <div>{{ title }}</div>
    <!-- 上方菜单 -->
    <div>
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="queryInfo.title" placeholder="标题模糊查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="queryInfo.info" placeholder="内容模糊查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="requery" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="showAdd" type="success">添加...</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 添加的对话框 -->
    <div>
      <el-dialog title="添加信息" :visible.sync="addVisible" :close-on-click-modal="false" @closed="requery">
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
        <div v-loading="loading" slot="footer">
          <el-button @click="add" type="primary">添加</el-button>
          <el-button @click="addVisible = false" type="danger">关闭</el-button>
        </div>
      </el-dialog>
    </div>

    <!-- 数据呈现 -->
    <div v-loading="loading">
      <el-table :data="list" stripe>
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="内容" prop="info"></el-table-column>
        <!-- 自定义字段显示 -->
        <el-table-column label="信息修改时间">
          <!-- 通过slot-scope获取信息 -->
          <template slot-scope="scope">
            {{ scope.row.lastupdate | formatDate }}
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination 
        :total="page.total" 
        :current-page.sync="page.pageNumber" 
        :page-size.sync="page.pageSize" 
        @current-change="query" 
        @size-change="query" 
        :page-sizes="[5, 10, 20]" 
        layout="prev,pager,next,total,sizes,jumper"></el-pagination>

      {{ page }}
      <!-- <br />
      {{ list }} -->
    </div>
  </div>
</template>
<script>
import tools from '../../js/tools'
let app
export default {
  name: 'UserNoteView',
  data() {
    return {
      title: '用户记事本',
      list: [],
      page: { pageSize: 5 },
      queryInfo: {
        info: '',
        title: '',
      },
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
    requery() {
      // 回到第一页查询
      app.page.pageNumber = 1
      app.query()
    },
    add() {
      // 添加记录
      app.loading = true
      tools.ajax('/user/note/add', app.addInfo, (data) => {
        app.loading = false
        app.$alert(data.message)
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
      console.log(tools.concatJson(app.queryInfo, app.page))
      tools.ajax('/user/note/queryAll', tools.concatJson(app.queryInfo, app.page), (data) => {
        app.loading = false
        if (data.success) {
          app.list = data.list
          app.page = data.page
        } else {
          app.$alert(data.message)
        }
        // 作业，同步完成联系人功能
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
