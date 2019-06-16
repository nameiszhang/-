<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import request from "@/utils/request.js";

import axios from "axios";
export default {
  name: 'App',
  components: {
    
  },
  created() {
    request.get("/api/user/info")
   
  },
 
}
</script>

<style lang='scss'>
@import '../static/_minix.scss';
@import '../static/common.scss';
body,html,#app{
  width:100%;
  height: 100%;
}

</style>
