<template>
    <div class="main">
        <Header></Header>

        <div class="corser">
           <div class="big-title">
               <p>未来无所不能</p>
               <p style="font-size:23px;">THE FUTURE OF POSSIBLE</p>
           </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    export default {
        name: "Index",
        components:{
            Header:Header,
            Footer:Footer
        },
        mounted () {
        }
        ,
        methods:{

        }
    }
</script>

<style scoped>
.corser{
    height:80%;
    background-image: url(https://we2.djicdn.com/hire/public/img/home-page-banner-3.88e3d49.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    position:relative;
}
.big-title{
    width:100%;
    color:white;
    text-align: center;
    font-size:25px;
    position: absolute;
    bottom:20%;
}

</style>