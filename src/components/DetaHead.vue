<template>
  <div class="box">
    <router-link to="/Index">
      <p><span class="iconfont icon-arrow icon1"></span></p>
    </router-link>
    <p>
      <span class="iconfont icon-fenxiang icon2"></span>
      <span class="iconfont icon-gengduo icon3"></span>
    </p>
  </div>
</template>

<script>
export default {
  name:"DetaHead",
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
    height: 50px;
    background: #ccc;
    opacity: 0.5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
  }
  span{
    color: #fff;
    font-size: 18px;
    display: inline-block;
    padding: 8px;
    background: #000;
    opacity: 0.8;
    border-radius: 50%;
  }
  .icon1{
    margin-left: 20px;
  }
  .icon3{
    margin-right: 20px;
  }
  .icon2{
    margin-right: 10px;
  }
</style>