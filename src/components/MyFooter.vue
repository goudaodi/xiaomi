<template>
  <ul class="box">
    <li>
      <span class="iconfont icon-shouye"></span>
      <p>首页</p>
    </li>
     <li>
      <span class="iconfont icon-xiangziguanli"></span>
      <p>分类</p>
    </li>
     <li>
      <span class="iconfont icon-kafei"></span>
      <p>品味</p>
    </li>
     <li>
      <span class="iconfont icon-gouwuche"></span>
      <p>购物车</p>
    </li>
     <li>
      <span class="iconfont icon-wode"></span>
      <p>我的</p>
    </li>
  </ul>
</template>

<script>
export default {
  name:"MyFooter",
  date:function(){
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
    height: 48px;
    background: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .box li span{
    font-size: 20px;
    color: #999;
  }
  .box li p{
    font-size: 12px;
    color: #999;
  }
</style>