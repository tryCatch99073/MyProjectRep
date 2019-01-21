<template>
    <div id="main" style="width:500px;margin:2%;">
        <div style="font-size:30px;margin:3%;">
            添加公告
        </div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公告标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="公告内容">
                <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="form.content">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="upNoticy">立即创建</el-button>
                <el-button @click="$router.push('/noticy')">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Noticy_ADD",
        data(){
            return {
                form:{
                    title:'',
                    content:''
                }
            }
        },
        methods:{
            upNoticy:function () {
                axios.post('http://localhost:3000/not/add',this.form)
                    .then(function (data) {
                        window.location.href = '/#/noticy'
                    })
            }
        }

    }
</script>

<style scoped>

</style>