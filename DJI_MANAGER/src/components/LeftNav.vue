<template>
    <div id="left-nav" style="height:100%;">

        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

            <el-menu-item index="1" @click="isCollapse=!isCollapse">
                <i class="el-icon-caret-right"></i>
                <span slot="title">收起/展开</span>
            </el-menu-item>

            <router-link :to="{path:'/society'}">
                <el-menu-item index="3">
                    <i class="el-icon-menu"></i>
                    <span slot="title">社会招聘</span>
                </el-menu-item>
            </router-link>

            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">校园招聘</span>
                </template>

                <router-link :to="{path:'/stroke'}">
                    <el-menu-item-group>
                        <span slot="title">行程管理</span>
                        <el-menu-item index="4-1">宣讲行程</el-menu-item>
                    </el-menu-item-group>
                </router-link>
                <router-link :to="{path:'/job'}">
                    <el-menu-item-group>
                        <span slot="title">职位管理</span>
                        <el-menu-item index="4-1">职位信息管理</el-menu-item>
                    </el-menu-item-group>
                </router-link>
            </el-submenu>

            <router-link :to="{path:'/user'}">
                <el-menu-item index="5" >
                    <i class="el-icon-document"></i>
                    <span slot="title">用户管理</span>
                </el-menu-item>
            </router-link>

            <router-link :to="{path:'/noticy'}">
                <el-menu-item index="6" >
                    <i class="el-icon-news"></i>
                    <span slot="title">公告管理</span>
                </el-menu-item>
            </router-link>

            <router-link :to="{path:'/apply'}">
                <el-menu-item index="7" >
                    <i class="el-icon-check"></i>
                    <span slot="title">职位申请管理</span>
                </el-menu-item>
            </router-link>

        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "LeftNav",
        data() {
            return {
                isCollapse: true
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    #left-nav{
        float:left;
    }
</style>