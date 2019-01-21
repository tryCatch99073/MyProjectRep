<template>
    <div class="main" style="background:rgb(247,248,249);height:1300px;">
        <Header></Header>
        <el-row type="flex" justify="center" style="margin-top:0px;">
            <el-col :span="14" style="background-color:none">

                <el-row type="flex" justify="center" style="margin-top:10px;">
                    <el-col :span="6" style="padding:1%;" >

                        <div style="height:400px;background-color: white;" class="car">
                            <div style="text-align: center">
                                <img style="width:100px;margin-top:40px;height:100px;border-radius:50%;" :src="'http://localhost:3000/public/heads/'+user.headimg"  alt="">
                            </div>
                            <div style="text-align: center;margin-top:20px;">
                                {{user.username}}
                                <br>
                               <div style="margin-top:10px;">

                                   <el-upload
                                           action="http://localhost:3000/head_upload"
                                           :show-file-list="false"
                                           :on-success="loadImg"
                                           >
                                       <el-button size="small" type="primary">点击上传</el-button>
                                   </el-upload>

                               </div>
                                <hr style="width:80%;height:1px;border:0px;background-color:#ccc;">
                            </div>
                            <div style="text-align: center;margin-top:20px">
                                <img src="../imgs/code.png" alt="" style="width: 50%">
                            </div>
                        </div>

                        <div style="margin-top:8%;background-color: white;padding:7%;" class="car">
                            <div>
                               最新公告
                            </div>
                            <div style="color:#666;font-size:14px" v-for="not in notarr">
                                <div class="notify-item" >
                                  <div class="date">{{not.time}}</div>
                                  <div>{{not.title}}</div>
                                </div>
                            </div>
                        </div>

                    </el-col>
                    <el-col :span="18" style="padding:1%;">
                        <div style="width:100%;min-height:400px;background-color:white;" class="car">
                            <div style="padding:2%;border-bottom:solid 1px #ddd;">
                                简历
                                <a @click="$router.push({path:'/resume'})" style="float:right;color:dodgerblue;cursor:pointer">创建简历</a>
                            </div>
                            <div style="text-align: center;">

                                <el-table
                                        :data="resumedatas"
                                        style="width: 100%">
                                    <el-table-column
                                            prop="desc"
                                            label="简历描述"
                                            >
                                    </el-table-column>
                                    <el-table-column
                                            fixed="right"
                                            label="操作"
                                            width="100">
                                        <template slot-scope="scope">
                                            <el-button @click="lookResume(scope.row)" type="text" size="small">预览</el-button>
                                            <el-button @click="deleteResume(scope.row)" type="text" size="small">删除</el-button>
                                        </template>
                                    </el-table-column>

                                </el-table>

                            </div>
                        </div>
                        <div style="margin-top:3%;width:100%;background-color:white;" class="car">
                            <div style="padding:2%;border-bottom:solid 1px #ddd;">
                                申请进度
                            </div>
                            <div>
                                <el-table
                                        :data="apparr"
                                        style="width: 100%">
                                    <el-table-column
                                            prop="jobname"
                                            label="申请职位"
                                            width="180">
                                    </el-table-column>
                                    <el-table-column
                                            prop="time"
                                            label="申请时间"
                                           >
                                    </el-table-column>
                                    <el-table-column
                                            prop="status"
                                            label="申请状态"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                            prop="msg"
                                            label="消息"
                                    ></el-table-column>
                                </el-table>
                            </div>
                        </div>
                        <div style="padding:0%;margin-top:3%;width:100%;background-color:white;" class="car">
                            <div style="padding:2%;border-bottom:solid 1px #ddd;">
                                收藏职位
                            </div>
                            <el-table
                                    :data="colarr"
                                    style="width: 100%">
                                <el-table-column
                                        prop="name"
                                        label="职位名称"
                                       >
                                </el-table-column>
                                <el-table-column
                                        prop="city"
                                        label="所在城市"
                                        >
                                </el-table-column>
                                <el-table-column
                                        prop="type"
                                        label="职位类型">
                                </el-table-column>
                                <el-table-column
                                        fixed="right"
                                        label="操作"
                                        width="100">
                                    <template slot-scope="scope">
                                        <el-button @click="$router.push({path:'/inf',query:{ai:scope.row._id}})" type="text" size="small">查看详情</el-button>
                                    </template>
                                </el-table-column>

                            </el-table>

                        </div>

                    </el-col>
                </el-row>


            </el-col>
        </el-row>
    </div>
</template>

<script>

    import Header from '@/components/Header'

    import Foot from '@/components/Foot'

    export default {
        name: "User",
        components:{
            Header:Header
        },
        data(){
            return {
                resumedatas: [],
                user:{username:'',headimg:''},
                headimg:'',
                notarr:[],
                colarr:[],
                apparr:[]
            }
        },
        mounted:function () {
          var user = JSON.parse(this.Cookie.get('user'))
            this.user = user
            this.loadNoticy()
            this.loadCollect()
            this.loadResumes()
            this.loadApply()

        },
        methods:{
            loadImg:function (response) {
                if(response.success){
                    this.headimg = response.filename ;
                    this.uploadHeadImg()
                }
            },
            loadCollect() {
                var _this = this
                var i = JSON.parse(this.Cookie.get('user'))._id
                axios
                    .get('http://localhost:3000/col/findbyu?i='+i)
                    .then(function (data) {
                        _this.colarr = data.data
                    })
            }
            ,
            uploadHeadImg () {
                var _this = this
                axios
                    .get('http://localhost:3000/usr/uphead?i=' + this.user._id + '&n=' + this.headimg)
                    .then(function (data) {
                        _this.user = data.data
                        _this.Cookie.set('user',JSON.stringify(_this.user))
                    })
            },
            loadNoticy () {
                var _this = this
                axios
                    .get('http://localhost:3000/not/new')
                    .then(function (data) {
                        _this.notarr = data.data
                    })
            },
            loadResumes () {
                var _this = this
                var i = JSON.parse(this.Cookie.get('user'))._id
                axios.get('http://localhost:3000/rem/finduser?i='+i).then(function (data) {
                    _this.resumedatas = data.data
                })
            },
            lookResume(r){
                var i = r._id
                this.$router.push({path:'/resume_template',query:{i:i}})
            },
            deleteResume(r){
                var _this = this
                axios.get('http://localhost:3000/rem/del?i='+r._id).then(function (data) {
                    _this.$notify({
                        title: '',
                        message: '删除成功',
                        type: 'success'
                    });
                    _this.loadResumes()
                })
            },
            loadApply () {
                var i = JSON.parse(this.Cookie.get('user'))._id
                var _this = this
                axios.get('http://localhost:3000/apl/finduser?i='+i).then(function (data) {
                    _this.apparr = data.data
                })
            }

        }
    }
</script>

<style scoped>
.car{
    border-radius: 3px;
}
    .notify-item{
        margin-top:8%;
        font-size:15px;
    }
    .notify-item .date{
        color:#ccc;
        font-size:14px;
    }
</style>