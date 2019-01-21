<template>
    <div class="xiangmujingli-panel">
        <div class="title">
            项目经历（选填）
        </div>
        <div class="forms">
            <el-form ref="form" :model="form" label-width="80px">

                <el-form-item label="项目名称">
                    <div class="inps">
                        <el-input v-model="form.projectname"></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="开始时间">
                    <div class="inps">
                        <el-date-picker
                                v-model="form.begintime"
                                type="date" value-format="yyyy-MM-dd"
                                placeholder="选择日期" style="width:100%">
                        </el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item label="结束时间">
                    <div class="inps">
                        <el-date-picker
                                v-model="form.endtime"
                                type="date" value-format="yyyy-MM-dd"
                                placeholder="选择日期" style="width:100%">
                        </el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item label="项目描述">
                    <div class="inps" style="width:93%;">
                        <el-input
                                style="width: 100%;"
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="form.desc">
                        </el-input>
                    </div>
                </el-form-item>
                <el-form-item label="免责事宜">
                    <div class="inps" style="width:93%;">
                        <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="form.exem">
                        </el-input>
                    </div>
                </el-form-item>
                <el-form-item label="项目成果">
                    <div class="inps" style="width:93%;">
                        <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="form.result">
                        </el-input>
                    </div>
                </el-form-item>
            </el-form>
            <div class="foot">
                <el-button>取消编辑</el-button>
                <el-button type="primary" @click="saveData">保存</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "xiangmujingli",
        data(){
            return {
                form:{
                    projectname:'',begintime:'',endtime:'',desc:'',exem:'',result:''
                }
            }
        },
        mounted() {
            this.loadData()
        }
        ,
        methods:{
            saveData() {
                var _this = this
                var userid = JSON.parse(this.Cookie.get('user'))._id
                _this.form.userid = userid
                axios.post('http://localhost:3000/pexp/up',_this.form).then(function (data) {
                    _this.$notify({
                        title: '',
                        message: '保存成功',
                        type: 'success'
                    });
                })

            },
            loadData () {
                var _this = this
                var userid = JSON.parse(this.Cookie.get('user'))._id
                axios.get('http://localhost:3000/pexp/get?i='+userid).then(function (data) {
                    if (data.data.userid) {
                        _this.form = data.data
                        _this.$emit('loaded',_this.form)
                    }
                })



            }
        }
    }
</script>

<style scoped>
    .xiangmujingli-panel{
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