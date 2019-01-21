<template>
  <div id="main" style="padding:0px;position:absolute;">
    <Header></Header>
    <el-main style="height:86%;padding:0px;margin-top:5px;height:820px;margin-left:-10px;">
     <div style="width:100%;height:100%;padding-left:0px;">
         <img src="../imgs/BigMoo1.jpg" alt="" STYLE="width:100%;height:99%;">
     </div>
    </el-main>
      <Foot></Foot>

  </div>

</template>

<script>

import Header from '@/components/Header'
import Foot from '@/components/Foot'


// @ is an alias to /src
export default {

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components:{
      Header:Header,
      Foot:Foot
  }
}
</script>
<style >

    .main{
        width:100%;
        position:absolute;
        left:0px;
        top:0px;
        min-width:1500px;
    }

</style>