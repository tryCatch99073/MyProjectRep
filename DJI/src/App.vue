<template>
  <div id="app">
      <router-view/>
  </div>
</template>
<script>
  export default {
    watch: {
      '$route' (to, from) {
        console.log(to)
        console.log(from)
        // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
       // this.transitionName = 'slide-right'
      }
    }
  }

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#foot{
  height:50px;
  background-color:#00000;
  line-height: 50px;
  color:#666;
}
body{
  padding:0px;
  margin:0px;
}

</style>
