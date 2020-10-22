<template>
  <div class="box">
    <div class="box_con">
      <div class="con_foot">
        <h1>我的专享福利</h1>
        <h2>更多<span class="iconfont icon-arrow-left"></span></h2>
      </div>
      <div class="con_list">
        <ul>
          <li>
            <img src="../assets/img/xiao_1.png" alt="">
            <p>互联网450L冰箱</p>
            <span>￥：5000</span>
          </li>
          <li>
            <img src="../assets/img/xiao_1.png" alt="">
            <p>互联网450L冰箱</p>
            <span>￥：5000</span>
          </li>
          <li>
            <img src="../assets/img/xiao_1.png" alt="">
            <p>互联网450L冰箱</p>
            <span>￥：5000</span>
          </li>
        </ul>
      </div>
      <div class="con_head">
        <ul>
          <li>
            <img src="../assets/img/xiao_1.png" alt="">
          </li>
          <li>
            <img src="../assets/img/xiao_1.png" alt="">
          </li>
          <li>
            <img src="../assets/img/xiao_1.png" alt="">

          </li>
          <li>
            <img src="../assets/img/xiao_1.png" alt="">
          </li>
        </ul>
      </div>
      <div class="con_banner">
        <img src="../assets/img/xiaomi_2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Exclusive",
  data:function(){
    return {

    }
  }
}
</script>

<style scoped>
  @import url(../assets/icon/iconfont.css);
  @import url(../assets/css/reset.css);

  .box{
    width: 100%;
    /* height: 350px; */
    /* background: chartreuse; */
  }
  .box_con{
    width: 95%;
    height: 350px;
    background: #ffcc99;
    border-radius: 20px;
    margin: 0 auto;
  }
  .con_foot{
    width: 100%;
    height: 46px;
    line-height: 46px;
  }
  .con_foot h1{
    float: left;
    font-size: 18px;
    color: #996600;
    font-weight: bold;
    margin-left: 35%;
  }
  .con_foot h2{
    float:right;
    font-size: 14px;
    color: #996600;
    margin-right: 10px;
  }
  .con_list{
    width: 95%;
    height: 124px;
    background: #fff;
    border-radius: 20px;
    margin: 0 auto;
  }
  .con_list ul{
    display: flex;
    justify-content: space-around;
  }
  .con_list ul li{
    width: 33%;
    height: 100%;
    text-align: center;
  }
  .con_list ul li img{
    width: 100%;
    height: 80px;
  }
  .con_list ul li p{
    font-size: 14px;
    color: #000;
    text-align: center;
  }
  .con_list ul li span{
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
  }

  .con_head{
    width: 95%;
    height: 72px;
    background: #fff;
    margin: 10px auto;
    border-radius: 20px;
  }
  .con_head ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .con_head ul li{
    width: 25%;
    height: 100%;
  }
  .con_head ul li img{
    width: 100%;
    height: 72px;
  }
  .con_banner{
    width: 95%;
    height: 75px;
    margin: 0 auto;
    background: #fff;
    border-radius: 20px;
  }
  .con_banner img{
    width: 100%;
    height: 100%;
  }
</style>