<template>
   <div id="main" >
      <div style="width:100%;background-color: none;height:800px;">
          <WelCome></WelCome>
      </div>
   </div>
</template>
<script>





    import WelCome from '../components/WelCome'

    export default {
        name: "Home",
        components:{
            WelCome:WelCome
        },
        mounted:function () {
            this.load()
        },
        methods:{
            load(){
                var str = `<strong>请输入用户名和密码 </strong><br>
                    <input id="ckusername" type="text" style="width:80%;border-radius:3px;height:30px;border:solid 1px #ccc"><br><br>
                    <input id="ckpassword" type="text" style="width:80%;border-radius:3px;height:30px;border:solid 1px #ccc">
                `
                console.log(str)
                this.$alert(str, '用户身份验证', {
                    dangerouslyUseHTMLString: true,
                    callback:function () {
                        var un = document.getElementById('ckusername')
                        var up = document.getElementById('ckpassword')
                        if(un.value === 'myroot' && up.value === 'myroot'){
                            // 成功
                        }else {
                            // 失败
                            window.alert('失败！！！')
                            window.close()
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>


</style>