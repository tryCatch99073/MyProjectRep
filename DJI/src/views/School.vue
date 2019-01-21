<template>

    <div>
        <Header></Header>
        <el-carousel indicator-position="outside" height="780px">
            <el-carousel-item>
                <router-link :to="{path:'Recruitment'}">
                    <img src="../imgs/BigMoo3.jpg" alt="">
                </router-link>
            </el-carousel-item>
            <el-carousel-item>
                <router-link :to="{path:'b'}">
                    <img src="../imgs/BigMoo4.jpg" alt="">
                </router-link>
            </el-carousel-item>
        </el-carousel>
        <Foot></Foot>
    </div>


</template>

<script>

    import Header from '@/components/Header'
    import Foot from '@/components/Foot'
    export default {
        name: "School",
        components:{
            Header:Header,
            Foot:Foot

        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>