<template>
    <div class="jiaoyubeijing-panel">
        <div class="title">
            教育背景（必填）
        </div>
        <div class="forms">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="毕业学校">
                    <div class="inps">
                        <el-input v-model="form.schoolname"></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="学历">
                    <div class="inps" style="width:700px;">
                        <el-select v-model="form.edu"  placeholder="请选择" style="width: 43%">
                            <el-option :key="A" :label="大专" :value="'大专'"></el-option>
                            <el-option :key="B" :label="本科" :value="'本科'"></el-option>
                            <el-option :key="C" :label="研究生" :value="'研究生'"></el-option>
                        </el-select>
                        <span style="margin-left:10px;">专业</span>
                        <el-input v-model="form.pro" style="width:43%;margin-left:20px;"></el-input>
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
        name: "jiaoyubeijing",
        data(){
            return {
                form:{
                    schoolname:'',edu:'',pro:'',begintime:'',endtime:''
                }
            }
        },
        mounted() {
            this.loadData()
        },
        methods:{
            saveData (){
                var _this = this
                var userid = JSON.parse(this.Cookie.get('user'))._id
                _this.form.userid = userid
                axios.post('http://localhost:3000/edu/up',_this.form).then(function (data) {
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
                    axios.get('http://localhost:3000/edu/get?i='+userid).then(function (data) {
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
    .jiaoyubeijing-panel{
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