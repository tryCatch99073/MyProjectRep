<template>

    <div class="main">

        <el-row type="flex" justify="center" style="margin-top:0px;">
            <el-col :span="14" style="background-color:none;">


                <div  style="box-shadow:1px 1px 5px #ccc;text-align: center;width:100%;height:220px;border-radius: 5px;background-color: #fff;margin-bottom:20px;" id="resumeheader">
                    <img :src="'http://localhost:3000/public/heads/'+inf.headimg" alt="" style="margin-top:50px;width:120px;height:120px;border-radius:50%;border:solid 2px #fff;">
                </div>

                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div style="height:500px;">
                                <el-card class="box-card">
                                    <div slot="header" class="clearfix">
                                        <span>基本信息</span>
                                        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
                                    </div>
                                    <div class="text item infs">
                                        <span>姓名:</span><span>{{inf.jibenxinxi.name}}</span>
                                    </div>
                                    <div class="text item infs">
                                        <span>性别:</span><span>{{inf.jibenxinxi.sex}}</span>
                                    </div>
                                    <div class="text item infs">
                                        <span>国家/地区:</span><span>{{inf.jibenxinxi.country}}</span>
                                    </div>
                                    <div class="text item infs">
                                        <span>血型:</span><span>{{inf.jibenxinxi.bloodtype}}</span>
                                    </div>
                                    <div class="text item infs">
                                        <span>生日:</span><span>{{inf.jibenxinxi.birthday}}</span>
                                    </div>
                                    <div class="text item infs">
                                        <span>学历:</span><span>{{inf.jibenxinxi.edu}}</span>
                                    </div>
                                    <div class="text item infs">
                                        <span>工作年限:</span><span>{{inf.jibenxinxi.workyear}}</span>
                                    </div>
                                    <div class="text item infs">
                                        <span>手机号:</span><span>{{inf.jibenxinxi.phone}}</span>
                                    </div>
                                    <div class="text item infs" style="margin-top:30px;border-top:solid 1px #ccc;padding-top:20px;">
                                       <div class="infs-bl">邮箱</div>
                                        <span>{{inf.jibenxinxi.email}}</span>
                                    </div>
                                    <div class="text item infs">
                                        <div class="infs-bl">自我介绍</div>
                                        <span>{{inf.jibenxinxi.selfdesc}}</span>
                                    </div>
                                </el-card>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div class="grid-content bg-purple-light">
                            <div style="background-color: none;">
                                <el-card class="box-card" style="">
                                    <div slot="header" class="clearfix">
                                        <span>教育背景</span>
                                    </div>
                                    <div class="text item" style="margin-top:-10px;">
                                        <div class="jyitem">
                                            <span>毕业学校</span>
                                            <span>{{inf.jiaoyubeijing.schoolname}}</span>
                                        </div>
                                        <div class="jyitem">
                                            <span>学历</span>
                                            <span>{{inf.jiaoyubeijing.edu}}</span>
                                        </div>
                                        <div class="jyitem">
                                            <span>专业</span>
                                            <span>{{inf.jiaoyubeijing.pro}}</span>
                                        </div>
                                        <div class="jyitem">
                                            <span>在校时间</span>
                                            <span>{{inf.jiaoyubeijing.begintime}}|</span>
                                            <span>{{inf.jiaoyubeijing.endtime}}</span>
                                        </div>
                                    </div>
                                </el-card>

                                <el-card class="box-card" style="margin-top:20px;">
                                    <div slot="header" class="clearfix">
                                        <span>工作经历</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>公司全名</span>
                                        <span>{{inf.gongzuojingli.compname}}</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>所在部门</span>
                                        <span>{{inf.gongzuojingli.dept}}</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>工作地点</span>
                                        <span>{{inf.gongzuojingli.place}}</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>汇报对象</span>
                                        <span>{{inf.gongzuojingli.report}}</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>所在职位</span>
                                        <span>{{inf.gongzuojingli.position}}</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>下属人数</span>
                                        <span>{{inf.gongzuojingli.subor}}</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>工作时间</span>
                                        <span>{{inf.gongzuojingli.begintime}}</span> -|- <span>{{inf.gongzuojingli.endtime}}</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>工作业绩</span>
                                        <span>{{inf.gongzuojingli.achie}}</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>工作职责</span>
                                        <span>{{inf.gongzuojingli.duty}}</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>离职原因</span>
                                        <span>{{inf.gongzuojingli.reason}}</span>
                                    </div>
                                </el-card>

                                <el-card class="box-card" style="margin-top:20px;">
                                    <div slot="header" class="clearfix">
                                        <span>项目经历</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>项目名称</span>
                                        <span>{{inf.xiangmujingli.projectname}}</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>项目周期</span>
                                        <span>{{inf.xiangmujingli.begintime}}</span>|<span>{{inf.xiangmujingli.endtime}}</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>项目描述</span>
                                        <span>{{inf.xiangmujingli.desc}}</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>免责事宜</span>
                                        <span>{{inf.xiangmujingli.exem}}</span>
                                    </div>
                                    <div class="text item jyitem">
                                        <span>项目成果</span>
                                        <span>{{inf.xiangmujingli.result}}</span>
                                    </div>
                                </el-card>

                                <el-card class="box-card" style="margin-top:20px;">
                                    <div slot="header" class="clearfix">
                                        <span>个人技能</span>
                                    </div>
                                    <div v-for="o in inf.gerenjineng" :key="o" class="text item jyitem" >
                                        <el-tag>{{o.type}}</el-tag>
                                        <el-tag type="info">{{o.degree}}</el-tag>
                                        <el-tag type="danger" style="margin-left:10px;">{{o.name}}</el-tag>
                                    </div>
                                </el-card>

                                <el-card class="box-card" style="margin-top:20px;">
                                    <div slot="header" class="clearfix">
                                        <span>附件作品</span>
                                    </div>
                                    <div v-for="o in inf.fujianzuopin" :key="o" class="text item jyitem">
                                        <span style="width: 100%;padding-left:0px;text-align: left;">
                                            {{o.projectdesc}} <a @click="targetDownload(o.filename)" style="float:right;">下载</a>
                                        </span>
                                    </div>
                                </el-card>

                            </div>
                        </div>
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Resume_Template",
        mounted() {
            this.i = this.$route.query.i
            if (this.i) {
                this.loadOtherResum(this.i)
            }
        },
        data(){
            return {
                inf:{}
            }
        },
        methods:{
            loadOtherResum:function () {
                var _this = this
                axios.get('http://localhost:3000/rem/findid?i='+this.i).then(function (data) {
                    _this.inf = data.data
                })
            },
            targetDownload : function (fn) {
                window.location.href = "http://localhost:3000/down/project/?fn="+fn;
            }

        }
    }
</script>

<style scoped>
.main{
    background:rgb(247,248,249);
    font-size:15px;
    color:#ccc;
}
.infs {
    margin-bottom:10px;
}
    .infs span:first-child{
        display: inline-block;
        width:35%;
        text-align:right;
        margin-right:20px;
        color:dodgerblue;
    }
    .infs-bl{
        color:dodgerblue;
    }
    .text{
        color:#666;
    }
    .jyitem {
        margin-top:10px;
    }
.jyitem span:first-child{
    color:dodgerblue;
    width:10%;
    text-align: right;
    display: inline-block;
    margin-right: 10px;
    
}
    a{
        color:dodgerblue;
        text-decoration: none;
    }
    #resumeheader{
        background-image: url("../imgs/BigMoo2.jpg");
        background-size:cover;
    }
</style>