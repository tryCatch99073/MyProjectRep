<template>
    <div class="main">
        <Header></Header>
        <div class="headpanel">
            <img style="width:100%;margin-top:-2%;" src="https://we2.djicdn.com/hire/public/img/search-banner-mobile.a5f0389.png" alt="">
        </div>

        <div style="width:95%;height:40px;background-color: none;margin:0 auto;">
            <div style="height:100%;width:30%;background-color:none;float:left;">
                <el-select v-model="searching.type" placeholder="请选择" style="width:90%;height:80%;"  @change="changingSeach">
                    <el-option
                            :label="'全部分类'"
                            :value="''">
                    </el-option>
                    <el-option
                            v-for="t in typearr"
                            :label="t"
                            :value="t">
                    </el-option>
                </el-select>
            </div>
            <div style="height:100%;width:30%;background-color:none;float:left;">
                <el-select v-model="searching.city" placeholder="请选择" style="width:90%;height:80%;" @change="changingSeach">
                    <el-option
                            :label="'全部城市'"
                            :value="''">
                    </el-option>
                    <el-option
                            v-for="t in cityarr"
                            :key="t"
                            :label="t"
                            :value="t">
                    </el-option>
                </el-select>
            </div>
            <div style="height:100%;width:40%;background-color:none;float:left;">
                <el-input style="width:90%;height:80%;"
                        placeholder="请输入内容"
                        v-model="searching.searchText"  @change="changingSeach">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
        </div>
        <hr>
        <div style="width:95%;height:40px;background-color:none;margin:0 auto;">


            <div class="animated fadeIn info-panel" v-for="data in dataarr" @click="$router.push({path:'/soci',query:{i:data._id}})">
                <div class="title">
                   {{data.name}}
                </div>
                <div style="margin-top:5px;">
                    <div style="float:left;">
                        <span class="oth-inf">{{data.type}}</span><span>|</span><span class="oth-inf">{{data.city}}</span>
                    </div>
                    <div style="float:right;">
                        <span class="oth-inf">{{data.date}}</span>
                    </div>
                    <div style="clear:both;">

                    </div>
                </div>
            </div>








        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    export default {
        name: "Social",
        components:{
            Header:Header
        },
        data(){
            return {
                searching:{
                    searchText:'',
                    type:'',
                    city:''
                },
                dataarr:[],
                typearr:['研发类','互联网类','信息安全类','市场销售类','行业应用类','运营类','财务类','设计类','职能类','服务类','地产类','其他类'],
                cityarr:['湘潭','长沙','常德','北京','武汉','宜春','新余','上海']
            }
        },
        mounted:function (){
            this.search()
        },
        methods:{
            search : function () {
                var _this = this
                axios.get('http://'+this.ip+":3000/adv/find").then(function (data) {
                   _this.dataarr = data.data
                })
            },
            changingSeach:function () {
                var sear = this.searching
                var _this = this
                axios.get('http://'+this.ip+':3000/adv/find/by?type='+sear.type+'&city='+sear.city+'&info='+sear.searchText).then(function (data) {
                    console.log(data.data)
                    _this.dataarr = data.data
                })
            }
        }
    }
</script>

<style scoped>
.headpanel{
    #background-color: red;
}
    .info-panel{
        clear:both;
        margin-top:5%;
    }
    .title{
        color:rgb(110,110,110);
        font-size:17px;
        margin-bottom:6px;
        font-weight: 700;
    }
    .info-panel span {
        margin-right:5px;
    }
    .oth-inf{
        font-size:15px;
        color:rgb(151,151,151);
    }
</style>