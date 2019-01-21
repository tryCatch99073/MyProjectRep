<template>

    <div id="main">
        <div style="margin-top:10px;margin-bottom:10px;">

        </div>


        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="username"
                    label="用户名"
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
        name: "User",
        data(){
            return {
                tableData:[]
                ,key : ''
            }
        },mounted() {
            this.loadUser()
        },methods:{
            loadUser () {
                var path = 'http://localhost:3000/usr/find'
                var _this = this
                axios.get(path)
                    .then(function (data) {
                        _this.tableData = data.data ;
                    })
            },
            goDeleteData(r){
                var _this = this
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    axios.get('http://localhost:3000/usr/del?i='+r._id)
                        .then(function (data) {
                            _this.loadUser()
                            alert(data.data)
                        })
                });
            }

        }
    }
</script>

<style scoped>

</style>