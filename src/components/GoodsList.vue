<template>
  <div class="box">
    <div class="box_con">
      <div class="box_head">
        <h1>{{title}}</h1>
        <p>更多<span class="iconfont icon-arrow-left"></span></p>
      </div>
      <ul>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_1.png" alt=""></div>
          <p>至凡可壁挂暖风机</p>
          <span>￥：299</span>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_1.png" alt=""></div>
          <p>至凡可壁挂暖风机</p>
          <span>￥：299</span>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_1.png" alt=""></div>
          <p>至凡可壁挂暖风机</p>
          <span>￥：299</span>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_1.png" alt=""></div>
          <p>至凡可壁挂暖风机</p>
          <span>￥：299</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"GoodsList",
  props:["title"],
  data:function(){
    return{

    }
  }
}
</script>

<style scoped>
  @import url(../assets/icon/iconfont.css);
  @import url(../assets/css/reset.css);
  .box{
    width: 100%;
    /* height: 200px; */
    background: #cccccc;
  }
  .box_con{
    width: 95%;
    height: 100%;
    margin: 0 auto;
  }
  .box_head{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box_head h1{
    font-size: 22px;
    color: #000;
    font-weight: bold;
    margin: 10px 0;
  }
  .box_head p{
    font-size: 14px;
    color: #000;
  }
  .box_con ul{
    display: flex;
    justify-content: space-around;
  }
  .box_con ul li{
    width: 23%;
    /* height: 100%; */
    text-align: center;
    background: #ffffff;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .box_con ul li p{
    font-size: 14px;
  }
  .box_con ul li span{
    font-size: 14px;
    color: #ffcc33;
  }
  .box_img{
    width: 100%;
    height: 100px;
  }
  .box_img img{
    width: 100%;
    height: 100%;
  }
</style>