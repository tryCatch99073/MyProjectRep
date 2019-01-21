<template>
    <div style="position:absolute;border:solid 0px red;width:100%;background-image: url(../imgs/BG1.jpg);">

        <el-row type="flex" justify="center" style="margin-top:10px;">
            <el-col :span="14"
                    style="background-color:none;margin-top:80px;height:800px;margin-bottom:0px;box-shadow:1px 1px 14px #ccc;">

                <div style="width:50%;height:100%;float:left;background-color: none;">

                    <el-carousel indicator-position="outside" style="background-color: none;overflow: hidden;"
                                 height="800px">
                        <el-carousel-item style="background-color: red;height:100%;">
                            <img src="../imgs/BigMoo2.jpg" style="height:1000px;" alt="">
                        </el-carousel-item>
                        <el-carousel-item style="background-color: red;height:100%;">
                            <img src="../imgs/BigMoo3.jpg" style="height:1000px;" alt="">
                        </el-carousel-item>
                    </el-carousel>

                </div>
                <div style="float:right;width:50%;" v-if="showview == 'lgn'">
                    <div style="margin-top:260px;text-align: center;font-size:29px;">
                        <span>登陆</span>
                    </div>
                    <br>
                    <div style="padding:0px 20% 0% 20%;">
                        <el-input placeholder="Please input" v-model="lgnuname"></el-input>

                    </div>
                    <div style="padding:0px 20% 0% 20%;margin-top:5%;">
                        <el-input placeholder="Please input" v-model="lgnpwd"></el-input>

                    </div>
                    <div style="padding:0px 20% 0% 20%;margin-top:5%;">
                        <el-button type="primary" style="width:100%" @click="login()">登陆</el-button>
                    </div>
                    <div style="padding:0px 20% 0% 20%;margin-top:1%;font-size:14px;">
                        <a href="#/lgn" style="text-decoration: none;color:deepskyblue" @click="showview='reg'">立即注册</a>
                    </div>
                </div>

                <div style="float:right;width:50%;" v-if="showview == 'reg'">
                    <div style="margin-top:230px;text-align: center;">
                        <img src="https://we2.djicdn.com/hire/public/img/logo.3c25936.png" alt=""
                             style="width:45px;height:35px;">
                    </div>
                    <div style="text-align: center;font-size:29px;margin-top:10px;">
                        注册
                    </div>
                    <div class="inputlab">
                        <el-input placeholder="Please input" v-model="reguname"></el-input>
                    </div>

                    <div class="inputlab">
                        <el-input placeholder="Please input" v-model="regpwd"></el-input>
                    </div>

                    <div class="inputlab">
                        <el-input placeholder="Please input" v-model="ckregpwd"></el-input>
                    </div>
                    <div class="inputlab">
                        <el-checkbox v-model="checked">获取大疆最新产品</el-checkbox>
                    </div>
                    <div class="inputlab">
                        <el-checkbox v-model="checked">同意并且愿意遵守大疆创新服务</el-checkbox>
                    </div>
                    <div class="inputlab">
                        <a href="#/lgn" style="color:skyblue;font-size:14px;text-decoration:none"
                           @click="showview='lgn'">立即登陆</a>
                    </div>
                    <div class="inputlab">
                        <el-button type="primary" round style="width:100%;" @click="register">注册</el-button>
                    </div>
                </div>

            </el-col>
        </el-row>

    </div>
</template>

<script>

    export default {
        name: "Lgn",
        data() {
            return {
                showview: 'lgn',
                input1: '',
                input2: '',
                input3: '',
                lgnuname: '',
                lgnpwd: '',
                reguname: '',
                regpwd: '',
                ckregpwd: ''
            }
        }
        , methods: {
            login: function () {
                var cookie = this.Cookie;
                var _this = this;
                axios
                    .post('http://localhost:3000/lgn', {username: this.lgnuname, password: this.lgnpwd})
                    .then(function (data) {
                        if (data.data.success) {
                            console.log(JSON.stringify(data.data.user));
                            cookie.set('user', JSON.stringify(data.data.user), '30');
                            //登录成功
                            _this.$notify({
                                title: '',
                                message: '登录成功',
                                type: 'success'
                            });
                            setTimeout(function () {
                                window.location.href = '/#/'
                            }, 1000)
                        } else {
                            // 登录失败
                            _this.$message.error(data.data.msg);
                        }
                    }).catch(function (err) {
                })
            },
            register: function () {
                var _this = this;
                axios
                    .post('http://localhost:3000/reg', {username: this.reguname, password: this.regpwd})
                    .then(function (data) {
                        console.log(data)
                        if (data.data.success) {
                            _this.$notify({
                                title: '',
                                message: '注册成功',
                                type: 'success'
                            });
                            window.setTimeout(function () {
                                _this.showview = 'lgn'
                            }, 1000)
                        } else {
                            _this.$message.error(data.data.msg);
                        }
                    }).catch(function (err) {
                    console.log(err)
                })
            }


        }
    }
</script>

<style scoped>
    .inputlab {
        margin-top: 20px;
        padding: 0px 20% 0px 20%;
    }
</style>