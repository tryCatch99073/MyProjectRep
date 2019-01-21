<template>

    <div id="main" style="width:600px;margin:2%;">
        <div style="font-size:30px;margin:3%;">
            学校宣传行程信息添加
        </div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="前往城市">
                <el-input v-model="form.city"></el-input>
            </el-form-item>
            <el-form-item label="前往学校">
                <el-input v-model="form.school"></el-input>
            </el-form-item>
            <el-form-item label="演讲类型">
                <el-select v-model="form.type" no-data-text="请选择宣讲类型">
                    <el-option label="非研发类" value="非研发类"></el-option>
                    <el-option label="设计类" value="设计类"></el-option>
                    <el-option label="研发类" value="研发类"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="选定时间">
                <el-col :span="11">
                    <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker type="fixed-time" value-format="HH:mm:ss" placeholder="选择时间" v-model="form.time" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="$router.push('/stroke')">取消</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    export default {
        name: "Stroke_Add",
        data() {
            return {
                form: {
                    city:'',
                    school:'',
                    type:'',
                    date:'',
                    time:'',
                    address:''
                }
            }
        },
        methods: {
            onSubmit() {
                var _this = this
                var f = this.form
                axios
                    .post('http://localhost:3000/str/add',f)
                    .then(function (data) {
                        _this.$router.push('/stroke')
                        alert(data.data)


                    })
            }
        }

    }
</script>

<style scoped>

</style>