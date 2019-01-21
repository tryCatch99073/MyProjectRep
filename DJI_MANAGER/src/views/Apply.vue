<template>
    <div id="main">

        <div style="margin-top:10px;margin-bottom:10px;">
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        fixed
                        prop="jobname"
                        label="职位"
                       >
                </el-table-column>
                <el-table-column
                        prop="username"
                        label="用户名"
                        >
                </el-table-column>
                <el-table-column
                        prop="time"
                        label="时间"
                       >
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态"
                >
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        >
                    <template slot-scope="scope">
                        <el-button @click="sendMsg(scope.row)" type="text" size="">增加消息</el-button>
                    </template>
                </el-table-column>

                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="$router.push({path:'/rt',query:{i:scope.row.resume}})" type="text" size="small">查看简历</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <el-dialog title="回复" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="" :label-width="formLabelWidth">
                    <el-input v-model="form.msg" autocomplete="off"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="send">确 定</el-button>
            </div>
        </el-dialog>

    </div>


</template>

<script>
    export default {
        name: "Apply",
        data(){
            return {
                tableData: []
                , dialogFormVisible: false,
                form: {
                  msg:''
                },formLabelWidth: '0px',
                apply:{
                    _id:''
                }
            }
        },
        mounted() {
            this.loadData()
        }
        ,
        methods: {
            loadData () {
                var _this = this
                axios.get('http://localhost:3000/apl/find').then(function (data) {
                    _this.tableData = data.data
                })
            },
            sendMsg (r){
                this.apply._id = r._id

                this.dialogFormVisible = true
            },
            send (){
                var _this = this
                this.apply.msg = this.form.msg
                this.apply.status = this.form = "已发送消息"
                axios.post('http://localhost:3000/apl/sendmsg',this.apply).then(function (data) {
                    _this.tableData = []
                    _this.$notify({
                        title: '',
                        message: data.data.msg,
                        type: 'success'
                    });
                    _this.dialogFormVisible =false

                    _this.loadData()
                })

            }
        }
    }
</script>

<style scoped>

</style>