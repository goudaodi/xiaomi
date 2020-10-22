<template>
  <div class="box">
    <h1>有品</h1>
    <input type="text" placeholder="枕头">
    <span class="iconfont icon-lingdang"></span>
    <i class="fdj iconfont icon-fangdajing"></i>
    <i class="sys iconfont icon-552dc065f0478"></i>
  </div>
</template>

<script>
export default {
  name:"Searech",
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
    height: 54px;
    width: 100%;
    background: #9999cc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .box h1{
    width: 62px;
    height: 54px;
    /* background: forestgreen; */
    font-size: 26px;
    line-height: 54px;
    text-align: center;
    color: #ffffff;
  }
  .box input{
    width: 240px;
    height: 32px;
    border-radius: 16px;
    outline: none;
    border: 1px solid #999;
    text-indent: 35px;
  }
  .box span{
    display: inline-block;
    width: 52px;
    height: 54px;
    text-align: center;
    line-height: 54px;
    color: #ffffff;
    font-size: 26px;
  }
  .fdj{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 85px;
  }
  .sys{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 75px;
  }


</style>