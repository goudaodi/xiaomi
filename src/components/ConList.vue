<template>
  <div class="box">
    <div class="box_con">
      <ul>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_1.png" alt=""></div>
          <span>9.9元起</span>
          <p>运动特惠日</p>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_1.png" alt=""></div>
          <span>9.9元起</span>
          <p>运动特惠日</p>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_1.png" alt=""></div>
          <span>9.9元起</span>
          <p>运动特惠日</p>
        </li>
        <li>
          <div class="box_img"><img src="../assets/img/xiao_1.png" alt=""></div>
          <span>9.9元起</span>
          <p>运动特惠日</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"ConList",
  data:function(){
    return{

    }
  }
}
</script>

<style scoped>
  .box{
    width: 100%;
    height: 115px;
    /* background: darkgreen; */
  }
  .box_con{
    width: 95%;
    height: 100%;
    margin: 0 auto;
  }
  .box_con ul{
    display: flex;
    justify-content: space-around;
  }
  .box_con ul li{
    width: 23%;
    height: 100%;
    text-align: center;
  }
  .box_img{
    width: 100%;
    height: 60px;
  }
  .box_img img{
    width: 100%;
    height: 100%;
  }
  .box_con ul li span{
    font-size: 14px;
    color: #000;
  }
  .box_con ul li p{
    background: #cc6633;
    font-size: 14px;
    padding: 2px 5px;
    border-radius: 10px;
  }
</style>