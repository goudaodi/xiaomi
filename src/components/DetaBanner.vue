<template>
  <!-- <van-swipe class="my-swipe"  indicator-color="white">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe> -->
  <!-- <div class="aaa">
    <button @click="fn">点击</button>
  </div> -->
  <div class="box" >
    <img :src="givedata.linkto" alt="">
  </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);


export default {
  name:"DetaBanner",
  props:["givedata"],
  data:function(){
    return{
      images: [
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3746149156,3846202622&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3225163326,3627210682&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1093553954,1638924774&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1433198845,2509680738&fm=26&gp=0.jpg'
      ],
    }
  }
}
</script>

<style scoped>

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    height: 330px;
  }
  .my-swipe img{
    width: 100%;
    height: 100%;
    /* border-radius: 20px; */
  }

  .box{
    width: 100%;
    height: 330px;
  }
  .box img{
    width: 100%;
    height: 100%;
  }
</style>