<template>
  <div id="app">
    <Head></Head>
    <LeftNav></LeftNav>
    <router-view></router-view>
  </div>
</template>
<script>
  import Head from './components/Head'
  import LeftNav from './components/LeftNav'
  export default {
    name: "Home",
    components:{
      Head:Head,
      LeftNav:LeftNav
    }
  }
</script>
<style>
  *{
    margin:0px;
    padding:0px;
  }
  #app{
    min-width:900px;
  }
  #main{
    float:left;
    width:calc(100% - 210px);
  }
  a{
    text-decoration: none;
  }
</style>
