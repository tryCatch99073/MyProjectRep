
<template>
  <div>

    <router-view></router-view>
  </div>
</template>


<script>


export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  body{
    padding:0px;
    margin:0px;
  }
.main{
  background-color: #fff;
  position: absolute;
  width: 100% ;
  height:100%;
}
</style>
