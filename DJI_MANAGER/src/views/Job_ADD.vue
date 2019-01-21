<template>
    <div id="main" style="width:600px;margin:2%;">
        <div style="font-size:30px;margin:3%;">
            学校宣传行程信息添加
        </div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="职位名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="职位类别">
                <el-select v-model="form.type" placeholder="请选择类型">
                    <el-option label="非研发类" value="非研发类"></el-option>
                    <el-option label="设计类" value="设计类"></el-option>
                    <el-option label="研发类" value="研发类"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="工作城市">
                <el-input v-model="form.city"></el-input>
            </el-form-item>
            <el-form-item label="发布时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="form.time" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="$router.push('/job')">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Job_ADD",
        data() {
            return {
                form: {
                    name:'',
                    type:'',
                    city:'',
                    time:''
                }
            }
        },
        methods: {
            onSubmit() {
                var _this = this
                axios
                    .post('http://localhost:3000/job/add',this.form)
                    .then(function (data) {
                        alert(data.data.msg)
                        _this.$router.push('/job')
                    })
            }
        }
    }
</script>

<style scoped>

</style>