<template>
    <transition name="fade">
    <div id="main">
        <IndexHeader></IndexHeader>
            <el-carousel :interval="5000" height="700px" arrow="always">
                <el-carousel-item :key="item1" style="">
                    <img src="../imgs/BigMoo2.jpg" alt="" style="width:100%;height:100%;">
                </el-carousel-item>
                <el-carousel-item :key="item2">
                    <img src="../imgs/BigMoo4.jpg" alt="" style="width:100%;height:100%;">
                </el-carousel-item>
                <el-carousel-item :key="item3">
                    <img src="../imgs/BigMoo3.jpg" alt="" style="width:100%;height:100%;">
                </el-carousel-item>
            </el-carousel>

        <el-row type="flex" justify="center" style="margin-top:10px;" >
            <el-col :span="15" style="background-color:white;">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple" style="padding:3%;">

                            <div style="height:690px;background-image: url('//www5.djicdn.com/cms_uploads/grid_root/background_image/284/02021483ee8d3f455d69f8a19451239e.jpg');">

                            </div>

                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light" style="padding:3%;padding-left:0px;">
                            <div style="height:332px;background-color:blue">
                                <img src="../imgs/item.png" alt="" style="width: 100%;height:100%;">
                            </div>
                            <div style="height:342px;background-color:green;margin-top:3%;">
                                <img src="../imgs/item2.png" alt="" style="width: 100%;height:100%;">
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple" style="padding:3%;">
                            <div style="height:300px;background-color: blue;">
                                <img src="//www1.djicdn.com/cms_uploads/grid_root/background_image/4/c5d75349999c6a61118b02775b211856.png" alt="" style="width:100%;height:100%;">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light" style="padding:3%;padding-left:0px;">
                            <div style="height:300px;background-color: pink;">
                                <img src="//www5.djicdn.com/cms_uploads/grid_root/background_image/5/1c4aace1936bdcc03351116cbdfd0d9c.jpg" alt="" style="width:100%;height:100%;">
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple" style="padding:3%;">
                            <div style="height:200px;border:solid 1px #ccc;">
                                <div style="float:left;border-radius:0px 5px 5px 0px ;background-color: #ccc;height:50px;width:6px;margin-top:20%;">


                                </div>
                                <div style="margin-top:20%;margin-left:10%;">
                                  <div>
                                      <span style="font-size:25px;">购买渠道</span>
                                  </div>
                                    <div>
                                        查找可靠的购买渠道
                                    </div>
                                </div>

                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple" style="padding:3%;">
                            <div style="height:200px;border:solid 1px #ccc;">
                                <div style="float:left;border-radius:0px 5px 5px 0px ;background-color: #ccc;height:50px;width:6px;margin-top:20%;">


                                </div>
                                <div style="margin-top:20%;margin-left:10%;">
                                    <div>
                                        <span style="font-size:25px;">购买渠道</span>
                                    </div>
                                    <div>
                                        查找可靠的购买渠道
                                    </div>
                                </div>

                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple" style="padding:3%;">
                            <div style="height:200px;border:solid 1px #ccc;">
                                <div style="float:left;border-radius:0px 5px 5px 0px ;background-color: #ccc;height:50px;width:6px;margin-top:20%;">


                                </div>
                                <div style="margin-top:20%;margin-left:10%;">
                                    <div>
                                        <span style="font-size:25px;">购买渠道</span>
                                    </div>
                                    <div>
                                        查找可靠的购买渠道
                                    </div>
                                </div>

                            </div>
                        </div>
                    </el-col>
                </el-row>



            </el-col>
        </el-row>
        <div style="margin-top:30px;height:400px;background-color:black;">

        </div>
    </div>
    </transition>
</template>

<script>

    import IndexHeader from '../components/IndexHead'

    export default {
        name: "Index",
        components:{
            IndexHeader:IndexHeader
        }
    }
</script>

<style scoped>
    .center-sc{
        width:100%;height:600px;background-image: url("../imgs/BigMoo2.jpg");
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>