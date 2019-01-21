<template>
   <div class="main">
       <Header></Header>

       <div style="background-color: #fff;margin-top:10px;">
            <div class="title">
               {{data.name}}
            </div>
           <div style="padding:2%;color:#ccc;">
               <div style="margin-top:3%;"><span>职位类比：</span> <span>{{data.type}}</span></div>
               <div style="margin-top:3%;"><span>发布时间：</span> <span>{{data.date}}</span></div>
               <div style="margin-top:3%;"><span>工作城市：</span> <span>{{data.city}}</span></div>
               <div style="border-bottom:solid 1px #ccc;margin-top:5%;"></div>
           </div>
           <div style="min-height:150px;background-color: none;padding:2%;color:#707473;">
                {{data.info}}
           </div>
           <div style="height:50px;background-color:#eee;padding:5% 15% 0% 15%;color:#666;text-align: center;">
                如果对该职位有兴趣，可以电脑登录DJI.COM来进行简历投递
           </div>
       </div>
       <Footer style="position:absolute;bottom:0px;padding-top:20px;width:100%;"></Footer>
   </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    export default {
        name: "soc-inf",
        components:{
            Header:Header,
            Footer:Footer
        },
        mounted() {
            this.get(this.$route.query.i)
        },
        data(){
            return {
                data:{},
            }
        },
        methods:{
            get:function (i) {
                var _this = this
                axios.get('http://'+this.ip+':3000/adv/fi?i='+i).then(function (data) {
                    console.log(data.data)
                    _this.data = data.data
                })
            }
        }
    }
</script>

<style scoped>
.main{
    background-color:rgb(247,248,249);
}
    .title{
        padding:8% 0% 0% 3%;
        color:#707473;
        font-size: .44rem;
    }
    
</style>