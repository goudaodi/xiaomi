<template>
    <div class="box">
      <ul>
        <li>
          <router-link to="/EveryNew">
            <span class="iconfont icon-meirishangxin"></span>
              <p>每日上新</p>
          </router-link>
        </li>
        <li>
          <span class="iconfont icon-zhongchou"></span>
          <p>小米众筹</p>
        </li>
        <li>
          <span class="iconfont icon-naozhong"></span>
          <p>有品秒杀</p>
        </li>
        <li>
          <span class="iconfont icon-paihang"></span>
          <p>热销排行</p>
        </li>
        <li>
          <span class="iconfont icon-icon_xiaomi"></span>
          <p>小米自营</p>
        </li>
        



        <li>
          <span class="iconfont icon-libao1"></span>
          <p>新人礼包</p>
        </li>
        <li>
          <span class="iconfont icon-baoyou"></span>
          <p>9.9包邮</p>
        </li>
        <li>
          <span class="iconfont icon-zhibobofangshexiangjiguankanmianxing-copy"></span>
          <p>有品直播</p>
        </li>
        <li>
          <span class="iconfont icon-jiadian"></span>
          <p>生活超市</p>
        </li>
        <li>
          <span class="iconfont icon-mendian"></span>
          <p>家电用品</p>
        </li>
      </ul>
    </div>
    
</template>

<script>
export default {
  name:"MyContent",
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
    height: 176px;
    /* background: firebrick; */
  }
  .box ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    padding: 0 5px;
  }
  .box ul li{
    width: 20%;
    height: 88px;
    /* line-height: 44px; */
    margin-top: 10px;
  }
  .box ul li span{
    font-size: 32px;
    color: #ffcc00;
  }
  .box ul li p{
    font-size: 14px;
    color: #999;
    margin-top: 5px;
  }
</style>