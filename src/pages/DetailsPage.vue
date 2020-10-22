<template>
  <div class="bigbox">
    <DetaHead class="head"/>
    <div class="mycontent">
      <DetaBanner :givedata="book" />
      <DetaIntro :givedata="book"/>
      <DetaMess/>
      <DetaAddess/>
    </div>
    <DetaFoot class="foot"/>
  </div>
</template>

<script>
import DetaHead from "../components/DetaHead";
import DetaBanner from "../components/DetaBanner";
import DetaFoot from "../components/DetaFoot";
import DetaIntro from "../components/DetaIntro";
import DetaMess from "../components/DetaMess";
import DetaAddess from "../components/DetaAddess";



import axios from "axios"


export default {
  name:"DetailsPage",
  data:function(){
    return{
      book:{}
    }
  },
  async created(){
    this.bookid = this.$route.params.id
    // console.log("this.$route",this.$route.params.id);
    let res =await axios({
      url:"http://localhost:3000/demomi",
      params:{
        id:this.$route.params.id
      }
    });
    // console.log(res.data)
    this.book=res.data[0];
    console.log(this.book)
  },
  components:{
    DetaHead,DetaBanner,DetaFoot,DetaIntro,DetaMess,DetaAddess
  }
}
</script>

<style scoped>
  .bigbox{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .head,.foot{
    height: 50px;
  }
  .mycontent{
    flex: 1;
    overflow: auto;
  }
</style>