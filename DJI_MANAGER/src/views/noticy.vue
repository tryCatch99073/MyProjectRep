<template>
    <div id="main">

        <div style="margin-top:10px;margin-bottom:10px;">
            <el-button type="primary" icon="el-icon-edit" @click="$router.push('/noticy/add')">(新增)</el-button>

        </div>

        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="title"
                    label="标题"
                    width="">
            </el-table-column>
            <el-table-column
                    prop="content"
                    label="内容"
                    width="">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="时间"
                    width="">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="">
                <template slot-scope="scope">
                    <el-button @click="deleteData(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>

</template>

<script>
    export default {
        name: "noticy",
        data() {
            return {
                tableData: []
            }
        },
        mounted() {
            this.loadData()
        },
        methods:{
            loadData () {
                var _this = this
                axios.get('http://localhost:3000/not/new')
                    .then(function (data) {
                        _this.tableData = data.data
                    })
            },
            deleteData : function (row) {
                var _this = this
                axios.get('http://localhost:3000/not/del?i='+row._id)
                    .then(function (data) {
                        alert(data.data.msg)
                        _this.tableData = []
                        _this.loadData()
                    })
            }
        }
    }
</script>

<style scoped>

</style>