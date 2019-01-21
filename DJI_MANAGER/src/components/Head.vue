<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
            <router-link :to="{path:'/'}">
                <img style="height:40px;" src="https://we2.djicdn.com/hire/public/img/logo.3c25936.png" alt="">
            </router-link>
        </el-menu-item>
        <el-submenu index="3">
            <template slot="title">myroot</template>
            <el-menu-item index="2-1">切换用户</el-menu-item>
            <el-menu-item index="2-2">注销</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "Head"
    }
</script>

<style scoped>

</style>