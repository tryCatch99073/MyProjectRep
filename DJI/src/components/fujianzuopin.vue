<template>
    <div class="fujianzuopin-panel">
        <div class="title">
            附件作品
        </div>
        <div class="forms">
            <el-form ref="form" :model="form" label-width="80px">

                <el-form-item label="点击上传">
                    <div class="inps" >
                        <el-upload
                                drag
                                action="http://localhost:3000/project_upload" limit="1" show-file-list="false" :data="uping" :file-list="filearr" :on-success="uploadSuccess"
                                >
                            <i class="el-icon-upload"></i>
                        </el-upload>
                    </div>
                </el-form-item>

                <el-form-item label="附件描述">
                    <div class="inps" style="width:650px;">
                        <el-input
                                type="textarea"
                                :autosize="{ minRows: 2, maxRows: 4}"
                                placeholder="请输入内容"
                                v-model="form.projectdesc">
                        </el-input>
                    </div>
                </el-form-item>
                <div class="foot">
                    <el-button>取消编辑</el-button>
                    <el-button type="primary" @click="saveData">载入</el-button>
                </div>
            </el-form>

            <el-table
                    :data="userPros"
                    style="width: 100%"
                    :row-class-name="tableRowClassName">
                <el-table-column
                        prop="projectdesc"
                        label="描述">
                </el-table-column>

                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="download(scope.row)" type="text" size="small">下载</el-button>
                        <el-button @click="goDelete(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

        </div>
    </div>
</template>

<script>
    export default {
        name: "fujianzuopin",
        data(){
            return{
                uping:{deletefilename:''},
                form:{
                    filename:'',
                    projectdesc:''
                },
                filearr:[],
                userPros: []
            }
        },
        mounted() {
            this.loadData()
        }
        ,methods:{
            uploadSuccess (response,file,fileList) {
               this.uping.deletefilename = response.filename
               this.form.filename = response.filename
                console.log(response)
            },
            loadData () {
                var _this = this
                axios.get('http://localhost:3000/pro/find?i='+JSON.parse(_this.Cookie.get('user'))._id).then(function (data) {
                    console.log(data)
                    _this.userPros = data.data
                    _this.$emit('loaded',data.data)
                })

            }, saveData () {
                var _this = this
                _this.form.userid = JSON.parse(_this.Cookie.get('user'))._id
                axios.post('http://localhost:3000/pro/add',_this.form).then(function (data) {
                    if(data.data.success){
                        _this.$notify({
                            title: '',
                            message: data.data.msg,
                            type: 'success'
                        });
                        _this.form={
                            filename:'',
                                projectdesc:''
                        }
                        _this.filearr = []
                        _this.loadData()
                    }
                })

            },
            goDelete:function (r) {
                var _this = this
                axios.get('http://localhost:3000/pro/del?i='+r._id).then(function (data) {
                    _this.$notify({
                        title: '',
                        message: data.data.msg,
                        type: 'success'
                    });
                    _this.loadData()
                })
            },
            download (r){
                var _this = this
                window.location.href = 'http://localhost:3000/down/project?fn='+r.filename
            }

        }
    }
</script>

<style scoped>
    .fujianzuopin-panel{
        padding:3%;
    }
    .title{
        font-size:17px;
        padding-bottom:15px;
        border-bottom:solid 1px #ccc;
    }
    .forms{
        margin-top:20px;
    }
    .inps{
        margin-left:35px;
        width:300px;
    }
    .foot{
        text-align: right;
    }
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>