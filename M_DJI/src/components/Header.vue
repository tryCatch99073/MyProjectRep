<template>
    <div class="header animated ">
        <div style="float:left;height:100%;padding-top:2%;padding-left:2%;">
            <svg class="icon" @click="isShow=false" v-show="isShow" style="height:60%;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="457"><path d="M901.632 896H122.368c-30.72 0-55.808-25.088-55.808-55.808v-1.536c0-30.72 25.088-55.808 55.808-55.808h779.776c30.72 0 55.808 25.088 55.808 55.808v1.536c-0.512 30.72-25.6 55.808-56.32 55.808zM901.632 568.32H122.368c-30.72 0-55.808-25.088-55.808-55.808v-1.536c0-30.72 25.088-55.808 55.808-55.808h779.776c30.72 0 55.808 25.088 55.808 55.808v1.536c-0.512 30.72-25.6 55.808-56.32 55.808zM901.632 240.64H122.368c-30.72 0-55.808-25.088-55.808-55.808v-1.536c0-30.72 25.088-55.808 55.808-55.808h779.776c30.72 0 55.808 25.088 55.808 55.808v1.536c-0.512 30.72-25.6 55.808-56.32 55.808z" p-id="458"></path></svg>
            <svg class="icon"  @click="isShow=true" v-show="!isShow" style="height:50%;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1363"><path d="M92.848153 957.245643c-6.560416 0-13.118785-2.50403-18.120706-7.513114-9.996678-10.007935-9.986445-26.224268 0.021489-36.220946l419.563728-419.049005c9.999748-9.987468 26.198685-9.986445 36.199457 0l419.547355 419.050028c10.007935 9.996678 10.017144 26.211988 0.021489 36.220946-9.995655 10.007935-26.210965 10.017144-36.220946 0.021489L512.411881 548.782741l-401.464511 400.972301C105.947496 954.748776 99.397313 957.245643 92.848153 957.245643zM512.411881 537.215288c-6.550183 0-13.100366-2.496867-18.10024-7.490601L74.748936 110.642936c-10.007935-9.996678-10.017144-26.213012-0.021489-36.220946s26.213012-10.018168 36.220946-0.021489l401.463488 401.001977L913.856949 74.402547c10.007935-9.997702 26.223245-9.988492 36.220946 0.020466 9.996678 10.007935 9.987468 26.224268-0.021489 36.220946L530.513144 529.723663C525.512247 534.717398 518.963087 537.215288 512.411881 537.215288z" p-id="1364"></path></svg>
        </div>
        <img src="https://we2.djicdn.com/hire/public/img/logo.3c25936.png" alt="" style="width:14%;margin-top:1.2%;">
        <div class=" animated fadeIn bounceInRight" v-if="!isShow" style="position:absolute;top:7%;z-index:999;background-color: #fff;width:100%;text-align: left;padding-left:2%;color:#666;">
            <div style="margin-bottom:20px;" @click="$router.push({path:'/'})">
                首页
            </div >
            <div style="margin-bottom:20px;" @click="$router.push({path:'/soc'})">
                社会招聘
            </div>
            <div style="margin-bottom:20px;" @click="$router.push({path:'/stu'})">
                校园招聘
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data () {
            return {
                isShow:true
            }
        }
    }
</script>

<style scoped>
    .header{
        text-align: center;
        background-color:#fff;
        height:7%;
        margin:0px;
        padding:0px;
    }
</style>