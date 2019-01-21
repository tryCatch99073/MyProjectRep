<template>
    <div id="main">
        <Head></Head>
        <el-row type="flex" justify="center" style="margin-top:30px;">
            <el-col :span="14" style="background-color:none">


                <el-row type="flex" justify="center" style="margin-top:0px;">
                    <el-col :span="6" style="background-color:none;padding-right:20px;">

                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose">

                            <el-menu-item index="1" style="text-align: center;">
                                   <span slot="title">基本信息</span>
                            </el-menu-item>

                            <el-menu-item index="2" style="text-align: center;">
                               <span slot="title">教育背景</span>
                            </el-menu-item>
                            <el-menu-item index="3" style="text-align: center;">
                               <span slot="title">工作经历</span>
                            </el-menu-item>
                            <el-menu-item index="4" style="text-align: center;">
                                <span slot="title">项目经历</span>
                            </el-menu-item>

                            <el-menu-item index="5" style="text-align: center;">
                               <span slot="title">个人经历</span>
                            </el-menu-item>
                            <el-menu-item index="6" style="text-align: center;">
                                <span slot="title">附件作品</span>
                            </el-menu-item>

                        </el-menu>

                    </el-col>
                    <el-col :span="18" style="background-color:none">

                        <div class="panel-t">
                            <a href="" name="jibenxinxi"></a>
                            <jibenxinxi @loaded="loadChangeJbxx"></jibenxinxi>
                        </div>
                        <div class="panel-t">
                            <jiaoyubeijing @loaded="loadChangeJybj"></jiaoyubeijing>
                        </div>
                        <div class="panel-t">
                            <gongzuojingli @loaded="loadChangeGzjl"></gongzuojingli>
                        </div>
                        <div class="panel-t">
                            <xiangmujingli @loaded="loadChangeXmjl"></xiangmujingli>
                        </div>
                        <div class="panel-t">
                            <gerenjineng @loaded="loadChangeGrjn"></gerenjineng>
                        </div>
                        <div class="panel-t">
                            <fujianzuopin @loaded="loadFujianzuopin"></fujianzuopin>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <div class="foot">
            <el-button>取消编辑</el-button>
            <el-button type="primary" @click="generate">生成简历</el-button>
        </div>
    </div>

</template>

<script>

    import Head from '../components/Header'
    import jibenxinxi from '../components/jibenxinxi'
    import jiaoyubeijing from '../components/jiaoyubeijing'
    import gongzuojingli from '../components/gongzuojingli'
    import xiangmujingli from '../components/xiangmujingli'
    import gerenjineng from '../components/gerenjineng'
    import fujianzuopin from '../components/fujianzuopin'
    export default {
        name: "Resume",
        components:{
            Head:Head,
            jibenxinxi:jibenxinxi,
            jiaoyubeijing:jiaoyubeijing,
            gongzuojingli:gongzuojingli,
            xiangmujingli:xiangmujingli,
            gerenjineng:gerenjineng,
            fujianzuopin:fujianzuopin

        },
        methods:{
            generate(){
                this.$router.push({path:'/resume_template',query:{'inf':this.allinf}})
            },
            loadChangeJbxx (data) {
                this.allinf.jibenxinxi = data
            },
            loadChangeJybj (data) {
                this.allinf.jiaoyubeijing = data
            },
            loadChangeGzjl (data) {
                this.allinf.gongzuojingli = data
            },
            loadChangeXmjl (data) {
                this.allinf.xiangmujingli = data
            },
            loadChangeGrjn (data) {
                this.allinf.gerenjineng = data
            },
            loadFujianzuopin (data) {
                this.allinf.fujianzuopin = data
            }
        },
        mounted() {
            this.allinf.headimg = JSON.parse(this.Cookie.get('user')).headimg
        }
        ,
        data(){
            return {
                allinf:{
                    jibenxinxi:{},
                    jiaoyubeijing:{},
                    gongzuojingli:{},
                    xiangmujingli:{},
                    gerenjineng:[],
                    fujianzuopin:[],
                    headimg:''
                }
            }
        }
    }
</script>

<style scoped>
#main{
    background:rgb(247,248,249);min-width:1920px;}
    .panel-t{margin-bottom:20px;
        background-color: #fff;border-radius:3px}
    .foot{
        background-color: #fff;
        height:20px;
        padding:3%;
        text-align: right;
    }
</style>