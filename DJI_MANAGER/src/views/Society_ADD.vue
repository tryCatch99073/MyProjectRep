<template>

    <div id="main" style="width:500px;margin:2%;">
        <div style="font-size:30px;margin:3%;">
            社会招聘信息添加
        </div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="职位名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="工作城市">
                <el-input v-model="form.city"></el-input>
            </el-form-item>
            <el-form-item label="职位类别">
                <el-select v-model="form.type" placeholder="请选择活动区域">
                    <el-option label="服务类" value="服务类"></el-option>
                    <el-option label="运营类" value="运营类"></el-option>
                    <el-option label="地产类" value="地产类"></el-option>
                    <el-option label="职能类" value="职能类"></el-option>
                    <el-option label="设计类" value="设计类"></el-option>
                    <el-option label="服务类" value="服务类"></el-option>
                    <el-option label="信息安全类" value="信息安全类"></el-option>
                    <el-option label="市场销售类" value="市场销售类"></el-option>
                    <el-option label="互联网类" value="互联网类"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="详细信息">
                <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="form.info">
                </el-input>

            </el-form-item>
            <el-form-item label="发布时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="form.date" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="$router.push('/society')">取消</el-button>
            </el-form-item>

        </el-form>
    </div>

</template>

<script>
    export default {
        name: "Society_ADD",
        data() {
            return {
                form: {
                    name:'',
                    city:'',
                    type:'',
                    date:'',
                    info:''

                }
            }
        },
        methods: {
            onSubmit() {
                var v = this.form
                var _this = this
                axios.post('http://localhost:3000/adv/add',v)
                    .then(function (data) {
                        _this.$notify({
                            title: '添加成功',
                            message: '此条数据已经添加成功',
                            type: 'success'
                        });
                        _this.$router.push('/society')
                    })
            }
        }
    }
</script>

<style scoped>

</style>