<template>

    <el-header style="border:solid 0px red;width:100%;background-color: white">
        <el-row type="flex" justify="center" >
            <el-col :span="14" style="background-color:blueviolet">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"  >
                    <el-menu-item index="1">
                        <router-link :to="{path:'/'}">
                            <img src="https://we2.djicdn.com/hire/public/img/logo.3c25936.png" alt="" style="width:45px;height:35px;">
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link :to="{path:'/society'}">
                            社会招聘
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <router-link :to="{path:'/school'}">
                            校园招聘
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <router-link :to="{path:'/index'}">
                            关于创新
                        </router-link>
                    </el-menu-item>


                    <el-menu-item v-if="!isLogin" style="background-color: none;float:right  " index="5"><router-link :to="{path:'/lgn'}">登陆</router-link></el-menu-item>

                    <el-submenu style="float:right;margin-top:0px" index="5" v-if="isLogin">
                        <template slot="title">{{username}}</template>
                        <el-menu-item index="5-1" @click="$router.push({path:'/user'})">个人中心</el-menu-item>
                        <el-menu-item index="5-2" @click="$router.push({path:'/lgn'})">切换账号</el-menu-item>
                        <el-menu-item index="5-3" @click="$router.push({path:'/lgn'})">离开</el-menu-item>
                        <el-menu-item index="5-4" @click="desctoryUser">注销</el-menu-item>
                    </el-submenu>

                </el-menu>
            </el-col>
        </el-row>
    </el-header>
</template>

<script>



    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                isLogin:false,
                username:''
            };
        },
        mounted () {
            this.getLoginStatus()
        },
        methods:{
            getLoginStatus:function () {
               var user =  this.Cookie.get('user')
                this.username = JSON.parse(user).username
                if (user) {
                    this.isLogin = true
                }
            },
            desctoryUser(){
               var c =  this.Cookie ;
               alert('注销成功，请重新登录')
               c.delete('user')
                this.$router.push({path:'/lgn'})
            }
        }
    }
</script>

<style scoped>

</style>