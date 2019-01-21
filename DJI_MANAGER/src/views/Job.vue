<template>
    <div id="main">
        <div style="margin-top:10px;margin-bottom:10px;">
            <el-button type="primary" icon="el-icon-edit" @click="$router.push('/job/add')">(新增)</el-button>

        </div>


        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="职位名称"
            ></el-table-column>
            <el-table-column
                    prop="type"
                    label="职位类型"
            ></el-table-column>
            <el-table-column
                    prop="city"
                    label="职位所在城市"
            ></el-table-column>
            <el-table-column
                    prop="time"
                    label="招聘职位日期"
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
        name: "Job",
        data(){
            return {
                tableData:[]
                ,key : ''
            }
        },mounted() {
            this.loadZhiWei()
        },methods:{
            loadZhiWei (k) {
                var path = 'http://localhost:3000/job/search'
                var _this = this
                if (k) {
                    path += '?k='+k
                }
                axios.get(path)
                    .then(function (data) {
                        console.log(data)
                        _this.tableData = data.data ;
                    })
            },
            search (){
                this.loadZhiWei(this.key) ;
            },
            goDeleteData(rows){
                var _this = this
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    axios.get('http://localhost:3000/job/del?i='+rows._id)
                        .then(function (data) {
                            _this.tableData = []
                            alert(data.data)
                            _this.loadZhiWei()
                        })
                });
            }

        }
    }
</script>

<style scoped>

</style>