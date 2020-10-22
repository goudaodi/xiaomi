<template>
  <div class="box">
    <ul>
      <li style="display:flex;align-items: center;margin:10px 0;">
        <span style="color:#996633;font-size:18px">￥：{{givedata.price}}</span>
        <p style="margin:0 10px 0;color:#996633;font-size:18px">特价</p>
        <p style="background: #ff3333; padding: 5px 8px;border-radius: 20px;font-size: 16px;color: #fff;">卷后￥：{{givedata.price}}</p>
      </li>
      <li>
        <p style="font-size:18px;color:#000;margin-bottom:10px">{{givedata.name}}</p>
      </li>
      <li>
        <p style="font-size:14px;color:#999">{{givedata.brief}}</p>
      </li>
    </ul>
    <div class="box_img">
      <img src="../assets/img/xiaomi_10_03.png" alt="">
    </div>
  </div>  
</template>

<script>
export default {
  name:"DetaIntro",
  props:["givedata"],
  data:function(){
    return{

    }
  }
}
</script>

<style scoped>
  .box{
    /* height: 100px; */
    width: 100%;
  }
  .box ul li{
    /* height: 33px; */
    width: 100%;
    
  }
  .box_img{
    width: 100%;
    height: 34px;
    margin: 10px 0;
  }
  .box_img img{
    width: 100%;
    height: 100%;
  }
</style>