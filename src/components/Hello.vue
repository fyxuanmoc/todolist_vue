<template>
  <div class="hello">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item >
        <el-input v-model="input" style="width:300px;" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item >
        <el-rate v-model="value1"></el-rate>
      </el-form-item><el-form-item>
      <el-button type="primary">添加</el-button>
    </el-form-item>
    </el-form>
    <div style="margin-left: 300px;margin-top: 100px">
    <el-table
      ref="multipleTable"
      :data="tableData1"
      tooltip-effect="dark"
      :show-header=false
      style="width: 60%"
      @selection-change="handleSelectionChange">
      <el-table-column
        prop="thing"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column >
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)">完成</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      value1: null,
      tableData3: [{
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      tableData1: [{thing: 'chifan'}],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  },
  created: function () {
    let vm = this
    this.$http.get('/find')
    .then(function (response) {
      console.log(response.data)
      vm.tableData1 = response.data
    })
    .catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
