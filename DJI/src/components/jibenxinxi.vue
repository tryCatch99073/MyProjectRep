<template>
    <div class="jibenxinxi-panel">
        <div class="title">
           基本信息（必填）
        </div>
        <div class="forms">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="姓名">
                    <div class="inps">
                        <el-input v-model="form.name"></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="性别">
                    <div class="inps">
                        <el-radio v-model="form.sex" label="男">男</el-radio>
                        <el-radio v-model="form.sex" label="女">女</el-radio>
                    </div>
                </el-form-item>
                <el-form-item label="国家/地区">
                    <div class="inps">
                        <el-select v-model="form.country" placeholder="请选择" style="width: 100%">
                            <el-option
                                    :key="CN"
                                    :label="中国"
                                    :value="'中国'">
                            </el-option>
                        </el-select>
                    </div>
                </el-form-item>
                <el-form-item label="血型">
                    <div class="inps">
                        <el-select v-model="form.bloodtype" placeholder="请选择" style="width: 100%">
                            <el-option :key="A" :label="A" :value="'A'"></el-option>
                            <el-option :key="B" :label="B" :value="'B'"></el-option>
                            <el-option :key="C" :label="C" :value="'C'"></el-option>
                            <el-option :key="D" :label="D" :value="'D'"></el-option>
                        </el-select>
                    </div>
                </el-form-item>
                <el-form-item label="生日">
                    <div class="inps">
                        <el-date-picker
                                v-model="form.birthday"
                                type="date" value-format="yyyy-MM-dd"
                                placeholder="选择日期" style="width:100%">
                        </el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item label="学历">
                    <div class="inps">
                        <el-select v-model="form.edu" placeholder="请选择" style="width: 100%">
                            <el-option :label="大专" :value="'大专'"></el-option>
                            <el-option :label="本科" :value="'本科'"></el-option>
                            <el-option :label="研究生" :value="'研究生'"></el-option>
                        </el-select>
                    </div>
                </el-form-item>
                <el-form-item label="工作年限">
                    <div class="inps">
                        <el-input v-model="form.workyear"></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="手机号">
                    <div class="inps" style="width:700px">
                        <el-input v-model="form.phone" style="width: 40%;margin-left:0px;"></el-input>
                       <el-input v-model="form.tempphone" style="width: 40%;margin-left:20px;"></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="邮箱">
                    <div class="inps" style="width:650px;">
                        <el-input v-model="form.email" style="width:47%;"></el-input><el-button type="info" style="margin-left:15px;">邮箱验证</el-button>
                    </div>
                </el-form-item>
                <el-form-item label="自我评价">
                    <div class="inps" >
                        <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="form.selfdesc">
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
        name: "jibenxinxi",
        data(){
            return {
                form:{
                    name:'',
                    sex:'',
                    country:'',
                    bloodtype:'',
                    birthday:'',
                    edu:'',
                    workyear:'',
                    phone:'',
                    tempphone:'',email:'',selfdesc:''
                }
            }
        },
        mounted() {
            this.loadData()
        }
        ,
        methods:{
            saveData (){
                var _this = this
                _this.form.userid = JSON.parse(_this.Cookie.get('user'))._id
                _this.$notify({
                    title: '',
                    message: '保存成功',
                    type: 'success'
                });
                axios.post('http://localhost:3000/ui/up',_this.form,function (data) {
                    alert(data.data)
                })


            },
            loadData () {
                var _this = this
                var userid = JSON.parse(this.Cookie.get('user'))._id
                axios
                    .get('http://localhost:3000/ui/get?i='+userid)
                    .then(function (data) {
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
.jibenxinxi-panel{
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
    .forms .inps{
        margin-left:40px;
        width:300px;
    }
    .foot{
        text-align: right;
    }
</style>