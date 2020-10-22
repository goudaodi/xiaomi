<template>
  <div class="bigbox">
    <Searech class="sertech"/>
    <div class="mycontent">
      <Banner :givedata="mapdepot"/>
      <MyContent/>
      <BannerTwo/>
      <Exclusive/>
      <ConList/>
      <Banner :givedata="mapdepot"/>
      <GoodsList title="每日上新"/>
      <GoodsList title="有品秒杀"/>
      <CommoDity :givedata="demomi"/>
    </div>
    <MyFooter class="myfooter"/>
  </div>
</template>

<script>
  import Searech from "../components/Searech";
  import MyFooter from "../components/MyFooter";
  import MyContent from "../components/MyContent";
  import Banner from "../components/Banner";
  import BannerTwo from "../components/BannerTwo";
  import Exclusive from "../components/Exclusive";
  import ConList from "../components/ConList";
  import GoodsList from "../components/GoodsList";
  import CommoDity from "../components/CommoDity"


  import axios from "axios"
// import { component } from 'vue/types/umd';

  
export default {


  name:"Index",
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
    return {
      mapdepot:[],
      demomi:[]
    }
  },
  components:{
    Searech, MyFooter,MyContent,Banner,BannerTwo,Exclusive,ConList,GoodsList,CommoDity
  }
}
</script>

<style scoped>
  .bigbox{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .mycontent{
    flex: 1;
    overflow: auto;
  }
  .searech{
    height: 54px;
  }
  .myfooter{
    height: 48px;
  }
</style>
