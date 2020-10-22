<template>
  <div class="box">
    <div class="box_con">
      <div class="head">
        <h1>每日上新</h1>
        <p>每天10点  新奇发布</p>
      </div>
      <ul class="list">
        <li>
          <div class="box_img"><img src="../assets/img/xiao_3.jpg" alt=""></div>
          <h5>云米蓝调净水</h5>
          <h6>6000G健康饮水之选</h6>
          <p>
            <span class="p1">￥：299</span>
            <span class="p2">立即查看</span>
          </p>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_3.jpg" alt=""></div>
          <h5>云米蓝调净水</h5>
          <h6>6000G健康饮水之选</h6>
          <p>
            <span class="p1">￥：299</span>
            <span class="p2">立即查看</span>
          </p>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_3.jpg" alt=""></div>
          <h5>云米蓝调净水</h5>
          <h6>6000G健康饮水之选</h6>
          <p>
            <span class="p1">￥：299</span>
            <span class="p2">立即查看</span>
          </p>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_3.jpg" alt=""></div>
          <h5>云米蓝调净水</h5>
          <h6>6000G健康饮水之选</h6>
          <p>
            <span class="p1">￥：299</span>
            <span class="p2">立即查看</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"EveryList",
  data:function(){
    return{

    }
  }
}
</script>

<style scoped>
  .box{
    width: 100%;
  }
  .box_con{
    width: 95%;
    margin: 0 auto;
  }
  .head{
    height: 58px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .head h1{
    font-size: 18px;
  }
  .head P{
    font-size: 14px;
    color: #999;
    margin-left: 10px;
  }
  .box_img{
    width: 95px;
    height: 95px;
    border-radius: 20px;
    float: left;
    margin-right: 10px;
  }
  .box_img img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
  .list li{
    margin-bottom: 10px;
  }
  .list h5{
    font-size: 16px;
    color: #000;
  }
  .list h6{
    font-size: 14px;
    color:#cc9966;
    margin: 6px 0 15px;
  }
  .list p{
    display: flex;
    justify-content: space-between;
  }
  .p1{
    font-size: 16px;
    color: #cc0033;
  }
  .p2{
    display: inline-block;
    font-size: 16px;
    padding: 5px 15px;
    background: #cc9966;
    border-radius: 5px;
  }
 

</style>