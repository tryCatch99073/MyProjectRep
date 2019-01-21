<template>
    <div class="main" >
        <Header> </Header>
        <div style="padding:0px;">
            <img class="center-img" style="margin-top:-10px;" src="https://we2.djicdn.com/hire/public/img/spring-mobile.28a128c.png" alt="">
        </div>
        <div style="height:100%;background-color: #5b54ce;position:relative;overflow:hidden;">
            <div class="center-title">
                招聘流程
            </div>
            <div class="" >
                <p class="zhaopin-tag"><span class="active">非研发类</span></p>
                <p class="zhaopin-tag"><span onclick="">设计类</span></p>
            </div>
            <div style="width:100%;height:100%;padding:7%;">
                <img src="https://we2.djicdn.com/hire/public/img/spring-mobile-process2.90f6f0f.png" style="width:85%;" alt="">
            </div>
            <div class="zhaopin-foot">
                时间节点若有变动，以具体通知为准
            </div>
        </div>
        <div style="width:100%;height:100%;background-color:#382f8e;">
            <div class="center-title">
                宣讲行程
            </div>
            <div class="" >
                <p class="zhaopin-tag"><span   v-bind:class="{ active: isShow }"  @click="isShow=true">非研发类</span></p>
                <p class="zhaopin-tag"><span v-bind:class="{ active: !isShow }" @click="isShow=false">设计类</span></p>
            </div>
            <div style="margin-top:30px;" class="c-w" v-show="isShow">

               <div style="width:90%;margin:0 auto;" v-for="d in notyanfaxc">
                   <div style="margin-top:8%;" >
                       <div class="address-inf " style="font-size:.3rem;border-bottom:solid 1px #ccc;padding-bottom:2%;">
                           {{d.city}}
                       </div>
                       <div>
                           <div style="font-size:.3rem;margin-top:10px;" class="c-w">
                              {{d.school}}
                           </div>
                           <div style="font-size:.2rem;margin-top:5px;" class="c-w">
                               <span>{{d.address}}</span>
                               <span style="float: right;">{{d.date}}&nbsp;&nbsp;{{d.time}}</span>
                           </div>
                       </div>

                   </div>


               </div>

            </div>
            <div style="margin-top:30px;" class="c-w" v-show="!isShow">

                <div style="width:90%;margin:0 auto;" v-for="d in shejixc">
                    <div style="margin-top:8%;" >
                        <div class="address-inf " style="font-size:.3rem;border-bottom:solid 1px #ccc;padding-bottom:2%;">
                            {{d.city}}
                        </div>
                        <div>
                            <div style="font-size:.3rem;margin-top:10px;" class="c-w">
                                {{d.school}}
                            </div>
                            <div style="font-size:.2rem;margin-top:5px;" class="c-w">
                                <span>{{d.address}}</span>
                                <span style="float: right;">{{d.date}}&nbsp;&nbsp;{{d.time}}</span>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </div>

        <div style="width:100%;height:100%;background-color:#5b54ce;">
            <div class="center-title">
                职位信息
            </div>
            <div style="width:90%;margin:3% auto;padding-top:10px;font-size:.2rem;" class="job-nav">
                <div style="float:left;width:30%; height:40px;border:solid 1px #fff;">
                    <button class="nav">所有类别</button>
                </div>
               <div style="float:left;width:30%; height:40px;border:solid 1px #fff;margin-left:0.5%;">
                   <button  class="nav">所有城市</button>
               </div>
                <div  style="width:36%;float:left;border:solid 1px #fff;height:40px;margin-left:0.5%;">
                    <input style="height:100%;background:none;color:white;width:70%;" type="text" value="请输入关键字">
                    <button style="height:100%;width:30%;background:none;color:white;">搜索</button>
                </div>
            </div>
            <hr style="clear:both;margin-top:15%;width:100%;height:1px;background-color: #fff;border:none;">
            <div >
                <div style="color:white;text-align: center;margin-top:3%;">
                    暂无数据
                </div>
            </div>
        </div>
        <div class="about" >
            <div class="center-title">
                我们是大疆人
            </div>
            <div style="padding:4%;text-align: left;font-size:.3rem;color:#ddd;padding-top:10%;" class="" >
                <div class="about-content" data-v-8af9b196=""><p data-v-8af9b196="">年轻、真诚、奋斗是我们的标签，<br data-v-8af9b196="">坚持梦想、极富洞见、从不妥协是我们的特点。</p><p data-v-8af9b196="">在这里，我们用自身的经历证明，初出茅庐的年轻人，无需曲意逢迎、投机取巧， 只要怀揣梦想，埋头苦干，便能与志同道合者一起改变世界。
                </p><p data-v-8af9b196="">如果“传统”对我们说不，那为何不是“规则”让路？</p><p data-v-8af9b196="">十多年过去，DJI站在了行业之巅，开启了全球飞行影像的新纪元；下一个十年，我们力寻志同道合的伙伴，一起向世界展现无限可能。</p></div>
            </div>
            <div style="position:absolute;width:100%;bottom:10%;">
                <button class="btn-about">
                    了解更多
                </button>
            </div>

        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    export default {
        name: "Home",
        components:{
            Header:Header
        },
        data () {
            return {
                notyanfaxc:[],
                shejixc:[],
                isShow:true
            }
        },
        mounted() {
            this.getNotyanfaxc()
            this.getShejixc()
        },
        methods:{
            getNotyanfaxc(){
                var _this =this
                axios.get('http://'+this.ip+':3000/str/find?t='+'非研发类').then(function (data) {
                    _this.notyanfaxc = data.data
                })
            },
            getShejixc () {
                var _this =this
                axios.get('http://'+this.ip+':3000/str/find?t='+'设计类').then(function (data) {
                    _this.shejixc = data.data
                    console.log(data.data)
                })
            }
        }
    }
</script>

<style scoped >
    .btn{
        width: 1rem;
    }

    .center-img{
        width:100%;

    }
    .center-title{
        padding-top:30px;
        text-align: center;
        color:#fff;
        font-size: .56rem;
    }
    .zhaopin-tag{
        color:white;
        margin-top:20px;
        font-size:.28rem;
        width:50%;display: inline-block;text-align: center;
    }
    .zhaopin-tag .active {
        padding-bottom:5px;
        border-bottom:solid 1px white;
    }
    .zhaopin-foot {
        width:100%;
        color:white;
        padding:3%;
        text-align: center;
        position:absolute;
        bottom:0px;
    }
    .c-w{
        color:white;
    }
    .job-nav{

    }
    .job-nav .nav{
        width:100%;
        background:none;
        color:white;
        height:100%;
        margin:0.5%;
    }
    .about {
        height: 100%;
        position: relative;
        text-align: center;
        background: url(https://we2.djicdn.com/hire/public/img/about-dji-top.6a457f4.png),url(https://we2.djicdn.com/hire/public/img/about-dji-bottom.7b63bbb.png),#382f8e;
        background-position: 0 0,bottom .4rem left;
        background-size: 100% 1.6rem,100% 2.92rem;
        background-repeat: no-repeat,no-repeat;
    }
    .about-content p{
        margin-top:5%;
    }
    .about .btn-about{
        background:none;
        border:solid 1px #fff;
        border-radius:3px;
        color:#fff;
        width:50%;
        padding:2% 6% 2% 6%;
    }
</style>