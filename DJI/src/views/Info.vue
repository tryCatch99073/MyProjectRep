<template>
   <div id="main">
       <Head></Head>
       <el-row type="flex" justify="center" style="margin-top:0px;">
           <el-col :span="14" style="background-color:none">


               <div style="padding:2% 3% 3% 3%;margin-bottom:150px;min-height:700px;background-color: #fff;margin-top:50px;border-radius:3px">

                    <div class="title">
                        {{mydata[0].inf.name}}
                    </div>
                   <div class="infs">
                       <span>职位类别：</span><span>{{mydata[0].inf.type}}</span>
                       <span style="margin-left:30px;">工作城市：</span><span>{{inf.city}}</span>
                       <span style="margin-left:60px;">发布时间：</span><span>{{inf.date}}</span>
                   </div>
                   <br>
                   <hr>
                    <div class="desc">
                        {{inf.info}}
                    </div>


                    <div>
                        <el-select v-model="select" placeholder="请选择你的简历进行申请" style="width:500px;">
                            <el-option
                                    v-for="item in resumedatas"
                                    :key="item._id"
                                    :label="item.desc"
                                    :value="item._id">
                            </el-option>
                        </el-select>
                    </div>
                   <div class="opr">
                       <el-button type="info" plain @click="col">收藏职位</el-button>
                       <el-button type="primary" @click="nowSend">立即申请</el-button>
                   </div>

               </div>




           </el-col>
       </el-row>

   </div>
</template>

<script>

    import Head from '../components/Header'
    import URL from '../URL'

    export default {
        name: "Info",
        components:{
            Head:Head
        },
        mounted() {
            this.loadData()
            this.loadResumes()
        },
        methods:{
            loadData:function (){
                var quer = this.$route.query
                var i =  quer.ai
                var _this = this
                axios
                    .get('http://localhost:3000/adv/fi?i='+i)
                    .then(function (data) {
                        _this.inf = data.data
                        _this.$forceUpdate();
                        _this.$set(_this.mydata[0],"inf",data.data);


                    })
            },
            loadResumes () {
                var _this = this
                var i = JSON.parse(this.Cookie.get('user'))._id
                axios.get('http://localhost:3000/rem/finduser?i='+i).then(function (data) {
                    _this.resumedatas = data.data
                })
            },
            selectResume:function () {
                this.selres = true
            },
            col () {  //收藏方法
                var uid = JSON.parse(this.Cookie.get('user'))._id
                var jid = this.mydata[0].inf._id
                var _this = this
                axios
                    .get('http://localhost:3000/col/col?uid='+uid+'&jid='+jid)
                    .then(function (data) {
                        _this.$notify({
                            title: '',
                            message: data.data.msg,
                            type: 'success'
                        });
                    })
            },
            nowSend () {
                var uid = JSON.parse(this.Cookie.get('user'))._id
                var now = new Date ()
                var nowFormatDate  = now.getFullYear()+''+(now.getMonth() - 1) + '-' +now.getDate()
                var _this = this
                var obj = {userid:uid,jobid:this.mydata[0].inf._id,resume:this.select,time:nowFormatDate}
                obj.jobname = this.mydata[0].inf.name
                obj.msg = ''
                obj.username = JSON.parse(this.Cookie.get('user')).username
                axios.post('http://localhost:3000/apl/send',obj).then(function (data) {
                    _this.$notify({
                        title: '',
                        message: data.data.msg,
                        type: 'success'
                    });
                })
            }
        },
        data(){
            return {
               mydata:[{inf:{}}],
                resumedatas:[],
                select:''

            }
        }
    }
</script>

<style scoped>
#main{
    background:rgb(247,248,249);
}
.title{
    font-size:25px;
    color:#666;
 }
    .infs{
        color:#bbb;
        margin-top:8px;
        font-size:15px;
    }
    .desc{
        color:#666;
        min-height:400px;
        margin-top:30px;
        font-size:15px;
    }
    .opr{
        margin-top:50px;
    }
</style>