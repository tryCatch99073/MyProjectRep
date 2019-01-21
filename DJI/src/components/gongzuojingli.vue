<template>

    <div class="gongzuojingli-panel">
        <div class="title">
            工作经历（必填）
        </div>
        <div class="forms">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="公司全名">
                    <div class="inps" style="width:700px;">
                        <el-input v-model="form.compname" style="width:40%;"></el-input>
                        <span style="margin-left:10px;color:#666;">所在部门</span>
                        <el-input v-model="form.dept" style="width:43%;margin-left:20px;"></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="工作地点">
                    <div class="inps" style="width:700px;">
                        <el-input v-model="form.place" style="width:40%;"></el-input>
                        <span style="margin-left:10px;color:#666;">汇报对象</span>
                        <el-input v-model="form.report" style="width:43%;margin-left:20px;"></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="所在职位">
                    <div class="inps" style="width:700px;">
                        <el-input v-model="form.position" style="width:40%;"></el-input>
                        <span style="margin-left:10px;color:#666;">下属人数</span>
                        <el-input v-model="form.subor" style="width:43%;margin-left:20px;"></el-input>
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
                <el-form-item label="工作业绩">
                    <div class="inps" style="width:95%;">
                        <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="form.achie">
                        </el-input>
                    </div>
                </el-form-item>
                <el-form-item label="工作职责">
                    <div class="inps" style="width:95%;">
                        <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="form.duty">
                        </el-input>
                    </div>
                </el-form-item>
                <el-form-item label="离职原因">
                    <div class="inps" style="width:95%;">
                        <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="form.reason">
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
        name: "gongzuojingli",
        data(){
            return {
                form:{
                    compname:'',dept:'',place:'',report:'',position:'',subor:'',begintime:'',endtime:'',
                    achie:'',duty:'',reason:''
                }
            }
        },
        mounted() {
            this.loadData()
        }
        ,
        methods:{
            saveData () {
                var _this = this
                var userid = JSON.parse(this.Cookie.get('user'))._id
                _this.form.userid = userid
                axios.post('http://localhost:3000/exp/up',_this.form).then(function (data) {
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
                axios.get('http://localhost:3000/exp/get?i='+userid).then(function (data) {
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
    .gongzuojingli-panel{
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