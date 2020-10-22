<template>
  <div class="box">
    <div class="box_con">
      <ul class="list">
        <li>
          <div class="box_img"><img src="../assets/img/xiao_3.jpg" alt=""></div>
          <p>爱登小K暖风机</p>
          <span>￥：299</span>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_3.jpg" alt=""></div>
          <p>爱登小K暖风机</p>
          <span>￥：299</span>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_3.jpg" alt=""></div>
          <p>爱登小K暖风机</p>
          <span>￥：299</span>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_3.jpg" alt=""></div>
          <p>爱登小K暖风机</p>
          <span>￥：299</span>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_3.jpg" alt=""></div>
          <p>爱登小K暖风机</p>
          <span>￥：299</span>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_3.jpg" alt=""></div>
          <p>爱登小K暖风机</p>
          <span>￥：299</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"EveryRec",
  data:function(){
    return{

    }
  }
}
</script>

<style scoped>
  .box{
    width: 100%;
    background: #ffcc99;
  }
  .box_con{
    width: 95%;
    margin: 0 auto;
  }
  .list{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .list li{
    width: 31%;
    height: 153px;
    border-radius: 10px;
    text-align: center;
    background: #fff;
    margin: 10px 0;
  }
  .box_img{
    width: 100%;
    height: 60%;
    border-radius: 10px;
  }
  .box_img img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .list p{
    font-size: 14px;
    color: #000;
    line-height: 30px;
  }
  .list span{
    font-size: 14px;
    color: #cc6666;
  }
</style>