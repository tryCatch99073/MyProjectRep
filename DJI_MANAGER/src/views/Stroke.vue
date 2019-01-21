<template>
    <div id="main">
        <div style="margin-top:10px;margin-bottom:10px;">
            <el-button type="primary" icon="el-icon-edit" @click="$router.push('/stroke/add')">(新增)</el-button>

        </div>


        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="_id"
                    label="ID"
            ></el-table-column>
            <el-table-column
                    prop="city"
                    label="城市"
            ></el-table-column>

            <el-table-column
                    prop="school"
                    label="学校"
            ></el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
            ></el-table-column>
            <el-table-column
                    prop="type"
                    label="类型"
            ></el-table-column>
            <el-table-column
                    prop="time"
                    label="时间"
            ></el-table-column>
            <el-table-column
                    prop="address"
                    label="地点"
            ></el-table-column>

            <el-table-column
                    fixed="right"
                    label="操作"
            >
                <template slot-scope="scope">
                    <el-button @click="goDeleteData(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


    </div>
</template>

<script>
    export default {
        name: "Stroke",
        data() {
            return {
                tableData: []
            }
        },
        methods:{
            loadData(t){
                var _this = this
                var path = 'http://localhost:3000/str/find?' ;

                if (t) {
                    path += 't='+t
                }

                axios.get(path)
                    .then(function (data) {
                        _this.tableData = data.data
                    })
            },
            goDeleteData(rows){
                var _this = this
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    axios.get("http://localhost:3000/str/del?i="+rows._id)
                        .then(function (data) {
                            _this.tableData = []
                            _this.loadData()
                            alert(data.data)
                        })
                });


            }
        },
        mounted() {
            this.loadData()
        }
    }
</script>

<style scoped>

</style>