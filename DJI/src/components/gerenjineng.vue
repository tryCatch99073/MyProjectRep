<template>
    <div class="gerenjineng-panel">
        <div class="title">
            个人技能
        </div>
        <div class="forms">
            <el-form ref="form" :model="form" label-width="80px">

                <el-form-item label="技能类型">
                    <div class="inps">
                        <el-radio v-model="form.type" label="'技能能力'">技能能力</el-radio>
                        <el-radio v-model="form.type" label="'语言'">语言</el-radio>
                        <el-radio v-model="form.type" label="'证书'">证书</el-radio>
                    </div>
                </el-form-item>
                <el-form-item label="技能名称">
                    <div class="inps" style="width:700px;">
                        <el-input v-model="form.name" style="width:40%;"></el-input>
                        <span style="margin-left:10px;color:#666;">掌握程度</span>
                        <el-input v-model="form.degree" style="width:43%;margin-left:20px;"></el-input>
                    </div>
                </el-form-item>

            </el-form>
            <div>

            </div>
            <div class="foot">
                <el-button>取消编辑</el-button>
                <el-button type="primary" @click="saveData">添加</el-button>
                <div>
                    <el-table
                            :data="skilldatas"
                            style="width: 100%"
                            :row-class-name="tableRowClassName">
                        <el-table-column
                                prop="type"
                                label="技能类型"
                                >
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="技能名称"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="degree"
                                label="掌握程度">
                        </el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                                width="100">
                            <template slot-scope="scope">
                                <el-button @click="goDelete(scope.row)" type="text" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "gerenjineng",
        data(){
            return {
                form:{
                    type:'',
                    name:'',
                    degree:''
                },
                skilldatas: []
            }
        },
        mounted(){
            this.loadData()
        },
        methods:{
            saveData:function () {
                var _this = this
                var userid = JSON.parse(this.Cookie.get('user'))._id
                _this.form.userid = userid
                axios.post('http://localhost:3000/ski/add',_this.form).then(function (data) {
                    _this.$notify({
                        title: '',
                        message: '保存成功',
                        type: 'success'
                    });
                    _this.initForm()
                    _this.loadData()
                })

            },
            initForm (){
                this.form = {
                    type:'',
                    name:'',
                    degree:''
                }
            }
            ,
            loadData () {
                var _this = this
                var userid = JSON.parse(this.Cookie.get('user'))._id
                axios.get('http://localhost:3000/ski/get?i='+userid).then(function (data) {
                    _this.skilldatas = data.data ;
                    _this.$emit('loaded',data.data)
                })
            },
            goDelete(r){
                var _this = this
                axios.get('http://localhost:3000/ski/del?i='+r._id).then(function (data) {
                    _this.$notify({
                        title: '',
                        message:data.data.msg,
                        type: 'success'
                    });
                    _this.loadData()
                })
            }
        }
    }
</script>

<style scoped>
    .gerenjineng-panel{
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
</style>