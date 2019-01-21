<template>
    <transition name="slide">
    <div style="position:absolute;padding:0px;width:100%;background:rgb(247,248,249)">
        <Header></Header>
            <el-row type="flex" justify="center" style="margin-top:10px;">
                <el-col :span="14" style="background-color:none">
                    <div >
                        <img src="../imgs/BigMoo2.jpg" alt="" style="width:100%;height:300px;border-radius:3px">
                    </div>
                </el-col>
            </el-row>
        <el-row type="flex" justify="center" style="margin-top:10px;">
            <el-col :span="14" style="background-color:none;color:#ccc;">
                <div >
                    <div style="background-color: #fff;border:solid 0px red;">
                        <el-row type="flex" justify="center" style="margin-top:0px;">
                            <el-col :span="24" style="">
                                <div style="padding:20px;" class="classpanel">
                        <span style="color:#ccc;">
                            职位类别
                        </span><span style="color:black" @click="by.type='';loadDataBy()">
                            所有类别
                        </span>
                                    <span @click="by.type='研发类';loadDataBy()">
                            研发类
                        </span>
                                    <span @click="by.type='互联网类';loadDataBy()">
                            互联网类
                        </span>
                                    <span @click="by.type='信息安全类';loadDataBy()">
                            信息安全类
                        </span>
                                    <span @click="by.type='市场销售类';loadDataBy()">
                           市场销售类
                        </span>   <span @click="by.type='行业应用类';loadDataBy()">
                            行业应用类
                        </span>
                                    <span @click="by.type='运营类';loadDataBy()">
                            运营类
                        </span>
                                    <span @click="by.type='财务类';loadDataBy()">
                            财务类
                        </span>
                                    <span @click="by.type='设计类';loadDataBy()">
                            设计类
                        </span>
                                    <span @click="by.type='职能类';loadDataBy()">
                            职能类
                        </span>
                                    <span @click="by.type='服务类';loadDataBy()">
                            服务类
                        </span>
                                    <span @click="by.type='地产类';loadDataBy()">
                            地产类
                        </span>
                                    <span @click="by.type='其他类';loadDataBy()">
                            其他类
                        </span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row type="flex" justify="center" style="margin-top:-10px;">
                            <el-col :span="24" style="">
                                <div style="padding:20px;" class="classpanel">
                                    <span style="color:#ccc;">工作城市：</span>
                                    <span style="color:black" @click="by.city='';loadDataBy()">所有城市</span>
                                    <span @click="by.city='北京市';loadDataBy()">北京市</span>
                                    <span @click="by.city='南京市';loadDataBy()">南京市</span>
                                    <span @click="by.city='上海市';loadDataBy()">上海市</span>
                                    <span @click="by.city='深圳市';loadDataBy()">深圳市</span>
                                    <span @click="by.city='西安市';loadDataBy()">西安市</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>

        </el-row>
        <el-row type="flex" justify="center" style="margin-top:10px;">
            <el-col :span="14" style="background-color:none">
                <div style="height: 400px">
                    <el-table
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                prop="name"
                                label="职位名称"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="type"
                                label="职位类别"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="city"
                                label="工作城市">
                        </el-table-column>
                        <el-table-column
                                prop="date"
                                label="发布时间">
                        </el-table-column>
                        <el-table-column
                                label="收藏"
                                width="100">
                            <template slot-scope="scope">
                                <el-button @click="col(scope.row)" type="text" size="small">收藏</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="操作"
                                >
                            <template slot-scope="scope">
                                <el-button @click="cat(scope.row)" type="text" size="small">查看详情</el-button>
                            </template>
                        </el-table-column>

                    </el-table>
                </div>
            </el-col>
        </el-row>
    </div>
    </transition>
</template>

<script>
    import Header from '@/components/Header'

    export default {
        data() {
            return {
                tableData: [],
                by:{
                    type:'',
                    city:''
                }
            }
        },
        mounted() {
            this.loadData()
        },
        methods:{
          loadData:function () {
              var _this = this
              axios
                  .get('http://localhost:3000/adv/find')
                  .then(function (data) {
                     _this.tableData = data.data
                  })
          },
          loadDataBy(){
              var _this = this
              console.log(this.by)
              axios
                  .get('http://localhost:3000/adv/find/by?city='+this.by.city+"&type="+this.by.type)
                  .then(function (data) {
                      console.log(data.data)
                      _this.tableData = data.data
                  })
          }
          ,
          col (r) {  //收藏方法
              var uid = JSON.parse(this.Cookie.get('user'))._id
              console.log(uid)
              var jid = r._id
              console.log(jid)
              axios
                  .get('http://localhost:3000/col/col?uid='+uid+'&jid='+jid)
                  .then(function (data) {
                        alert(data.data.msg)
                  })
          }
          ,cat(r){
              //window.location.href='/#/inf?ai='+r._id
                this.$router.push({ path: '/inf', query: { ai: r._id }})
            }
        },
        name: "society"
        ,components:{
            Header
        }
    }
</script>

<style scoped>
    .classpanel span{
        font-size:14px;
        color:#666;
        margin-right:2%;
    }
    .classpanel span:hover{
        cursor:pointer;
        background-color:white;
        color:dodgerblue;
    }
</style>