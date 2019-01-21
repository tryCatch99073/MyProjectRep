<template>
    <div style="background:rgb(247,248,249);height:1000px;">

        <Header style="position:fixed;top:0px;z-index:999;"></Header>


        <el-row type="flex" justify="center" style="margin-top:60px;" >
            <el-col :span="14" style="background-color:none;">

                <el-row type="flex" justify="center" style="margin-top:10px;" >
                    <el-col :span="5" style="background-color:none;height:500px;">
                        <div style="position:fixed;width:12%;top:70px;">
                            <el-menu
                                    default-active="1"
                                    class="el-menu-vertical-demo"
                                    @open="handleOpen"
                                    @close="handleClose">
                                <el-menu-item index="1" style="text-align:center" @click="v='liucheng'">
                                    <span slot="title" >招聘流程</span>
                                </el-menu-item>
                                <el-menu-item index="2" style="text-align:center" @click="v='xingcheng'">
                                    <span slot="title">宣讲行程</span>
                                </el-menu-item>
                                <el-menu-item index="3" style="text-align:center" @click="v='zhiwei'">
                                    <span slot="title">职位信息</span>
                                </el-menu-item>
                                <el-menu-item index="4" style="text-align:center">
                                    <span slot="title">常见问题</span>
                                </el-menu-item>
                                <el-menu-item index="5" style="text-align:center" @click="v='liaojie'">
                                    <span slot="title">了解大疆</span>
                                </el-menu-item>

                            </el-menu>
                            <div>
                                <img src="https://we2.djicdn.com/hire/public/img/dji-qrcode.c43acba.png" style="width:100%;" alt="">
                            </div>
                        </div>

                    </el-col>
                    <el-col :span="19" style="background-color:#ffff;">


                        <div style="color:#666;font-size:15px;" v-if="v=='liucheng'" :key="liucheng">
                            <img src="https://we2.djicdn.com/hire/public/img/recruit-process-s.f7e018f.png" alt="" style="width:100%;">
                            <div style="padding:3%">
                                   <span style="font-size:25px "> 流程说明：</span><br><br>
                                <span style="font-size:20px ">简历投递</span><br><br>
                                同学们可在开放的职位中选择并投递简历。简历投递截止时间为10月16日 23:59，每位同学限投递一个职位，请认真填写申请信息。投递简历之后，将无法更新已投递的简历内容
                                <br>
                                ................
                                <span style="font-size:25px "> 流程说明：</span><br><br>
                                <span style="font-size:20px ">简历投递</span><br><br>
                                同学们可在开放的职位中选择并投递简历。简历投递截止时间为10月16日 23:59，每位同学限投递一个职位，请认真填写申请信息。投递简历之后，将无法更新已投递的简历内容
                                <br>
                                ................
                                <span style="font-size:25px "> 流程说明：</span><br><br>
                                <span style="font-size:20px ">简历投递</span><br><br>
                                同学们可在开放的职位中选择并投递简历。简历投递截止时间为10月16日 23:59，每位同学限投递一个职位，请认真填写申请信息。投递简历之后，将无法更新已投递的简历内容
                                <br>
                                ................
                                <span style="font-size:25px "> 流程说明：</span><br><br>
                                <span style="font-size:20px ">简历投递</span><br><br>
                                同学们可在开放的职位中选择并投递简历。简历投递截止时间为10月16日 23:59，每位同学限投递一个职位，请认真填写申请信息。投递简历之后，将无法更新已投递的简历内容
                                <br>

                            </div>

                        </div>

                        <div style="color:#666;font-size:15px;" v-if="v=='xingcheng'" :key="xingcheng">

                            <img style="width:100%" src="https://we2.djicdn.com/hire/public/img/lecture-banner1.bd39dc7.png" alt="">
                            <br>
                            <div style="padding:2%;">
                                <el-collapse v-model="activeNames" @change="handleChange" accordion>
                                    <el-collapse-item title="非研发型" name="1">
                                        <el-table
                                                :data="table[0]"
                                                style="width: 100%">
                                            <el-table-column
                                                    prop="city"
                                                    label="城市"
                                                    >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="school"
                                                    label="学校"
                                                   >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="date"
                                                    label="宣讲日期"
                                                    >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="time"
                                                    label="宣讲时间"
                                                    >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="address"
                                                    label="地址"
                                                    >
                                            </el-table-column>
                                        </el-table>
                                    </el-collapse-item>
                                    <el-collapse-item title="设计型" name="2">
                                        <el-table
                                                :data="table[1]"
                                                style="width: 100%">
                                            <el-table-column
                                                    prop="city"
                                                    label="城市"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="school"
                                                    label="学校"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="date"
                                                    label="宣讲日期"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="time"
                                                    label="宣讲时间"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="address"
                                                    label="地址"
                                            >
                                            </el-table-column>
                                        </el-table>

                                    </el-collapse-item>
                                    <el-collapse-item title="研发型3" name="3">
                                        <el-table
                                                :data="table[2]"
                                                style="width: 100%">
                                            <el-table-column
                                                    prop="city"
                                                    label="城市"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="school"
                                                    label="学校"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="date"
                                                    label="宣讲日期"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="time"
                                                    label="宣讲时间"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="address"
                                                    label="地址"
                                            >
                                            </el-table-column>
                                        </el-table>

                                    </el-collapse-item>
                                </el-collapse>
                            </div>

                        </div>

                        <div style="color:#666;font-size:15px;padding:4%;" v-if="v=='zhiwei'" :key="zhiwei">
                            <br>
                            <div style="">
                                <div style="width:40%;float:right;">
                                    <el-input placeholder="请输入内容" v-model="key" class="input-with-select">
                                        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                                    </el-input>
                                </div>
                                <div class="tagsp" style="clear: both;text-align:right">
                                    <span>销售</span>
                                    <span>市场</span>
                                    <span>行业应用</span>
                                    <span>人力资源</span>
                                    <span>采购</span>
                                </div>
                            </div>
                            <div>
                                <el-table
                                        :data="zhiweitable"
                                        style="width: 100%">
                                    <el-table-column
                                            prop="name"
                                            label="职位名称"
                                           >
                                    </el-table-column>
                                    <el-table-column
                                            prop="type"
                                            label="职位类型"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                            prop="city"
                                            label="工作城市">
                                    </el-table-column>
                                    <el-table-column
                                            prop="time"
                                            label="发布时间">
                                    </el-table-column>

                                </el-table>
                            </div>
                        </div>

                        <div style="color:#666;font-size:15px;padding:4%;" v-if="v=='liaojie'" :key="liaojie">
                            <img src="https://we2.djicdn.com/hire/public/img/plane-icon.f529a0d.png" alt="" style="width:100%;">

                            <div>

                            </div>

                            <div style="padding:3%;">

                                <div style="clear:both;padding:2%;width:100%;background:rgb(231,240,253)">
                                    <div class="tabs-content"><i style="left:0px;"></i><p>即将入职三年，称自己为小鲜肉已经不合时宜。看着越来越多的90后，95后加入公司，回想起自己三年前的决定，我至今还是很庆幸。毕业之前，我从来没想过能有一份工作让我如此兴奋，晚上睡觉前期待着第二天起床，入睡前想着未解决的难题并享受着解决后的快感。</p><p>金融硕士毕业的我，在进入大疆之前也曾西装革履，游走在金融街、陆家嘴，光鲜亮丽。我想很多人都很难想象一个金融学院的毕业生会放弃IBD，PE，VC的offer，进入一家科技公司。我最初的职位在工厂，从西装皮鞋到牛仔裤静电服，从基金公司富丽堂皇的写字楼到布满流水线、操作台的工作间，环境的变化只是开始。从最基本的专业名词开始学习，PE、IE、SQE、良率、标准工时，到之后能够提出优化的建议，看着自己负责的业务逐步完善，伴随公司一起成长。相信不少小伙伴会对这样的起点嗤之以鼻，因为工厂听起来就不是一个好的职场起点，更不会有光鲜的title。但正是因为在工厂的学习，让我对生产制造、供应链管理、产品特性有了最基本的了解，更为之后的工作夯实了基础。</p><p>放弃“光鲜亮丽”而选择“接地气”、看似基层的工作，如今的收获只有我心里明白，这不只是某些职业技能的提升，更多得到的是一份责任与担当。这种成长弥足珍贵，可以说是我人生经历上最宝贵的财富。</p></div>
                                </div>

                            </div>



                        </div>

                    </el-col>
                </el-row>





            </el-col>
        </el-row>




    </div>
</template>

<script>

    import Header from '../components/Header'

    export default {
        name: "Recruitment",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleChange(val) {
                console.log(val);
            },
            loadData(t,i){
                var _this = this
                axios.get('http://localhost:3000/str/find?t='+t)
                    .then(function (data) {
                        console.log(data)
                        _this.table[i] = data.data
                    })
            }
            ,loadZhiWei (k) {
                var path = 'http://localhost:3000/job/search'
                var _this = this
                if (k) {
                    path += '?k='+k
                }
                axios.get(path)
                    .then(function (data) {
                        console.log(data)
                        _this.zhiweitable = data.data ;
                    })
            },
            search (){
                this.loadZhiWei(this.key) ;
            }
        },
        mounted() {
            this.loadData('非研发类',0)
            this.loadData('设计类',1)
            this.loadData('研发类',2)

            this.loadZhiWei()
        },
        data(){
            return {
                key:'',
                activeNames: ['1'],
                v:'liucheng',
                table:[[],[],[]],
                zhiweitable:[]
            }
        },
        components:{
            Header:Header
        }
    }
</script>

<style scoped>
    .tabtitle{
        padding:2%;
        font-size:20px;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    .tagsp span {
        font-size:14px;
        color:#ccc;
        margin-right:5px;
    }
    .tabhead{
        width:20%;
        height:40px;
        background-color: red;
        float:left;
    }
</style>