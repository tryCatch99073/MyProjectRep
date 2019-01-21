<template>

    <div id="main">

      <div style="margin-top:10px;margin-bottom:10px;">
          <el-button type="primary" icon="el-icon-edit" @click="$router.push('/society/add')">(新增)</el-button>

      </div>



        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="职位名称"
                   >
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="职位类别"
                    >
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="工作城市">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="发布时间">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                  >
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="goDeleteData(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>



    </div>


</template>

<script>
    export default {
        name: "Society",
        data() {
            return {
                tableData: []
            }
        },
        mounted() {
            this.loadData()
        },
        methods:{
            loadData:function () {
                var _this = this
                axios
                    .get('http://localhost:3000/adv/find')
                    .then(function (data) {
                        _this.tableData = data.data
                    })
            },
            goDeleteData(rows) {
                var _this = this
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    axios
                        .get('http://localhost:3000/adv/del?i='+rows._id)
                        .then(function (data) {
                            _this.tableData = []
                            _this.loadData()
                        })
                });


            }
        }
    }
</script>

<style scoped>



</style>