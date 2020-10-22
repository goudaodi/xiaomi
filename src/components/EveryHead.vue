<template>
  <div class="box">
    <router-link to="/Index">
      <i class="iconfont icon-arrow"></i>
    </router-link>
    <p>每日上新</p>
    <span class="iconfont icon-fenxiang"></span>
  </div>
</template>

<script>
export default {
  name:"EveryHead",
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
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #333300;
  }
  .box p{
    font-size: 22px;
    color: #fff;
  }
  .box i{
    font-size: 14px;
    color: #fff;
    margin-left: 15px;
  }
  .box span{
    font-size: 14px;
    color: #fff;
    margin-right: 15px;
  }
</style>