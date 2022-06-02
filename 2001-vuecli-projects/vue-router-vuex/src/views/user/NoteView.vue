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
        <el-table-column label="最后修改时间">
          <!-- 自定义显示模板 -->
          <template slot-scope="scope">
            {{ scope.row.lastupdate | formatDate }}
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="s">
            <el-button size="small" type="primary" @click="showModify(s.row)">修改</el-button>
            <el-button size="small" type="danger" @click="del(s.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 
        分页的部分
        属性：total是记录数,current-page是当前页码,page-size是分页大小
        layout是分页相关功能，比如prev是上一页
        事件：current-change表示当前页面变化
        size-change表示分页大小变化
      -->
      <el-pagination :total="page.total" :current-page.sync="page.pageNumber" :page-size.sync="page.pageSize" @current-change="query" layout="prev,pager,next,total,jumper,sizes" :page-sizes="[5, 10, 20]" @size-change="query"></el-pagination>

      <!-- {{ list }} -->
    </div>

    <!-- 修改对话框 -->
    <div>
      <el-dialog title="修改记事本" :visible.sync="modifyVisible" :close-on-click-modal="false" @closed="query">
        <div v-loading="loading">
          <el-form>
            <el-form-item>
              <el-input v-model="modifyInfo.title" placeholder="标题"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="textarea" v-model="modifyInfo.info" placeholder="内容"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div slot="footer">
          <el-button @click="modify" type="primary">保存</el-button>
          <el-button @click="modifyVisible = false" type="danger">关闭</el-button>
        </div>
      </el-dialog>
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
      // 修改的部分
      modifyInfo: {},
      modifyVisible: false,
    }
  },
  methods: {
    del(info) {
      app
        .$confirm('是否删除：' + info.title, '删除', {
          type: 'warning',
        })
        .then(() => {
          app.loading = true
          tools.ajax('/user/note/delete', info, (data) => {
            app.loading = false
            // callback表示对话框关闭后的回调函数
            app.$alert(data.message, '信息', {
              callback: app.query,
            })
          })
        })
        .catch(() => {})
    },
    showModify(info) {
      app.modifyInfo = JSON.parse(JSON.stringify(info))
      app.modifyVisible = true
    },
    modify() {
      app.loading = true
      tools.ajax('/user/note/update', app.modifyInfo, (data) => {
        app.loading = false
        app.$alert(data.message)
      })
    },
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
