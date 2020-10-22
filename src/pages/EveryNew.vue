<template>
  <div class="bigbox">
    <EveryHead class="head"/>
    <div class="Mycontent">
      <Banner :givedata="mapdepot"/>
      <EveryList/>
      <EveryRec/>
      <GoodsList title="华艺"/>
      <GoodsList title="至凡"/>
      <CommoDity :givedata="demomi"/>
    </div>
  </div>
</template>

<script>
  import EveryHead from "../components/EveryHead";
  import Banner from "../components/Banner";
  import EveryList from "../components/EveryList";
  import EveryRec from "../components/EveryRec";
  import GoodsList from "../components/GoodsList";
  import CommoDity from "../components/CommoDity"



  import axios from "axios"

export default {
  name:"EveryNew",
  created(){
    axios({
      url:"http://localhost:3000/home",
      method:"get"
    }).then(res=>{
      console.log(res);
      this.mapdepot=res.data.mapdepot
      this.demomi=res.data.demomi
    })
  },
  data:function(){
    return{
      mapdepot:[],
      demomi:[]
    }
  },
  components:{
    EveryHead,Banner,EveryList,EveryRec,GoodsList,CommoDity
  }
}
</script>

<style scopde>
  .bigbox{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .head{
    height: 60px;
  }
  .Mycontent{
    flex: 1;
    overflow: auto;
  }
</style>