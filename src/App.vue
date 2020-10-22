<template>
  <div id="app">
    <!-- <Index/> -->
    <!-- <EveryNew/> -->
    <!-- <DetailsPage/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Index from "./pages/Index";
import EveryNew from "./pages/EveryNew";
import DetailsPage from "./pages/DetailsPage"



export default {
  name: 'App',
  data:function(){
    return{

    }
  },
  components:{
    Index,EveryNew,DetailsPage
  }
}
</script>

<style>
  *{
    margin: 0;
  }
</style>
