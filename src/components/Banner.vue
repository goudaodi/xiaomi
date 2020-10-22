<template>
  <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
    <van-swipe-item v-for="(image, index) in givedata" :key="index">
      <img v-lazy="image.linkto">
    </van-swipe-item>
    <!-- <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item> -->
  </van-swipe>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

export default {
  name:"Banner",
  props:["givedata"],
  data:function(){
    return{
      images: [
       
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
    /* background-color: #39a9ed; */
    height: 160px;
  }
  .my-swipe img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
</style>